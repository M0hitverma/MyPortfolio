import React from "react";

export const SkillCard = ({ data, mode }) => {
  return (
    <div className="">
      <h4
        className={`text-lg ${
          mode == "light" ? "text-amber-300" : "text-amber-300/80"
        } font-semibold `}
      >
        {data.heading}
      </h4>
      <ul className="md:px-4 px-2 ">
        {data.list.map((item, index) => (
          <li key={index} className="md:py-3 py-1">
            <h5 className="text-base font-semibold leading-9">
              {item.name}{" "}
              <span className="text-zinc-400 font-medium">
                {"("}
                {item.percentage >= 80
                  ? "Expert"
                  : item.percentage >= 60
                  ? "Proficient"
                  : "Fundamental"}
                {")"}
              </span>
            </h5>

            <div
              className={`${
                mode == "light"
                  ? " bg-white/60 shadow-black/15"
                  : "bg-[#343434c2] shadow-black/35"
              }  shadow-inner  py-[1px] relative  rounded-lg w-full md:h-3 h-1 flex items-center `}
            >
              <div
                style={{ width: `${item.percentage}%` }}
                className="h-full relative rounded-lg  bg-gradient-to-r from-amber-300 to-amber-500"
              >
                {" "}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
