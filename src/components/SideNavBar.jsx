// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router";

const SideNavBar = () => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Favorites", path: "/favorites" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
  ];
  return (
    <>
      <div className="bg-gray-400 p-11 rounded-2xl m-4 w-[17%]">
        <div>
          <h1 className="text-4xl font-medium mb-8">Zflix</h1>
          <div>
            <nav className="flex flex-col gap-3">
              {navlinks.slice(0, 3).map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name}
                </NavLink>
              ))}
              <hr />
              {navlinks.slice(3, 5).map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
