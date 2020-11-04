// Loads up the Node FS module, so it can be used in this script.
const fs = require("fs");

// process.argv has the command line information that was used to run this script.
let arguments = process.argv;
// check if we have an existing file called "history.txt"
//const serverPassword=123456;
let history;
// console.log(arguments);
if(fs.existsSync("history.txt")){
   let history=fs.readFileSync("history.txt","utf-8");

}else {
    fs.writeFileSync("history.txt","","utf-8");
    let history="";
}
//console.log(arguments);
let fileName = arguments[2]; 

// console.log(fileName);

const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
    console.log("Sorry, that file doesn't exist! Check your filepath.");
    return;
}

// This method allows us to read a file.
let fileContents = fs.readFileSync(fileName, "utf-8");

// console.log(fileContents);

// Count Letter START
let contentArray = fileContents.split("");

// console.log(contentArray);

let letterCount = 0;

for (let i = 0; i < contentArray.length; i++) {

    if (contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!") {
        continue;
    } else {
        letterCount++;
    }

}

console.log(`The file ${fileName} contains a total of ${letterCount} letters.`);
console.log(firstSentence);

// Count Letters END

// Count Words START

let wordArray = fileContents.split(" ");

console.log(`It has a total of ${wordArray.length} words in it.`);


// Count Words END

// Count Sentences START

let sentenceCount = 0;

for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "." || contentArray[i] === "!" || contentArray[i] === "?") {

        
        sentenceCount++;
    }
}

console.log(`It has a total of ${sentenceCount} sentences in it.`);
let exampleURL="http://www.google.com/";
console.log(thirdSentence);

history=history+"\n"+thirdSentence+"\n\n";
console.log("");

console.log("Statistics saved to history!");
fs.writeFileSync("history.txt",history,"utf-8");

