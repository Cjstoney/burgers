var connection = require('.../config/connection');

var orm = {


    selectAll: function (table, cb) {
        // console.log("Selecting all of the products from the burgers_db");
        var query = "SELECT * FROM " + table + ";";

        connection.query(query,
            function (err, res) {
                if (err) {
                    throw err;
                    // console.log(res);
                }
                cb(res);
            });
        // console.log(query.sql)
    },

    insertOne: function (table, cols, bool, cb) {
        // console.log("inserting a new burger \n")
        var query = "INSERT INTO " + table + " (" + cols.tostring() + ") " + "VALUES (" + createQmarks(bool.length) + ") ";

        console.log(query);

        connection.query(query,
            function (err, res) {
                if (err) {
                    throw err;
                }
                cb(res);
            });
        // console.log(query.sql)
    },

   updateOne:  function (table, objColBools, condition, cb) {
        var query = "UPDATE " +table +  "SET " + translateSql(objColBools) + " WHERE "+ condition;

        connection.query(query,
            function (err, res) {
                if (err) {
                    throw err;
                }
                cb(res);
            });
    // console.log(query.sql)
},

deleteOne: function( table, condition, cb){
    var query = "DELETE FROM " +table + "WHERE " +condition;

    connection.query(query,
        function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
}

 }

module.export = orm;