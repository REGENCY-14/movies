/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

export default function AddNewCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [showCvv, setShowCvv] = useState(false);

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "") 
      .replace(/(.{4})/g, "$1 ") 
      .trim(); 
  };

  return (
    <>
      <div className="relative w-screen bg-[#0A071E] h-screen overflow-hidden">
        <img
          src="/images/spiderman.png"
          alt="Spiderman"
          className="absolute w-full h-full object-cover mix-blend-multiply"
        />
        <div className="absolute w-screen h-full  bg-gradient-to-b from-[#0A071E]/[] via-[#0A071E]/[62.69%] to-[#0A071E]"></div>
        <div className="relative">
          
          <h1 className="text-[28px] mt-25 text-white place-self-center">Add New Card</h1>
          <div className="flex flex-col gap-6 w-full max-w-md text-white place-self-center mt-8">
      <div className="flex flex-col gap-2 ">
        <label className="text-sm">Card number</label>
        <div className="flex items-center border-b border-gray-400 pb-1">
          <input
            type="text"
            className="flex-1 bg-transparent text-lg outline-none tracking-widest"
            placeholder="1234 5678 9012 3456"
            maxLength={19} 
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          />
          <div className="w-4 h-4 bg-red-500 rounded-full mx-1"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-sm">Expiry date</label>
          <input
            type="text"
            className="border-b border-gray-400 bg-transparent text-lg outline-none tracking-widest"
            placeholder="MM / YY"
            maxLength={7}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 relative">
          <label className="text-sm">CVV</label>
          <div className="flex items-center border-b border-gray-400 pb-1">
            <input
              type={showCvv ? "text" : "password"}
              className="flex-1 bg-transparent text-lg outline-none tracking-widest"
              placeholder="•••"
              maxLength={3}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowCvv(!showCvv)}
              className="ml-2"
            >
              {showCvv ? <IoMdEyeOff size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm">Card holder</label>
        <input
          type="text"
          className="border-b border-gray-400 bg-transparent text-lg outline-none tracking-widest"
          placeholder="Edwin Adu Boateng"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
      </div>
      <div className="mt-6 place-self-center">
                  <button className=" bg-linear-to-r from-[#9747FFCC]/[80%]  to-[#004999] w-[169px] h-[48px] text-white text-[16px] rounded-[2px]">
                    Add Card
                  </button>
                </div>
    </div>
        </div>
       
      </div>
    </>
  );
}
