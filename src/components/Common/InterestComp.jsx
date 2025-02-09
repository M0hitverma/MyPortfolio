import React from "react";
import Image from "next/image";
export const InterestComp = ({ details, mode }) => {
  return (
    <div>
      <h1 className="md:text-3xl text-xl  font-extrabold">{details.heading}</h1>
      <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-5 ">
        {details.details.map((data, index) => (
          <li key={index} className={`flex flex-row gap-2 ${mode=="light" ? "bg-white " : "bg-[#282829]"} md:py-10 py-5 md:px-8 px-5 rounded-3xl shadow-inner shadow-white/15`}>
            <div className=" md:h-16 md:w-16 h-12 w-12 ">
              <Image src={data.icon} alt="Interest" height={200} width={200}/>
            </div>
            <div className="flex-1 px-2">
              <h2 className="md:text-xl text-lg font-semibold">{data.title}</h2>
              <p className="md:text-base text-sm tracking-wide font-medium md:mt-2 leading-5">{data.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
