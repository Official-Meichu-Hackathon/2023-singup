import React from "react";

const Footer = () => {
  const dept_list = [
    {
      dept: "行政部",
      leaders: ["賴睿麒"],
      members: ["陳玟綺"],
    },
    {
      dept: "行銷部",
      leaders: ["宋少瑜", "趙于瑄"],
      members: ["李芷薰", "林佩萱", "吳美樺", "黃聖温", "林芸均", "駱櫻文"],
    },
    {
      dept: "公關部",
      leaders: ["林庭伃", "解心妤", "楊晨鍾"],
      members: ["郭伊真", "邱筱文", "蕭令宜", "鄒宜儒", "黃淯琪", "游子鋆"],
    },
    {
      dept: "活動部",
      leaders: ["林麒安", "范禎宸", "蔡欣儒"],
      members: ["詹子毅", "馮鈺慈", "古昕云", "林俊佑", "廖苡安", "魏秭翊", "蔡沂霖"],
    },
    {
      dept: "財務部",
      leaders: ["陳郁安", "翼瑄卉"],
      members: ["劉宣亭", "吳念祖", "陳泳霓", "吳承諺"],
    },
    {
      dept: "設計部",
      leaders: ["陳樂穎"],
      members: ["詹詠甯", "林立上", "王若禎", "陳宛萱", "袁孟華", "洪顥耘"],
    },
    {
      dept: "開發部",
      leaders: ["徐瑞澤", "曾家祐"],
      members: ["蔡杰恩", "黃佑得", "何義翔", "葉孟昀", "許伊辰", "林家宇"],
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
