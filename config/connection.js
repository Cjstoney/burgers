var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.error("error connectiing: " + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId + "\n");
});

module.exports = connection;