import mongoose from "mongoose";

async function dataBase(){
    mongoose.connect("mongodb://localhost:27017/TODO_list")
    .then(()=>{
        console.log("database connected");
    })
    .catch(()=>{
        console.log("some err happened in the database connection");
    })
}

export default dataBase