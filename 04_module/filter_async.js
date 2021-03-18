const fs = require('fs/promises');
const path = require('path');

module.exports = async function(folderPath, ext) {
    const content = await fs.readdir(folderPath);
    return content.filter((file) => path.extname(file) === `.${ext}`);
}