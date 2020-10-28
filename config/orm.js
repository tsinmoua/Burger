const connection = require("./connection.js");

class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    selectAll() {

    }

    insertOne() {

    }

    updateOne() {

    }

}

module.exports = new ORM(connection);
