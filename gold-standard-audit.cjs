/**
 * Gold Standard Audit Script
 * Checks all lessons against DayOne.html benchmark
 * 
 * Gold Standard Criteria:
 * - Lines: 800+ (DayOne has 1082)
 * - Videos: 5-10 per lesson
 * - Questions: 20-40 per lesson (in questions-data.js)
 * - Analogies: 3+ "Simple:" blocks (div.info with emoji)
 * - Code Blocks: 3+ Python/JS examples
 * - TOC Items: 8-11 sections
 * - Has hero-meta (read time, problems, videos)
 * - Has rules and/or warnings
 */

const fs = require('fs');
const path = require('path');

const LESSONS_DIR = './lessons';
const OUTPUT_FILE = './gold-standard-audit.csv';

// Regex patterns
const PATTERNS = {
    videoCount: /["']?vid["']?:\s*["'][^"']+["']/g,
    simpleAnalogies: /<div class="info">\s*(?:<strong>|<span[^>]*>)?[🍕💰📚🔭🚨💿🗺️🕰️🪙🧩🔊🔌💂🚗🎮🎲]/g,
    codeBlocks: /<div class="code-block">/g,
    tocItems: /<li><a href="#[^"]*" class="toc-link">/g,
    heroMeta: /<div class="hero-meta">/g,
    rules: /<div class="rule">/g,
    warnings: /<div class="warning">/g,
    mathBlocks: /<div class="math-block">/g,
    twoCol: /<div class="two-col">/g,
};

function scanLessonFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    const fileName = path.basename(filePath);

    return {
        file: fileName,
        lines: lines,
        videos: (content.match(PATTERNS.videoCount) || []).length,
        analogies: (content.match(PATTERNS.simpleAnalogies) || []).length,
        codeBlocks: (content.match(PATTERNS.codeBlocks) || []).length,
        tocItems: (content.match(PATTERNS.tocItems) || []).length,
        hasHeroMeta: PATTERNS.heroMeta.test(content),
        rules: (content.match(PATTERNS.rules) || []).length,
        warnings: (content.match(PATTERNS.warnings) || []).length,
        mathBlocks: (content.match(PATTERNS.mathBlocks) || []).length,
        twoCol: (content.match(PATTERNS.twoCol) || []).length,
    };
}

function getGrade(stats) {
    let score = 0;
    let issues = [];

    // Lines (target: 800+)
    if (stats.lines >= 800) score += 2;
    else if (stats.lines >= 500) score += 1;
    else issues.push('Low content');

    // Videos (target: 5-10)
    if (stats.videos >= 5 && stats.videos <= 10) score += 2;
    else if (stats.videos >= 3) score += 1;
    else issues.push('Few videos');

    // Analogies (target: 3+)
    if (stats.analogies >= 3) score += 2;
    else if (stats.analogies >= 1) score += 1;
    else issues.push('No analogies');

    // Code blocks (target: 3+)
    if (stats.codeBlocks >= 3) score += 2;
    else if (stats.codeBlocks >= 1) score += 1;
    else issues.push('Few code examples');

    // TOC (target: 8+)
    if (stats.tocItems >= 8) score += 1;
    else issues.push('Short TOC');

    // Hero meta
    if (stats.hasHeroMeta) score += 1;
    else issues.push('No hero-meta');

    // Max score = 10
    const grade = score >= 9 ? 'A' : score >= 7 ? 'B' : score >= 5 ? 'C' : score >= 3 ? 'D' : 'F';

    return { grade, score, issues: issues.join('; ') || 'None' };
}

function runAudit() {
    const results = [];

    // Scan all lesson directories
    const sections = fs.readdirSync(LESSONS_DIR).filter(d => {
        const fullPath = path.join(LESSONS_DIR, d);
        return fs.statSync(fullPath).isDirectory() && !d.startsWith('.');
    });

    for (const section of sections) {
        const sectionPath = path.join(LESSONS_DIR, section);
        const files = fs.readdirSync(sectionPath).filter(f => f.endsWith('.html') && !f.includes('_Duplicate'));

        for (const file of files) {
            const filePath = path.join(sectionPath, file);
            const stats = scanLessonFile(filePath);
            const gradeInfo = getGrade(stats);

            results.push({
                section,
                ...stats,
                grade: gradeInfo.grade,
                score: gradeInfo.score,
                issues: gradeInfo.issues
            });
        }
    }

    // Sort by section then file
    results.sort((a, b) => a.section.localeCompare(b.section) || a.file.localeCompare(b.file));

    // Generate CSV
    const headers = ['Section', 'File', 'Lines', 'Videos', 'Analogies', 'CodeBlocks', 'TOC', 'Rules', 'Warnings', 'MathBlocks', 'TwoCol', 'Grade', 'Score', 'Issues'];
    const csv = [headers.join(',')];

    for (const r of results) {
        csv.push([
            r.section,
            r.file,
            r.lines,
            r.videos,
            r.analogies,
            r.codeBlocks,
            r.tocItems,
            r.rules,
            r.warnings,
            r.mathBlocks,
            r.twoCol,
            r.grade,
            r.score,
            `"${r.issues}"`
        ].join(','));
    }

    fs.writeFileSync(OUTPUT_FILE, csv.join('\n'));

    // Print summary
    const gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };
    results.forEach(r => gradeCount[r.grade]++);

    console.log('\n=== GOLD STANDARD AUDIT COMPLETE ===');
    console.log(`Total Lessons: ${results.length}`);
    console.log(`\nGrade Distribution:`);
    console.log(`  A (9-10): ${gradeCount.A} lessons`);
    console.log(`  B (7-8):  ${gradeCount.B} lessons`);
    console.log(`  C (5-6):  ${gradeCount.C} lessons`);
    console.log(`  D (3-4):  ${gradeCount.D} lessons`);
    console.log(`  F (0-2):  ${gradeCount.F} lessons`);
    console.log(`\nOutput saved to: ${OUTPUT_FILE}`);

    // Show worst files
    const worst = results.filter(r => r.grade === 'F' || r.grade === 'D').slice(0, 10);
    if (worst.length > 0) {
        console.log(`\n--- Lessons Needing Work (D/F grades) ---`);
        worst.forEach(r => {
            console.log(`  ${r.section}/${r.file}: ${r.grade} (${r.issues})`);
        });
    }
}

runAudit();
