const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "mysql",
    // port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db", 
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;
