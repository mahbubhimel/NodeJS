const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/input.txt`, 'utf-8');
    myReadStream.pipe(res);
});

server.listen(3000);
console.log('listening on port 3000');

// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/jp-text.txt`, 'utf-8');
// const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);
// ourReadStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });
// console.log('hello world');
