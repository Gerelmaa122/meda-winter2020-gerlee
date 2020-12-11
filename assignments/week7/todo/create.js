const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const credentials = require("./credentials.js");
const { isRegExp } = require("util");

const dbCredentials = credentials.dbURL;
const dbOptions = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};
let dbConnection = mongoose.connect(dbCredentials, dbOptions, (error) => {
    if (error) {
        console.log("Mongoose error: " + error);
    } else {
        console.log("MongoDB connection opened.");
    }
});
let todoSchema = new mongoose.Schema({
    title: String,
    text: String,
    completed:Boolean ,
    archived: Boolean,
    priority:Number,
    timestamp:Number

});
let todoModel=new mongoose.Model("notecollections",todoSchema);
const port = 3000;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is running on port " + port);

app.use("/", express.static("client/"));

app.post("/newNote", (request, response) => {
    
    const note = request.body;
    console.log(typeof note.completed);
let newNoteDocument=new todoModel({
title:note.title,
text:note.text,
completed:(note.completed==="true"),
archived:(note.archived==="true"),
priority:parseInt(note.priority),
timestamp:parseInt(note.timestamp)
});

newNoteDocuments.save((error)=>{
     //Mongoo Db huulna
    const responseObject = {
        saved: true,
        error: null
    };
    if(error){  

    response.send(responseObject);
} else{
    //const responseObject = {
      //  saved: true,
       // error: null
//};  
responseObject.saved=true;
response.send(responseObject);
}
      });
});