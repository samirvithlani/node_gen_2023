var uname = "";
var uage = 0;
function setUserData(name1, age1) {
  uname = name1;
  uage = age1;
}

function getUserData() {
  return uname + "-" + uage;
}

module.exports = { setUserData, getUserData };
