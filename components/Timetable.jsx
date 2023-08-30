import React from "react";
import "@styles/globals.css";

const Timetable = () => {
  const time_d1 = [
    { time: "08:30 - 09:00", context: ["參賽者報到"] },
    { time: "09:00 - 10:30", context: ["開幕式"] },
    {
      time: "10:30 - 11:30",
      context: ["Coding... / 企業博覽會\n/ 娛樂交流活動"],
    },
    { time: "12:00 - 13:30", context: ["午餐時間"] },
    {
      time: "13:30 - 18:00",
      context: ["Coding... / 企業博覽會\n/ 娛樂交流活動"],
    },
    { time: "18:00 - 19:30", context: ["晚餐時間"] },
    {
      time: "19:30 - 22:00",
      context: ["Coding... / 娛樂交流活動"],
    },
    { time: "22:00", context: ["閉館"] },
  ];
  const time_d2 = [
    {
      time: "08:00 - 11:00",
      context: ["Coding.../企業博覽會\n/娛樂交流活動"],
    },
    { time: "11:00 - 12:00", context: ["午餐時間"] },
    { time: "12:00 - 13:00", context: ["Coding..."] },
    {
      time: "13:00 - 17:10",
      context: ["黑客組初賽"],
      additional: ["(13:00 - 15:00)"],
    },
    {
      time: "",
      context: ["創客組初賽"],
      additional: ["(13:00 - 16:00)"],
    },
    {
      time: "",
      context: ["黑客組決賽"],
      additional: ["(15:00 - 17:10)"],
    },
    { time: "17:10 - 19:00", context: ["閉幕式、頒獎、抽獎"] },
  ];
  return (
    <div id="contest_process" className="py-12">
      {/* Desktop */}
      <div className="hidden md:block px-[5%] relative w-full h-[50rem] lg:h-[60rem] overflow-x-hidden">
        <div className="flex justify-center gap-x-4 2xl:gap-x-6">
          <div className="basis-1/5 2xl:basis-1/3 flex flex-shrink-0 flex-col xl:w-auto">
            {" "}
            <img
              className="-z-10 absolute aspect-auto w-[60vw] 2xl:w-[54rem] left-[-1vw] bottom-4"
              src="/assets/icons/time_deco_l.svg"
              alt=""
            />
            <img
              className="-z-10 absolute aspect-auto w-[60vw] 2xl:w-[54rem] right-[-8vw] bottom-0"
              src="/assets/icons/time_deco_r.svg"
              alt=""
            />
            <div className="relative 2xl:left-[4rem]">
              <h2 className="text-[2.5rem] mt-[6rem] tracking-[2rem]">
                比<br />賽<br />資<br />訊
              </h2>
              <h2 className="text-[2.5rem] pt-5 leading-[3rem]">
                Oct, <br />
                2023
              </h2>
              <h3 className="text-[1rem] lg:text-[1.25rem] pt-8  tracking-[0.125rem] font-semibold">
                地點｜國立清華大學新體育館
              </h3>
              <h3 className="text-[1rem] lg:text-[1.25rem] pt-8  tracking-[0.125rem] font-semibold whitespace-break-spaces xl:whitespace-nowrap">
                時間｜2023/10/21(六) - 10/22(日)
              </h3>
              <p className="text-[0.6rem] lg:text-[1rem] pt-6 text-[#6A747B]">
                本次活動不提供過夜場地
              </p>
            </div>
          </div>
          <div className="flex basis-2/5 2xl:basis-1/3 flex-grow flex-col relative 2xl:right-5">
            <div className="absolute top-[6rem] timeTable_bg1 2xl:text-[12.5rem]">
              21
            </div>
            <div className="relative left-[6vw] lg:left-[8vw] 2xl:left-[28%] top-[24%] xl:top-[28%]">
              {" "}
              <div className="text-[2.5rem] xl:text-[3rem] timeTable_day">
                Saturday
              </div>
              <div className="relative flex flex-col gap-y-4 right-12">
                {time_d1.map((day, index) => (
                  <Context key={index} day={day} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex basis-2/5 2xl:basis-1/3 flex-grow flex-col relative">
            <h4 className="absolute top-[6rem] timeTable_bg2 2xl:text-[12.5rem]">
              22
            </h4>
            <div className="relative left-[6vw] lg:left-[8vw] 2xl:left-[28%] top-[24%] xl:top-[28%]">
              {" "}
              <div className="text-[2.5rem] xl:text-[3rem] timeTable_day">
                Sunday
              </div>
              <div className="relative flex flex-col gap-y-4 right-12">
                {time_d2.map((day, index) => (
                  <Context key={index} day={day} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden mx-[5%] flex flex-col">
        <h4 className="w-fit m-auto py-5">比賽資訊</h4>
        <div className="flex w-full gap-x-[5vw] sm:gap-x-12">
          <h3 className="text-[1.6rem] sm:text-[2.25rem] pl-2 sm:pl-6 grow w-full">
            Oct, <br />
            2023
          </h3>
          <div className="flex grow flex-col justify-center">
            <h3 className="text-[0.9rem] sm:text-[1.5rem]">
              地點｜國立清華大學新體育館
            </h3>
            <h3 className="text-[0.9rem] sm:text-[1.5rem]">
              時間｜2023/10/21(六) - 10/22(日)
            </h3>
          </div>
        </div>
        <p className="text-[#6A747B] pl-12 text-[0.7rem] sm:text-[1.3rem]">
          本次活動不提供過夜場地
        </p>
        <div className="relative flex flex-col">
          <div className="relative">
            <div className="timeTable_bg1">21</div>
            <div className="absolute left-16 top-[3.4rem] text-[2rem] timeTable_day">
              Saturday
            </div>
            <div className="flex flex-col gap-y-1">
              {time_d1.map((day, index) => (
                <Context_m key={index} day={day} />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="timeTable_bg2">22</div>
            <div className="absolute left-16 top-[3.4rem] text-[2rem] timeTable_day">
              Sunday
            </div>
            <div className="flex flex-col gap-y-1">
              {time_d2.map((day, index) => (
                <Context_m key={index} day={day} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Context = ({ day }) => {
  return (
    <>
      <div
        className={`${
          day.additional ? "py-0" : "py-2"
        } flex w-full content-stretch gap-x-2`}
      >
        <p className="text-[0.9rem] lg:text-[1rem] w-[35%] 2xl:w-[7rem] timeTable_context text-start whitespace-nowrap ">
          {day.time}
        </p>
        <div className="w-2/3 flex gap-x-1 flex-wrap">
          {day.context.map((item, index) => (
            <p
              key={index}
              className="text-[0.9rem] lg:text-[1rem] w-fit timeTable_context whitespace-pre 2xl:whitespace-nowrap"
            >
              {item}
            </p>
          ))}
          <div className="flex items-center">
            <p className="text-[0.7rem] lg:text-[0.8rem] w-fit timeTable_context whitespace-nowrap">
              {day.additional}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Context_m = ({ day }) => {
  return (
    <>
      <div
        className={`${
          day.additional ? "py-0" : "py-2"
        } pl-2 sm:pl-6 flex w-full content-stretch gap-x-1`}
      >
        <p className="text-[0.7rem] sm:text-[1.2rem] w-[5rem] sm:w-[8rem] 2xl:w-[7rem] timeTable_context text-start whitespace-nowrap ">
          {day.time}
        </p>
        <div className="w-fit flex gap-x-1 flex-wrap">
          {day.context.map((item, index) => (
            <p
              key={index}
              className="text-[0.7rem] sm:text-[1.2rem] w-fit timeTable_context whitespace-nowrap"
            >
              {item}
            </p>
          ))}
          <div className="flex items-center">
            <p className="text-[0.5rem] sm:text-[1rem] w-fit timeTable_context whitespace-nowrap">
              {day.additional}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timetable;
