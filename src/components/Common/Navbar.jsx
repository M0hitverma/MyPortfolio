import React from "react";
import { navbarData } from "../../../public/data/data";
export const Navbar = ({ activeComponent, setActiveComponent, mode }) => {
  return (
    <div>
      <ul className="flex flex-row xl:gap-10 lg:gap-2 xl:px-16 lg:px-7 justify-center">
        {navbarData.map((data, index) => (
          <li key={index}>
            <button
              className={`md:py-5 py-4 px-2 lg:text-base md:text-sm  text-xs font-semibold  ease-in-out transition-colors delay-75  ${
                activeComponent == data.name
                  ? mode == "light"
                    ? "text-amber-400 "
                    : "text-amber-300"
                  : mode == "light"
                  ? " text-black hover:text-black/40"
                  : "text-[#cacaca] hover:text-[#919090]"
              }`}
              onClick={() => {
                
                setActiveComponent(data.name);
                
              }}
            >
              {data.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
