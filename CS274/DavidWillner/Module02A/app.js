const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.get('/',(req,res)=> res.send(`<h1>Hello World!<\h1>`))

app.listen(port, () => console.log(`example app listening at http://${hostname}:${port}/`))