/* eslint-disable no-unused-vars */
import React from "react";

export default function BookMovieCardComponent() {
  return (
    <>
      <div>
        <div className="bg-white w-[148px] h-[284px] p-[10px] rounded-[20px] mx-6">
          <div className="h-[194px] rounded-t-[20px]">
            <img
              src="/images/GOTG.png"
              alt=""
              className="object-cover w-full h-full rounded-t-[20px]"
            />
          </div>
          <div className="h-[67px]  rounded-b-[20px] text-sm mt-1.5">
            <p className="truncate font-semibold">Guardians of the galaxy</p>
            <div className="flex justify-between mt-5">
              <p>2023</p>
              <p>104m</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
