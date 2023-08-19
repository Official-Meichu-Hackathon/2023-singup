"use client";
import { useState, useRef, useEffect } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Topic_new() {
  let [categories] = useState({
    黑客組: [
      {
        id: 1,
        company: "Google",
        logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
      },
      {
        id: 2,
        company: "Google",
        logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
      },
      {
        id: 3,
        company: "Google",
        logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
      },
      {
        id: 4,
        company: "Google",
        logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
      },
      {
        id: 5,
        company: "Google",
        logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
      },
      {
        id: 6,
        company: "Google",
        logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
      },
    ],
    創客交流組: [
      {
        id: 1,
        company: "Google",
        logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        link: "www.google.com",
        topic: "Safety Helmet Wearing Detection",
        description:
          "這次題目期望能建立準確偵測員工是否有配戴工地帽的AI模型，同時，串接雲端應用程式，確保工地安全，當AI模型判別出員工在危險區域並未配戴安全帽時，系統自動做出及時的action或alert。 此外，參賽者也可以結合軟硬體，做出額外的延伸應用(本組不提供硬體配件，若有需要請參賽者自行準備)。",
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
    <div className="w-full py-16 px-12">
      <Tab.Group>
        <div className="relative">
          <Tab.List className="relative flex ">
            {Object.keys(categories).map((category, idx) => (
              <Tab
                key={category}
                className="w-fit mx-3 pb-3 font-medium leading-5 text-black focus:outline-none"
                ref={(el) => (tabsRef.current[idx] = el)}
                onClick={() => setActiveTabIndex(idx)}
              >
                <h3 className="text-center whitespace-nowrap">{category}</h3>
              </Tab>
            ))}
          </Tab.List>
          <span
            className="absolute z-10 bottom-0 block h-2 bg-[#F3CD71] transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
          <span className="absolute w-full bottom-[0.2rem] block h-[0.0625rem] bg-black " />
        </div>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className="rounded-xl bg-white p-3 focus:outline-none 2"
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.company}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.topic}</li>
                    </ul>
                  </li>
                ))}
              </ul>
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
