const express = require('express');

const app = express();
//root route
app.get("/",function(req,res){
    //sends hello world to the browser
    res.send("Hello World")
})

app.listen("3000", function(){
    console.log("listening on port 3000")
})