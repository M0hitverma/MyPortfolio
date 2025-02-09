import React from "react";
import { DisplayCards } from "./DisplayCards";
import { contactData } from "../../../public/data/data";
import { Heading } from "./Heading";
export const Contact = ({ mode }) => {
  return (
    <div
      className={`w-full ${
        mode == "light" ? "light" : "dark"
      } border-[1px]  rounded-3xl md:py-8 py-4 px-5`}
    >
      <Heading heading={"Contact"} />
      <div className="md:px-7  mt-6 ">
        <div className={`${mode == "light" ? "border-white" : "border-zinc-700"} rounded-2xl overflow-hidden border-[1.6px]  `}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196635.16149300212!2d77.0487017025076!3d28.481488717536532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1737129698614!5m2!1sen!2sin"
            width="100%"
            loading="lazy"
            className={`${mode=="dark" && "filter grayscale invert"}  md:h-96 h-56`}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div>
        <h1 className="md:text-3xl text-xl font-extrabold mt-6">
          {contactData.info.heading}
        </h1>
        <div className="flex flex-row justify-between max-w-[40rem]">
          <div className="w-12 h-[0.4rem] bg-amber-400 mt-2 rounded-md"></div>
          <a href="mailto:mohit41verma@gmail.com">
            <button
              className={`${
                mode == "light"
                  ? "bg-white/80 shadow-amber-400/50 border-[1px] border-white"
                  : "bg-[#282829] shadow-amber-300/10"
              }  px-12 text-xl font-bold py-2 rounded-lg shadow-inner  text-amber-300/90 flex flex-row justify-center items-center gap-2`}
            >
              {contactData.info.icon}
              Mail
            </button>
          </a>
        </div>
      </div>
      <div>
        <h1 className="md:text-3xl text-xl font-extrabold mt-6">
          {contactData.socialMediaHandles.heading}
        </h1>

        <div className="w-12 h-[0.4rem] bg-amber-400 mt-2 rounded-md"></div>

        <DisplayCards
          projects={contactData.socialMediaHandles.list}
          type="contact"
          mode={mode}
        />
      </div>
    </div>
  );
};
