const express = require("express");
const router = express.Router();
const fs = require("fs");
const friends = require("../data/friends");

router.get("/survey", (req, res) => {
    friends.addFriend("meero", "photoLink", [1,2,3,4,5,6,7,8,9,10]);
    console.log(friends.friendArray);
});

router.get("/", (req, res) => {
    fs.readFile("./app/public/home.html", "utf8",(err, data) => {
        if (err)
            throw err;

        res.send(data);
    });
});

module.exports = router;