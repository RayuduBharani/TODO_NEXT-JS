import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    task:{
        type:String,
        required:true
    }
})

const userModel = mongoose.models.tasks || mongoose.model("tasks" , userSchema)

export default userModel;