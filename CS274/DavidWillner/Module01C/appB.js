const http = require('http');
const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer((req,res) =>
{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html', 'charset-utf-8');
    let output = '<h1>This is your server-side native node web app.</h1>'
    res.end(output);
});

server.listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}/`);
});