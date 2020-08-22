const http = require('http');
const hostname = '127.0.0.1';
const port =3000;

const server = http.createServer((req, res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let output = ('<h1> This is your server-side native Node app.</h1>\
    <h2>Builtin Function</h2>\
        <button onclick="myFunction1()">Click Me to Reveal current Date and Time</button>\
        <p id="demo1"></p>\
        <script>\
            function myFunction1() {\
              document.getElementById("demo1").innerHTML = Date();\
            }\
        </script>\
     <h2> User-Defined Function.</h2> \
     <p> This will call function to return multiplication 4x3:</p>\
     <p id="demo"></p>\
     <script>\
     function myFunction(p1, p2){\
        return p1*p2;\
    }\
    document.getElementById("demo").innerHTML = myFunction(4, 3);\
     </script>')
    res.end(output);
});

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});