const express = require("express");
const router = express.Router();
const fs = require("fs");
const friends = require("../data/friends");

router.get("/survey", (req, res) => {
    fs.readFile( "./app/public/survey.html", "utf8", (err, data) => {
        if (err)
            throw err;

        res.send(data);
    });
});

router.get("/", (req, res) => {
    fs.readFile("./app/public/home.html", "utf8", (err, data) => {
        if (err)
            throw err;

        res.send(data);
    });
});

router.get("/:url", (req, res) => {
    res.sendfile("./app/public/home.html");
});


module.exports = router;