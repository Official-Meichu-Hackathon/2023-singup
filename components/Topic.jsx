"use client";
import React, { useState } from "react";
import Image from "next/image";
//import icon_src from "../public/assets/icons/topic_arrow.svg";
import TSMC from "../public/assets/images/tsmc_logo.png";

const Topic = () => {
  const contents = [
    {
      type: "黑客組",
      company: "台積電",
      topic: "主題：發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！",
      logo: { TSMC },
      download: "www.google.com",
    },
    {
      type: "黑客組",
      company: "台積電",
      topic: "發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！",
      logo: { TSMC },
      download: "www.google.com",
    },
    {
      type: "黑客組",
      company: "台積電",
      topic: "發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！",
      logo: { TSMC },
      download: "www.google.com",
    },
    {
      type: "黑客組",
      company: "台積電",
      topic: "發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！",
      logo: { TSMC },
      download: "www.google.com",
    },
    {
      type: "黑客組",
      company: "台積電",
      topic: "發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！",
      logo: { TSMC },
      download: "www.google.com",
    },
    {
      type: "黑客組",
      company: "台積電",
      topic: "發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！",
      logo: { TSMC },
      download: "www.google.com",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2  place-items-center p-[5vw] gap-6">
        {contents.map((contents, index) => {
          return <SubTopic key={index} contents={contents} />;
        })}
      </div>
    </>
  );
};

const SubTopic = ({ contents }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex flex-col w-[80vw] max-w-[21.7rem] lg:w-[60vw] aspect-[5/4] bg-topic-gray pl-8"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`basis-1/3 flex flex-col justify-center pt-5 ${
          isHover && "hidden"
        }`}
      >
        <p className="leading-6">{contents.type}</p>
        <p className="text-xl">{contents.company}</p>
      </div>
      <div className={`basis-1/3 ${isHover && "hidden"}`}>
        <Image
          className="w-24"
          src={TSMC}
          alt="tsmc"
          width={100}
          height={100}
        />
      </div>
      <div
        className={`basis-2/3 pt-[20%] pr-8 ${isHover ? "block" : "hidden"}`}
      >
        <p className="text-base font-bold">{contents.topic}</p>
      </div>
      <div className="grid place-content-end basis-1/3 pb-6 pr-8">
        <div className="flex flex-row gap-x-2.5 justify-center">
          <Image
            className="animate-bounce w-6 h-6 place-self-center"
            src={
              isHover
                ? "/assets/icons/topic_download.svg"
                : "/assets/icons/topic_arrow.svg"
            }
            alt="more"
            width={21}
            height={21}
          />
          <p className="text-base opacity-70">
            {isHover ? "檔案下載" : "查看更多"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topic;

/*
      <div className="flex flex-col items-center md:grid md:grid-cols-2 md:content-evenly md:p-[5vw] gap-5">
        {contents.map((contents, index) => {
          return <SubTopic key={index} contents={contents} />;
        })}
      </div>
*/
