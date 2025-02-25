/* eslint-disable no-unused-vars */
import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function MobileNavBar() {

  return (
    <>
      <div className="flex justify-between px-6 pt-10 ">
        <img src="/images/logo.png" alt="" />
        <div className="text-white text-3xl">
          <IoMenu />
        </div>
      </div>

    
    </>
  );
}
