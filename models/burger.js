var orm = require('../config/orm');

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
           cb(res);
        });
    },

    insertOne: function(nameOfBurger){
        orm.insertOne( function(res){
            console.log("line 12 burger")
            nameOfBurger(res);
        });
    },

    // updateOne: function(objColsVals, condition, cb){
    //     orm.selectAll("burgers", objColsVals, condition, function(res){
    //         cb(res);
    //     });
    // },

    // DeleteOne: function(condition, cb){
    //     orm.selectAll("burgers", condition, function(res){
    //         cb(res);
    //     });
    // }
}

module.exports = burger;