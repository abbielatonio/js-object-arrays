const farmDuck = {
  name: "Roger",
  canSpeak: false,
};
const toyDuck = {
  name: "Rubber Ducki",
  canSpeak: false,
};
const robotDuck = {
  name: "Duck T-800",
  canSpeak: true,
  speak: function () {
    return "I'll be quak!";
  },
};

function duck(item) {
  if (item.canSpeak === false) {
    throw "It cannot speak";
  } else {
    return item.speak();
  }
}
console.log(duck(robotDuck));
