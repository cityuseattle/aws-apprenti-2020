const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//function to calculate product
function calcProduct(a, b){
    //function returns product of two numbers
    return a * b;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let output = '<h1>This is your server-side native Node web app.</h1>';
    res.end(output);
    res.end(calcProduct(5,5));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});