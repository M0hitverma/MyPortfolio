import React from "react";
import { aboutData } from "../../../public/data/data";
import { InterestComp } from "./InterestComp";
import Image from "next/image";
import { Slider } from "./Slider";
import { Heading } from "./Heading";
export const About = ({ mode }) => {
  return (
    <div
      className={`w-full ${
        mode == "light" ? "light  " : "dark "
      } border-[1px] rounded-3xl md:py-8 py-4 px-5`}
    >
      <Heading heading={aboutData.heading}  />
      <div
        dangerouslySetInnerHTML={{ __html: aboutData.about }}
        className={`md:text-base text-sm  tracking-wide ${
          mode == "light" ? "text-black" : "text-[#D6D6D6]"
        } font-normal mt-6`}
      />

      <div className="mt-10">
        <InterestComp details={aboutData.interest} mode={mode} />
      </div>
      <div className="mt-10  ">
        <Slider data={aboutData.experience} />
      </div>
      <div>
        <Slider data={aboutData.offers} />
      </div>
    </div>
  );
};
