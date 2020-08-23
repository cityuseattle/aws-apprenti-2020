const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const other = require('fs')
const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    other.readFile('client-side.html', function(err,data){
        res.write(data)
        res.end()
    })
});

server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}/`)
})