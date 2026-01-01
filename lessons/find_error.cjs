const fs = require('fs');
const path = require('path');

const filePath = path.resolve('questions-data.js');
const code = fs.readFileSync(filePath, 'utf8');

try {
    // Try to eval it to get the line number from the stack trace
    eval(code);
    console.log("Syntax is valid.");
} catch (e) {
    console.error("Syntax Error Found:");
    console.error(e.message);
    if (e.stack) {
        // Look for the line number in the stack trace
        // Output might look like: evalMachine.eval:1234:56
        console.error(e.stack);
    }
}
