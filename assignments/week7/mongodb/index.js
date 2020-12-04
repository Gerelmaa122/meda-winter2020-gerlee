const mongoose=require("mongoose");

const db="mongodb+srv://Gerlee:Ruby0621@cluster0.qwchk.mongodb.net/first_data?retryWrites=true&w=majority";
mongoose.connect(db,{useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true},(error)=>{
    if(error){
        console.log("There is an error!",error);

    }else {
        console.log("Successfully connected to MongoDB Database first_data.");
    }
});
let Schema = mongoose.Schema;
let exampleSchema=new Schema({
    username:String,
    password:String,
    created:String,
    age:Number,
    accountClosed:Boolean

});
let exampleModel=new mongoose.model("first_info",exampleSchema);

let exampleDocuments=new exampleModel({
    username:"Gerlee",
    password:"12345",
    created:"Dec 02,2020",
    age:25,
    accountClosed:false

});
//Create 
exampleDocuments.save((error)=> {

if (error) {
    console.log(error);
} else {
    console.log("Document saved");

}

mongoose.connection.close();
console.log("connection closed");
});
let seondDocuments=new exampleModel({
    username:"Ruby",
    created:"12/3/2020",
    age:20,
    accountClosed:true,
    nickname:"Sisi"
});
secondDocument.save((error)=>{
    if(error){
        console.log(error);

    }else{
        console.log("saved");

    }
});
setTimeout(() => {
    mongoose.connection.close();
    console.log("connection closed");

},5000); 