const fs = require('fs');

const content = fs.readFileSync('./text_file.txt', { encoding: 'utf8' });
console.log(content);

const lines = content.split('\n');
console.log(lines.length);

fs.readFile('./text_file.txt', { encoding: 'utf8' }, function(err, content) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(content.split('\n').length);
})