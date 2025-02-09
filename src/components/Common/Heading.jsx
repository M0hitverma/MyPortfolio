import React from "react";

export const Heading = ({heading}) => {
  return (
    <div>
      <h1 className="md:text-4xl text-2xl font-extrabold">{heading}</h1>
      <div className="w-12 md:h-[0.4rem] h-[0.2rem] bg-amber-400 md:mt-6 mt-2 rounded-md"></div>
    </div>
  );
};
