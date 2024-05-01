//read file
const fs = require('node:fs');
fs.readFile('practical01\\test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

//write file


const content = 'Some content'

fs.writeFile('practical01\\test.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        //file written successfully
    }
});

//color
const chalk = require('chalk');
console.log(chalk.yellow('hi!'));