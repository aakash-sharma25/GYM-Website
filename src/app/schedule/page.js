"use client"

import Daycard from "@/components/Daycard";
import { useState } from "react";

export default function Page() {

  const [day, setday] = useState(0);
  


  return (
    <div className=" min-h-[50vh] mt-[100px]">

    <div className=" flex items-center justify-center mt-10">
      <div className="schedule flex justify-evenly w-[50%] ">
        <button
          className="p-2 rounded-2xl hover:bg-red-500 hover:text-white border-2"
          onClick={() => setday("0")}
          style={day=="0"?{backgroundColor:"red",color:"white"}:{backgroundColor:"white",color:"black"}}
        >
          Monday
        </button>
        <button
          className="p-2 rounded-2xl hover:bg-red-500 hover:text-white text-black border-2"
          onClick={() => setday("1")}
          style={day=="1"?{backgroundColor:"red",color:"white"}:{backgroundColor:"white",color:"black"}}
        >
          Tuesday
        </button>
        <button
          className="p-2 rounded-2xl hover:bg-red-500 hover:text-white text-black border-2"
          onClick={() => setday("2")}
          style={day=="2"?{backgroundColor:"red",color:"white"}:{backgroundColor:"white",color:"black"}}
        >
          Wednesday
        </button>
        <button
          className="p-2 rounded-2xl hover:bg-red-500 hover:text-white text-black border-2"
          onClick={() => setday("3")}
          style={day=="3"?{backgroundColor:"red",color:"white"}:{backgroundColor:"white",color:"black"}}
        >
          Thursday
        </button>
        <button
          className="p-2 rounded-2xl hover:bg-red-500 hover:text-white text-black border-2"
          onClick={() => setday("4")}
          style={day=="4"?{backgroundColor:"red",color:"white"}:{backgroundColor:"white",color:"black"}}
        >
          Friday
        </button>
        <button
          className="p-2 rounded-2xl hover:bg-red-500 hover:text-white text-black border-2"
          onClick={() => setday("5")}
          style={day=="5"?{backgroundColor:"red",color:"white"}:{backgroundColor:"white",color:"black"}}
        >
          Saturday
        </button>
        <button
          className="p-2 rounded-2xl hover:bg-red-500 hover:text-white text-black border-2"
          onClick={() => setday("6")}
          style={day=="6"?{backgroundColor:"red",color:"white"}:{backgroundColor:"white",color:"black"}}
        >
          Sunday
        </button>
      </div>
    </div>

    <div>
      <Daycard day={day}/>
    </div>
      
    </div>
  );
}
