var orm = require('.../config/orm');

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(cos, vals, cb){
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(objColsVals, condition, cb){
        orm.selectAll("burgers", objColsVals, condition, function(res){
            cb(res);
        });
    },

    DeleteOne: function(condition, cb){
        orm.selectAll("burgers", condition, function(res){
            cb(res);
        });
    }
}

module.exports = burger;