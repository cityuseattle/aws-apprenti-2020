const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const sum = function myFunction(p1, p2) {
  return p1 * p2;
};

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const output = `<h1>This is your native Node Web App.</h1><br />
      <h2>User-Defined Function</h2>
      <p>A multiplication function: </strong>${sum (50, 10)}</strong></p>`;
    res.end(output);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});