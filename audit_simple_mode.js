
const fs = require('fs');
const path = require('path');

try {
    const rootDir = path.join('lessons');
    console.log('Scanning ' + rootDir);

    function getHtmlFiles(dir) {
        let results = [];
        if (!fs.existsSync(dir)) return results;
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat && stat.isDirectory()) {
                results = results.concat(getHtmlFiles(filePath));
            } else if (file.endsWith('.html')) {
                results.push(filePath);
            }
        });
        return results;
    }

    const files = getHtmlFiles(rootDir);
    console.log('Found ' + files.length + ' HTML files');

    let withSimple = 0;
    let withoutSimple = 0;
    const missing = [];

    files.forEach(f => {
        const content = fs.readFileSync(f, 'utf8');
        if (content.match(/Simple Mode/i)) {
            withSimple++;
        } else {
            withoutSimple++;
            missing.push(f);
        }
    });

    console.log(`With Simple Mode: ${withSimple}`);
    console.log(`Without Simple Mode: ${withoutSimple}`);
    console.log('Missing File Sample: ' + missing.slice(0, 5).join(', '));

    // Write full list to a file for me to read
    fs.writeFileSync('missing_simple.txt', missing.join('\n'));

} catch (e) {
    console.error(e);
}
