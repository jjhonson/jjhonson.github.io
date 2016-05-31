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

// this is the port you need to listen on for Cloud9
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});