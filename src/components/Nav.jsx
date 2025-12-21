import React from "react";
import Search from "./Search";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="bg-[#C0D5CE] rounded-md p-2 w-19 relative h-12">
        <p className="text-2xl font-semibold absolute left-7">Furnify</p>
      </div>
      <div className="flex items-center space-x-10">
        <ul className="flex gap-5 text-sm font-medium min-w-45">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
        </ul>

        <Search icon={<MagnifyingGlassIcon className="text-black w-5 h-5" />} />
      </div>
    </nav>
  );
};

export default Nav;
