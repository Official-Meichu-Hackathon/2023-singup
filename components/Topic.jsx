"use client";
import { useState, useRef, useEffect } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Topic() {
  let [categories] = useState({
    創客交流組: [
      {
        id: 1,
        company: "新竹市政府",
        logo: "/assets/images/新竹市政府.svg",
        link: "/assets/pdfs/新竹市政府_2023.pdf",
        topic: "新竹科技Ｘ文創產業",
        extra: "w-[60%] aspect-auto",
      },
    ],
    黑客組: [
      {
        id: 1,
        company: "ETtoday東森新媒體",
        logo: "/assets/images/ETToday.svg",
        link: "/assets/pdfs/ETtoday_2023.pdf",
        topic: "利用人工智能輔助新聞編輯提升不重覆訪客數、瀏覽數、翻頁數",
        extra: "w-[75%]",
      },
      {
        id: 2,
        company: "Google",
        logo: "/assets/images/Google.svg",
        link: "/assets/pdfs/Google_2023.pdf",
        topic: "Supportive Phone for all people",
        extra: "w-[50%]",
      },
      {
        id: 3,
        company: "台灣積體電路有限公司",
        logo: "/assets/images/TSMC.svg",
        link: "/assets/pdfs/TSMC_2023.pdf",
        topic: "NULL",
        extra: "w-[55%]",
      },
      {
        id: 4,
        company: "LINE",
        logo: "/assets/images/LINE.svg",
        link: "/assets/pdfs/LINE_2023.pdf",
        topic: "透過生成式 AI 來打造學生相關應用的 LINE Bot 聊天機器人",
        extra: "w-[35%]",
      },
      {
        id: 5,
        company: "恩智浦半導體與文曄科技",
        logo: "/assets/images/NXP.svg",
        logo2: "/assets/images/文曄科技.svg",
        link: "/assets/pdfs/NXP_2023.pdf",
        topic: "智慧應用改善人類生活並達到永續發展",
        extra: "w-[45%]",
        extra2: "w-[23%] pr-6",
      },
      {
        id: 6,
        company: "KKCompany Technologies",
        logo: "/assets/images/KKCompany.svg",
        link: "/assets/pdfs/KKCompany_2023.pdf",
        topic:
          "結合 BlendVision Streaming & Interactive API，打造深富創意的影音應用",
        extra: "w-[85%]",
      },
    ],
  });
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);
  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="container px-[5%] max-w-full py-16">
      <Tab.Group>
        <div className="relative mb-3">
          <Tab.List className="relative flex ">
            {Object.keys(categories).map((category, idx) => (
              <Tab
                key={category}
                className="w-fit mx-3 pb-3 font-medium leading-5 text-black focus:outline-none"
                ref={(el) => (tabsRef.current[idx] = el)}
                onClick={() => setActiveTabIndex(idx)}
              >
                <h3 className="text-[1rem] sm:text-[1.5rem] md:text-[2.5rem] text-center whitespace-nowrap">
                  {category}
                </h3>
              </Tab>
            ))}
          </Tab.List>
          <span
            className="absolute z-10 bg-[#F3CD71] bottom-0 rounded-sm block h-2 transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
          <span className="absolute w-full bottom-[0.2rem] block h-[0.0625rem] bg-black" />
        </div>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className="py-3 px-0 focus:outline-none">
              {/* Desktop */}
              <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-7 container mx-auto justify-center flex-col">
                {posts.map((post) => (
                  <Topic_each key={post.id} post={post} />
                ))}
              </div>
              {/* Mobile */}
              <div className="md:hidden flex container mx-auto justify-center max-w-sm flex-col gap-y-10">
                {posts.map((post) => (
                  <Topic_each_m key={post.id} post={post} />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

const Topic_each = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div id="contest">
      <a href={post.link}>
        <div
          key={post.id}
          className="relative border-[0.5px] border-[#6A747B]"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="flex justify-center gap-x-5 bg-white aspect-[19/8]">
            <img src={post.logo} className={`${post.extra}`} />
            {post.logo2 && (
              <img src={post.logo2} className={`${post.extra2}`} />
            )}
          </div>
          <div
            className={`${
              isHovered && "topic_box_hover"
            } p-[1.25rem] xl:p-[1.5rem] flex flex-col gap-y-[1rem] topic_box h-[11rem] lg:h-[12rem] 2xl:h-[13rem] relative`}
          >
            <h3 className={`${isHovered && "text-white"} text-base xl:text-xl`}>
              {post.company}
            </h3>
            <p
              className={`${
                isHovered && "text-white"
              } text-sm xl:text-base font-light`}
            >
              主題：{post.topic}
            </p>
            <div className="absolute bottom-6 right-6 flex w-full items-center justify-end gap-x-1">
              <img
                src={
                  isHovered
                    ? "/assets/icons/download_w.svg"
                    : "/assets/icons/download.svg"
                }
              />
              <p
                className={`${
                  isHovered && "text-white"
                } text-sm xl:text-base text-[#6A747B] `}
              >
                下載PDF
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
const Topic_each_m = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      <a href={post.link}>
        <div
          key={post.id}
          className="relative border-[0.5px] border-[#6A747B]"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="flex justify-center gap-x-4 bg-white aspect-[19/8]">
            <img src={post.logo} className={`${post.extra}`} />
            {post.logo2 && (
              <img src={post.logo2} className={`${post.extra2}`} />
            )}
          </div>
          <div
            className={`${
              isHovered && "topic_box_hover"
            } p-[1rem] flex flex-col gap-y-[0.25rem] bg-[#EAEAEC] topic_box h-[9rem] relative`}
          >
            <h3 className={`${isHovered && "text-white"} text-[0.75rem]`}>
              {post.company}
            </h3>

            <p
              className={`${
                isHovered && "text-white"
              } text-[0.625rem] font-light`}
            >
              主題：{post.topic}
            </p>
            <div className="absolute bottom-5 right-5 flex w-full items-center justify-end gap-x-1">
              <img
                src={
                  isHovered
                    ? "/assets/icons/download_w.svg"
                    : "/assets/icons/download.svg"
                }
              />
              <p
                className={`${
                  isHovered && "text-white"
                } text-sm xl:text-base text-[#6A747B] `}
              >
                下載PDF
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
