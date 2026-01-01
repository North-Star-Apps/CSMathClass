const fs = require('fs');
const path = require('path');

const filePath = path.resolve('questions-data.js');
const content = fs.readFileSync(filePath, 'utf8');

try {
    // This will throw an error with line and column info in Node
    require(filePath);
    console.log("Success");
} catch (err) {
    console.error(err.message);
    if (err.stack) {
        console.error(err.stack);
    }
}
