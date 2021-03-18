const fs = require('fs');
const path = require('path');

module.exports = function(folderPath, ext, callback) {
    fs.readdir(folderPath, (err, content) => {
        if (err) {
            callback(err);
        }
        const filtered = content.filter((file) => path.extname(file) === `.${ext}`);
        callback(null, filtered);
    })
}