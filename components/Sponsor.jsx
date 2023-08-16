import React from "react";

const Sponsor = () => {
  const cooperations = [
    {
      imgSrc: "/assets/images/ETtoday_logo.png",
      name: "ETToday",
      size: "h-full",
    },
    { imgSrc: "/assets/images/NXP_logo.jpeg", name: "NXP", size: "h-full" },
    {
      imgSrc: "/assets/images/Google_logo.jpeg",
      name: "Google",
      size: "h-3/5",
    },
    { imgSrc: "/assets/images/NXP_logo.jpeg", name: "NXP", size: "h-full" },
  ];
  return (
    <>
      <Sponsor_title title="合作企業" />
      <div className="flex w-full gap-5">
        {cooperations.map((cooperation, index) => {
          return <Sponsor_each key={index} cooperation={cooperation} />;
        })}
      </div>
      <Sponsor_title title="贊助企業" />
      <span className="text-xl font-bold text-center py-3 tracking-[0.15em]">
        Platinum
      </span>
      <div className="flex w-full gap-5">
        {cooperations.map((cooperation, index) => {
          return <Sponsor_each key={index} cooperation={cooperation} />;
        })}
      </div>
      <Sponsor_title title="特殊贊助" />

      <Sponsor_title title="這是廣告"/>
      <a href="https://www.nxp.com" target="_blank" className="w-[60%] md:w-[50%] lg:w-[60%] my-[1%] block">
      <object data="/assets/images/sponsor_nxp.svg" type="image/svg+xml" className="w-full rounded-[1.25rem] pointer-events-none">
        </object>
      </a>
    </>
  );
};

const Sponsor_title = ({ title }) => {
  return (
    <>
      <div class="relative w-full flex py-5 items-center">
        <div class="grow w-full border-t border-black"></div>
        <span class="sponsor_title flex-shrink w-1/2 px-12 py-0.5">
          {title}
        </span>
        <div class="grow w-full border-t border-black"></div>
      </div>
    </>
  );
};

const Sponsor_each = ({ cooperation }) => {
  return (
    <>
      <div className="grow flex flex-col items-center">
        <div className="flex items-center h-[6.75rem] w-auto bg-white">
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
