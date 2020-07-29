const http = require('http');
const { read } = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  let output = '<h1>This is your server-side native Node web app.</h1> \
  <br><br>\
  <h2>User-Defined Function</h2>\
  <p>This example calls a function which performs a calculation, and returns the result: </p>\
  <p id="demo"></p>\
  <script>\
    function myFunction(p1, p2) {\
      return p1 * p2;\
    }\
    document.getElementById("demo").innerHTML = myFunction(10, 5);\
  </script>'
  res.end(output);

  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});