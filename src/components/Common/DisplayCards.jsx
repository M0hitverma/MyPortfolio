"use client";
import React, { lazy, useState } from "react";
import { BsEye } from "react-icons/bs";
import Image from "next/image";

export const DisplayCards = ({ projects, type,mode }) => {
  const [view, setView] = useState(-1);
  return (
    <div className="md:py-10 py-6 md:px-2">
      
      <ul className="grid sm:grid-cols-2   sm:grid-flow-row  lg:gap-10  gap-6">
        {projects.map((project, index) => (
          <li key={index} className="">
            <a href={project.projectUrl} target="_blank">
              <div
                onMouseEnter={() => setView(index)}
                onMouseLeave={() => setView(-1)}
                className="overflow-hidden rounded-2xl cursor-pointer relative "
              >
                <Image
                  loading="lazy"
                  placeholder="blur"
                  src={project.image}
                  alt={project.title}
                  className={`
              relative  object-cover rounded-2xl transition-all ease-in-out  duration-500  ${
                view == index && "lg:scale-125 lg:opacity-75"
              }`}
                />

                <div
                  className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#282829] p-3 rounded-xl text-xs text-amber-300 font-bold ease-in-out duration-500   ${
                    view == index ? "lg:scale-150 scale-0 " : "scale-0"
                  }`}
                >
                  <BsEye />
                </div>
              </div>
            </a>
            {type === "project" && (
              <div className="md:px-4 px-2 py-2">
                <h5 className="font-semibold">{project.title}</h5>
                <p className="font-medium text-zinc-400">{project.subTitle}</p>
              </div>
            )}
            {(type === "certificate" || type ==="contact") && (
              <p className={`md:px-4 px-2 py-2 ${mode=="light" ? "text-amber-500" : "text-amber-300"} `}>
                <span className={`${mode=="light" ? "text-black" : "text-white"} font-semibold`}>{project.title}</span> •{" "}
                {project.subTitle}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
