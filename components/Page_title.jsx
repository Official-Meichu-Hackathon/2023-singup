import React from "react";
import WaveAnimation from "@styles/WaveAnimation";
import Waveanimation from "@styles/wave-animation";

const Page_title = () => {
    return(
    <>
        <div className = "hidden md:block aspect-[1440/800] w-full  relative bg-white">
            <h4 className="absolute title_bg z-10">
              2023
            </h4>
            <div className="absolute mt-3 top-[15%] left-0 z-0">
              <Waveanimation/>
            </div>
            <h1 className = 'absolute m-auto h-full top-[9%] left-[47%] text-[6vw] w-0 leading-normal '> 梅竹黑客松</h1>
            <h4 className = 'absolute right-[5%] text-[4vw] bottom-[17%] hack_font'>Oct. 21-22</h4>
            <h6 className = 'absolute right-[7%] text-[2vw] bottom-[13%] hack_font text-[#6A747B]'>11th MeiChu Hackathon</h6>
            <img src = '/assets/images/ball.svg' alt = "bg" className = 'w-[8%] right-[15%] top-[8%] h-auto absolute'/>
            <img src = '/assets/images/console.png' alt = "bg" className = 'w-[15%] left-[17%] bottom-[8%] h-auto absolute'/>

        </div> 
        <div className = "block md:hidden aspect-[411/725] w-full relative bg-white">
            <h4 className="absolute title_bg top-[1%]">
              2023
            </h4>
            <img src = '/assets/images/bg-straight.svg' alt = "bg" className = 'w-full h-auto pt-[10%]'/>
            <h1 className = 'absolute m-auto h-full top-[15%] left-[47%] text-[12vw] w-0 leading-normal '> 梅竹黑客松</h1>
            <h4 className = 'absolute right-[5%] text-[6vw] bottom-[21%] hack_font'>Oct. 21-22</h4>
            <h6 className = 'absolute right-[7%] text-[5vw] bottom-[15%] hack_font text-[#6A747B]'>11th MeiChu Hackathon</h6>
        </div>
    </>
  );
};
export default Page_title;
