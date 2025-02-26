/* eslint-disable no-unused-vars */
import React from "react";
import ProgressBar2 from "../components/RegistrationPageComponents/ProgressBar2";
import { useState } from "react";
import { IoReload } from "react-icons/io5";


export default function RegistrationPage2() {
  const [code, setCode] = useState("");

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
          <ProgressBar2 />
          <div>
            <h1 className="text-[32px] place-self-center mt-7">Registration</h1>
            <div className="w-[304px] h-[66px] place-self-center ">
              <p className="text-[16px] text-center pt-3">
                Fill in the registration data. It will take a couple of minutes.
                All you need is a phone number and e-mail
              </p>
              <div className="w-[352px] h-[86px] bg-[#F0F2F4] place-self-center mt-4 pt-4 justify-around text-center">
                <p className="text-[#242426] text-[18px]">+233 024567890</p>
                <p className="text-[12px] text-[#242426]">
                  Number not confirmed yet
                </p>
              </div>
              <div className="mt-5">
                <p className="text-[14px]">Confirmation Code</p>
                <div className="flex flex-col items-start gap-4 w-full max-w-md">
                  <div className="flex items-center w-full mt-5">
                    <div className="border-r border-gray-400 pr-3 h-6"></div>

                    <input
                      type="text"
                      className="flex-1 border-b-2 border-blue-500 bg-transparent text-white text-lg outline-none tracking-[0.7em] placeholder-gray-400"
                      placeholder="----"
                      maxLength={4}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="text-[#007AFF] mt-8 flex gap-2 items-center">
                <IoReload />
                  <p className="text-[16px]">Send again</p>
                </div>
                <div className="mt-4 place-self-center">
                  <button className="bg-white w-[106px] h-[48px] text-[#242731] text-[16px] rounded-[2px]">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
