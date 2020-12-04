const mongoose=require("mongoose");

const db="mongodb+srv://Gerlee:Ruby0621@cluster0.qwchk.mongodb.net/first_data?retryWrites=true&w=majority";
    const options={useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true};
    let connection=mongoose.connect(db,options,(error)=>{

    if(error){
        console.log("There is an error!",error);

    }else {
        console.log("Successfully connected to MongoDB Database first_data.");
    }
});

let exampleSchema=new mongoose.Schema({
    username:String,
    password:String,
    created:String,
    age:Number,
    accountClosed:Boolean

});
let exampleModel=new mongoose.model("first_info",exampleSchema);
exampleModel.find({username:"Gerlee",age:30},(error)=>{
    if(error){
        console.log("There was an error reading the database.",error);
    }else {
        console.log("Successfully read the database");
        console.log("We found something! ",result);
    }
});