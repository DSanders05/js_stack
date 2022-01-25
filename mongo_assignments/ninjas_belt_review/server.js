const express = require('express'); //import express
const app = express(); //init express
const port = 8000; //specify port
//connecting to our mongodb database using mongoose below
require("./server/config/config")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./server/routes/ninjas.routes')(app)


// app.get("/api/hello", (req, res) => {
//     res.json({ msg: "hello mongoose!" })
// })



app.listen(port, () => console.log(`Listening on port: ${port}`))