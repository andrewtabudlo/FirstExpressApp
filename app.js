var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal
    if (animal == "pig"){
        res.send("The pig says 'OINK'");
    } else if (animal == "cow"){
        res.send("The cow says 'Moo'")
    } else if (animal == "dog") {
        res.send("The dog says 'Woof Woof!'")
    }
});

app.get("/repeat/:word/:multiplier", function(req, res){
    var word = req.params.word + " ";
    var multiplier = req.params.multiplier
    res.send(word.repeat(multiplier));
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

app.get("*", (req, res) => res.send("YOU ARE A STAR!"));

// Tell Express to listen for request
app.listen(3000, () => console.log('FirstExpressApp listening on port 3000!'));