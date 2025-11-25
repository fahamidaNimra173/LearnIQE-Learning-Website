import React from "react";
import { RxDotFilled } from "react-icons/rx";

export default function Menu(){
    return(

        <div className="grid grid-cols-2 gap-2 ">
           <RxDotFilled className=" w-5 text-white" /> 
           <RxDotFilled className=" w-5 text-[#fbbc2c]" />
           <RxDotFilled className=" w-5 text-white" />
           <RxDotFilled className=" w-5 text-white" />
        </div> 
    )
}
