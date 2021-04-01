const path = require('path');

//path
console.log(path.basename(__filename));

//directory
console.log(path.dirname(__filename));

//file name
console.log(path.extname(__filename));

//creating an object
const file = {
    name: path.basename(__filename),
    directory: path.dirname(__filename),
    extension: path.extname(__filename)
};

console.log(file);

//parsing the path into an object
console.log(path.parse(__filename));