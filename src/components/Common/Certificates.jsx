import React from "react";
import { certificateData } from "../../../public/data/data";
import { DisplayCards } from "./DisplayCards";
import { Heading } from "./Heading";
export const Certificates = ({mode}) => {
  return (
    <div className={`w-full ${mode =="light" ? "light" : "dark"} border-[1px] rounded-3xl md:py-8 py-4 px-5`}>
      <Heading heading={"Certificates"} />
      <DisplayCards projects={certificateData} type="certificate" mode={mode} />
    </div>
  );
};
