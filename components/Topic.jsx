"use client";
import React, { useState } from "react";
import Image from "next/image";
//import icon_src from "../public/assets/icons/topic_arrow.svg";
import TSMC from "../public/assets/images/tsmc_logo.png";

const Topic = () => {
  const [isHover, setIsHover] = useState(false);
  const [more, setMore] = useState("查看更多");
  const [icon_src, setIcon_src] = useState("/assets/icons/topic_arrow.svg");
  // const [style, setStyle] = useState("bg-yellow-300");
  const handleMouseEnter = () => {
    setIsHover(true);
    setMore("檔案下載");
    setIcon_src("/assets/icons/topic_download.svg");
    //setStyle("bg-orange-400");
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setMore("查看更多");
    setIcon_src("/assets/icons/topic_arrow.svg");
    //setStyle("bg-yellow-300");
  };
  return (
    <>
      <div
        className="group w-80 h-72 bg-topic-gray flex flex-col pl-7"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="group-hover:hidden basis-1/3 flex flex-col justify-center">
          <p className="leading-8">黑客組</p>
          <p className="text-xl">台灣積體電路有限公司</p>
        </div>
        <Image
          className="group-hover:hidden basis-1/3 w-2/5"
          src={TSMC}
          alt="TSMC"
        />
        <div className="hidden group-hover:flex basis-2/3 mt-16 pr-7">
          <p className="text-base font-bold">
            主題：發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！
          </p>
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
    </>
  );
};

export default Topic;
