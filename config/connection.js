const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('\x1b[42m%s\x1b[0m', "\n Connected as ID: " + connection.threadId + "\n");
});

module.exports = connection;
