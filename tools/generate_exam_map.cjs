const fs = require('fs');
const path = require('path');

const ROOT_DIR = "c:\\Users\\avery\\Desktop\\Free CS Math\\CSMathClass";
const LESSONS_DIR = path.join(ROOT_DIR, 'lessons');
const EXAM_LOGIC_FILE = path.join(LESSONS_DIR, 'exam-logic.js');

function getSections() {
    const sections = {};
    const items = fs.readdirSync(LESSONS_DIR);

    items.forEach(item => {
        const fullPath = path.join(LESSONS_DIR, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && /^\d+/.test(item)) { // Starts with number, e.g. 01-..., 02-...
            // check files inside
            const files = fs.readdirSync(fullPath);
            const days = [];
            files.forEach(f => {
                if (f.endsWith('.html') && f.startsWith('Day')) {
                    // Read file to find day number? or just rely on file name?
                    // Rely on file content <title>Day X: ...</title> to be accurate
                    const content = fs.readFileSync(path.join(fullPath, f), 'utf8');
                    const dayMatch = content.match(/<title>Day (\d+):/);
                    if (dayMatch) {
                        days.push(`day${dayMatch[1]}`);
                    }
                }
            });
            if (days.length > 0) {
                // Sort days naturally?
                days.sort((a, b) => {
                    const na = parseInt(a.replace('day', ''));
                    const nb = parseInt(b.replace('day', ''));
                    return na - nb;
                });
                sections[item] = days;
            }
        }
    });
    return sections;
}

const map = getSections();
// Update exam-logic.js
let content = fs.readFileSync(EXAM_LOGIC_FILE, 'utf8');
const mapString = JSON.stringify(map, null, 4);

// Replace the SECTION_MAP object
// Regex to find const SECTION_MAP = { ... };
const regex = /const SECTION_MAP = \{[\s\S]*?\};/;
if (regex.test(content)) {
    content = content.replace(regex, `const SECTION_MAP = ${mapString};`);
    fs.writeFileSync(EXAM_LOGIC_FILE, content);
    console.log("Updated exam-logic.js with new section map.");
    console.log(mapString);
} else {
    console.error("Could not find SECTION_MAP in exam-logic.js");
}
