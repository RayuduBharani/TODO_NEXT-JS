"use client"
import { Trash} from "lucide-react";
import { DelData } from "../actions";

function SingleTask({getdata}) {

    async function deletetask(id){
        const data =await DelData(id,"/")
        console.log(data);
    }

    return (
        <div className="overflow-hidden w-full h-[80%] mb-10">
            <div className="w-full h-[95%] mt-5 border-t-[1px] rounded-sm border-neutral-400 pt-6 overflow-hidden overflow-y-auto no-scrollbar">
                {
                    getdata.data.length > 0 ? (
                        getdata.data.map((todo, index) => {
                            return (
                                <div key={index} className="flex bg-neutral-600 p-3 rounded-md mb-3">
                                    <div className="w-full h-full flex justify-between ml-4">
                                        <h1 className="w-[80%]">{todo.task}</h1>
                                        <Trash className="cursor-pointer" onClick={()=>{
                                            deletetask(todo._id)
                                        }}/>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="w-full h-full flex justify-center items-center">
                            <h1 className="mb-10">Tasks not found</h1>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SingleTask