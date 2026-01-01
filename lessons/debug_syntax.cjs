const fs = require('fs');
const path = require('path');

const filePath = path.resolve('questions-data.js');
const code = fs.readFileSync(filePath, 'utf8');

try {
    new Function(code);
    console.log("Syntax is valid.");
} catch (e) {
    console.error("Syntax Error Found:");
    console.error(e.message);
    if (e.stack) {
        console.error(e.stack);
    }

    // Attempt to find the approximate line number if not provided in the error message
    const lines = code.split('\n');
    console.log("Checking line by line...");
    let partialCode = "";
    for (let i = 0; i < lines.length; i++) {
        partialCode += lines[i] + "\n";
        try {
            // This is a naive way to find where it breaks, but for JSON objects it might help
            // if we can at least validate chunks.
        } catch (err) { }
    }
}
