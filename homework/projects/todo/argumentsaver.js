const fs = require("fs");

const fileExists = fs.existsSync("story.json");
let arguments = process.argv;

let contents;

if (fileExists) {
    contents = fs.readFileSync("story.json", "utf-8");
} else {
    console.log("We can't find your result please try again!");
    return;
}

let contentsObject = JSON.parse(contents);

console.log(typeof contents);
console.log(typeof contentsObject);

const myObject = {
    "firstName": "Gerlee",
    "ability": function () {
      
        console.log(this.firstName + " choosing menu options.");
    },
    menu: ["food", "drink", "sushi"],
    deceased: false,
    age: 22,
    "i like to eat": false,
    lastUpdate: "11/15/2020",
    lastUpdateObject: new Date(Date.now())
};


let jsonObjectConverted = JSON.stringify(myObject);

console.log(jsonObjectConverted);

fs.writeFileSync("food.json", jsonObjectConverted, "utf-8");

myObject.ability();

myObject.age;
myObject["i like it "];

let parsedStringifiedJSON = fs.readFileSync("food.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

console.log(myObject);
console.log(parsedStringifiedJSON);