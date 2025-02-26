/* eslint-disable no-unused-vars */
import React from "react";
import ProgressBar3 from "../components/RegistrationPageComponents/ProgressBar3";
import { useState } from "react";
import { IoReload } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

export default function RegistrationPage3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          <ProgressBar3 />
          <div>
            <h1 className="text-[32px] place-self-center mt-7">Registration</h1>
            <div className="w-[304px] h-[66px] place-self-center ">
              <p className="text-[16px] text-center pt-3">
                Fill in the registration data. It will take a couple of minutes.
                All you need is a phone number and e-mail
              </p>
              <div className="w-[352px] h-[86px] bg-[#F0F2F4] place-self-center mt-4 pt-4 justify-around text-center">
                <p className="text-[#242426] text-[18px]">+233 024567890</p>
                <div className="flex place-content-center">
                  <IoIosCheckmark className="text-[#242426]" />
                  <p className="text-[12px] text-[#242426]">Number confirmed</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex flex-col gap-6 w-full max-w-md text-white">
                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm">Enter your email</label>
                    <input
                      type="email"
                      className="border-b border-gray-400 bg-transparent text-lg outline-none pb-1"
                      placeholder="EdwinAdu@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label className="text-sm">Set a password</label>
                    <div className="flex items-center border-b border-gray-400 pb-1">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="flex-1 bg-transparent text-lg outline-none tracking-widest"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="ml-2"
                      >
                        {showPassword ? (
                          <IoMdEyeOff size={20} />
                        ) : (
                          <FaEye size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  {password.length > 5 && (
                    <div className="flex items-center gap-2 text-green-500 text-sm">
                      <IoIosCheckmark size={16} />
                      <span>Good password</span>
                    </div>
                  )}
                </div>
                <div className="mt-6 place-self-center">
                  <button className=" bg-linear-to-r from-[#9747FFCC]/[80%]  to-[#004999] w-[169px] h-[48px] text-white text-[16px] rounded-[2px]">
                    Register Now{" "}
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
