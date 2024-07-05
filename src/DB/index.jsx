import mongoose from "mongoose";

async function dataBase(){
    mongoose.connect("mongodb+srv://Bharani_Rayudu:Bharani@cluster0.bsh0jfz.mongodb.net/TODO_list?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("database connected");
    })
    .catch(()=>{
        console.log("some err happened in the database connection");
    })
}

export default dataBase