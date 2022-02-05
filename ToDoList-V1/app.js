const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const PORT = 3000

app.get("/", function(req, res){
    var today = new Date()

    if(today.getDay()===6 || today.getDay() === 0){
        res.send(`It is a holiday day. ${today}`)
    }
    else{
       res.send(`It is a working day. ${today}`)
    }
    res.send("Hello")
})

app.listen(3000, function(){
    console.log(`Server started and listen on ${PORT}`)
})