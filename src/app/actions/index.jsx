"use server"

import dataBase from "@/DB"
import userModel from "@/Model/todoModel"
import { revalidatePath } from "next/cache"

export async function PostData(todoTask, pathToRevalidate) {
    await dataBase()
    try {
        const data = userModel.create(todoTask)
        revalidatePath(pathToRevalidate)
        console.log(data);
        return ({
            sucess: true
        })
    }
    catch (err) {
        console.log(err);
        return ({
            sucess: false,
            message: "something went wrong please try again !"
        })
    }
}

export async function GetData() {
    await dataBase()
    try {
        const data = await userModel.find()
        return {
            success: true,
            data: JSON.parse(JSON.stringify(data))
        }
    }
    catch (err) {
        console.error("Error in GetData:", err)
        return {
            success: false,
            message: "Something went wrong. Please try again!"
        }
    }
}

export async function DelData(delDataID , pathToRevalidate){
    await dataBase()
    try{
        const del = await userModel.deleteOne({_id:delDataID})
        console.log(del);
        revalidatePath(pathToRevalidate)
        return({
            success:true,
            message:"data deleted"
        })
    }
    catch(err){
        return({
            sucess:false,
            message:"some err occured"
        })
    }
}