/* eslint-disable no-unused-vars */
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function TrendingCard() {
  return (
    <div className="w-full h-[396px] place-self-center bg-[#170D34]/[50%] rounded-[32px] overflow-hidden">
      <div className="h-[284px] w-full border backdrop-blur-xl">
        <div className="h-[276px] w-full overflow-hidden">
          <img
            src="/images/avengers.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="px-5 text-white marschel">
        <h1 className="text-2xl">🎬Avengers:Endgame</h1>
        <p>⭐Rating - 8.4/10(IMDb)</p>
        <p>🎭Genre - Action, Sci-Fi</p>
        <div className="flex gap-30">
          <p>🗓️Release Year - 2019</p>{" "}
          <p className="flex gap-1">
            <div>
            <IoPlayCircleOutline />
            </div>
            Play Trailer 1:07m
          </p>
        </div>
      </div>
    </div>
  );
}
