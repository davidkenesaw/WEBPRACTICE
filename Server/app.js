const express = require('express');

const app = express();

app.get("/",function(req,res){
    res.send("Hello World")
})

app.get("/About", function(req,res){
    res.send("About page")
})
app.get("/Home", function(req,res){
    res.send("Home page")
})
app.get("/Login", function(req,res){
    res.send("Login page")
})

app.listen("3000", function(){
    console.log("listening on port 3000")
})