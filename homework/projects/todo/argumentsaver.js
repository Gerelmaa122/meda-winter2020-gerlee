const fs = require("fs");

const timeNow = new Date(Date.now());


let arguments = process.argv;


let story;


if (fs.existsSync("story.json",)) {
  
    story = fs.readFileSync("story.json","utf-8");
} else {
    
   fs.writeFileSync("story.json", "[]", "utf-8");
    story = "";
}

console.log(arguments);

let fileName = arguments[1];



const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
    console.log("We can't find your information please check one more time");
    return;
}

let fileContents = fs.readFileSync(fileName, "utf-8");



let contentArray = fileContents.split("");



let letterCount = 0;

for (let i = 0; i < contentArray.length; i++) {

    if (contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!") {
        continue;
    } else {
        letterCount++;
    }

}

let firstSentence = `The file ${fileName} contains a total of ${letterCount} letters.`;

console.log(firstSentence);

story = `${story}${fileName} ${timeNow.toDateString()} ${timeNow.toTimeString()}\n\n`;


story += firstSentence;

let wordArray = fileContents.split(" ");

let secondSentence = `It has a total of ${wordArray.length} words in it.`;

console.log(secondSentence);

story = story + "\n" + secondSentence;



let sentenceCount = 0;

for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "." || contentArray[i] === "!" || contentArray[i] === "?") {

        
        sentenceCount++;
    }
}

let thirdSentence = `It has a total of ${sentenceCount} sentences in it.`;
console.log(thirdSentence);

story = story + "\n" + thirdSentence + "\n\n";

console.log("");
console.log("We counted all your words and sentences story!")
fs.writeFileSync("story.json", story, "utf-8");


