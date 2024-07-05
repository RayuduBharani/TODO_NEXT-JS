import Box from "./box";
import SingleTask from "./single-task";
import { SunMoon } from "lucide-react";
import { GetData } from "./actions";

async function Home() {

  const getdata = await GetData()
  console.log(getdata);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-800">
      <div className="w-[31%] h-[90%] bg-black rounded-xl text-white p-5 shadow-xl max-lg:w-[50%] max-md:w-[70%] max-sm:w-[95%]">
        <div className="w-full h-fit flex  justify-between">
          <h1 className="text-2xl font-bold mt-1.5">Todo List</h1>
          <SunMoon className="mt-2 mr-2 cursor-pointer" />
        </div>
        <Box />
        <SingleTask getdata={getdata}/> 
      </div>
    </div>
  );
}

export default Home