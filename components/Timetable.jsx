import React from "react";

const Timetable = () => {
  const time_d1 = [
    { time: "09:00", context: "參賽者報到" },
    { time: "10:00", context: "我好餓" },
    { time: "11:00", context: "我好餓" },
    { time: "12:00", context: "我超級餓" },
  ];
  const time_d2 = [
    { time: "09:00", context: "參賽者報到" },
    { time: "10:00", context: "我好餓" },
    { time: "11:00", context: "我好餓" },
    { time: "12:00", context: "我超級餓" },
  ];
  return (
    <>
      <div className="relative w-full h-[60rem]">
        <div className="flex gap-x-0 2xl:gap-x-5">
          <div className="w-1/3 xl:w-auto whitespace-nowrap">
            {" "}
            <img
              className="z-[-1] absolute left-[-10vw] bottom-4"
              src="/assets/icons/time_deco_l.svg"
              alt=""
            />
            <img
              className="z-[-1] absolute right-[-10vw] bottom-0"
              src="/assets/icons/time_deco_r.svg"
              alt=""
            />
            <h2 className="title_vertical pt-[8.5rem] tracking-[2rem]">
              比賽資訊
            </h2>
            <h2 className="px-[1vw] leading-[3.5rem]">
              Oct, <br />
              2023
            </h2>
            <h3 className="px-[1vw] text-[1.25rem] pt-8 leading-[1.875rem] tracking-[0.125rem] font-semibold">
              地點｜國立清華大學新體育館
              <br />
              時間｜2023/10/21(六)-10/22(日)
            </h3>
          </div>
          <div className="flex shrink-0 grow flex-col relative">
            <div className="absolute top-[9rem] timeTable_bg1 2xl:text-[12.5rem]">
              21
            </div>
            <div className="relative left-0 lg:left-[5vw] xl:left-[8vw] 2xl:left-[36%] top-[36%]">
              {" "}
              <div className="timeTable_day">Saturday</div>
              <div className="grid grid-cols-5 gap-x-0 gap-y-4 grid-flow-dense">
                {time_d1.map((day, index) => (
                  <Context key={index} day={day} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex shrink-0 grow flex-col right-0 relative">
            <h4 className="absolute top-[9rem] timeTable_bg2 2xl:text-[12.5rem]">
              22
            </h4>
            <div className="relative left-0 lg:left-[5vw] xl:left-[8vw] 2xl:left-[36%] top-[36%] ">
              {" "}
              <div className="timeTable_day">Sunday</div>
              <div className="grid grid-cols-5 gap-x-0 gap-y-4 grid-flow-dense">
                {time_d2.map((day, index) => (
                  <Context key={index} day={day} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Context = ({ day }) => {
  return (
    <>
      <p className="col-span-1 timeTable_context">{day.time}</p>
      <p className="col-span-4 timeTable_context">{day.context}</p>
    </>
  );
};

export default Timetable;
