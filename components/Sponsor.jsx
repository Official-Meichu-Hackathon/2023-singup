import React from "react";

const Sponsor = () => {
  const cooperations = [
    {
      imgSrc: "/assets/images/ETtoday_logo.png",
      name: "ETToday",
      size: "max-h-full",
    },
    {
      imgSrc: "/assets/images/NXP_logo.jpeg",
      name: "NXP",
      size: "max-h-[90%]",
    },
    {
      imgSrc: "/assets/images/Google_logo.jpeg",
      name: "Google",
      size: "max-h-[60%] px-3",
    },
    {
      imgSrc: "/assets/images/line_logo.png",
      name: "LINE",
      size: "max-h-full",
    },
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
      imgSrc: "/assets/images/104_logo.png",
      name: "104",
      size: "max-h-full",
    },
    {
      imgSrc: "/assets/images/ctbc_logo.png",
      name: "中國信託",
      size: "max-h-full",
    },
    {
      imgSrc: "/assets/images/def_logo.png",
      name: "原相",
      size: "max-h-full",
    },
  ];
  const bronzes = [
    {
      imgSrc: "/assets/images/jing_logo.png",
      name: "錦明實業",
      size: "max-h-full",
    },
  ];
  return (
    <>
      <Sponsor_title title="合作企業" />
      <div className="flex w-full flex-wrap gap-5 ">
        {cooperations.map((cooperation, index) => {
          return <Sponsor_each key={index} cooperation={cooperation} />;
        })}
      </div>
      <Sponsor_title title="贊助企業" />
      <span className="text-xl font-bold text-center tracking-[0.15em]">
        Platinum
      </span>
      <div className="flex w-full py-4 flex-wrap justify-center gap-x-5 gap-y-3">
        {cooperations.map((cooperation, index) => {
          return <Sponsor_each key={index} cooperation={cooperation} />;
        })}
      </div>
      <div className="flex w-full flex-wrap justify-evenly gap-x-5 gap-y-3">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-center tracking-[0.15em]">
            Gold
          </span>
          <div className="flex w-full flex-wrap py-4 gap-5">
            {golds.map((gold, index) => {
              return <Sponsor_each key={index} cooperation={gold} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-center tracking-[0.15em]">
            Silver
          </span>
          <div className="flex w-full flex-wrap py-4 gap-5">
            {silvers.map((silver, index) => {
              return <Sponsor_each key={index} cooperation={silver} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-cente">
          <span className="text-xl font-bold text-center tracking-[0.15em]">
            Bronze
          </span>
          <div className="flex w-full flex-wrap py-4 gap-5">
            {bronzes.map((bronze, index) => {
              return <Sponsor_each key={index} cooperation={bronze} />;
            })}
          </div>
        </div>
      </div>

      <Sponsor_title title="特殊贊助" />
      <span className="text-xl font-bold text-center tracking-[0.15em]">
        Bronze
      </span>
      <div className="flex w-full py-4 flex-wrap justify-center gap-x-5 gap-y-3">
        {cooperations.map((cooperation, index) => {
          return <Sponsor_each key={index} cooperation={cooperation} />;
        })}
      </div>
      <span className="text-xl font-bold text-center tracking-[0.15em]">
        Freshmen
      </span>
      <div className="flex w-full py-4 flex-wrap justify-center gap-x-5 gap-y-3">
        {cooperations.map((cooperation, index) => {
          return <Sponsor_each key={index} cooperation={cooperation} />;
        })}
      </div>
      <Sponsor_title title="這是廣告" />
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
    </>
  );
};

const Sponsor_title = ({ title }) => {
  return (
    <>
      <div class="relative w-full flex py-5 items-center">
        <div class="grow w-full border-t border-black"></div>
        <h3 class="sponsor_title whitespace-nowrap flex-shrink w-[1/2] px-[10%] md:px-[5%] py-1.5">
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
      <div className="grow flex flex-col items-center">
        <div className="flex items-center h-[6.75rem] bg-white">
          <img className={cooperation.size} src={cooperation.imgSrc} alt="" />
        </div>
        <span className="text-base">{cooperation.name}</span>
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
