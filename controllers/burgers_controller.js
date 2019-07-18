var express = require('express');

var burger = require('../models/burger');

var app = express.Router();

//router goes here somewhere.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// welcome page route
app.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    app.post("/api/burgers", function(req,res){
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result){
                // send back the ID of new burger
                res.json({ id: result.inserted});
            }
        )
    });

    app.put("/api/burgers/:id", function(req, res){
        var condition = "id "+req.params.id;

        console.log("condition ", condition);
        burger.updateOne({devoured: req.body.devoured }, condition, function(
            result
        ){
            if((result.changedRows === o)){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        })
    });

    app.delete("/api/burgers/:id", function(req, res){
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.deleteOne(condition, function(result){
            if((result, changedRows === o)){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        })
    })

});

module.exports = app;