const express = require('express')
const app = express()
const port = 5000

app.get('/', (request, response)=>{
    response.send("Hello front-end, this is back-end")
})

app.listen(port, ()=>{
    console.log("Listening on port",{port})
})