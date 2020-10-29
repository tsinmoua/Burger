const connection = require("./connection.js");

const orm = {

    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            // console.table(result);
            cb(result)
        });
    },

    insertOne: function (tableInput, columnName, inputValue, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, columnName, inputValue], function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result)
        });
    },

    updateOne: function (tableInput, columnName, inputValue, inputIdValue, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableInput, columnName, inputValue, inputIdValue], function (err, result) {
            if (err) throw err;
            // console.table(result);
            cb(result)
        });
    }
};

module.exports = orm; 

// orm.selectAll("burgers");
// orm.insertOne("burgers", ["burger_name", "devoured"], ["test3", true]);
// orm.selectAll("burgers");
// orm.updateOne("burgers", "burger_name", "BLT + Cheeseburger", "1");
// orm.selectAll("burgers");
