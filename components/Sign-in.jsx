"use client"
import "@styles/globals.css"
import { useState, useRef, useEffect } from "react";

const Sign_in = () =>{
    const [isHovered_a, setIsHovered_a] = useState(false);
    const [isHovered_b, setIsHovered_b] = useState(false);
    const [isHovered_c, setIsHovered_c] = useState(false);
    const handleHover_a = () => {
        setIsHovered_a(!isHovered_a);
      };
      const handleHover_b = () => {
        setIsHovered_b(!isHovered_b);
      };
      const handleHover_c = () => {
        setIsHovered_c(!isHovered_c);
      };
    return(
        <div id = 'sign-in'>
        <div className = "mx-[2.5%] m-auto my-12 block md:hidden">
            <div className = 'flex w-full my-8'>
                <h4 className = 'w-fit m-auto'>如何報名</h4>
            </div>
            <div className = 'w-full h-fit bg-gray-100 rounded-[1.5rem]  border-2 border-[#6A747B] '>
                <div className = 'px-[4%] py-[2%] w-full grid grid-rows-3 grid-flow-col bar_gradient_inverse overflow-hidden rounded-t-[1.5rem] border-b-2 border-[#6A747B]'>
                        <p className = 'px-2 font-bold text-[0.8em]'> 9/5（一）~ 9/25（一）08:00</p>
                        <p className = 'px-2 font-bold text-[0.8em]'> 9/25（一）23:59</p>
                        <p className = 'px-2 font-bold text-[0.8em]'> 9/29（五）23:59</p>
                        <p className = 'px-2 font-bold text-[0.8em]'> 開始報名</p>
                        <p className = 'px-2 font-bold text-[0.8em]'> 正取隊伍與所屬企業公布</p>
                        <p className = 'px-2 font-bold text-[0.8em]'> 繳費截止</p>
                </div>
                <div className = 'my-5 mx-[5%]'>
                    <h5 className = 'mb-3'>報名費用  </h5>
                    <p>$700 / 人（須另繳保證金 $200）</p>
                    <p>保證金：若全程準時參與活動並完成 Demo，將於活動結束後退還</p>
                    <p>中低收入戶持證明則無需任何費用</p>
                    <p>跨域組隊：隊伍成員每人減免 $100</p>
                    <p>＊報名隊伍內有三個（含）以上不同科系</p>
                    <p>＊組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身分別之參賽者（限創客交流組）</p>
                    <p>收費含餐食、場地清潔、保險、衣服等</p>
                    <p>黑客組每隊伍需至少一人參與工作坊，否則整隊不予退還保證金（若有特殊情況請提早與主辦單位溝通）</p>
                </div>
                <div className = 'my-5 mx-[5%]'>
                    <h5 className = 'mb-3'>報名資格</h5>
                    <p>黑客組：全台大專院校生及碩博生（每隊至少需有一人具備使用企業資源的能力並且儘量在專長中說明團隊或個人所具備的技術或其他能力。 </p>
                    <p>創客交流組：不限資格，工作坊會進行Figma教學，讓參賽者於Demo時讓評審實際操作作品。參考工具：Figma、Miro、Webflow、Sketch...</p>
                </div>
                <div className = 'my-5 mx-[5%]'>
                    <h5 className = 'mb-3'>報名方式</h5>
                    <p>自行組隊報名，每隊 3~5 人，梅竹黑客松提供臉書媒合社群供大家找隊友（附上連結）</p>
                    <p>組別選擇分為：黑客組、交流組、兩組混合報名</p>
                    <p>＊若報名含黑客組，則須將所有企業皆列入志願序</p>
                    <p>＊若單一企業超額，將採取亂數分發</p>
                </div>
                <div className = 'my-5 mx-[5%]'>
                    <h5 className = 'mb-3'>其他須知</h5>
                    <p>若超過最大參賽人數上限將依報名時間為依據錄取</p>
                    <p>企業可與學生洽談合作以將作品運用到公司中</p>
                    <p>主辦方與企業可活動中拍照與錄影，並作為未來宣傳使用</p>
                    <p>得獎隊伍需要將作品上傳到梅竹黑客松成果存放平台（附上連結），方可領取獎金</p>
                </div>
            </div>
        </div>

        <div className ='mx-[5%] my-12 hidden md:block '>
            <h2 className = 'ml-[2%]'>如何報名</h2>
            <div className = 'w-full h-fit bg-gray-100 rounded-[3rem] flex border-2 border-[#6A747B] overflow-hidden'>
                <div className="w-[30%]  bar_gradient_straight">
                    <div onMouseEnter={handleHover_a}
                        onMouseLeave={handleHover_a}
                        className = {` ${isHovered_a ? "":"bg-gray-100"}  ease-in-out duration-500 px-[8%] py-[5%] h-[25%]`}
                    >
                        <h5 className = 'py-5'> 9/5（一）~ 10/3（一）08:00</h5>
                        <h4 className = 'py-5 pb-10'>開始報名</h4>
                    </div>
                    <div onMouseEnter={handleHover_b}
                        onMouseLeave={handleHover_b} 
                    className = {` ${isHovered_b ? "":"bg-gray-100" } ease-in-out duration-500 px-[8%] py-[5%] border-y-2 border-[#6A747B] h-[35%]`}>
                        <h5 className = 'py-5'> 10/3（一）23:59</h5>
                        <h4 className = 'py-5 pb-10'>正取隊伍與所屬企業公布</h4>
                    </div>
                    <div onMouseEnter={handleHover_c}
                        onMouseLeave={handleHover_c} 
                    className = {` ${isHovered_c ? "":"bg-gray-100" } ease-in-out duration-500 px-[8%] py-[5%] h-[40%]`}>
                        <h5 className = 'py-5'> 10/7（五）23:59</h5>
                        <h4 className = 'py-5 pb-10'>繳費截止</h4>
                    </div>
                </div>
                <div className = 'w-[70%] border-l-2 border-[#6A747B] px-[3%] pt-[3%]'>
                    <div className = 'mb-5'>
                        <h5>報名費用  </h5>
                        <p>$700 / 人（須另繳保證金 $200）</p>
                    <p>保證金：若全程準時參與活動並完成 Demo，將於活動結束後退還</p>
                    <p>中低收入戶持證明則無需任何費用</p>
                    <p>跨域組隊：隊伍成員每人減免 $100</p>
                    <p>＊報名隊伍內有三個（含）以上不同科系</p>
                    <p>＊組內含高中職、大專院校生或碩博生、社會人士兩種（含）以上身分別之參賽者（限創客交流組）</p>
                    <p>收費含餐食、場地清潔、保險、衣服等</p>
                    <p>黑客組每隊伍需至少一人參與工作坊，否則整隊不予退還保證金（若有特殊情況請提早與主辦單位溝通）</p>
                    </div>
                    <div className = 'mb-5'>
                        <h5>報名資格</h5>
                        <p>黑客組：全台大專院校生及碩博生（每隊至少需有一人具備使用企業資源的能力並且儘量在專長中說明團隊或個人所具備的技術或其他能力。 </p>
                    <p>創客交流組：不限資格，工作坊會進行Figma教學，讓參賽者於Demo時讓評審實際操作作品。參考工具：Figma、Miro、Webflow、Sketch...</p>
                </div>
                    <div className="mb-5">
                        <h5>報名方式</h5>
                        <p>自行組隊報名，每隊 3~5 人，梅竹黑客松提供臉書媒合社群供大家找隊友（附上連結）</p>
                    <p>組別選擇分為：黑客組、交流組、兩組混合報名</p>
                    <p>＊若報名含黑客組，則須將所有企業皆列入志願序</p>
                    <p>＊若單一企業超額，將採取亂數分發</p>
                    </div>
                    <div className="mb-5">
                        <h5>其他須知</h5>
                        <p>若超過最大參賽人數上限將依報名時間為依據錄取</p>
                    <p>企業可與學生洽談合作以將作品運用到公司中</p>
                    <p>主辦方與企業可活動中拍照與錄影，並作為未來宣傳使用</p>
                    <p>得獎隊伍需要將作品上傳到梅竹黑客松成果存放平台（附上連結），方可領取獎金</p>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};
export default Sign_in;