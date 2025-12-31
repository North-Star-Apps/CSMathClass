/**
 * Lesson Audit Script
 * Scans all lesson files and generates a report on quality metrics.
 * 
 * Metrics collected:
 * - Line count
 * - Section count
 * - Simple analogy count (info blocks with emoji)
 * - Video count and validation
 * - Question count from questions-data.js
 * - Read time from hero-meta
 */

const fs = require('fs');
const path = require('path');

const LESSONS_DIR = path.join(__dirname, '..', 'lessons');
const QUESTIONS_FILE = path.join(LESSONS_DIR, 'questions-data.js');

// Valid YouTube ID pattern (11 characters, alphanumeric + - and _)
const YOUTUBE_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/;

function getQuestionCounts() {
    const content = fs.readFileSync(QUESTIONS_FILE, 'utf8');
    const counts = {};

    // Match day1, day2, etc. and count questions
    const dayMatches = content.match(/"day(\d+)":\s*\[/g);
    if (dayMatches) {
        dayMatches.forEach(match => {
            const dayNum = match.match(/day(\d+)/)[1];
            // Count questions by counting { "id": patterns after this day
            const dayKey = `day${dayNum}`;
            const startIdx = content.indexOf(`"${dayKey}":`);
            if (startIdx !== -1) {
                // Find the array end
                let bracketCount = 0;
                let inArray = false;
                let questionCount = 0;
                for (let i = startIdx; i < content.length; i++) {
                    if (content[i] === '[') {
                        bracketCount++;
                        inArray = true;
                    } else if (content[i] === ']') {
                        bracketCount--;
                        if (bracketCount === 0 && inArray) break;
                    } else if (inArray && content.slice(i, i + 5) === '"id":') {
                        questionCount++;
                    }
                }
                counts[parseInt(dayNum)] = questionCount;
            }
        });
    }
    return counts;
}

function analyzeLesson(filePath, dayNum, questionCounts) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;

    // Count sections
    const sectionMatches = content.match(/<section class="section"/g);
    const sectionCount = sectionMatches ? sectionMatches.length : 0;

    // Count Simple analogies (info blocks, especially with emoji)
    const infoMatches = content.match(/<div class="info">/g);
    const infoCount = infoMatches ? infoMatches.length : 0;
    const emojiInfoMatches = content.match(/Simple.*?:|🍕|💰|📝|🔭|📚|🚨|⚖️|🗺️|📖|🏷️|〰️|🎉|📦|🛤️/g);
    const emojiCount = emojiInfoMatches ? emojiInfoMatches.length : 0;

    // Count code blocks
    const codeBlockMatches = content.match(/<div class="code-block">/g);
    const codeBlockCount = codeBlockMatches ? codeBlockMatches.length : 0;

    // Extract VIDEO_GROUPS
    const videoGroupMatch = content.match(/VIDEO_GROUPS\s*=\s*\[([\s\S]*?)\];/);
    let videoCount = 0;
    let brokenVideos = [];
    let validVideos = [];

    if (videoGroupMatch) {
        const vidMatches = videoGroupMatch[1].match(/vid:\s*["']([^"']+)["']/g);
        if (vidMatches) {
            vidMatches.forEach(v => {
                const id = v.match(/vid:\s*["']([^"']+)["']/)[1];
                if (YOUTUBE_ID_REGEX.test(id)) {
                    validVideos.push(id);
                } else {
                    brokenVideos.push(id);
                }
            });
            videoCount = vidMatches.length;
        }
    }

    // Extract read time from hero-meta
    const readTimeMatch = content.match(/~?(\d+)\s*min\s*read/i);
    const readTime = readTimeMatch ? parseInt(readTimeMatch[1]) : 0;

    // Extract practice problem count from hero-meta
    const practiceMatch = content.match(/(\d+)\s*practice\s*problems?/i);
    const heroPracticeCount = practiceMatch ? parseInt(practiceMatch[1]) : 0;

    // Get actual question count from questions-data.js
    const actualQuestionCount = questionCounts[dayNum] || 0;

    return {
        file: path.basename(filePath),
        day: dayNum,
        lines,
        sections: sectionCount,
        infoBlocks: infoCount,
        simpleAnalogies: emojiCount,
        codeBlocks: codeBlockCount,
        videoCount,
        validVideos: validVideos.length,
        brokenVideos: brokenVideos.length,
        brokenVideoIds: brokenVideos.join('; '),
        readTime,
        heroPracticeCount,
        actualQuestionCount,
        questionMismatch: heroPracticeCount !== actualQuestionCount
    };
}

function scanLessons() {
    const questionCounts = getQuestionCounts();
    const results = [];

    // Map day numbers to files
    const dayFileMap = {
        1: '01-operating-system/DayOne.html',
        2: '01-operating-system/DayTwo.html',
        3: '01-operating-system/DayThree.html',
        4: '01-operating-system/DayFour.html',
        5: '01-operating-system/DayFive.html',
        6: '01-operating-system/DaySix.html',
        7: '02-precalculus/DaySeven.html',
        8: '02-precalculus/DayEight.html',
        9: '02-precalculus/DayNine.html',
        10: '02-precalculus/DayTen.html',
        11: '03-calculus/DayEleven.html',
        12: '03-calculus/DayTwelve.html',
        13: '03-calculus/DayThirteen.html',
        14: '03-calculus/DayFourteen.html',
        15: '03-calculus/DayFifteen.html',
        16: '03-calculus/DaySixteen.html',
        17: '03-calculus/DaySeventeen.html',
        18: '03-calculus/DayEighteen.html',
    };

    // Also scan all HTML files in lessons subdirectories
    const lessonDirs = fs.readdirSync(LESSONS_DIR).filter(d => {
        const fullPath = path.join(LESSONS_DIR, d);
        return fs.statSync(fullPath).isDirectory() && d.match(/^\d{2,3}-/);
    });

    lessonDirs.forEach(dir => {
        const dirPath = path.join(LESSONS_DIR, dir);
        const htmlFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

        htmlFiles.forEach(file => {
            const filePath = path.join(dirPath, file);
            // Extract day number from filename
            const dayMatch = file.match(/Day([A-Za-z]+)\.html/);
            if (dayMatch) {
                const dayName = dayMatch[1];
                const dayNum = wordToNumber(dayName);
                if (dayNum) {
                    try {
                        results.push(analyzeLesson(filePath, dayNum, questionCounts));
                    } catch (e) {
                        console.error(`Error analyzing ${file}: ${e.message}`);
                    }
                }
            }
        });
    });

    // Sort by day number
    results.sort((a, b) => a.day - b.day);

    return results;
}

function wordToNumber(word) {
    const map = {
        'One': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5,
        'Six': 6, 'Seven': 7, 'Eight': 8, 'Nine': 9, 'Ten': 10,
        'Eleven': 11, 'Twelve': 12, 'Thirteen': 13, 'Fourteen': 14, 'Fifteen': 15,
        'Sixteen': 16, 'Seventeen': 17, 'Eighteen': 18, 'Nineteen': 19, 'Twenty': 20,
        'TwentyOne': 21, 'TwentyTwo': 22, 'TwentyThree': 23, 'TwentyFour': 24, 'TwentyFive': 25,
        'TwentySix': 26, 'TwentySeven': 27, 'TwentyEight': 28, 'TwentyNine': 29, 'Thirty': 30,
        'ThirtyOne': 31, 'ThirtyTwo': 32, 'ThirtyThree': 33, 'ThirtyFour': 34, 'ThirtyFive': 35,
        'ThirtySix': 36, 'ThirtySeven': 37, 'ThirtyEight': 38, 'ThirtyNine': 39, 'Forty': 40,
        'FortyOne': 41, 'FortyTwo': 42, 'FortyThree': 43, 'FortyFour': 44, 'FortyFive': 45,
        'FortySix': 46, 'FortySeven': 47, 'FortyEight': 48, 'FortyNine': 49, 'Fifty': 50,
        'FiftyOne': 51, 'FiftyTwo': 52, 'FiftyThree': 53, 'FiftyFour': 54, 'FiftyFive': 55,
        'FiftySix': 56, 'FiftySeven': 57, 'FiftyEight': 58, 'FiftyNine': 59, 'Sixty': 60,
        'SixtyOne': 61, 'SixtyTwo': 62, 'SixtyThree': 63, 'SixtyFour': 64, 'SixtyFive': 65,
        'SixtySix': 66, 'SixtySeven': 67, 'SixtyEight': 68, 'SixtyNine': 69, 'Seventy': 70,
        'SeventyOne': 71, 'SeventyTwo': 72, 'SeventyThree': 73, 'SeventyFour': 74, 'SeventyFive': 75,
        'SeventySix': 76, 'SeventySeven': 77, 'SeventyEight': 78, 'SeventyNine': 79, 'Eighty': 80,
        'EightyOne': 81, 'EightyTwo': 82, 'EightyThree': 83, 'EightyFour': 84, 'EightyFive': 85,
        'EightySix': 86, 'EightySeven': 87, 'EightyEight': 88, 'EightyNine': 89, 'Ninety': 90,
        'NinetyOne': 91, 'NinetyTwo': 92, 'NinetyThree': 93, 'NinetyFour': 94, 'NinetyFive': 95,
        'NinetySix': 96, 'NinetySeven': 97, 'NinetyEight': 98, 'NinetyNine': 99, 'OneHundred': 100
    };
    return map[word] || null;
}

function generateReport(results) {
    // CSV header
    const header = 'Day,File,Lines,Sections,InfoBlocks,SimpleAnalogies,CodeBlocks,Videos,ValidVideos,BrokenVideos,BrokenVideoIds,ReadTime,HeroPractice,ActualQuestions,Mismatch';

    const rows = results.map(r =>
        `${r.day},${r.file},${r.lines},${r.sections},${r.infoBlocks},${r.simpleAnalogies},${r.codeBlocks},${r.videoCount},${r.validVideos},${r.brokenVideos},"${r.brokenVideoIds}",${r.readTime},${r.heroPracticeCount},${r.actualQuestionCount},${r.questionMismatch}`
    );

    return [header, ...rows].join('\n');
}

function printSummary(results) {
    console.log('\n=== LESSON AUDIT SUMMARY ===\n');

    // Gold standard benchmark
    const dayOne = results.find(r => r.day === 1);
    if (dayOne) {
        console.log('📊 GOLD STANDARD (Day 1):');
        console.log(`   Lines: ${dayOne.lines}, Sections: ${dayOne.sections}, Questions: ${dayOne.actualQuestionCount}, Videos: ${dayOne.validVideos}`);
        console.log('');
    }

    // Critical issues
    const brokenVideoLessons = results.filter(r => r.brokenVideos > 0);
    const lowQuestionLessons = results.filter(r => r.actualQuestionCount < 15);
    const noAnalogies = results.filter(r => r.simpleAnalogies === 0);

    console.log('🚨 CRITICAL ISSUES:');
    console.log(`   Lessons with broken videos: ${brokenVideoLessons.length}`);
    brokenVideoLessons.slice(0, 5).forEach(r => {
        console.log(`      Day ${r.day}: ${r.brokenVideos} broken (${r.brokenVideoIds.slice(0, 50)}...)`);
    });
    if (brokenVideoLessons.length > 5) console.log(`      ... and ${brokenVideoLessons.length - 5} more`);

    console.log(`\n   Lessons with < 15 questions: ${lowQuestionLessons.length}`);
    lowQuestionLessons.slice(0, 5).forEach(r => {
        console.log(`      Day ${r.day}: ${r.actualQuestionCount} questions`);
    });
    if (lowQuestionLessons.length > 5) console.log(`      ... and ${lowQuestionLessons.length - 5} more`);

    console.log(`\n   Lessons without Simple analogies: ${noAnalogies.length}`);

    // Average metrics
    const avgLines = Math.round(results.reduce((a, r) => a + r.lines, 0) / results.length);
    const avgQuestions = Math.round(results.reduce((a, r) => a + r.actualQuestionCount, 0) / results.length);
    const avgVideos = Math.round(results.reduce((a, r) => a + r.validVideos, 0) / results.length);

    console.log('\n📈 AVERAGES vs GOLD:');
    console.log(`   Lines: ${avgLines} (Gold: ${dayOne?.lines || 'N/A'})`);
    console.log(`   Questions: ${avgQuestions} (Gold: ${dayOne?.actualQuestionCount || 'N/A'})`);
    console.log(`   Valid Videos: ${avgVideos} (Gold: ${dayOne?.validVideos || 'N/A'})`);

    console.log('\n');
}

// Run the audit
const results = scanLessons();
const report = generateReport(results);

// Save report
const reportPath = path.join(__dirname, '..', 'lesson-audit-report.csv');
fs.writeFileSync(reportPath, report);
console.log(`Report saved to: ${reportPath}`);

// Print summary
printSummary(results);
