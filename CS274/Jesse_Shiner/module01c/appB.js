const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text/html; charset=utf-8');
    let output = `<h1>This is your Server-side native Node web app.</h1>`;
    res.end(output);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});