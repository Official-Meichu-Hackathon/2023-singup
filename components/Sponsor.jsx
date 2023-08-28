import React from "react";
import "@styles/globals.css";

const Sponsor = () => {
  const cooperations = [
    {
      imgSrc: "/assets/images/sponsors/新竹市政府.svg",
      size: "max-h-full",
    },
    {
      imgSrc: "/assets/images/sponsors/Google.svg",
      size: "max-h-[60%] px-5",
    },
    {
      imgSrc: "/assets/images/sponsors/TSMC.svg",
      size: "max-h-[60%] xl:max-h-full px-5",
    },
    {
      imgSrc: "/assets/images/sponsors/LINE.svg",
      size: "max-h-[50%] xl:max-h-full px-5",
    },

    {
      imgSrc: "/assets/images/sponsors/KKCompany.svg",
      size: "max-h-[60%] pr-[0.45rem] md:pr-[0.8rem] xl:pr-[1.2rem]",
    },
    {
      imgSrc: "/assets/images/sponsors/NXP.svg",
      size: "max-h-[90%]",
    },
    {
      imgSrc: "/assets/images/sponsors/ETToday.svg",
      size: "max-h-[80%] xl:max-h-[60%] pt-1 px-3",
    },
  ];
  const cooperation_sp = [
    {
      imgSrc: "/assets/images/sponsors/文曄科技.svg",
      size: "max-h-full p-1",
    },
  ];
  const internet = [
    { imgSrc: "assets/images/sponsors/中華電信.svg", size: "max-h-full" },
  ];
  const platinums = [
    {
      imgSrc: "/assets/images/sponsors/台泥.svg",
      size: "max-h-full p-2 xl:p-3",
    },
    {
      imgSrc: "/assets/images/sponsors/國泰.svg",
      size: "max-h-[60%] xl:max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/micron.svg",
      size: "max-h-[60%] xl:max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/Akatsuki.svg",
      size: "max-h-[60%] xl:max-h-full pr-2",
    },
  ];
  const golds = [
    {
      imgSrc: "/assets/images/logi_logo.png",
      name: "Logitech",
      size: "max-h-[60%] xl:max-h-[40%] px-5",
    },
  ];
  const silvers = [
    {
      imgSrc: "/assets/images/sponsors/104.svg",
      size: "max-h-[60%] xl:max-h-full px-2",
    },
    {
      imgSrc: "/assets/images/sponsors/PXI.svg",
      size: "max-h-[60%] xl:max-h-full px-3",
      order: "order-last md:order-none",
    },
    {
      imgSrc: "/assets/images/sponsors/CTBC.svg",
      size: "max-h-[65%] xl:max-h-full px-3",
    },
  ];
  const bronzes = [
    {
      imgSrc: "/assets/images/sponsors/錦明.svg",
      size: "max-h-[80%] xl:max-h-full px-3",
    },
  ];
  const bronzes_sp = [
    {
      imgSrc: "/assets/images/sponsors/舒希.svg",
      size: "max-h-[60%] xl:max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/墊腳石.svg",
      size: "max-h-[35%] xl:max-h-full px-3",
      order: "order-last md:order-none",
    },
    {
      imgSrc: "/assets/images/sponsors/WifiBoy.svg",
      size: "max-h-[60%] xl:max-h-full px-3",
    },
  ];
  const freshmen = [
    { imgSrc: "/assets/images/sponsors/玩樂小子.svg", size: "max-h-full p-3" },
    {
      imgSrc: "/assets/images/sponsors/健人餐廚.svg",
      size: "max-h-[60%] xl:max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/可樂果.svg",
      size: "max-h-[60%] xl:max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/Epoch.svg",
      size: "max-h-[60%] xl:max-h-full px-2",
    },
  ];
  const sp_A = [
    {
      imgSrc: "/assets/images/sponsors/WithMe.svg",
      size: "max-h-full p-2 md:p-3",
    },
    {
      imgSrc: "/assets/images/sponsors/信義房屋.svg",
      size: "max-h-[70%] xl:max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/老虎牙子.svg",
      size: "max-h-[70%] xl:max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/SunShing.svg",
      size: "max-h-[70%] xl:max-h-full px-2",
    },
  ];
  const sp_B = [
    {
      imgSrc: "/assets/images/sponsors/木木心予.svg",
      size: "max-h-[90%] xl:max-h-full p-3",
    },
  ];
  const sp_C = [
    {
      imgSrc: "/assets/images/sponsors/曼曼餵魚.svg",
      size: "max-h-full p-2 p-3",
    },
    {
      imgSrc: "/assets/images/sponsors/LALAKitchen.svg",
      size: "max-h-[70%] xl:max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/RITUS.svg",
      size: "max-h-[65%] xl:max-h-full px-3",
    },
  ];
  const media = [];
  const coorganizers = [
    {
      imgSrc: "/assets/images/sponsors/清大校友總會.svg",
      size: "max-h-[80%] p-1 xl:p-3",
    },
    {
      imgSrc: "/assets/images/sponsors/教育部計畫.svg",
      size: "max-h-[80%] p-1 xl:p-3",
    },
    {
      imgSrc: "/assets/images/sponsors/思源.svg",
      size: "max-h-[45%] px-2",
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
    { name: "大新竹社會與產業連結網路計畫" },
    { name: "國立陽明交通大學電機工程學系" },
    { name: "Colde Garage" },
  ];
  return (
    <>
      <div className="mx-[5%]">
        <Sponsor_title title="合作企業" />
        <div className="sponsor_box">
          {cooperations.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="特殊合作單位" />
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
        <Sponsor_subtitle subtitle="Plantium" />
        <div className="sponsor_box">
          {platinums.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="Gold" />
        <div className="sponsor_box">
          {golds.map((gold, index) => {
            return <Sponsor_each key={index} cooperation={gold} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="Silver" />
        <div className="sponsor_box">
          {silvers.map((silver, index) => {
            return <Sponsor_each key={index} cooperation={silver} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="Bronze" />
        <div className="sponsor_box">
          {bronzes.map((bronze, index) => {
            return <Sponsor_each key={index} cooperation={bronze} />;
          })}
        </div>
        <Sponsor_title title="特殊贊助" />
        <Sponsor_subtitle subtitle="Bronze" />
        <div className="sponsor_box">
          {bronzes_sp.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_subtitle subtitle="Freshmen" />
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
        <Sponsor_title title="這是廣告" />
        <div className="flex justify-center">
          <a
            href="https://www.nxp.com"
            target="_blank"
            className="w-[80%] md:w-[70%] lg:w-[60%] my-[1%] block"
          >
            <object
              data="/assets/images/sponsor_nxp.svg"
              type="image/svg+xml"
              className="w-full rounded-[1.25rem] pointer-events-none"
            ></object>
          </a>
        </div>
      </div>
    </>
  );
};

const Sponsor_title = ({ title }) => {
  return (
    <>
      <div class="flex items-center">
        <div class="grow w-full border-t border-black"></div>
        <h3 class="text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] whitespace-nowrap flex-shrink w-1/2 px-[3%] py-6 md:py-8 xl:py-12 text-[#6A747B]">
          {title}
        </h3>
        <div class="grow w-full border-t border-black"></div>
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
      <div
        className={`${cooperation.order} flex items-center h-[3rem] md:h-[5rem] xl:h-[6.75rem] bg-white`}
      >
        <img className={cooperation.size} src={cooperation.imgSrc} alt="" />
      </div>
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
