const fs = require('fs');
const path = require('path');

try {
    const filePath = path.resolve('questions-data.js');
    let content = fs.readFileSync(filePath, 'utf8');

    const dayPattern = /"day(\d+)":\s*\[/g;
    let matches = [];
    let match;
    while ((match = dayPattern.exec(content)) !== null) {
        matches.push({
            day: parseInt(match[1]),
            index: match.index,
            fullMatch: match[0]
        });
    }

    console.log(`Found ${matches.length} day blocks.`);

    const extractedDays = {};

    for (let i = 0; i < matches.length; i++) {
        const start = matches[i].index + matches[i].fullMatch.length;
        const end = (i < matches.length - 1) ? matches[i + 1].index : content.lastIndexOf('};');

        let rawBlock = content.substring(start, end).trim();

        const objects = [];
        let braceCount = 0;
        let currentObjectStart = -1;
        let inString = false;
        let escape = false;
        let quoteChar = '';

        for (let j = 0; j < rawBlock.length; j++) {
            const char = rawBlock[j];

            if (escape) {
                escape = false;
                continue;
            }
            if (char === '\\') {
                escape = true;
                continue;
            }
            if ((char === '"' || char === "'" || char === '`') && !escape) {
                if (!inString) {
                    inString = true;
                    quoteChar = char;
                } else if (char === quoteChar) {
                    inString = false;
                }
            }

            if (!inString) {
                if (char === '{') {
                    if (braceCount === 0) currentObjectStart = j;
                    braceCount++;
                } else if (char === '}') {
                    braceCount--;
                    if (braceCount === 0 && currentObjectStart !== -1) {
                        objects.push(rawBlock.substring(currentObjectStart, j + 1));
                        currentObjectStart = -1;
                    }
                }
            }
        }

        const day = matches[i].day;
        if (!extractedDays[day]) extractedDays[day] = [];
        extractedDays[day] = extractedDays[day].concat(objects);
    }

    let newContent = 'const questionsData = {\n';

    for (let d = 1; d <= 100; d++) {
        const dayKey = `day${d}`;
        newContent += `  "${dayKey}": [\n`;
        if (extractedDays[d]) {
            newContent += extractedDays[d].map(obj => {
                let fixed = obj.trim();
                if (fixed.endsWith(',')) fixed = fixed.slice(0, -1);

                if (fixed.includes('"prompt": "det([[2,3],')) {
                    // This specific corrupted object needs fixing
                    fixed = `{\n      "id": 7,\n      "topic": "2×2 det",\n      "prompt": "det([[2,3],[1,4]]) = ?",\n      "answer": "5",\n      "display": "5"\n    }`;
                }

                return '    ' + fixed;
            }).join(',\n');
        }
        newContent += '\n  ]' + (d < 100 ? ',' : '') + '\n';
    }

    newContent += '};\n\nif (typeof module !== "undefined") {\n  module.exports = questionsData;\n}\n';

    fs.writeFileSync('questions-data-fixed.js', newContent);
    console.log('Successfully created questions-data-fixed.js');

} catch (err) {
    console.error('An error occurred:');
    console.error(err.stack);
    process.exit(1);
}
