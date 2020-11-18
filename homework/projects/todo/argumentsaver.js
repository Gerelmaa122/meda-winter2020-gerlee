const fs = require("fs");

const fileExists = fs.existsSync("story.json");
let arguments = process.argv;

let apple;

if (fileExists) {
    apple = fs.readFileSync("story.json", "utf-8");
} else {
    console.log("We can't find your result please try again!");
    return;
}

let appleObject = JSON.parse(apple);

console.log(typeof apple);
console.log(typeof appleObject);

const myObject = {
    "firstName": "Gerlee",
    "ability": function () {
      
        console.log(this.firstName + " choosing menu options.");
    },
    Message: ["Hello dear how are you!"],
    deceased: false,
    age: 22,
    "Nice to meet you": false,
    lastUpdate: "11/15/2020",
    lastUpdateObject: new Date(Date.now())
};


let jsonObjectConverted = JSON.stringify(myObject);

console.log(jsonObjectConverted);

fs.writeFileSync("greetings.json", jsonObjectConverted, "utf-8");

myObject.ability();

myObject.age;
myObject["See you next time"];

let parsedStringifiedJSON = fs.readFileSync("greetings.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

console.log(myObject);
console.log(parsedStringifiedJSON);