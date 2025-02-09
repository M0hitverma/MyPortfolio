import React from "react";
import { resumeData } from "../../../public/data/data";
import { TimeLine } from "./TimeLine";
import { SkillCard } from "./SkillCard";
import { Heading } from "./Heading";
export const Resume = ({ mode }) => {
  return (
    <div
      className={`w-full ${
        mode == "light" ? "light" : "dark"
      } border-[1px]  rounded-3xl md:py-8 py-4 px-5`}
    >
      <Heading heading={resumeData.heading} />
      <button
        onClick={() => window.open(resumeData.viewResume.url, "_blank")}
        target="_blank"
        className={`md:mt-10 mt-6 ${
          mode == "light"
            ? "bg-white shadow-amber-400/50 text-amber-300 border-[1px] border-white"
            : "bg-[#282829] shadow-white/15 text-amber-300  "
        } px-2 py-3 flex flex-row items-center justify-center gap-2 font-semibold md:text-lg text-base rounded-lg shadow-inner `}
      >
        {resumeData.viewResume.icon}
        <span>{resumeData.viewResume.content}</span>
      </button>

      <div className="md:mt-10 mt-6 md:px-2">
        <TimeLine data={resumeData.fulltimeDetails} mode={mode} />
        <TimeLine data={resumeData.internshipDetails} mode={mode} />
        <TimeLine data={resumeData.educationDetails} mode={mode} />
      </div>
      <div className="md:px-2  ">
        <div className=" relative flex flex-row md:gap-5 gap-3 pb-4 items-center ">
          <div className={`relative ${mode=="light" ? "bg-white shadow-amber-400/50 border-[1px] border-white text-amber-300" : "bg-[#282829] text-amber-300 shadow-amber-300/30"}  shadow-inner  p-3 text-2xl  rounded-xl z-50`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-6 h-6"
            >
              <path
                fill="#fcd34d"
                d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
              />
            </svg>
          </div>
          <h2 className="md:text-2xl text-xl font-bold">
            {resumeData.skill.heading}
          </h2>
        </div>

        <div
          className={`${
            mode == "light"
              ? " bg-white  "
              : "bg-[#282829] border-zinc-600"
          } md:px-8 px-3 md:py-6 py-3 border-[1.5px]  rounded-2xl flex flex-col gap-5`}
        >
          <SkillCard data={resumeData.skill.Languages} mode={mode}/>
          <SkillCard data={resumeData.skill.framework} mode={mode}/>
          <div>
            <h4 className="text-lg font-semibold ">{"Other Skills"}</h4>
            <ul className="flex flex-row gap-2 flex-wrap justify-between px-4 font-semibold py-2 w-full ">
              {resumeData.skill.otherskills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="md:px-2 md:mt-10 mt-6 ">
        <div className=" relative flex flex-row md:gap-5 gap-3 pb-4 items-center ">
          <div className={`relative ${mode=="light" ? "bg-white shadow-amber-400/50 border-[1px] border-white " : "bg-[#282829] shadow-amber-300/30 "}  shadow-inner p-3 md:text-2xl text-xl text-amber-300 rounded-xl z-50`}>
            {resumeData.coursework.icon}
          </div>
          <h2 className="text-2xl font-bold">
            {resumeData.coursework.heading}
          </h2>
        </div>
        <ul className={`${mode=="light" ? "bg-white" : "bg-[#282829] border-zinc-600 "}  border-[1.5px]   md:py-6  py-3 md:px-8 px-6 rounded-2xl list-disc`}>
          {resumeData.coursework.subjects.map((subjectName, index) => (
            <li className=" font-medium" key={index}>
              {subjectName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
