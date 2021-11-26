const fs = require("fs");

// const jsonData = require("./1-json.json");
// console.log(jsonData);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
user.name = "Othmane";
user.planet = "Nihon";
user.age = 29;

const outputJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", outputJSON);
console.log(user);
