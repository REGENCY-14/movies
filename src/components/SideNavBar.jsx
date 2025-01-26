// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";
import { VscDebugContinue } from "react-icons/vsc";


const SideNavBar = () => {
  const navlinks = [
    { name: "Home", path: "/", icon: <GoHome /> },
    { name: "Explore", path: "/explore", icon: <MdOutlineExplore /> },
    {
      name: "Favorites",
      path: "/favorites",
      icon: <MdOutlineFavoriteBorder />,
    },
    { name: "Profile", path: "/profile", icon: <FiUser /> },
    { name: "Settings", path: "/settings", icon: <TbSettings /> },
  ];
  return (
    <>
      <div className="bg-gray-900 p-4 md:p-8 rounded-4xl m-4 w-[10%] md:w-[20%]">
        <div>
          <h1 className="text-4xl font-medium mb-8 text-white flex justify-center md:justify-start">
            <span>Z</span>
            <span className="hidden md:flex flex-row">flix</span>
          </h1>
          <div>
            <nav className="flex flex-col gap-8 text-white text-xl">
              {navlinks.slice(0, 3).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="flex gap-4 justify-center md:justify-start"
                >
                  <p className="text-3xl">{link.icon}</p>{" "}
                  <p className="hidden md:block">{link.name}</p>
                </NavLink>
              ))}
              <hr />
              {navlinks.slice(3, 5).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="flex gap-4 justify-center md:justify-start"
                >
                  <p className="text-3xl">{link.icon}</p>{" "}
                  <p className="hidden md:block">{link.name}</p>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <div className="pt-28 text-white flex justify-center md:justify-start">
         <VscDebugContinue className="text-3xl md:hidden"/><h4 className="hidden md:block">Continue Watching</h4>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
