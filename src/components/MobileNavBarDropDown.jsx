/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdClose } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { HiOutlineBookOpen } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";


export default function MobileNavBarDropDown() {
  const navlinks = [
    { name: "Home", icon: <GoHome />, path: "/" },
    { name: "Book", icon: <HiOutlineBookOpen />, path: "/" },
    { name: "Explore", icon: <MdOutlineExplore />, path: "/" },
    { name: "Profile", icon: <CiUser/>, path: "/" },

  ];
  return (
    <>
      <div className=" bg-[#0B081F] h-[359px] w-full rounded-b-[32px]">
        <img
          src="/images/spiderman.png"
          className="w-full h-full object-cover opacity-[20%] rounded-b-[32px] mix-blend-multiply"
        />
        <div>
          <div className="absolute top-0 mt-11 marschel w-full">
            <div className="flex w-full justify-between">
              <div className="w-[130px] h-[31px] bg-white rounded-[32px] flex justify-center items-center gap-3 ml-6">
                <p className="">Login</p>
                <p>SignUp</p>
              </div>
              <IoMdClose className="text-white place-self-center text-xl mr-12" />
            </div>
            <div className="text-white text-3xl">
              <nav className="flex flex-col gap-6 text-white text-xl pt-9 px-14">
                {navlinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="flex"
                  >
                    <div className="flex justify-center gap-5 hover:text-[#FED11C]">
                      <p className="text-2xl ">{link.icon}</p>
                      <p className="md:block text-lg  ">
                        {link.name}
                      </p>
                      {/* <hr className="text-white border border-red-500"/> */}
                    </div>
                  </NavLink>
                ))}
              </nav>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
