"use client";
import "@styles/globals.css";
import { useState, useRef, useEffect } from "react";

const Sign_in = () => {
  const [isHovered_a, setIsHovered_a] = useState(false);
  const [isHovered_b, setIsHovered_b] = useState(false);
  const [isHovered_c, setIsHovered_c] = useState(false);
  const handleHover_a_in = () => {
    setIsHovered_a(true);
  };
  const handleHover_a_out = () => {
    setIsHovered_a(false);
  };
  const handleHover_b_in = () => {
    setIsHovered_b(true);
  };
  const handleHover_b_out = () => {
    setIsHovered_b(false);
  };
  const handleHover_c_in = () => {
    setIsHovered_c(true);
  };
  const handleHover_c_out = () => {
    setIsHovered_c(false);
  };
  return (
    // mobile
    <div id="sign-in">
      <div className="mx-[2.5%] m-auto py-12 block md:hidden">
        <div className="flex w-full my-8">
          <h4 className="w-fit m-auto">如何報名</h4>
        </div>
        <div className="w-full h-fit bg-gray-100 rounded-[1.5rem]  border-2 border-[#6A747B] ">
          <div className="px-[4%] py-[2%] w-full grid grid-rows-3 grid-flow-col bar_gradient_inverse overflow-hidden rounded-t-[1.5rem] border-b-2 border-[#6A747B]">
            <p className="px-2 font-bold text-[0.8em]">
              {" "}
              9/5（二）~ 9/25（一）08:00
            </p>
            <p className="px-2 font-bold text-[0.8em]"> 9/25（一）23:59</p>
            <p className="px-2 font-bold text-[0.8em]"> 9/29（五）23:59</p>
            <p className="px-2 font-semibold text-[0.8em]"> 開始報名</p>
            <p className="px-2 font-semibold text-[0.8em]">
              {" "}
              正取隊伍與所屬企業公布
            </p>
            <p className="px-2 font-semibold text-[0.8em]"> 繳費截止</p>
          </div>
          <div className="my-5 mx-[5%]">
            <h5 className="mb-2">報名費用 </h5>
            <p>$700 / 人（須另繳保證金 $200）</p>
            <p>保證金：若全程準時參與活動並完成 Demo，將於活動結束後退還</p>
            <p>中低收入戶持證明則無需任何費用</p>
            <p>跨域組隊：隊伍成員每人減免 $100</p>
            <p>．報名隊伍內有三個（含）以上不同科系</p>
            <p>
            ．組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身分別之參賽者（限創客交流組）
            </p>
            <p>收費含餐食、場地清潔、保險、衣服等</p>
            <p>
            所有組別全程準時參與開幕、閉幕，且黑客組隊內至少一人參加賽前工作坊。保證金將於活動結束後退還。（若有特殊情況請提早與主辦單位溝通）
            </p>
          </div>
          <div className="my-5 mx-[5%]">
            <h5 className="mb-2">報名資格</h5>
            <p>
              黑客組：全台大專院校生及碩博生，每隊至少需有一人具備使用企業資源的能力。{" "}
            </p>
            <p>
              創客交流組：高中職、大專院校生及碩博生、社會人士皆可報名，參賽者需於比賽 Demo
              時讓評審實際操作作品。（參考工具：Figma、Miro、Webflow、Sketch ⋯）
            </p>
          </div>
          <div className="my-5 mx-[5%]">
            <h5 className="mb-2">報名方式</h5>
            <p>
              自行組隊報名，每隊 3~5 人，梅竹黑客松提供{" "}
              <a
                href="https://www.facebook.com/groups/mchackathon.club.2.0/"
                className="font-bold underline underline-offset-2"
              >
                臉書媒合社群
              </a>{" "}
              供大家找隊友
            </p>
            <p>組別選擇分為：黑客組、創客交流組、兩組混合報名</p>
            <p>．若報名含黑客組，則須將所有企業皆列入志願序</p>
            <p>．若單一企業超額，將採取亂數分發</p>
          </div>
          <div className="my-5 mx-[5%]">
            <h5 className="mb-3">其他須知</h5>
            <p>若超過最大參賽人數上限將依報名時間為依據錄取</p>
            <p>企業可與學生洽談合作以將作品運用到公司中</p>
            <p>主辦方與企業可活動中拍照與錄影，並作為未來宣傳使用</p>
            <p>
              得獎隊伍需要將作品上傳到{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfpq4AGg_hFSsRgi4WSBapoL7AFeE7uC0j1yZqP2i9VL6SmaA/viewform"
                className="font-bold underline underline-offset-2"
              >
                梅竹黑客松成果存放平台
              </a>
              ，方可領取獎金
            </p>
          </div>
        </div>
      </div>

      <div className="mx-[7%] py-12 hidden md:block ">
        <h2 className="mb-2">如何報名</h2>
        <div className="w-full h-fit bg-gray-100 rounded-[2.3rem] flex border-2 border-[#6A747B] overflow-hidden">
          <div className="w-[30%]  bar_gradient_straight">
            <div
              onMouseEnter={handleHover_a_in}
              onMouseLeave={handleHover_a_out}
              className={` ${
                isHovered_a ? "" : "bg-gray-100"
              }  ease-in-out duration-500 px-[8%] py-[5%] h-[25%]`}
            >
              <h5 className="py-5"> 9/5（二）~ 9/25（一）08:00</h5>
              <h4 className="py-5 pb-10">開始報名</h4>
            </div>
            <div
              onMouseEnter={handleHover_b_in}
              onMouseLeave={handleHover_b_out}
              className={` ${
                isHovered_b ? "" : "bg-gray-100"
              } ease-in-out duration-500 px-[8%] py-[5%] border-y-2 border-[#6A747B] h-[35%]`}
            >
              <h5 className="py-5"> 9/25（一）23:59</h5>
              <h4 className="py-5 pb-10">正取隊伍與所屬企業公布</h4>
            </div>
            <div
              onMouseEnter={handleHover_c_in}
              onMouseLeave={handleHover_c_out}
              className={` ${
                isHovered_c ? "" : "bg-gray-100"
              } ease-in-out duration-500 px-[8%] py-[5%] h-[40%]`}
            >
              <h5 className="py-5"> 9/29（五）23:59</h5>
              <h4 className="py-5 pb-10">繳費截止</h4>
            </div>
          </div>
          <div className="w-[70%] border-l-2 border-[#6A747B] px-[3%] pt-[3%]">
            <div className="mb-5">
              <h5 className="mb-2">報名費用 </h5>
              <p>$700 / 人（須另繳保證金 $200）</p>
              <p>保證金：若全程準時參與活動並完成 Demo，將於活動結束後退還</p>
              <p>中低收入戶持證明則無需任何費用</p>
              <p>跨域組隊：隊伍成員每人減免 $100</p>
              <p>．報名隊伍內有三個（含）以上不同科系</p>
              <p>
              ．組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身分別之參賽者（限創客交流組）
              </p>
              <p>收費含餐食、場地清潔、保險、衣服等</p>
              <p>
              所有組別全程準時參與開幕、閉幕，且黑客組隊內至少一人參加賽前工作坊。保證金將於活動結束後退還。（若有特殊情況請提早與主辦單位溝通）
              </p>
            </div>
            <div className="mb-5">
              <h5 className="mb-2">報名資格</h5>
              <p>
                黑客組：全台大專院校生及碩博生，每隊至少需有一人具備使用企業資源的能力。{" "}
              </p>
              <p>
                創客交流組：高中職、大專院校生及碩博生、社會人士皆可報名，參賽者需於比賽 Demo
                時讓評審實際操作作品。（參考工具：Figma、Miro、Webflow、Sketch
                ⋯）
              </p>
            </div>
            <div className="mb-5">
              <h5 className="mb-2">報名方式</h5>
              <p>
                自行組隊報名，每隊 3~5 人，梅竹黑客松提供{" "}
                <a
                  href="https://www.facebook.com/groups/mchackathon.club.2.0/"
                  className="font-bold underline underline-offset-2"
                >
                  臉書媒合社群
                </a>{" "}
                供大家找隊友
              </p>
              <p>組別選擇分為：黑客組、創客交流組、兩組混合報名</p>
              <p>．若報名含黑客組，則須將所有企業皆列入志願序</p>
              <p>．若單一企業超額，將採取亂數分發</p>
            </div>
            <div className="mb-5">
              <h5 className="mb-2">其他須知</h5>
              <p>若超過最大參賽人數上限將依報名時間為依據錄取</p>
              <p>企業可與學生洽談合作以將作品運用到公司中</p>
              <p>主辦方與企業可活動中拍照與錄影，並作為未來宣傳使用</p>
              <p>
                得獎隊伍需要將作品上傳到{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfpq4AGg_hFSsRgi4WSBapoL7AFeE7uC0j1yZqP2i9VL6SmaA/viewform"
                  className="font-bold underline underline-offset-2"
                >
                  梅竹黑客松成果存放平台
                </a>
                ，方可領取獎金
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sign_in;
