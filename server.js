var express = require('express'); 
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT ||3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller")
app.use(routes);

app.listen(PORT,function(){
    console.log("server is listening on:http://localhost:"+ PORT)
});