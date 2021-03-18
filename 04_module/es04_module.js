const filter = require('./filter');

const folder = process.argv[2];
const extension = process.argv[3];

filter(folder, extension, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
});