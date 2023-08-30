"use client";
import React, { useState } from "react";

const Team_intro = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const team_intro_data = [
    {
      team: "黑客組",
      imageSrc: "/assets/images/黑客.png",
      description:
        "我們致力於搭起學生與企業之間的橋樑，學生運用企業資源並發揮潛力回應企業命題，同時企業方更提供實習機會，能讓學生進一步實踐創意發想！而今年我們將由以下六家企業作為引導單位：Google、台積電、恩智浦半導體與文曄科技、LINE、ETtoday 東森新媒體、KKCompany Technologies",
      link: "/assets/pdfs/工作坊.pdf",
    },
    {
      team: "創客交流組",
      imageSrc: "/assets/images/創客.png",
      description:
        "由新竹市政府命題，融入新竹居民與旅遊客真實生活情境與議題，鼓勵跨領域，運用共享、共創、合作與實作，實際動手解決問題與提出方案。過程中將促進創作人才交流，體現創新創意、用戶體驗、數位科技趨勢應用的創客精神！",
      view: "hidden",
    },
  ];
  return (
    <div id="team_intro">
      <h2 className="w-fit mx-auto text-black hidden md:block pb-8 pt-12">
        組別介紹{" "}
      </h2>
      <div className="block md:hidden w-full py-8">
        <h4 className="w-fit m-auto text-black">組別介紹 </h4>
      </div>
      <div className="hidden md:container md:mx-auto md:px-[4%] md:flex md:gap-x-[5%] md:flex-row md:justify-center">
        {team_intro_data.map((data, index) => (
          <Team_each key={index} {...data} />
        ))}
      </div>
      <div className="container mx-auto flex flex-col gap-y-5 items-center md:hidden">
        {team_intro_data.map((data, index) => (
          <Team_each_m key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

const Team_each = ({ team, imageSrc, description, link, view }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <div
        className={`${
          isHovered ? "bg-[#6A747B]" : "bg-[#F5F5F6]"
        } duration-500 transition-colors relative overflow-hidden w-[75vw] sm:w-[65vw] md:w-[32rem] aspect-[20/21] border border-gray-300 rounded shadow-md`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <a href={link}>
          <div className="w-auto h-auto relative">
            <img
              src={imageSrc}
              alt="Transforming"
              className={`w-full aspect-[11/8] object-cover transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
            {isHovered && (
              <div className="absolute w-full h-full top-0 pt-[6%] px-[6%] lg:pt-[10%] lg:px-[10%] bg-gray-200  bg-opacity-80 transition-opacity duration-500">
                <p className="font-semibold text-[14px] lg:text-[16px]">
                  {description}
                </p>
              </div>
            )}
          </div>
          <div className="w-1/2 pl-[5%] py-[2%] text-[#6A747B] mt-[0.75rem] bg-white ">
            <h3 className="text-[1.5rem] xl:text-[2.5rem]">{team}</h3>
          </div>
          <div
            className={`${view} absolute flex bottom-[4%] gap-x-1 sm:gap-x-2 pl-[5%] text-base`}
          >
            <img
              src={
                isHovered
                  ? "/assets/icons/topic_arrow_w.svg"
                  : "/assets/icons/topic_arrow.svg"
              }
              alt=""
              className="w-[25%] lg:w-auto aspect-square"
            />
            <p
              className={`${
                isHovered ? "text-white" : "text-[#6A747B]"
              } text-[12px] lg:text-[16px] whitespace-nowrap`}
            >
              工作坊細節
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

const Team_each_m = ({ team, imageSrc, description, link, view }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="bg-[#6A747B]
  duration-500 transition-colors relative overflow-hidden w-[80vw] sm:w-[65vw] md:w-[32rem] border border-gray-300 rounded shadow-md"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a href={link}>
        <div className="w-auto h-auto relative">
          <img
            src={imageSrc}
            alt="Transforming"
            className="w-full aspect-[11/8] object-cover transition-opacity duration-500"
          />
        </div>
        <div>
          <div className="w-1/2 px-[5%] py-[1.25vw] text-[#6A747B] mt-[0.75rem] bg-white ">
            <h3 className=" whitespace-nowrap text-[1.2rem] sm:text-[2rem]">
              {team}
            </h3>
          </div>
          <div className="px-[5%]">
            <p className="text-[12px] sm:text-[16px] pt-[2%] font-semibold text-white pb-[5%]">
              {description}
            </p>
            <div
              className={`${view} flex py-[5%] gap-x-1 sm:gap-x-2 text-base justify-end`}
            >
              <img
                src="/assets/icons/topic_arrow_w.svg"
                alt=""
                className="w-[17%] w-auto aspect-square"
              />
              <p className="text-white text-[12px]">工作坊細節</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Team_intro;
