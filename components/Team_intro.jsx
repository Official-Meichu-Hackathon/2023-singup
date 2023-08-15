"use client";
import React, { useState } from "react";

const Team_intro = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center gap-[3%] lg:gap-[5%] px-[8%]">
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
      } duration-500 transition-colors relative overflow-hidden w-[75vw] sm:w-[65vw] md:w-[32rem] aspect-[20/21] border border-gray-300 rounded shadow-md`}
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
          <div className="text-[2.5vw] md:text-[1.25vw] absolute w-full h-full top-0 pt-[7%] px-[7%] bg-gray-200  bg-opacity-80 transition-opacity duration-500">
            <p className="leading-normal">
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
      <div className="w-1/2 pl-[5%] text-[#6A747B] mt-[0.75rem] bg-white ">
        <div className="text-[5vw] md:text-[2.75vw]">黑客組</div>
      </div>
      <div
        className={`${
          isHovered ? "text-white" : "text-[#6A747B]"
        } absolute flex bottom-[3%] gap-x-1 sm:gap-x-2 pl-[5%] text-base`}
      >
        <img
          src={
            isHovered
              ? "/assets/icons/topic_arrow_w.svg"
              : "/assets/icons/topic_arrow.svg"
          }
          alt=""
          className="w-[17%] md:w-auto aspect-square"
        />
        <p className="text-[2.5vw] md:text-[1.25vw]">工作坊細節</p>
      </div>
    </div>
  );
};

export default Team_intro;

/*

*/
