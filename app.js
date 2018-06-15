var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal]
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:multiplier", function(req, res){
    var word = req.params.word + " ";
    var multiplier = req.params.multiplier
    res.send(word.repeat(multiplier));
});

app.get("*", (req, res) => res.send("Sorry, could not find page."));

// Tell Express to listen for request
app.listen(3000, () => console.log('FirstExpressApp listening on port 3000!'));