const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(`<h1>Hello World!</h1>`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//this version looks to be a simpler than the 1c module