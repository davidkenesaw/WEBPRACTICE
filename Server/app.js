const express = require('express');
const path = require('path')
const app = express();

//ejs configuration
app.set('view engine', 'ejs');//use ejs
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../Client/views'));//show express the views directory
app.use(express.static(path.join(__dirname, '../partial')));//partials configuration

//get routes
//home route
app.get("/", function(req,res){
    res.render("Home")
})
//about route
app.get("/About", function(req,res){
    res.render("About")
})
//login route
app.get("/Login", function(req,res){
    res.render("Login")
})
//register route
app.get("/Register", function(req,res){
    res.render("Register")
})


//post routes
//register route
app.post('/Register', function(req,res){
    const UserName = req.body.UserName
    const Password = req.body.Password

    console.log("userName: " + UserName)
    console.log("Password: " + Password)

    res.redirect('/Register')
})



app.listen("3000", function(){
    console.log("listening on port 3000")
})