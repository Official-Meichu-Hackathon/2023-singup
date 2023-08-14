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
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 p-36 gap-5">
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
      className="relative max-w-[21.7rem] max-h-[17.3rem] aspect-[5/4] bg-topic-gray flex flex-col pl-8"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`flex-1 flex flex-col justify-center pt-5 ${
          isHover && "hidden"
        }`}
      >
        <p className="leading-6">{contents.type}</p>
        <p className="text-xl">{contents.company}</p>
      </div>
      <div className={`flex ${isHover && "hidden"}`}>
        <Image
          className="w-24 py-5"
          src={TSMC}
          alt="tsmc"
          width={100}
          height={100}
        />
      </div>
      <div
        className={`absolute inset-0 p-8 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-base font-bold">{contents.topic}</p>
      </div>
      <div className="flex-1 grid place-items-end pb-6 pr-8">
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
<div
className="group max-w-[21.7rem] max-h-[17.3rem] aspect-[5/4] bg-topic-gray flex flex-col pl-8"
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
<div className="group-hover:hidden basis-1/3 flex flex-col justify-center">
  <p className="leading-8">{contents.type}</p>
  <p className="text-xl">{contents.company}</p>
</div>
<Image
  className="basis-1/3 group-hover:hidden"
  src={TSMC}
  alt="tsmc"
  width={100}
  height={100}
/>
<div className="hidden group-hover:block basis-2/3 pt-16 pr-8">
  <p className="text-base font-bold">{contents.topic}</p>
</div>
<div className="basis-1/3 grid place-items-end pb-6 pr-8">
  <div className="flex flex-row gap-x-2.5 justify-center">
    <Image
      className="animate-bounce w-6 h-6 place-self-center"
      src={icon_src}
      alt="more"
      width={21}
      height={21}
    />
    <p className="text-base opacity-70">{more}</p>
  </div>
</div>
</div>
*/
