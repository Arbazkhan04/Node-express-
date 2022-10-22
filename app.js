// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.setHeader('Content-type','application/json');
//     res.write('<html>');
//     res.write('<head><title>Dear khan</title><head>');
//     res.write('<body><h1>AssalamAlaikum</h1></body>');
//     res.end('</html>');
    
// })
// server.listen(3000)

const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);