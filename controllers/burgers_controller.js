var express = require('express');

var burger = require('burger');

var app = express();

//router goes here somewhere.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// welcome page route
app.get("/",function(req, res){
    res.sendfile(path.join(__dirname, "index.handlebars"))
})