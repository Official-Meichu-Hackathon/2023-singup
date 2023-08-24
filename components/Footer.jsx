import React from "react";

const Footer = () => {
  const dept_list = [
    {
      dept: "開發部",
      leaders: ["邵筱庭", "王柏涵"],
      members: ["王皓平", "曾家祐", "徐瑞澤"],
    },
    {
      dept: "開發部",
      leaders: ["邵筱庭", "王柏涵"],
      members: ["邱奕庭", "林柏宇", "侯博軒"],
    },
    {
      dept: "開發部",
      leaders: ["邵筱庭", "王柏涵"],
      members: [
        "邱奕庭",
        "林柏宇",
        "侯博軒",
        "邱奕庭",
        "林柏宇",
        "侯博軒",
        "王皓平",
        "曾家祐",
        "徐瑞澤",
      ],
    },
    {
      dept: "開發部",
      leaders: ["邵筱庭", "王柏涵"],
      members: ["邱奕庭", "林柏宇", "侯博軒", "王皓平", "曾家祐", "徐瑞澤"],
    },
    {
      dept: "開發部",
      leaders: ["邵筱庭", "王柏涵"],
      members: ["邱奕庭", "林柏宇", "侯博軒", "王皓平", "曾家祐", "徐瑞澤"],
    },
    {
      dept: "開發部",
      leaders: ["邵筱庭", "王柏涵"],
      members: ["邱奕庭", "林柏宇", "侯博軒", "王皓平", "曾家祐", "徐瑞澤"],
    },
  ];
  return (
    <>
      <div className="flex flex-col divide-y divide-divider-gray">
        <div className="flex flex-col items-center md:items-stretch md:flex-row px-12 md:px-[7%] py-6">
          <div className="container mx-auto flex py-8 md:basis-2/5 lg:basis-1/2 self-start md:self-stretch">
            <img
              className="w-[7rem]"
              src="/assets/images/logo.svg"
              alt="logo"
            />
          </div>
          <div className="container mx-auto md:basis-3/5 lg:basis-1/2 lg:whitespace-nowrap">
            {dept_list.map((dept, index) => (
              <div key={index} className="">
                <p className="font-bold ">{dept.dept}</p>
                <p>
                  <strong>{dept.leaders.join(" / ")}</strong>&nbsp;|&nbsp;
                  {dept.members.join(" / ")}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row px-12 py-8 md:px-20 h-auto">
          <div className="sm:basis-1/2 flex flex-col justify-center gap-y-2">
            <div className="flex gap-x-7">
              <div>
                <a href="https://www.facebook.com/meichu.hackathon">
                  <img
                    className="w-6"
                    src="/assets/icons/fb_icon.svg"
                    alt="facebook"
                  />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/mc_hackathon/">
                  <img
                    className="w-6"
                    src="/assets/icons/ig_icon.svg"
                    alt="instagram"
                  />
                </a>
              </div>
              <div>
                <a href="https://youtube.com/shorts/iCx_oq5jtQ4?feature=share">
                  <img
                    className="w-6"
                    src="/assets/icons/mail_icon.svg"
                    alt="mail"
                  />
                </a>
              </div>
            </div>
            <div>
              <p>Copyright © 2023 MeiChu Hackathon</p>
            </div>
          </div>
          <div className="flex sm:basis-1/2 justify-start sm:justify-end items-center">
            <div className="">
              <a
                className="after:content-['_↗']"
                href="https://www.youtube.com/watch?v=ebxn6TlM6EY&ab_channel=%E6%88%91%E6%98%AF%E9%B3%A5%E4%BA%BA"
              >
                成果存放平台
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const staffList = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default Footer;
