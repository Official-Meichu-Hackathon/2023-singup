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
        logo: "/assets/images/TSMC.svg",
        link: "https://www.google.com",
        topic: "發揮公私協力，打造包容丶靭性丶永續丶安全的智慧新竹！",
        description:
          "新冠疫情丶氣候變遷丶快速變化的政經局勢，刺激著社會及青年世代不斷地反思，聯合國「2030永續發展目標」（Sustainable Development Goals, SDG ），SDGs 目標 11 是「建構具包容、安全、韌性及永續特質的城市與鄉村」，世界各大城市也紛紛朝此目標努力！ 創客交流組期望報名團隊能夠以永續發展目標為題，洞察市民生活、校園生活中的關鍵議題，融入公私協力精神，發想創意並提出解決方案，共同合作打造包容丶靭性丶永續丶安全的智慧新竹！ ",
        extra: null,
      },
    ],
    黑客組: [
      {
        id: 1,
        company: "ETtoday東森新媒體",
        logo: "/assets/images/ETToday.svg",
        logo2: null,
        link: "https://youtu.be/4Z7y27pHhXw?si=BKz8VksSzwNOS1HW",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
        extra: null,
      },
      {
        id: 2,
        company: "Google",
        logo: "/assets/images/Google.svg",
        logo2: null,
        link: "https://youtu.be/dQw4w9WgXcQ?si=VvSBT3865TfWIFQw",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
        extra: null,
      },
      {
        id: 3,
        company: "台灣積體電路有限公司",
        logo: "/assets/images/TSMC.svg",
        logo2: null,
        link: "https://youtu.be/GqNB_mZGoxY?si=cACw_TMXyvjAtTXM",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
        extra: null,
      },
      {
        id: 4,
        company: "LINE",
        logo: "/assets/images/LINE.svg",
        logo2: null,
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
        extra: null,
      },
      {
        id: 5,
        company: "恩智浦半導體與文曄科技",
        logo: "/assets/images/NXP.svg",
        logo2: "/assets/images/文曄科技.svg",
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
        extra: null,
      },
      {
        id: 6,
        company: "KKCompany Technologies",
        logo: "/assets/images/KKCompany.svg",
        logo2: null,
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
        extra: null,
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
    <div className="container mx-auto max-w-full 2xl:max-w-[90%] py-16 px-12">
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
            className="absolute z-10 bottom-0 bg-[#F3CD71] rounded-sm block h-2 transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
          <span className="absolute w-full bottom-[0.2rem] block h-[0.0625rem] bg-black" />
        </div>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className="py-3 px-0 focus:outline-none">
              <ul className="divide-y divide-[#6A747B] hidden md:block">
                {posts.map((post) => (
                  <li key={post.id} className="relative px-1">
                    <ul className="pt-6 pb-2 flex items-end gap-x-2">
                      {" "}
                      <h3 className="">{post.company}</h3>
                      <a
                        className="flex pl-2 items-center gap-x-3"
                        href={post.link}
                      >
                        <img
                          src="/assets/icons/download.svg"
                          className="w-5 aspect-square"
                        />
                        <p className="text-end text-[#6A747B]">下載PDF</p>
                      </a>
                    </ul>
                    <ul className="flex flex-row gap-x-4">
                      <img src={post.logo} className="w-auto aspect-square" />
                      {post.logo2 && (
                        <img
                          src={post.logo2}
                          className="w-auto aspect-square"
                        />
                      )}
                    </ul>
                    <ul className="py-2 font-light">
                      <p>主題：{post.topic}</p>
                    </ul>
                    <ul className="pb-6 font-light">
                      <p>說明：{post.description}</p>
                    </ul>
                  </li>
                ))}
              </ul>
              <div className="md:hidden flex container mx-auto justify-center max-w-sm flex-col gap-y-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative border-[0.5px] border-[#6A747B] w-full"
                  >
                    <div className="flex justify-center gap-x-4 bg-white aspect-[19/8]">
                      <img
                        src={post.logo}
                        className="w-2/5 sm:w-1/3 aspect-square"
                      />
                      {post.logo2 && (
                        <img
                          src={post.logo2}
                          className="w-2/5 sm:w-1/3 aspect-square"
                        />
                      )}
                    </div>
                    <div className="p-[1rem] flex flex-col gap-y-[0.25rem] bg-[#EAEAEC]">
                      <h3 className="text-[0.75rem]">{post.company}</h3>

                      <p className="text-[0.625rem] font-light">
                        主題：{post.topic}
                      </p>
                      <a
                        className="flex pt-[1rem] items-center gap-x-1"
                        href={post.link}
                      >
                        <img
                          src="/assets/icons/download.svg"
                          className="w-auto aspect-square"
                        />
                        <p className="text-[0.625rem] text-[#6A747B]">
                          下載PDF
                        </p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

/*
          <Tab.List className="relative flex border-b pb-[] border-black ">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-fit mx-3 pb-1 font-medium leading-5 text-black",
                    "focus:outline-none",
                    selected
                      ? "border-b-4 border-orange-500"
                      : "border-b-4 border-transparent"
                  )
                }
              >
                <h3 className="text-center whitespace-nowrap">{category}</h3>
              </Tab>
            ))}
          </Tab.List>      

<div class="absolute top-[4.73rem] shrink w-full border-b border-black"></div>*/