/* eslint-disable no-unused-vars */
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import ProgressBar1 from "../components/RegistrationPageComponents/ProgressBar1";

export default function RegistrationPage1() {
  return (
    <>
      <div className="relative w-screen bg-[#0A071E] h-screen overflow-hidden">
      <img
          src="/images/spiderman.png"
          alt="Spiderman"
          className="absolute w-full h-full object-cover mix-blend-multiply"
        />
        <div className="absolute w-screen h-full  bg-gradient-to-b from-[#0A071E]/[] via-[#0A071E]/[62.69%] to-[#0A071E]"></div>
        
        <div className="relative mt-25 text-white text-xl ml-4">
          <IoIosArrowBack />
          <ProgressBar1/>
          
        </div>
      </div>
    </>
  );
}
