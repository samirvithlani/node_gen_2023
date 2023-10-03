//console.log("Hello from user file...")

var userName = "parth"
var userAge = 25

function test(){
    console.log("Hello from test function... user file...")
}

// module.exports = userName
// module.exports = userAge
// module.exports = test

module.exports = {
    userName,
    userAge,
    test
}