var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!" (es6 syntax)
app.get("/bye", (req, res) => res.send("Goodbye!"));

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!");
});

app.get("*", (req, res) => res.send("YOU ARE A STAR!"));

// Tell Express to listen for request
app.listen(3000, () => console.log('FirstExpressApp listening on port 3000!'));