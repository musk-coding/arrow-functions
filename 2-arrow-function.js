// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

// const event = {
//   name: "Birthday Party",
//   printGuestList: function () {
//     console.log("Guest list for " + this.name);
//   },
// };

// const event = {
//   name: "Birthday Party",
//   printGuestList: () => {
//     console.log("Guest list for " + this.name);
//   },
// };

class Foo {
  constructor(name) {
    this.name = name;
  }
  printGuestList = () => {
    console.log("Guest list for " + this.name);
  };
}

const event = {
  name: "Birthday Party",
  guestList: ["Naruto", "Kira", "L"],
  printGuestList: () => {
    const that = this;

    console.log("Guest list for " + this.name);
    this.guestList.forEach(function (guest) {
      console.log(guest + " is attending " + that.name);
    });
  },
};

// event.printGuestList();

const foo = new Foo("Kikou");
foo.printGuestList();
