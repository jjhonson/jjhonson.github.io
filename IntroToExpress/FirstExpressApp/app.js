var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there!");
});

app.get("/bye", function(req,res){
    res.send("Goodbye!!");
});

app.get("/dog", function(req,res){
    res.send("Meow!!");
});

// a : creates a pattern
app.get("/r/:sebredditName", function(req, res){
    var subreddit = req.params.sebredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase()   + " SUBREDDIT!");
});

// a star will match all routes - needs to be at the bottom - order matters
app.get("*", function(req,res){
    res.send("You are a star!!");
});

// this is the port you need to listen on for Cloud9
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});