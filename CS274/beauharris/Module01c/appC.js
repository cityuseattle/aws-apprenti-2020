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
    res.write('<h1>This is your native Node web app.\n</h1>');
    res.write('<h2>User-Defined Function</h2>');

    let funcOutput = calcProduct(5,5);

    res.end(`<p>A multiplication function: ${funcOutput}</p>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});