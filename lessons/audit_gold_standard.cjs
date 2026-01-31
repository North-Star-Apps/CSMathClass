/**
 * Gold Standard Audit Script
 * Audits all lesson files against the DayOne.html gold standard
 */

const fs = require('fs');
const path = require('path');

// Load questions data
const questionsPath = path.join(__dirname, 'questions-data.js');
const questionsContent = fs.readFileSync(questionsPath, 'utf-8');

// Parse questionsData object (extract between const questionsData = { and the closing };)
const match = questionsContent.match(/const questionsData\s*=\s*(\{[\s\S]*?\n\};)/);
let questionsData = {};

if (match) {
    try {
        // Evaluate in a sandbox-ish way (for generate functions)
        const GenUtils = {
            randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
            pick: (arr) => arr[0]
        };
        questionsData = eval('(' + match[1].slice(0, -1) + ')');
    } catch (e) {
        console.error('Error parsing questions-data.js:', e.message);
    }
}

// Lesson directories to scan
const lessonDirs = [
    '01-operating-system',
    '02-precalculus',
    '03-calculus',
    '04-linear-algebra',
    '05-discrete-math',
    '06-algorithms',
    '07-probability-stats',
    '08-optimization',
    '09-analysis',
    '10-theoretical-cs',
    '11-applied-mastery',
    '12-the-end',
    '13-optimization',
    '98-review',
    '99-tests',
    '100-exam'
];

// Day number extraction pattern
const dayNamePattern = /Day(OneHundred|NinetyNine|NinetyEight|NinetySeven|NinetySix|NinetyFive|NinetyFour|NinetyThree|NinetyTwo|NinetyOne|Ninety|EightyNine|EightyEight|EightySeven|EightySix|EightyFive|EightyFour|EightyThree|EightyTwo|EightyOne|Eighty|SeventyNine|SeventyEight|SeventySeven|SeventySix|SeventyFive|SeventyFour|SeventyThree|SeventyTwo|SeventyOne|Seventy|SixtyNine|SixtyEight|SixtySeven|SixtySix|SixtyFive|SixtyFour|SixtyThree|SixtyTwo|SixtyOne|Sixty|FiftyNine|FiftyEight|FiftySeven|FiftySix|FiftyFive|FiftyFour|FiftyThree|FiftyTwo|FiftyOne|Fifty|FortyNine|FortyEight|FortySeven|FortySix|FortyFive|FortyFour|FortyThree|FortyTwo|FortyOne|Forty|ThirtyNine|ThirtyEight|ThirtySeven|ThirtySix|ThirtyFive|ThirtyFour|ThirtyThree|ThirtyTwo|ThirtyOne|Thirty|TwentyNine|TwentyEight|TwentySeven|TwentySix|TwentyFive|TwentyFour|TwentyThree|TwentyTwo|TwentyOne|Twenty|Nineteen|Eighteen|Seventeen|Sixteen|Fifteen|Fourteen|Thirteen|Twelve|Eleven|Ten|Nine|Eight|Seven|Six|Five|Four|Three|Two|One)/;

// Map word to number
const wordToNum = {
    'One': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5, 'Six': 6, 'Seven': 7, 'Eight': 8, 'Nine': 9, 'Ten': 10,
    'Eleven': 11, 'Twelve': 12, 'Thirteen': 13, 'Fourteen': 14, 'Fifteen': 15, 'Sixteen': 16, 'Seventeen': 17, 'Eighteen': 18, 'Nineteen': 19,
    'Twenty': 20, 'TwentyOne': 21, 'TwentyTwo': 22, 'TwentyThree': 23, 'TwentyFour': 24, 'TwentyFive': 25, 'TwentySix': 26, 'TwentySeven': 27, 'TwentyEight': 28, 'TwentyNine': 29,
    'Thirty': 30, 'ThirtyOne': 31, 'ThirtyTwo': 32, 'ThirtyThree': 33, 'ThirtyFour': 34, 'ThirtyFive': 35, 'ThirtySix': 36, 'ThirtySeven': 37, 'ThirtyEight': 38, 'ThirtyNine': 39,
    'Forty': 40, 'FortyOne': 41, 'FortyTwo': 42, 'FortyThree': 43, 'FortyFour': 44, 'FortyFive': 45, 'FortySix': 46, 'FortySeven': 47, 'FortyEight': 48, 'FortyNine': 49,
    'Fifty': 50, 'FiftyOne': 51, 'FiftyTwo': 52, 'FiftyThree': 53, 'FiftyFour': 54, 'FiftyFive': 55, 'FiftySix': 56, 'FiftySeven': 57, 'FiftyEight': 58, 'FiftyNine': 59,
    'Sixty': 60, 'SixtyOne': 61, 'SixtyTwo': 62, 'SixtyThree': 63, 'SixtyFour': 64, 'SixtyFive': 65, 'SixtySix': 66, 'SixtySeven': 67, 'SixtyEight': 68, 'SixtyNine': 69,
    'Seventy': 70, 'SeventyOne': 71, 'SeventyTwo': 72, 'SeventyThree': 73, 'SeventyFour': 74, 'SeventyFive': 75, 'SeventySix': 76, 'SeventySeven': 77, 'SeventyEight': 78, 'SeventyNine': 79,
    'Eighty': 80, 'EightyOne': 81, 'EightyTwo': 82, 'EightyThree': 83, 'EightyFour': 84, 'EightyFive': 85, 'EightySix': 86, 'EightySeven': 87, 'EightyEight': 88, 'EightyNine': 89,
    'Ninety': 90, 'NinetyOne': 91, 'NinetyTwo': 92, 'NinetyThree': 93, 'NinetyFour': 94, 'NinetyFive': 95, 'NinetySix': 96, 'NinetySeven': 97, 'NinetyEight': 98, 'NinetyNine': 99,
    'OneHundred': 100
};

function countVideos(content) {
    // Count items in VIDEO_GROUPS
    const matches = content.match(/\{\s*title:\s*(?:"[^"]*"|'[^']*'),(?:\s*channel:\s*(?:"[^"]*"|'[^']*'),)?\s*vid:\s*(?:"[^"]*"|'[^']*')\s*\}/g);
    return matches ? matches.length : 0;
}

function hasPlaceholderVideos(content) {
    return content.includes('vid: "PLACEHOLDER"') || content.includes("vid: 'PLACEHOLDER'");
}

function getHeroMeta(content) {
    const readTimeMatch = content.match(/~(\d+)\s*min\s*read/i);
    const practiceMatch = content.match(/(\d+)\s*practice\s*(problems|questions)/i);
    const videoMatch = content.match(/(\d+)\s*video\s*lessons?/i);

    return {
        readTime: readTimeMatch ? parseInt(readTimeMatch[1]) : null,
        practiceClaim: practiceMatch ? parseInt(practiceMatch[1]) : null,
        videoClaim: videoMatch ? parseInt(videoMatch[1]) : null
    };
}

function hasSimpleAnalogies(content) {
    // Check for "Simple:" or "Analogy:" in info blocks - any emoji is fine
    const hasSimple = /Simple:|Analogy:/i.test(content);
    const infoBlocks = (content.match(/<div class="info">/g) || []).length;
    return { hasSimple, infoBlocks };
}

function auditLesson(filePath, dayNum) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    // Get counts
    const videoCount = countVideos(content);
    const placeholders = hasPlaceholderVideos(content);
    const heroMeta = getHeroMeta(content);
    const analogyInfo = hasSimpleAnalogies(content);

    // Get question data
    const dayKey = `day${dayNum}`;
    const questions = questionsData[dayKey] || [];
    const questionCount = questions.length;

    // Count questions with generate function
    let generateCount = 0;
    if (Array.isArray(questions)) {
        questions.forEach(q => {
            if (typeof q.generate === 'function') {
                generateCount++;
            }
        });
    }

    // Build deficiency list
    const deficiencies = [];

    // Video checks
    if (videoCount < 5) deficiencies.push(`LOW_VIDEOS: ${videoCount} videos (need 5-10)`);
    if (videoCount > 10) deficiencies.push(`HIGH_VIDEOS: ${videoCount} videos (need 5-10)`);
    if (placeholders) deficiencies.push('PLACEHOLDER_VIDEOS');

    // Question checks
    if (questionCount < 20) deficiencies.push(`LOW_QUESTIONS: ${questionCount} questions (need 20-40)`);
    if (questionCount > 40) deficiencies.push(`HIGH_QUESTIONS: ${questionCount} questions (need 20-40)`);

    // Generate function check
    if (questionCount > 0 && generateCount === 0) {
        deficiencies.push(`NO_GENERATE_FUNCTIONS: 0/${questionCount} questions have refresh`);
    } else if (questionCount > 0 && generateCount < questionCount) {
        deficiencies.push(`PARTIAL_GENERATE: ${generateCount}/${questionCount} questions have refresh`);
    }

    // Hero meta accuracy
    if (heroMeta.videoClaim && heroMeta.videoClaim !== videoCount) {
        deficiencies.push(`VIDEO_MISMATCH: claims ${heroMeta.videoClaim}, has ${videoCount}`);
    }
    if (heroMeta.practiceClaim && heroMeta.practiceClaim !== questionCount) {
        deficiencies.push(`QUESTION_MISMATCH: claims ${heroMeta.practiceClaim}, has ${questionCount}`);
    }

    // Analogy check
    if (!analogyInfo.hasSimple && analogyInfo.infoBlocks > 0) {
        deficiencies.push('NO_SIMPLE_ANALOGIES');
    }

    return {
        day: dayNum,
        file: fileName,
        videos: videoCount,
        questions: questionCount,
        generateFunctions: generateCount,
        hasPlaceholders: placeholders,
        heroMeta,
        hasAnalogies: analogyInfo.hasSimple,
        deficiencies,
        passed: deficiencies.length === 0
    };
}

// Main audit
console.log('='.repeat(80));
console.log('GOLD STANDARD AUDIT REPORT');
console.log('='.repeat(80));
console.log('');

const results = [];
const baseDir = __dirname;

lessonDirs.forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html') && f.startsWith('Day'));

    files.forEach(file => {
        const match = file.match(dayNamePattern);
        if (match) {
            const dayNum = wordToNum[match[1]];
            if (dayNum) {
                const filePath = path.join(dirPath, file);
                const result = auditLesson(filePath, dayNum);
                result.directory = dir;
                results.push(result);
            }
        }
    });
});

// Sort by day number
results.sort((a, b) => a.day - b.day);

// Summary stats
const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;
const lowVideos = results.filter(r => r.deficiencies.some(d => d.includes('LOW_VIDEOS'))).length;
const lowQuestions = results.filter(r => r.deficiencies.some(d => d.includes('LOW_QUESTIONS'))).length;
const noGenerate = results.filter(r => r.deficiencies.some(d => d.includes('NO_GENERATE') || d.includes('PARTIAL_GENERATE'))).length;
const placeholders = results.filter(r => r.hasPlaceholders).length;

console.log('SUMMARY');
console.log('-'.repeat(40));
console.log(`Total Lessons Audited: ${results.length}`);
console.log(`✅ Passed:             ${passed}`);
console.log(`❌ Failed:             ${failed}`);
console.log('');
console.log('DEFICIENCY BREAKDOWN:');
console.log(`  Low Videos (<5):        ${lowVideos}`);
console.log(`  Low Questions (<20):    ${lowQuestions}`);
console.log(`  Missing Generate Fns:   ${noGenerate}`);
console.log(`  Placeholder Videos:     ${placeholders}`);
console.log('');

// Detailed report
console.log('='.repeat(80));
console.log('DETAILED DEFICIENCY REPORT');
console.log('='.repeat(80));

results.forEach(r => {
    if (!r.passed) {
        console.log(`\nDay ${r.day}: ${r.file} (${r.directory})`);
        console.log(`  Videos: ${r.videos} | Questions: ${r.questions} | Generate: ${r.generateFunctions}/${r.questions}`);
        r.deficiencies.forEach(d => {
            console.log(`  ⚠️  ${d}`);
        });
    }
});

// Output JSON for further processing
const outputPath = path.join(baseDir, 'audit_results.json');
fs.writeFileSync(outputPath, JSON.stringify(results, (key, value) => {
    // Skip function serialization
    if (typeof value === 'function') return undefined;
    return value;
}, 2));
console.log(`\n\nFull results saved to: ${outputPath}`);
