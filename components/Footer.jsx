import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 divide-y divide-divider-gray">
        <div className="flex flex-col md:flex-row justify-items-stretch h-auto">
          <div className="flex items-center justify-center md:justify-start basis-1/4 pt-16 md:p-16 lg:basis-1/3">
            <img className="w-32" src="/assets/images/logo.svg" alt="logo" />
          </div>
          <div className="basis-3/4 lg:basis-2/3">
            <div className="flex flex-col justify-center items-center md:items-start px-12 md:px-24 py-16">
              <p className="font-bold">開發部</p>
              <p className="font-normal">
                邵筱庭 / 王柏涵 / 邱奕庭 / 林柏宇 / 侯博軒 / 王皓平 / 曾家祐 /
                徐瑞澤
              </p>
              <p className="font-bold">開發部</p>
              <p className="font-normal">
                邵筱庭 / 王柏涵 / 邱奕庭 / 林柏宇 / 侯博軒 / 王皓平 / 曾家祐 /
                徐瑞澤
              </p>
              <p className="font-bold">開發部</p>
              <p className="font-normal">
                邵筱庭 / 王柏涵 / 邱奕庭 / 林柏宇 / 侯博軒 / 王皓平 / 曾家祐 /
                徐瑞澤
              </p>
              <p className="font-bold">開發部</p>
              <p className="font-normal">
                邵筱庭 / 王柏涵 / 邱奕庭 / 林柏宇 / 侯博軒 / 王皓平 / 曾家祐 /
                徐瑞澤
              </p>
              <p className="font-bold">開發部</p>
              <p className="font-normal">
                邵筱庭 / 王柏涵 / 邱奕庭 / 林柏宇 / 侯博軒 / 王皓平 / 曾家祐 /
                徐瑞澤
              </p>
              <p className="font-bold">開發部</p>
              <p className="font-normal">
                邵筱庭 / 王柏涵 / 邱奕庭 / 林柏宇 / 侯博軒 / 王皓平 / 曾家祐 /
                徐瑞澤
              </p>
              <p className="font-bold">開發部</p>
              <p className="font-normal">
                邵筱庭 / 王柏涵 / 邱奕庭 / 林柏宇 / 侯博軒 / 王皓平 / 曾家祐 /
                徐瑞澤
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-12 md:px-20 h-40">
          <div className="basis-1/2 flex flex-col justify-center gap-y-2">
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
          <div className="flex basis-1/2 justify-end items-center">
            <div className="">
              <a href="https://www.youtube.com/watch?v=ebxn6TlM6EY&ab_channel=%E6%88%91%E6%98%AF%E9%B3%A5%E4%BA%BA">
                成果存放平台
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
