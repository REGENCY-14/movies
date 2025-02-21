/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import WatchNow from "./components/WatchNow";
import BookAMovie from "./components/BookAMovie";
import Cardru from "./components/Cardru";
import SideNavBar from "./components/SideNavBar";

export default function App() {
  return (
    <div>
      <div className="relative bg-[#0A071E] h-screen">
        <div className="absolute opacity-[50%] h-[516px]">
          <img
            src="/images/ragnar.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-0 top-[-50px]">
          <img src="/images/Ellipse 1002.png" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.3] via-black/[] to-[#0A071E]"></div>
        <div className="relative">
          <WatchNow />
          <div className="mt-5">
          <BookAMovie/>

          </div>
          <Cardru/>
        </div>
      </div>
    </div>
  );
}
