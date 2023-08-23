"use client"
import "@styles/globals.css"

const Activity = () => {
    return(<>
    <div className = "w-full my-12">
        <h2 className = "m-auto hidden md:block">活動願景</h2>
        <img src = 'assets/images/group_photo.png' className = 'w-full md:w-[60%] h-auto m-auto py-8' alt = 'group alt'/>
        <h4 className = "m-auto block md:hidden">活動願景</h4>
        <div className = 'w-[80%] m-auto'>
            <p className = 'my-4'>&emsp;&emsp;「2023 新竹 X 梅竹黑客松」 延續前一屆種下的創意種子，迎接新一年的盛會期待百花綻放，在近年人工智慧與科技蓬勃發展的洪流下，我們邀請到六間國際級企業與新竹市政府，剖析世界所期待得到解答的問題，並提供相關資源與指導，引領所有參賽者成為關鍵的最後一塊拼圖。</p>
            <p className = 'my-4'>&emsp;&emsp;梅竹黑客松就像一場盛大同樂會，一群「衷於解決問題」的人同聚一堂並勇於跳脫自我舒適圈，在發現與應用中，認識彼此與自己。兩天的比賽不單是激烈的隊伍競賽，更多的是透過團隊內的互補學習、隊伍與企業交流之間的教學相長，讓參賽者在梅竹黑客松中，「玩得像個小孩，想得像個大人」。</p>
            <p className = 'my-4'>&emsp;&emsp;我們始終堅信，每一個人的每一份想法都是無價的，在梅竹黑客松中你可以盡情揮灑各種想法，並學習利用有限的資源去創造無限可能期待各位參賽者能夠從生活中的細節挖掘出問題的根本，讓靈感化為行動，為你的人生自此展開不同樣貌。</p>
            <p className = 'my-4'>&emsp;&emsp;同時，我們延續自 2022 活動十周年以來所建立的成果存放平台，持續翻新與維護該平台，致力於保留所有人最珍貴的好點子，希望自全國菁英歷年所奠定的基礎上，為新的一年啟發靈感與激盪嶄新想法，飲水思源之際，保有自強不息的精神，達成善的循環回饋社會。</p>
        </div>
    </div>
    </>);
}
export default Activity;