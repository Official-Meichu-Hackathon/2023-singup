"use client";
import React, { useState } from "react";

const Team_intro = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="container mx-auto flex justify-center gap-x-[4.5rem] px-12">
      <Team_each
        imageSrc="/assets/images/創客.jpg"
        description="Image Description"
      />
      <Team_each
        imageSrc="/assets/images/創客.jpg"
        description="Image Description"
      />
    </div>
  );
};

const Team_each = ({ imageSrc, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`${
        isHovered ? "bg-[#6A747B]" : "bg-[#F5F5F6]"
      } duration-500 transition-colors relative overflow-hidden w-[32rem] aspect-square border border-gray-300 rounded shadow-md`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="w-auto h-auto relative">
        <img
          src={imageSrc}
          alt="Transforming"
          className={`w-full aspect-[11/8] object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {isHovered && (
          <div className="absolute w-full h-full top-0 pt-10 px-5 bg-gray-200  bg-opacity-80 transition-opacity duration-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              blanditiis voluptates iste nemo quod deleniti aliquid saepe, quam
              reiciendis ad numquam! Commodi ratione sint eum sequi blanditiis,
              consequuntur fugit exercitationem vel est eius quas magnam quia
              rem quis temporibus, qui officiis iste totam incidunt tempora nam!
              Laudantium minus eligendi provident?
            </p>
            <p>台積電 台積電 台積電</p>
          </div>
        )}
      </div>
      <div className="w-1/2 pl-[1.2rem] text-[#6A747B] mt-[0.5rem] text-[2.5rem] bg-white ">
        黑客組
      </div>
      <div className="pl-[1.2rem] text-[#6A747B] text-base">黑客組</div>
    </div>
  );
};

export default Team_intro;

/*

*/
