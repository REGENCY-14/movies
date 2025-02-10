/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import WatchNow from "./components/WatchNow";
import BookAMovie from "./components/BookAMovie";
import Cardru from "./components/Cardru";

export default function App() {
  return (
    <>
      <div className=" relative bg-[#0A071E] h-screen">
        <div className="absolute right-0 top-[-100px]">
          <img src="/images/Ellipse 1002.png" alt="" />
        </div>

        <div className="opacity-[50%] relative overflow-hidden">
          <img
            src="/images/ragnar.jpg"
            alt=""
            className="w-screen"
      
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/[0.3] to-[#0A071E]"></div>
        </div>
        <div className="absolute inset-0 mt-32">
          <WatchNow />
        </div>
        <div className="">
          <BookAMovie />
          <Cardru />
        </div>
      </div>
    </>
  );
}
