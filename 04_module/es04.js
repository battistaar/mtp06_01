const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = process.argv[3];

// fs.readdir(folder, (err, content) => {
//     if (err) {
//         console.error(err);
//     }
//     const filtered = content.filter((file) => path.extname(file) === `.${extension}`);
//     console.log(filtered);
// })

function filter(folderPath, ext, callback) {
    fs.readdir(folder, (err, content) => {
        if (err) {
            callback(err);
        }
        const filtered = content.filter((file) => path.extname(file) === `.${extension}`);
        callback(null, filtered);
    })
}

filter(folder, extension, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
});