//Set up MySQL connection 
var mysql = require("mysql")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password1",
  database: "burgers_db"
});

//make the connection to the data base
connection.connect(function(err){
  if(err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connection as id " + connection.threadId)
});

// Export the conenction for our ORM to use
module.exports = connection;

