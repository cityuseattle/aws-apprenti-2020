const http = require('http');
const hostname = '127.0.0.1';
const port = 3000

var web = require('fs')

const server = http.createServer((req,res) =>
{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html', 'charset-utf-8');
    res.write ('<h1> This is your native Node web app.</h1>')


    web.readFile('client-side.html', function(err, data){
        res.write(data)
        return res.end()
    });

});
server.listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}/`);
});
