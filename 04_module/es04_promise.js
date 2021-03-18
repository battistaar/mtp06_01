const filter = require('./filter_async');

const folder = process.argv[2];
const extension = process.argv[3];

filter(folder, extension)
    .then(results => {
        console.log(results);
    })
    .catch(err => console.error(err));