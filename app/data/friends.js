let friendArray = [];

function addFriend(name, photo, scoreArray) {
    friendArray.push( buildFriendJSON(name, photo, scoreArray) );
}

function buildFriendJSON(name, photo, scoreArray) {
    return {
        name: name,
        photo: photo,
        scores: scoreArray
    }
}

function getLength() {
    return friendArray.length;
}

function getFriends() {
    return friendArray;
}
module.exports = {
    friendArray: friendArray,
    addFriend: addFriend,
    getLength: getLength,
    getFriends: getFriends
}