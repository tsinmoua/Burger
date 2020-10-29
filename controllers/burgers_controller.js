const express = require("express");

const router = express.Router();

// Import the model (orm.js) to use its database functions.
const burger = require("../models/burger.js");
const orm = require("../config/orm.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    orm.selectAll("burgers", function (data) {

        // console.table(data);
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function (req, res) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        // Send back the ID of the new quote
        res.render("index", { burgers: result });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    // const condition = "id = " + req.params.id;

    // console.log("condition", condition);
    // console.log(req.body.devoured);

    orm.updateOne("burgers", "devoured", true, req.params.id,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;
