const express = require('express');
const path = require('path')
const app = express();


app.set('view engine', 'ejs');//use ejs
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../Client/views'));//show express the views directory



app.get("/",function(req,res){
    res.send("Hello World")
})

app.get("/About", function(req,res){
    res.render("About")
})
app.get("/Home", function(req,res){
    res.render("Home")
})
app.get("/Login", function(req,res){
    res.render("Login")
})

app.listen("3000", function(){
    console.log("listening on port 3000")
})