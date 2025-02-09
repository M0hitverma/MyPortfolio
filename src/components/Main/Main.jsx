"use client";
import React, { useState } from "react";
import "./MainStyle.css";
import { Profile } from "../Profile/Profile";
import { Navbar } from "../Common/Navbar";
import { About } from "../Common/About";
import { Certificates } from "../Common/Certificates";
import { Contact } from "../Common/Contact";
import { Project } from "../Common/Project";
import { Resume } from "../Common/Resume";
export const Main = () => {
  const [activeComponent, setActiveComponent] = useState("About");
  const [mode, setMode] = useState("dark");
  const handleModeChange = () => {
    if (mode == "light") setMode("dark");
    else setMode("light");
  };
  return (
    <div className={`sparkle-background  relative ${mode=="light" ? "bg-white/90" : "bg-[#141414eb]"} `}>
      {Array.from({ length: 50 }).map((val, index) => (
        <div key={index} className={`sparkle sparkle-${index + 1}`}></div>
      ))}
      <div className=" h-[100vh] w-[full] flex lg:flex-row flex-col xl:gap-10 gap-6 py-10 xl:px-20 lg:px-5 px-3 overflow-y-scroll  no-scrollbar relative ">
        <div className="lg:w-80 w-full " 
        >
          <Profile mode={mode} handleModeChange={handleModeChange} />
        </div>
        <div className="lg:flex-1 lg:relative  ">
          <div className={ `lg:absolute fixed lg:top-0 lg:right-0 lg:left-auto lg:bottom-auto bottom-0 top-auto left-0 right-auto    lg:rounded-tr-3xl lg:rounded-bl-3xl rounded-tr-2xl lg:rounded-tl-none rounded-tl-2xl  overflow-hidden border-[1px] lg:w-auto w-full z-50 
            ${mode == "light" ? "bg-white border-gray-200" : "bg-[#282829] border-zinc-600"}
            
            `}>
            <Navbar
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
              mode={mode}
            />
          </div>
          <div className="relative z-0 shadow-xl rounded-3xl ">
            {activeComponent == "About" && (
              <About mode={mode} handleModeChange={handleModeChange} />
            )}
            {activeComponent == "Resume" && (
              <Resume mode={mode} handleModeChange={handleModeChange} />
            )}
            {activeComponent == "Projects" && (
              <Project mode={mode} handleModeChange={handleModeChange} />
            )}
            {activeComponent == "Certificates" && (
              <Certificates mode={mode} handleModeChange={handleModeChange} />
            )}
            {activeComponent == "Contact" && (
              <Contact mode={mode} handleModeChange={handleModeChange} />
            )}
            
          </div>
          <div className="lg:h-10 h-28"></div>
        </div>
      </div>
    </div>
  );
};
