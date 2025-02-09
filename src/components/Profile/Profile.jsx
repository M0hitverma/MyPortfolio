"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { profileData } from "../../../public/data/data";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
export const Profile = ({ mode, handleModeChange }) => {
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowContacts(true);
      } else {
        setShowContacts(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`${
        mode == "light" ? "light shadow-xl" : "dark"
      } border-[1px] rounded-3xl  flex flex-col items-center justify-center  relative   `}
    >
      <button
        className={`lg:hidden absolute top-0 right-0 p-2  rounded-tr-3xl rounded-bl-2xl shadow-inner shadow-amber-400/55  sm:text-base text-xs ${mode == "light" ?  "bg-white text-amber-400" : "text-amber-300"}`}
        onClick={() => setShowContacts(!showContacts)}
      >
        Show Contacts
      </button>
      <div className="flex lg:justify-center justify-start items-center lg:flex-col flex-row py-[4vw] sm:gap-4 gap-2 w-[90%]">
        <div className="sm:h-32 sm:w-32 h-20 w-20 md:p-3 p-2 bg-[#373738] rounded-2xl ">
          <Image
            src={profileData.image}
            alt="Profile"
            height="100"
            widht="100"
            className=" w-full h-full rounded-2xl"
          />
        </div>
        <div>
          <h1 className="md:text-3xl text-xl font-semibold lg:mb-5 mb-3">
            {profileData.name}
          </h1>
          <div className="md:text-base  font-medium ">
            <p
              className={` ${
                mode == "light"
                  ? "bg-white shadow-inner shadow-black-300"
                  : "bg-[#2B2B2C]"
              }  py-1 px-3 rounded-lg flex flex-row items-center justify-center gap-2 text-sm tracking-tight`}
            >
              {profileData.workingAt}
              <span className="text-lg">{profileData.companyLogo}</span>
            </p>
          </div>
        </div>
        <div
          className={` ${
            mode == "light"
              ? " border-[1px] border-white shadow-amber-300"
              : "bg-zinc-700 shadow-black/65 "
          } lg:ml-0 ml-auto w-16 h-7  rounded-2xl  shadow-inner relative `}
        >
          <button
            onClick={handleModeChange}
            className={`absolute transition-all ease-in-out duration-1000 top-[50%] -translate-y-[50%] text-xl ${
              mode == "dark"
                ? "translate-x-[6px] -rotate-[360deg]"
                : "translate-x-[40px] rotate-0"
            }  `}
          >
            {mode == "dark" ? (
              <CiLight className="text-amber-300 " />
            ) : (
              <MdDarkMode className="text-zinc-800" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`border-t-[1px] flex   border-zinc-600 border-opacity-75 w-[80%] transition-all duration-700 ease-in-out  ${
          showContacts ? "py-10" : "py-0 h-0 overflow-hidden opacity-0"
        } `}
      >
        <ul className="flex flex-col gap-7 ">
          {profileData.details.map((detail, index) => (
            <li className=" " key={index}>
              <div className="flex flex-row gap-4 ">
                <div
                  className={` ${
                    mode == "light"
                      ? "bg-white/60 shadow-amber-400 border-[1px] "
                      : "bg-[#202022] shadow-amber-300/35 "
                  } h-12 w-12 rounded-2xl  shadow-inner  flex justify-center items-center text-2xl text-amber-300 `}
                >
                  {detail.icon}
                </div>
                <div className=" flex flex-col justify-center gap-1 ">
                  <p className=" text-xs text-[#9F9F9F] uppercase">
                    {detail.name}
                  </p>
                  <a
                    href={detail.link}
                    target={detail.target || "_self"}
                    download={detail.download || false}
                    className="text-sm cursor-pointer"
                  >
                    {" "}
                    {detail.comment}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
