"use client";
import React from "react";
import "@styles/globals.css";
import SwiperCore, { Autoplay } from "swiper";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// install Swiper modules
SwiperCore.use([Autoplay]);

const Sponsor = () => {
  const cooperations = [
    {

      imgSrc: "/assets/images/新竹市政府.svg",
      size: "h-[2.25rem] md:h-[3.25rem] xl:h-[4.25rem] px-7 w-auto",
    },
    {
      imgSrc: "/assets/images/ETToday.svg",
      size: "h-[1.75rem] md:h-[2.25rem] xl:h-[3.25rem] px-7 w-auto",
      link: "https://www.ettoday.net",
    },
    {
      imgSrc: "/assets/images/Google.png",
      size: "h-[1.75rem] md:h-[2.75rem] xl:h-[3.75rem] px-7 w-auto",
      link: "http://goo.gle/TWCareers",
    },
    {
      imgSrc: "/assets/images/KKCompany.svg",
      size: "h-[3.5rem] md:h-[5rem] xl:h-[6rem] w-auto",
      link: "https://kkc.tech/kkcompany-official-site",
    },
    {
      imgSrc: "/assets/images/LINE.svg",
      size: "h-[1.25rem] md:h-[1.75rem] xl:h-[2.75rem] px-7 w-auto",
      link: "https://engineering.linecorp.com/zh-hant/search?q=TECH%20FRESH",
    },
    {
      imgSrc: "/assets/images/NXP.png",
      size: "h-[1.25rem] md:h-[1.75rem] xl:h-[2.75rem] px-7 w-auto",
      link: "https://www.facebook.com/nxpsemitaiwan?mibextid=LQQJ4d",
    },
    {
      imgSrc: "/assets/images/TSMC.svg",
      size: "h-[1.25rem] md:h-[1.75rem] xl:h-[2.75rem] px-7 w-auto",
      link: "https://www.tsmc.com/static/chinese/careers/it_career/index.html",
    },
  ];
  const cooperation_sp = [
    {

      imgSrc: "/assets/images/文曄科技.svg",
      size: "h-[3rem] md:h-[5rem] xl:h-[7rem] w-auto",
    },
  ];
  const internet = [
    {
      imgSrc: "assets/images/中華電信.jpeg",
      size: "h-[2.5rem] md:h-[4rem] xl:h-[6rem] w-auto",
    },
  ];
  const platinums = [
    {
      imgSrc: "/assets/images/台泥.svg",
      size: "h-[1.25rem] md:h-[3.5rem] xl:h-[5.75rem] w-auto px-2",
    },
    {
      imgSrc: "/assets/images/國泰.svg",
      size: "h-[1rem] md:h-[2rem] xl:h-[3.5rem] w-auto px-2",
    },
    {
      imgSrc: "/assets/images/Micron.svg",
      size: "h-[1rem] md:h-[2rem] xl:h-[3.5rem] w-auto px-2",
    },
    {
      imgSrc: "/assets/images/Akatsuki.svg",
      size: "h-[1rem] md:h-[2rem] xl:h-[3.5rem] w-auto pr-3",
    },
  ];
  const golds = [
    {
      imgSrc: "/assets/images/Logi.png",
      name: "Logitech",
      size: "h-[1rem] md:h-[2rem] xl:h-[3.5rem] w-auto",
    },
  ];
  const silvers = [
    {
      imgSrc: "/assets/images/104.svg",
      size: "h-[1rem] md:h-[2rem] xl:h-[3.5rem] w-auto px-2",
    },
    {
      imgSrc: "/assets/images/PXI.svg",
      size: "h-[1rem] md:h-[2rem] xl:h-[3.5rem] w-auto px-2",
      order: "order-last md:order-none",
    },
    {
      imgSrc: "/assets/images/CTBC.svg",
      size: "h-[1.25rem] md:h-[2.25rem] xl:h-[3.75rem] w-auto px-2",
    },
  ];
  const bronzes = [
    {
      imgSrc: "/assets/images/錦明.svg",
      size: "h-[1.5rem] md:h-[3rem] xl:h-[5rem] w-auto",
    },
  ];
  const bronzes_sp = [
    {
      imgSrc: "/assets/images/舒希.png",
      size: "h-[1.5rem] md:h-[2.75rem] xl:h-[4.5rem] w-auto px-2",
    },
    {
      imgSrc: "/assets/images/墊腳石.svg",
      size: "h-[1rem] md:h-[2rem] xl:h-[3.25rem] w-auto px-2",
      order: "order-last md:order-none",
    },
    {
      imgSrc: "/assets/images/wifiboy.jpg",
      size: "h-[1.5rem] md:h-[3rem] xl:h-[5rem] w-auto px-2",
    },
  ];
  const freshmen = [
    {
      imgSrc: "/assets/images/玩樂小子.png",
      size: "h-[2rem] md:h-[3.5rem] xl:h-[5rem] w-auto",
    },
    {
      imgSrc: "/assets/images/健人餐廚.jpeg",
      size: "h-[2.75rem] md:h-[4rem] xl:h-[7rem] w-auto",
    },
    {
      imgSrc: "/assets/images/可樂果.png",
      size: "h-[1.5rem] md:h-[3rem] xl:h-[5rem] w-auto px-3",
    },
    {
      imgSrc: "/assets/images/Epoch.jpeg",
      size: "h-[1.5rem] md:h-[3rem] xl:h-[5rem] w-auto px-3",
    },
  ];
  const sp_A = [
    {
      imgSrc: "/assets/images/WithMe.svg",
      size: "h-[1.5rem] md:h-[2.75rem] xl:h-[4.5rem] w-auto px-1",
    },
    {
      imgSrc: "/assets/images/信義房屋.png",
      size: "h-[1.75rem] md:h-[3rem] xl:h-[5rem] w-auto",
    },
    {
      imgSrc: "/assets/images/老虎牙子.jpg",
      size: "h-[1.5rem] md:h-[3rem] xl:h-[4.5rem] w-auto",
    },
    {
      imgSrc: "/assets/images/SunShing.png",
      size: "h-[1.5rem] md:h-[3rem] xl:h-[4.5rem] w-auto px-1",
    },
  ];
  const sp_B = [
    {
      imgSrc: "/assets/images/木木心予.png",
      size: "h-[1.5rem] md:h-[3rem] xl:h-[4.5rem] w-auto px-2",
    },
  ];
  const sp_C = [
    {
      imgSrc: "/assets/images/曼曼.png",
      size: "h-[2.25rem] md:h-[4.5rem] xl:h-[5.5rem] w-auto p-1",
    },
    {
      imgSrc: "/assets/images/LALAKitchen.png",
      size: "h-[1.75rem] md:h-[3.5rem] xl:h-[5rem] w-auto px-2",
    },
    {
      imgSrc: "/assets/images/RITUS.jpeg",
      size: "h-[1.75rem] md:h-[3rem] xl:h-[4.5rem] w-auto px-2",
    },
  ];
  const media = [];
  const coorganizers = [
    {
      imgSrc: "/assets/images/清大校友總會.png",
      size: "h-[2rem] md:h-[3rem] xl:h-[5rem] w-auto px-1",
    },
    {
      imgSrc: "/assets/images/教育部計畫.png",
      size: "h-[1.5rem] md:h-[2.5rem] xl:h-[4rem] w-auto px-2",
    },
    {
      imgSrc: "/assets/images/思源.png",
      size: "h-[1.5rem] md:h-[2.25rem] xl:h-[3.25rem] w-auto px-2",
    },
  ];
  const coorganizers_word = [
    {
      name: "國立清華大學電機資訊學院學士班",
    },
    {
      name: "國立陽明交通大學資訊工程學系",
    },
    {
      name: "國立清華大學資訊工程學系",
    },
  ];
  const sp_thanks = [
    { name: "國立陽明交通大學產學運籌中心" },
    { name: "大新竹社會與產業鏈結網絡計畫" },
    { name: "國立陽明交通大學電機工程學系" },
    { name: "Colde Garage" },
  ];
  const nxp_marquee = [
    { path: "/../public/assets/images/nxp-page-1.jpg" },
    { path: "/../public/assets/images/nxp-page-2.jpg" },
  ];
  const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === nxp_marquee.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div id="sponsor">
      <div className="px-[5%] py-12 bg-white">
        <Sponsor_title title="合作企業" />
        <div className="sponsor_box">
          {cooperations.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="特別合作企業" />
        <div className="sponsor_box">
          {cooperation_sp.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_title title="網路贊助" />
        <div className="sponsor_box">
          {internet.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_title title="贊助企業" />
        <Sponsor_subtitle subtitle="PLATINUM" />
        <div className="sponsor_box">
          {platinums.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="GOLD" />
        <div className="sponsor_box">
          {golds.map((gold, index) => {
            return <Sponsor_each key={index} cooperation={gold} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="SILVER" />
        <div className="sponsor_box">
          {silvers.map((silver, index) => {
            return <Sponsor_each key={index} cooperation={silver} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="BRONZE" />
        <div className="sponsor_box">
          {bronzes.map((bronze, index) => {
            return <Sponsor_each key={index} cooperation={bronze} />;
          })}
        </div>
        <Sponsor_title title="特殊贊助" />
        <Sponsor_subtitle subtitle="BRONZE" />
        <div className="sponsor_box">
          {bronzes_sp.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="FRESHMAN" />
        <div className="sponsor_box">
          {freshmen.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <div className="flex w-full justify-center flex-row gap-[0.5rem] md:gap-[2rem] flex-wrap">
          <div>
            {" "}
            <Sponsor_subtitle subtitle="前期系列活動A級" />
            <div className="sponsor_box_sm">
              {sp_A.map((cooperation, index) => {
                return <Sponsor_each key={index} cooperation={cooperation} />;
              })}
            </div>
          </div>
          <div>
            {" "}
            <Sponsor_subtitle subtitle="前期系列活動B級" />
            <div className="sponsor_box_sm">
              {sp_B.map((cooperation, index) => {
                return <Sponsor_each key={index} cooperation={cooperation} />;
              })}
            </div>
          </div>
          <div>
            {" "}
            <Sponsor_subtitle subtitle="前期系列活動C級" />
            <div className="sponsor_box_sm">
              {sp_C.map((cooperation, index) => {
                return <Sponsor_each key={index} cooperation={cooperation} />;
              })}
            </div>
          </div>
        </div>
        <Sponsor_title title="媒體合作名單" />
        <Sponsor_title title="協辦單位" />
        <div className="sponsor_box">
          {coorganizers.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <div className="sponsor_box_word">
          {coorganizers_word.map((cooperation, index) => {
            return <Sponsor_each_word key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_title title="特別感謝" />
        <div className="sponsor_box_word">
          {sp_thanks.map((cooperation, index) => {
            return <Sponsor_each_word key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_title title="企業廣告" />
        <div className="flex justify-center">
          <a
            href="https://www.nxp.com"
            target="_blank"
            className="w-[80%] md:w-[70%] lg:w-[60%] my-[1%] block "
          >
            <div className="w-full overflow-hidden ">
              <div
                className="ease-in-out duration-1000 whitespace-nowrap"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {nxp_marquee.map((item, index) => (
                  <img
                    src={item.path}
                    className="inline-block w-full h-auto "
                    key={index}
                    alt={'nxp'}
                  ></img>
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Sponsor_title = ({ title }) => {
  return (
    <>
      <div className="flex items-center">
        <div className="grow w-full border-t border-black"></div>
        <h3 className="text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] whitespace-nowrap flex-shrink w-1/2 px-[3%] py-6 md:py-8 xl:py-12 text-[#6A747B]">
          {title}
        </h3>
        <div className="grow w-full border-t border-black"></div>
      </div>
    </>
  );
};

const Sponsor_subtitle = ({ subtitle }) => {
  return (
    <>
      <p className="text-[0.675rem] md:text-base xl:text-xl font-medium text-center tracking-[0.15em]">
        {subtitle}
      </p>
    </>
  );
};

const Sponsor_each = ({ cooperation }) => {
  return (
    <>
      <a href={cooperation.link}>
        <div
          className={`${cooperation.order} flex items-center h-[3rem] md:h-[5rem] xl:h-[6.75rem] bg-white`}
        >
          <Image width={300} height={200} className={cooperation.size} src={cooperation.imgSrc} alt="test" />
        </div>
      </a>
    </>
  );
};

const Sponsor_each_word = ({ cooperation }) => {
  return (
    <>
      <div className={`${cooperation.order} flex items-center`}>
        <p className="text-[0.675rem] md:text-base xl:text-xl font-normal text-center">
          {cooperation.name}
        </p>
      </div>
    </>
  );
};

export default Sponsor;
