const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

router.get("/friends", (req, res) => {
    res.json(friends.getFriends());
});

router.post("/friends", (req, res) => {
    console.log(friends.friendArray);
    console.log("----------");
    console.log(req.body);
    let user = {
        name: req.body.name,
        photo: req.body.photo,
        scores: [
            req.body.q1,
            req.body.q2,
            req.body.q3,
            req.body.q4,
            req.body.q5,
            req.body.q6,
            req.body.q7,
            req.body.q8,
            req.body.q9,
            req.body.q10
        ]
    }
    let match = compareScores(user);
    friends.addFriend(user.name, user.photo, user.scores);
    res.send(`Your match is: ${match.friend}`);
});

router.get("/populate", (req, res) => {
    friends.addFriend("meero", "photoLink", [10, 5, 8, 4, 4, 3, 1, 8, 6, 10]);
    friends.addFriend("john", "photoLinkJohn", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    friends.addFriend("bill", "linktophoto", [5, 6, 7, 5, 9, 4, 2, 1, 1, 4]);
    friends.addFriend("jill", "photoToBeLLinkedTo", [9, 8, 1, 3, 4, 5, 7, 5, 1, 4]);
});

function compareScores(user) {
    let fl = friends.getLength;
    let sum;
    let scoreArray = [];
    let friendSums = [];

    friends.getFriends().forEach(element => {
        sum = 0;
        for (let i = 0; i < element.scores.length; i++) {
            sum += Math.abs(element.scores[i] - user.scores[i]);
        }

        friendSums.push({ diff: sum, friend: element.name });
    });

    let match = friendSums.sort(function (a, b) {
        const ab = a.diff;
        const bb = b.diff;

        let comparison = 0;
        if (ab > bb) {
            comparison = 1;
        } else if (ab < bb) {
            comparison = -1;
        }
        return comparison;
    });

    match = match[0];
    console.log(match);
    return match;
}

module.exports = router;