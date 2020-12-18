const databaseAccess="mongodb+srv://todoUser:todoUser@cluster0.ncwph.mongodb.net/todoApp?retryWrites=true&w=majority";

const secretValue=1000;
module.exports={
  dbURL:databaseAccess,
  secretValue
}