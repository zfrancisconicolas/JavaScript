const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     if (err) throw err;
//     console.log('Folder created...');
// });

//create a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err) {
//     if (err) throw err;
//     console.log('File written...');
//     //append to the file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nTesting Node.js :)', function(err) {
//         if (err) throw err;
//         console.log('File written...');
//     });
// });

//read a file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
    if (err) throw err;
    console.log('file:');
    console.log(data);
});