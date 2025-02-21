/* eslint-disable no-unused-vars */
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export default function WatchNow() {
  return (
    <>
      <div className="text-white marschel mx-5 pt-32 ">
        <h1 className="text-[24px] line-">TV SHOW AND MORE</h1>
        <h1 className="text-[40px]">FIND MOVIES</h1>
        <button className="bg-gradient-to-r from-[#A083F7] via-[#7E5EDE] to-[#27009D] w-[131px] h-[44px] rounded-[32px] mt-5 flex justify-center items-center gap-2">
        <FaCirclePlay />

          <p className="text-lg font-semibold"> 
            watch</p>
        </button>
      </div>
    </>
  );
}
