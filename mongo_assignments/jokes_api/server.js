const express = require('express'); //import express
const app = express(); //init express
const port = 8000; //specify port
//connecting to our mongodb database using mongoose below
require("./server/config/jokes.config")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./server/routes/jokes.routes')(app)


app.listen(port, () => console.log(`Listening on port: ${port}`))