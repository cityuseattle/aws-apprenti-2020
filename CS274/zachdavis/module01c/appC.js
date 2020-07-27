const http = require('http');
const { lookupService } = require('dns');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  let output = '<h1>this is your server-side native Node web app.</h1>';
  res.end(output);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }