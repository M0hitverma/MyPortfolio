import React from "react";

export const TimeLine = ({ data, mode }) => {
  return (
    <div>
      <div className=" relative flex flex-row md:gap-5 gap-3 md:pb-10 pb-6 items-center ">
        <div
          className={`before:absolute before:left-6 before:h-full before:w-[1px] ${
            mode == "light" ? "before:bg-white" : "before:bg-zinc-100/20 "
          }  before:z-0`}
        >
          <div
            className={`relative ${
              mode == "light"
                ? "bg-white shadow-amber-400/50 border-[1px] border-white text-amber-300"
                : "bg-[#282829] shadow-amber-300/30 text-amber-300 "
            }  shadow-inner shadow-amber-300/30 p-3 text-2xl rounded-xl z-50`}
          >
            {data.icon}
          </div>
        </div>
        <h2 className="md:text-2xl text-xl font-bold">{data.heading}</h2>
      </div>
      <ul>
        {data.details.map((item, index) => (
          <li
            key={index}
            className="flex flex-row md:gap-10 gap-7 relative md:pb-10 pb-6 "
          >
            <div
              className={`${
                index == data.details.length - 1
                  ? ""
                  : "before:absolute before:left-6 before:h-full before:w-[1px]  before:z-0"
              } ${
                mode == "light" ? "before:bg-white" : "before:bg-zinc-100/20 "
              }  `}
            >
              <div
                className={` relative rounded-full w-4 h-4 ${
                  mode == "light" ? "bg-white" : "bg-zinc-400/25"
                } ml-[16.3px] z-50  flex items-center justify-center`}
              >
                <div
                  className={`w-2 h-2 ${
                    mode == "light"
                      ? "bg-gradient-to-r from-amber-300 to-amber-500"
                      : "bg-amber-300"
                  } bg-amber-300 absolute rounded-full  `}
                ></div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-extrabold md:leading-4 leading-5 mb-1">
                {item.title}
              </h3>
              <span
             
                className={`${
                  mode == "light"
                    ? "bg-gradient-to-r from-amber-400 to-pink-600 text-transparent custome-clip"
                    : "text-amber-300/85"
                } font-normal text-base `}
              >
                {item.role || item.course}
                {" | "}
                {item.from}
                {" - "}
                {item.to}
              </span>
              <h5>
                {item.stream && `${item.stream} |`} {item.score}
              </h5>
              <p
                dangerouslySetInnerHTML={{ __html: item.desc }}
                className="pl-5 font-medium md:text-base text-sm md:tracking-normal tracking-wide "
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
