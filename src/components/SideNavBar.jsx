/* eslint-disable no-unused-vars */
import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { HiOutlineBookOpen } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SideNavBar() {
  const navlinks = [
    { name: "Home", icon: <GoHome />, path: "/" },
    { name: "Book", icon: <HiOutlineBookOpen />, path: "/" },
    { name: "Genre", icon: <RiMovieLine />, path: "/" },
    { name: "Explore", icon: <MdOutlineExplore />, path: "/" },
  ];
  return (
    <>
      <div className="text-white text-3xl">
        {/* <IoMenuSharp /> */}
        <div className="h-screen w-[70px] bg-[#0A071E]">
          <nav className="flex flex-col gap-8 text-white text-xl pt-16">
            {navlinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="flex gap-4 justify-center md:justify-start"
              >
                <div className="flex flex-col items-center">
                  <p className="text-3xl">{link.icon}</p>
                  <p className="md:block text-sm font-semibold">{link.name}</p>
                </div>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
