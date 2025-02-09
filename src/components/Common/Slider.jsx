import React from "react";
import Image from "next/image";
export const Slider = ({data}) => {
  return (
    <div className="w-full relative py-3" >
      <h1 className="font-semibold md:text-3xl text-xl">{data.heading}</h1>
      <ul className="grid grid-flow-col gap-3 py-10  px-6 overflow-x-scroll  scroll-smooth lg:w-[60vw] max-w-[92vw] mx-auto  ">
        {data.companies.map((data, index) => (
          <li key={index} className="md:w-[20rem] w-[12rem]">
            <a href={data.url} target="_blank">
            <Image
              src={data.image}
              alt={data.name}
              height={300}
              width={300}
              className=" filter grayscale  hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
