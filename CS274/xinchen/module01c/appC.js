const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let output = '<h1>This is your server-side native Node web app.</h1>';
    function myFunction(a, b) {
        return a * b;
    }
    output += "<h2>User-Defined Function: </h2>";
    output += "\nA Multi function: " + myFunction(9, 99);
    res.end(output);
});
    
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});