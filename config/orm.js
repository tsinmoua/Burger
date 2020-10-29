const connection = require("./connection.js");

const orm = {

    selectAll: function (tableInput) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.table(result);
            return result
        });
    },

    insertOne: function (tableInput, columnName, inputValue) {
        const queryString = "INSERT INTO ?? (??) VALUES ??";
        connection.query(queryString, [tableInput, columnName, inputValue], function (err, result) {
            if (err) throw err;
            console.table(result);
            return result
        });
    },

    updateOne: function (tableInput, columnName, inputValue, idColumnName, inputIdValue) {
        const queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ??";
        connection.query(queryString, [tableInput, columnName, inputValue, idColumnName, inputIdValue], function (err, result) {
            if (err) throw err;
            console.table(result);
            return result
        });
    };
};

module.exports = orm; 
