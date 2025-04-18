/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  toString: function () {
    return `Backpack: ${this.name}, Volume: ${this.volume} liters`
  },
  sayHello: function () {
    return `Hello ${this.name}!`
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Left before: ", backpack.strapLength.left);

backpack.newStrapLength(10, 15);

console.log("Left after: ", backpack.strapLength.left);

console.log(backpack.volume.valueOf());
console.log(backpack.volume.toString());
console.log(backpack.toString());
console.log(backpack.sayHello());
