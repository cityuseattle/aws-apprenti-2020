const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`<h1>Hello World!</h1>`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

/* Express is fairly minimalist, developers have created compatible
middleware packages to address almost any web development problem. */

/* Express is a minimal and flexible node.js web application framework,
providing a robust set of features for building single and multi-page, and 
hybird web applications. */