/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import WatchNow from "./components/WatchNow";

export default function App() {
  return (
    <>
      <div className=" relative bg-[#0A071E] h-screen">
        <div className="absolute right-0 top-0">
          <img src="/images/Ellipse 1002.png" alt="" />
        </div>
        <div className="opacity-[50%] bg-gradient w-screen">
          <img src="/images/ragnar.jpg" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/[0.3] via-[#0A071E] to-black"></div>
        </div>
        <div className="">
          <WatchNow />
        </div>
      </div>
    </>
  );
}
