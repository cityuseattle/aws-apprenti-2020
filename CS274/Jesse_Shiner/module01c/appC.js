const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text/html; charset=utf-8');
    let output = `<h1>This is your Server-side native Node web app.</h1>
    <h2>User Defined Function</h2>
    <p>The product of p1 * p2 is:</p>
    <p id="DemoFunction"></p>
    <script>
    function myFunction(p1,p2){
        return p1 * p2;
    }
    document.getElementById("DemoFunction").innerHTML =
    myFunction(25, 3);
    </script>
</body>
</html>`;
    res.end(output);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});