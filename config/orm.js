var connection = require('../config/connection');


var orm = {

    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers;", function (err, res) {
            ;
            if (err) throw err;
            cb(res)
        });
    },

    insertOne: function (nameOfBurger) {
        connection.query("INSERT INTO burgers SET ?",
            {
                burger_name: nameOfBurger
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " added");
                return res
            })
    },

//     updateOne: function (table, objColBools, condition, cb) {
//         var query = "UPDATE " + table + "SET " + translateSql(objColBools) + " WHERE " + condition;

//         connection.query(query,
//             function (err, res) {
//                 if (err) {
//                     throw err;
//                 }
//                 cb(res);
//             });
//         // console.log(query.sql)
//     },

//     deleteOne: function (table, condition, cb) {
//         var query = "DELETE FROM " + table + "WHERE " + condition;

//         connection.query(query,
//             function (err, res) {
//                 if (err) {
//                     throw err;
//                 }
//                 cb(res);
//             });
//     }

}

module.exports = orm;