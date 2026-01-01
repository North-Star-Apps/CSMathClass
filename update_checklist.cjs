const fs = require('fs');

const csvPath = 'gold-standard-audit.csv';
const mdPath = 'GOLD_STANDARD_CHECKLIST.md';

const csvContent = fs.readFileSync(csvPath, 'utf8');
const lines = csvContent.split('\n').slice(1); // skip header
const dataMap = {};

lines.forEach(line => {
    if (!line.trim()) return;
    const cols = line.split(',');
    // Section,File,Lines,Videos,Analogies,CodeBlocks,TOC,Rules,Warnings,MathBlocks,TwoCol,Grade,Score,Issues
    // Issues is the last part, might contain commas inside quotes? 
    // The previous CSV output style puts quotes around Issues.
    // Let's just grab the filename (index 1) and specific numeric columns.

    const filename = cols[1];
    const lineCount = parseInt(cols[2]);
    const videoCount = parseInt(cols[3]);
    const analogyCount = parseInt(cols[4]);
    const codeCount = parseInt(cols[5]);
    const tocCount = parseInt(cols[6]);
    const grade = cols[11];

    // To handle Issues, we join the remaining columns or look for "No hero-meta" in the raw line
    const issueText = line.substring(line.indexOf('"') + 1, line.lastIndexOf('"'));
    const hasHeroMeta = !line.includes("No hero-meta");

    dataMap[filename] = { lineCount, videoCount, analogyCount, codeCount, tocCount, grade, hasHeroMeta };
});

let mdContent = fs.readFileSync(mdPath, 'utf8');
const mdLines = mdContent.split('\n');
const newLines = [];
let currentFile = null;

for (let i = 0; i < mdLines.length; i++) {
    let line = mdLines[i];

    // Check for Header
    const headerMatch = line.match(/^### (Day[a-zA-Z]+\.html)(.*)/);
    if (headerMatch) {
        currentFile = headerMatch[1];
        const data = dataMap[currentFile];

        if (data) {
            let newHeader = `### ${currentFile}`;
            if (data.grade === 'A') newHeader += ` ✅ (Grade A)`;
            else if (data.grade === 'F') newHeader += ` (Grade F) ⚠️`;
            else newHeader += ` (Grade ${data.grade})`;
            newLines.push(newHeader);
            continue;
        }
    }

    if (currentFile && dataMap[currentFile]) {
        const data = dataMap[currentFile];

        if (line.trim().startsWith('- [') && line.includes('Videos:')) {
            if (data.videoCount >= 5) newLines.push(`- [x] Videos: ${data.videoCount} ✓`);
            else newLines.push(`- [ ] Videos: ${data.videoCount} → Need +${Math.max(0, 5 - data.videoCount)}`);
            continue;
        }

        if (line.trim().startsWith('- [') && line.includes('Hero-meta:')) {
            if (data.hasHeroMeta) newLines.push(`- [x] Hero-meta: Present`);
            else newLines.push(`- [ ] Hero-meta: Missing`);
            continue;
        }

        if (line.trim().startsWith('- [') && line.includes('Lines:')) {
            if (data.lineCount >= 800) newLines.push(`- [x] Lines: ${data.lineCount} ✓`);
            else newLines.push(`- [ ] Lines: ${data.lineCount} → Need +${Math.max(0, 800 - data.lineCount)} lines`);
            continue;
        }

        if (line.trim().startsWith('- [') && line.includes('Analogies:')) {
            if (data.analogyCount >= 3) newLines.push(`- [x] Analogies: ${data.analogyCount} ✓`);
            else newLines.push(`- [ ] Analogies: ${data.analogyCount} → Need +${Math.max(0, 3 - data.analogyCount)}`);
            continue;
        }

        if (line.trim().startsWith('- [') && line.includes('Code Blocks:')) {
            if (data.codeCount >= 3) newLines.push(`- [x] Code Blocks: ${data.codeCount} ✓`);
            else newLines.push(`- [ ] Code Blocks: ${data.codeCount} → Need +${Math.max(0, 3 - data.codeCount)}`);
            continue;
        }

        if (line.trim().startsWith('- [') && line.includes('TOC:')) {
            if (data.tocCount >= 8) newLines.push(`- [x] TOC: ${data.tocCount} items ✓`);
            else newLines.push(`- [ ] TOC: ${data.tocCount} → Need +${Math.max(0, 8 - data.tocCount)} sections`);
            continue;
        }
    }

    newLines.push(line);
}

fs.writeFileSync(mdPath, newLines.join('\n'));
console.log("Checklist updated successfully.");
