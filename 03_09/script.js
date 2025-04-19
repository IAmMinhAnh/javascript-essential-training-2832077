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
    newPocketNum: function (newNum) {
        this.pocketNum = newNum;
    },
    newColor: function (newcolor) {
        this.color = newcolor;
    },
    newVolume: function (newNum) {
        this.volume = newNum;
    },
    newName: function(newname) {
        this.name = newname;
    },
  };

  console.log(backpack.name);
  console.log(backpack.volume);
  console.log(backpack.color);
  console.log(backpack.pocketNum);
  console.log(backpack.strapLength.left);
  console.log(backpack.strapLength.right);
  console.log(backpack.lidOpen);
  console.log(`-----------------------------------`);

  backpack.newName("This is my name: hello world");
  console.log(backpack.name);

  backpack.newVolume(120);
  console.log(backpack.volume);

  backpack.newColor("Green");
  console.log(backpack.color);

  backpack.newPocketNum(43);
  console.log(backpack.pocketNum);

  backpack.newStrapLength(73, 98);
  console.log(backpack.strapLength.left);
  console.log(backpack.strapLength.right);

  backpack.toggleLid(true);
  console.log(backpack.lidOpen);