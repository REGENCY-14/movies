/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css";
import WatchNow from "../components/HomePageComponents/WatchNow";
import BookAMovie from "../components/HomePageComponents/BookAMovie";
import Cardru from "../components/HomePageComponents/Cardru";
import Trending from "../components/HomePageComponents/Trending";
import TrendingCard from "../components/HomePageComponents/TrendingCard";
import MobileNavBar from "../components/HomePageComponents/MobileNavBar";
import MobileNavBarDropDown from "../components/HomePageComponents/MobileNavBarDropDown";

export default function App() {
  return (
    <div>
      <div className="relative bg-[#0A071E] h-auto">
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
          <div className="fixed w-full z-10">
            <MobileNavBarDropDown />
          </div>
          <MobileNavBar />
          <WatchNow />
          <div className="mt-5">
            <BookAMovie />
          </div>
          <Cardru />
          <Trending />
          <div className="mx-10">
            <TrendingCard />
          </div>
        </div>
      </div>
    </div>
  );
}
