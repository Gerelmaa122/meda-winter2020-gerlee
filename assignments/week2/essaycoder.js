//loads up the Node FS module, so it can be used to this scripts.
const fs =require("fs");

// process.argv has the command line information that was used to run this script.
let arguments=process.argv;

//console.log(arguments);
let fileName=arguments[2];
const fileExists =fs.existsSync(fileName);
if (fileExists===false)fs.existsSync(fileName);

//console.log(fileName);
// this metod allows us to read a file.
let fileContents=fs.readFileSync("essay.txt","utf-8");
console.log(fileContents);
let contentArray=fileContents.split("");
console.log(contentArray);
let letterCount=0;
for(let i=0; i<contentArray.length; i++){
 if(contentArray[i]===""||contentArray[i]===","||contentArray[i]==="."||contentArray[i]==="?"||contentArray[i]==="!"){
     continue;
 } else {
     letterCount++;
 }
}
console.log(`The file ${fileNAme}contains a total of ${letterCount}letters.`);

//Count letters Edn
// count words start
let wordArray=fileContenents.split("");


if(let i=0;i<wordArray.length;i++){

}