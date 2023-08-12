import React from "react";

const Topic = () => {
  return (
    <>
      <div className="group w-80 h-72 bg-topic-gray flex flex-col pl-7">
        <div className="basis-1/3 flex flex-col justify-center">
          <p className="leading-8">黑客組</p>
          <p className="text-xl">台灣積體電路有限公司</p>
        </div>
        <img
          className=" basis-1/3 w-2/5"
          src="/assets/images/tsmc_logo.png"
          alt="tsmc"
        />
        <div className="basis-1/3 grid place-items-end pb-6 pr-8">
          <div className="flex flex-row gap-x-2.5 justify-center">
            <img
              className="w-5"
              src="/assets/icons/topic_arrow.svg"
              alt="more"
            />
            <p className="text-base opacity-70">查看更多</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;

/*<div className="grid grid-cols-2 gap-x-0 place-self-end pb-6 pr-8">
  <img
    className="w-5 bg-orange-300"
    src="/assets/icons/topic_arrow.svg"
    alt="more"
  />
  <p className="text-base bg-green-500">查看更多</p>
</div>;*/
