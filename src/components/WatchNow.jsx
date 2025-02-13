/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

export default function WatchNow() {
  return (
    <>
      <div className="text-white mx-6 marschel">
        <h1 className="text-2xl line-">TV SHOW AND MORE</h1>
        <h1 className="text-4xl">FIND MOVIES</h1>
        <button className="bg-[#62349E] w-[131px] h-[44px] rounded-[8.43px] mt-2 flex justify-center items-center gap-2">
        <FaRegPlayCircle />
          <p className="text-lg font-semibold"> 
            watch</p>
        </button>
      </div>
    </>
  );
}
