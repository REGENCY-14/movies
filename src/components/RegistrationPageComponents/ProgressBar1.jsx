/* eslint-disable no-unused-vars */
import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function ProgressBar1() {
    const [countryCode, setCountryCode] = useState("+233");
    const [phoneNumber, setPhoneNumber] = useState("");
  
  return (
    <>
      <div className="flex items-center gap-3 place-self-center mt-4 marschel">
        <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
        <div className="w-[50px] h-[4px] bg-[#FFFFFF33]/[20%]"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-white/[20%]"></div>
        <div className="w-[50px] h-[4px] bg-[#FFFFFF33]/[20%]"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-white/[20%]"></div>
      </div>
      <h1 className="text-[32px] place-self-center mt-7">Registration</h1>
      <div className="w-[304px] h-[66px] place-self-center ">
        <p className="text-[16px] text-center pt-3">
          Fill in the registration data. It will take a couple of minutes. All
          you need is a phone number and e-mail
        </p>
        <div className="w-[352px] h-[86px] bg-[#F0F2F4] place-self-center mt-4 flex pt-4 justify-around">
          <RiLockPasswordFill className="text-[#79808F]" />
          <p className="text-[12px] text-[#242426] w-[224px]">
            This number will be your only transaction number if you don’t have a
            Visa card. Ensure it&apos;s correct.
          </p>
          <IoIosClose className="text-[#79808F]" />
        </div>
        <div className="mt-5">
            <p className="text-[14px]">Enter your phone number</p>
            <div className="flex flex-col w-full max-w-md mt-5">
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <div className="flex items-center gap-4 w-full">
        <div className="border-b border-gray-400 text-white text-lg pb-1">
          {countryCode}
        </div>

        <input
          type="tel"
          className="flex-1 border-b border-gray-400 bg-transparent text-white text-lg outline-none pb-1"
          placeholder="024567890"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </div>
    <div className="mt-4 place-self-center">
    <button className="bg-white w-[137px] h-[48px] text-[#242731] text-[16px] rounded-[2px]">Send Code</button>
    </div>
    
    </div>
  
        </div>
      </div>
    </>
  );
}
