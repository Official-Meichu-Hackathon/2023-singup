"use client"
import "@styles/globals.css"


const Sign_in = () =>{

    return(
        <>
        <div className ='mx-[5%]'>
            <h1>如何報名</h1>
            <div className = 'w-full h-fit bg-gray-200 rounded-[3rem] flex border-2 border-sky-500'>
                <div className="w-[30%] ">
                    <div className = 'pl-[8%] pt-[5%] '>
                        <h5 className = 'py-5'> 9/5（一)~ 10/3（一）08:00</h5>
                        <h4 className = 'py-5 pb-10'>開始報名</h4>
                    </div>
                    <div className = 'pl-[8%] pt-[5%] border-y-2 border-sky-800 '>
                        <h5 className = 'py-5'> 10/3（一）23:59</h5>
                        <h4 className = 'py-5 pb-10'>正取隊伍與所屬企業公布</h4>
                    </div>
                    <div className = 'pl-[8%] pt-[5%] '>
                        <h5 className = 'py-5'> 10/7（五）23:59</h5>
                        <h4 className = 'py-5 pb-10'>繳費截止</h4>
                    </div>
                </div>
                <div className = 'w-[70%] border-l-2 border-sky-800 pl-[3%] pt-[3%]'>
                    <div className = 'mb-5'>
                        <h5>報名費用  </h5>
                        <p>$600 / 人（須另繳保證金 $200）</p>
                        <p>保證金：若全程準時參與活動並完成 Demo，將於活動結束後退還</p>
                        <p>中低收入戶持證明免費</p>
                        <p>收費含餐食、場地清潔、保險、衣服</p>
                        <p>每個隊伍需至少一人實體參與工作坊（疫情狀況例外），否則整隊不退還保證金</p>
                    </div>
                    <div className = 'mb-5'>
                        <h5>報名資格</h5>
                        <p>黑客組：全台大專院校生及碩博生（每隊至少需有一人具備使用企業資源的能力並且儘量在專長中說明團隊或個人所具備的技術或其他能力。 </p>
                        <p>創客交流組：不限資格，工作坊會進行Figma教學，讓參賽者於Demo時讓評審實際操作作品。參考工具：Figma、Miro、Webflow、Sketch...</p>
                    </div>
                    <div className="mb-5">
                        <h5>報名方式</h5>
                        <p>自行組隊報名，每隊 3~5 人</p>
                        <p>梅竹黑客松提供臉書媒合社群供大家找隊友（附上連結）</p>
                        <p>組別選擇分為：黑客組、交流組、兩組混合報名</p>
                        <p>＊ 若報名含黑客組，則須將所有企業皆列入志願序</p>
                        <p>＊若單一企業超額，將採取亂數分發</p>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};
export default Sign_in;