const orm = require("../config/orm.js");

const burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (columnName, inputValue, cb) {
        orm.insertOne("burgers", columnName, inputValue, function (res) {
            cb(res);
        });
    },

    updateOne: function (columnName, inputValue, inputIdValue, cb) {
        orm.updateOne("burgers", columnName, inputValue, inputIdValue, function (res) {
            cb(res);
        });
    },

}

module.export = burger;

// burger.selectAll()
// console.log(burger.selectAll);
// console.log("TEST");