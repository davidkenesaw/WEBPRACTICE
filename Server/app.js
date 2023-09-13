const express = require('express');
const path = require('path')
const app = express();

//ejs configuration
app.set('view engine', 'ejs');//use ejs
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../Client/views'));//show express the views directory


//root route
app.get("/",function(req,res){
    res.send("Hello World")
})

//about route
app.get("/About", function(req,res){
    res.render("About")
})
//home route
app.get("/Home", function(req,res){
    res.render("Home")
})
//login route
app.get("/Login", function(req,res){
    res.render("Login")
})

app.listen("3000", function(){
    console.log("listening on port 3000")
})