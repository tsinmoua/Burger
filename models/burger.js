// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(columnName, inputValue, cb) {
    orm.insertOne("burgers", columnName, inputValue, function(res) {
      cb(res);
    });
  },
  updateOne: function(columnName, inputValue, inputIdValue, cb) {
    orm.updateOne("burgers", columnName, inputValue, inputIdValue, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

