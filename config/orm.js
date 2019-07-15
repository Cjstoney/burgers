var connection = require('connection');

function selectAll() {
    // console.log("Selecting all of the products from the burgers_db");
    var query = connection.query(
        "SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            // console.log(res);
            connection.end();
        }
    )
    console.log(query.sql)
};

function insertOne() {
    // console.log("inserting a new burger \n")
    var query = connection.query(
        "INSERT INTO burgers SET ?", {
            // need to connect query to what burger user is adding 
            burger_name: "",
            devoured: ""
        }, function (err, res) {
            if (err) throw err;
            console.log("You have added...");
        }
    )
    console.log(query.sql)

};

function updateOne(){
    var query = connection.query(
        "UPDATE burgers SET? WHERE?",
        [
            {
                burger_name:""
            },
            {
                devoured:""
            }
        ],
        function(err, res){
            if(err)throw err;
            console.log(res.affectedRows + "product updated\n")
        }
    )
    console.log(query.sql)

};