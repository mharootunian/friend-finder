const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/survey", (req, res) => {

});

router.get("/", (req, res) => {
    fs.readFile("./app/public/home.html", "utf8",(err, data) => {
        if (err)
            throw err;

        res.send(data);
    });
});

module.exports = router;