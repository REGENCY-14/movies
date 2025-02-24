/* eslint-disable no-unused-vars */
import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { HiOutlineBookOpen } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MobileNavBar() {
  const navlinks = [
    { name: "Home", icon: <GoHome />, path: "/" },
    { name: "Book", icon: <HiOutlineBookOpen />, path: "/" },
    { name: "Genre", icon: <RiMovieLine />, path: "/" },
    { name: "Explore", icon: <MdOutlineExplore />, path: "/" },
  ];
  return (
    <>
      <div className="flex justify-between px-6 pt-10 ">
        <img src="/images/logo.png" alt="" />
        <div className="text-white text-3xl">
          <IoMenu />
        </div>
      </div>

    
    </>
  );
}
