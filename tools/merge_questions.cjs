const fs = require('fs');
const path = require('path');

const dumpPath = path.join(__dirname, '../lessons/questions-dump-safe.js');
const currentPath = path.join(__dirname, '../lessons/questions-data.js');

const dumpContent = fs.readFileSync(dumpPath, 'utf8');
const currentContent = fs.readFileSync(currentPath, 'utf8');

// Extract objects
const dumpMatch = dumpContent.match(/const QUESTIONS_DATA_DUMP = (\{[\s\S]*\});/);
const currentMatch = currentContent.match(/window\.QUESTIONS_DATA = (\{[\s\S]*\});/);

if (!dumpMatch || !currentMatch) {
    console.error("Failed to parse data files");
    process.exit(1);
}

let dumpObj, currentObj;
try {
    dumpObj = eval('(' + dumpMatch[1] + ')');
    currentObj = eval('(' + currentMatch[1] + ')');
} catch (e) {
    console.error("Eval failed:", e.message);
    process.exit(1);
}

// Merge: Use dump as base (contains ALL days), overwrite Day 1 from current if needed
// Actually, dumpObj contains ALL days extracted. Current contains Day 1 (manually edited).
// We want to KEEP Day 1 from current, and ADD all other days from dump.
Object.assign(dumpObj, currentObj);

const newContent = `
// Central Store for Curriculum Questions
// Used for individual lessons and the global review/exam systems.

window.QUESTIONS_DATA = ${JSON.stringify(dumpObj, null, 2)};
`;

fs.writeFileSync(currentPath, newContent);
console.log("Merged questions data successfully.");
