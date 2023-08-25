import React from "react";

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
      size: "max-h-full px-5",
    },
    {
      imgSrc: "/assets/images/sponsors/LINE.svg",
      size: "max-h-full px-5",
    },

    {
      imgSrc: "/assets/images/sponsors/KKCompany.svg",
      size: "max-h-[60%] pr-[1.2rem]",
    },
    {
      imgSrc: "/assets/images/sponsors/NXP.svg",
      size: "max-h-[90%]",
    },
    {
      imgSrc: "/assets/images/sponsors/ETToday.svg",
      size: "max-h-[60%] px-3",
    },
  ];
  const cooperation_sp = [
    {
      imgSrc: "/assets/images/sponsors/文曄科技.svg",
      size: "max-h-full",
    },
  ];
  const internet = [
    { imgSrc: "assets/images/sponsors/中華電信.svg", size: "max-h-full" },
  ];
  const platinums = [
    { imgSrc: "/assets/images/sponsors/台泥.svg", size: "max-h-full p-3" },
    { imgSrc: "/assets/images/sponsors/國泰.svg", size: "max-h-full px-3" },
    { imgSrc: "/assets/images/sponsors/micron.svg", size: "max-h-full px-3" },
    { imgSrc: "/assets/images/sponsors/Akatsuki.svg", size: "max-h-full px-2" },
  ];
  const golds = [
    {
      imgSrc: "/assets/images/logi_logo.png",
      name: "Logitech",
      size: "max-h-[40%] px-5",
    },
  ];
  const silvers = [
    {
      imgSrc: "/assets/images/sponsors/104.svg",
      size: "max-h-full px-2",
    },
    {
      imgSrc: "/assets/images/sponsors/PXI.svg",
      size: "max-h-ful px-3",
      order: "order-last md:order-none",
    },
    {
      imgSrc: "/assets/images/sponsors/CTBC.svg",
      size: "max-h-full px-3",
    },
  ];
  const bronzes = [
    {
      imgSrc: "/assets/images/sponsors/錦明.svg",
      size: "max-h-full px-3",
    },
  ];
  const bronzes_sp = [
    {
      imgSrc: "/assets/images/sponsors/舒希.svg",
      size: "max-h-full px-3",
    },
    {
      imgSrc: "/assets/images/sponsors/墊腳石.svg",
      size: "max-h-full px-3",
      order: "order-last md:order-none",
    },
    {
      imgSrc: "/assets/images/sponsors/WifiBoy.svg",
      size: "max-h-full px-3",
    },
  ];
  const freshmen = [
    { imgSrc: "/assets/images/sponsors/玩樂小子.svg", size: "max-h-full p-3" },
    { imgSrc: "/assets/images/sponsors/健人餐廚.svg", size: "max-h-full px-3" },
    { imgSrc: "/assets/images/sponsors/可樂果.svg", size: "max-h-full px-3" },
    { imgSrc: "/assets/images/sponsors/Epoch.svg", size: "max-h-full px-2" },
  ];
  const sp_A = [
    { imgSrc: "/assets/images/sponsors/WithMe.svg", size: "max-h-full p-3" },
    { imgSrc: "/assets/images/sponsors/信義房屋.svg", size: "max-h-full px-3" },
    { imgSrc: "/assets/images/sponsors/老虎牙子.svg", size: "max-h-full px-3" },
    { imgSrc: "/assets/images/sponsors/SunShing.svg", size: "max-h-full px-2" },
  ];
  const sp_B = [
    { imgSrc: "/assets/images/sponsors/木木心予.svg", size: "max-h-full p-3" },
  ];
  const sp_C = [
    { imgSrc: "/assets/images/sponsors/曼曼餵魚.svg", size: "max-h-full p-3" },
    {
      imgSrc: "/assets/images/sponsors/LALAKitchen.svg",
      size: "max-h-full px-3",
    },
    { imgSrc: "/assets/images/sponsors/RITUS.svg", size: "max-h-full px-3" },
  ];
  return (
    <>
      <div className="mx-[5%]">
        <Sponsor_title title="合作企業" />
        <div className="flex w-full flex-wrap justify-center gap-[4rem] px-24 ">
          {cooperations.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <p className="text-xl w-auto font-bold text-center py-[2%]">
          特殊合作單位
        </p>
        <div className="flex w-full flex-wrap justify-center gap-[4rem] px-24">
          {cooperation_sp.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_title title="網路贊助" />
        <div className="flex w-full flex-wrap justify-center gap-[4rem] px-24">
          {internet.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <Sponsor_title title="贊助企業" />
        <p className="text-xl font-bold text-center tracking-[0.15em]">
          Platinum
        </p>
        <div className="flex w-full py-6 flex-wrap justify-center gap-[4rem] px-24">
          {platinums.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <p className="text-xl font-bold text-center tracking-[0.15em]">Gold</p>
        <div className="flex w-full py-6 flex-wrap justify-center gap-[4rem] px-24">
          {golds.map((gold, index) => {
            return <Sponsor_each key={index} cooperation={gold} />;
          })}
        </div>
        <p className="text-xl font-bold text-center tracking-[0.15em]">
          Silver
        </p>
        <div className="flex w-full py-6 flex-wrap justify-center gap-[4rem] px-24">
          {silvers.map((silver, index) => {
            return <Sponsor_each key={index} cooperation={silver} />;
          })}
        </div>
        <p className="text-xl font-bold text-center tracking-[0.15em]">
          Bronze
        </p>
        <div className="flex w-full py-6 flex-wrap justify-center gap-[4rem] px-24">
          {bronzes.map((bronze, index) => {
            return <Sponsor_each key={index} cooperation={bronze} />;
          })}
        </div>
        <Sponsor_title title="特殊贊助" />
        <p className="text-xl font-bold text-center tracking-[0.15em]">
          Bronze
        </p>
        <div className="flex w-full py-6 flex-wrap justify-center gap-[4rem] px-24">
          {bronzes_sp.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <p className="text-xl font-bold text-center tracking-[0.15em] ">
          Freshmen
        </p>
        <div className="flex w-full py-6 flex-wrap justify-center gap-[4rem] px-24">
          {freshmen.map((cooperation, index) => {
            return <Sponsor_each key={index} cooperation={cooperation} />;
          })}
        </div>
        <div className="flex w-full justify-center flex-row gap-[2rem] flex-wrap">
          <div>
            {" "}
            <p className="text-xl font-bold text-center tracking-[0.15em] ">
              前期系列活動A級
            </p>
            <div className="flex w-full py-6 flex-wrap justify-center gap-[1rem]">
              {sp_A.map((cooperation, index) => {
                return <Sponsor_each key={index} cooperation={cooperation} />;
              })}
            </div>
          </div>
          <div>
            {" "}
            <p className="text-xl font-bold text-center tracking-[0.15em] ">
              前期系列活動B級
            </p>
            <div className="flex w-full py-6 flex-wrap justify-center gap-[1rem]">
              {sp_B.map((cooperation, index) => {
                return <Sponsor_each key={index} cooperation={cooperation} />;
              })}
            </div>
          </div>
          <div>
            {" "}
            <p className="text-xl font-bold text-center tracking-[0.15em] ">
              前期系列活動C級
            </p>
            <div className="flex w-full py-6 flex-wrap justify-center gap-[1rem]">
              {sp_C.map((cooperation, index) => {
                return <Sponsor_each key={index} cooperation={cooperation} />;
              })}
            </div>
          </div>
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
        <h3 class="sponsor_title whitespace-nowrap flex-shrink w-1/2 px-[3%] py-12">
          {title}
        </h3>
        <div class="grow w-full border-t border-black"></div>
      </div>
    </>
  );
};

const Sponsor_each = ({ cooperation }) => {
  return (
    <>
      <div
        className={`${cooperation.order} flex items-center h-[6.75rem] bg-white`}
      >
        <img className={cooperation.size} src={cooperation.imgSrc} alt="" />
      </div>
    </>
  );
};

export default Sponsor;

//<img className="" src={imgSrc} alt="" />

/*     <div className="flex w-full">
        <Sponsor_each
          imgSrc="/assets/images/ETtoday_logo.png"
          name="ETToday"
          size="h-full"
        />
        <Sponsor_each
          imgSrc="/assets/images/NXP_logo.jpeg"
          name="NXP"
          size="h-full"
        />
        <Sponsor_each
          imgSrc="/assets/images/Google_logo.jpeg"
          name="Google"
          size="h-4/5"
        />
        <Sponsor_each
          imgSrc="/assets/images/NXP_logo.jpeg"
          name="NXP"
          size="h-full"
        />
      </div> */
