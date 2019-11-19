let fs = require('fs');
fs.readFile('hello.txt', encoding='utf-8', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data + " Node.js!");
});