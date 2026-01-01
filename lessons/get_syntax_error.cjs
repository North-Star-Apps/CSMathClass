const { exec } = require('child_process');
exec('node -c questions-data.js', (error, stdout, stderr) => {
    if (error) {
        console.log('Error output:');
        console.log(stderr);
    } else {
        console.log('Syntax is valid.');
    }
});
