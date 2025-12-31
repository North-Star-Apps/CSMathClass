const fs = require('fs');
const path = require('path');

const lessonsDir = 'C:\\Users\\avery\\Desktop\\Free CS Math\\CSMathClass\\lessons';

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else if (file.endsWith('.html')) {
            results.push(file);
        }
    });
    return results;
}

const htmlFiles = getFiles(lessonsDir);
const report = htmlFiles.map(file => {
    const content = fs.readFileSync(file, 'utf8');
    const videoGroupsMatch = content.match(/const VIDEO_GROUPS\s*=\s*\[([\s\S]*?)\]\s*;/);
    let videoCount = 0;
    if (videoGroupsMatch) {
        const vids = videoGroupsMatch[1].match(/"vid":/g);
        videoCount = vids ? vids.length : 0;
    }
    return {
        file: path.relative(lessonsDir, file),
        videoCount
    };
});

fs.writeFileSync('C:\\Users\\avery\\Desktop\\Free CS Math\\CSMathClass\\video_audit.json', JSON.stringify(report, null, 2));
console.log(`Audited ${htmlFiles.length} files.`);
