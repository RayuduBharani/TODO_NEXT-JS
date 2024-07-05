"use client"

import React from 'react'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"
import { PostData } from '../actions';


export default function Box() {

    const [todoData ,setTodoData ] = useState({task:""})
    const { toast } = useToast()

    function handleInput(event){
      setTodoData((prev)=>{
        return{
          ...prev,[event.target.name] : event.target.value
        }
      })
    }
  
    async function handleSubmit(){
      const data = await PostData(todoData, '/')
      console.log(data);
      if(data.sucess){
        toast({
          title:"Sucessfull task created"
        })
        setTodoData({
          task:""
        })
      }
    }
  return (
    <div>
        <form action={handleSubmit} className="w-full h-fit mt-6 flex gap-3">
          <Input onChange={handleInput} name="task" className="bg-transparent outline-none" placeholder="Add your task" value={todoData.task} required/>
          <Button className="bg-white text-black hover:text-white" >Add</Button>
        </form>
    </div>
  )
}
