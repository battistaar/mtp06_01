const fs = require('fs/promises');
const path = require('path');

module.exports = function(folderPath, ext) {
    return fs.readdir(folderPath)
        .then(content => {
            return content.filter((file) => path.extname(file) === `.${ext}`);
        });
}