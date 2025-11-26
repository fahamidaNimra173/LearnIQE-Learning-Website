import React from "react";
import { RxDotFilled } from "react-icons/rx";

export default function Menu() {
    return (

        <div className="grid grid-cols-2 gap-1 ">
            <div className=" w-3 lg:h-5 h-4 bg-gradient-to-b from-white via-[#fbbc2c] to- rounded-full " ></div>
            <div className=" w-3 lg:h-5 h-4 rounded-full bg-[#fbbc2c]" ></div>
            <div className=" w-3 lg:h-5 h-4 rounded-full bg-gradient-to-t from-white via-[#fbbc2c]" ></div>
            <div className=" w-3 lg:h-5 h-4 rounded-full bg-gradient-to-t from-white via-[#fbbc2c]" ></div>
        </div>
    )
}
