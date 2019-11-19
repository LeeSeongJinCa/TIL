let server = require('http');
server.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello! Node.js! LEEEEEE!!! \n"); // 글자 입력
}).listen(3000, 'localhost');
console.log("Server is running at http://localhost:3000/");