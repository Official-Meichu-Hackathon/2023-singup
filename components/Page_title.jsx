import React from "react";
// import WaveAnimation from "@styles/WaveAnimation";
// import Waveanimation from "@styles/wave-animation";
import Wave from "./Wave";
const Page_title = () => {
  return (
    <>
        <div className = "hidden md:block aspect-[1440/800] w-full  relative bg-white">
            <h4 className="absolute title_bg top-[2%] z-10">
              2023
            </h4>

            <div className="w-auto h-[36%] pt-[10%] absolute z-0">
              <Wave />
            </div>
            <div className = 'absolute m-auto h-full top-[7%] left-[48%] text-[4vw] w-[4vw] leading-snug flex flex-col'>
              <h1 className  ='text-[4vw] w-[4vw] leading-snug'>新</h1>
              <h1 className  ='text-[4vw] w-[4vw] leading-snug'>竹</h1>
              <h1 className  ='text-[4vw] w-[4vw] leading-snug mx-auto'>X</h1>
              <h1 className  ='text-[4vw] w-[4vw] leading-snug'>梅</h1>
              <h1 className  ='text-[4vw] w-[4vw] leading-snug'>竹</h1>
              <h1 className  ='text-[4vw] w-[4vw] leading-snug'>黑</h1>
              <h1 className  ='text-[4vw] w-[4vw] leading-snug'>客</h1>
              <h1 className  ='text-[4vw] w-[4vw] leading-snug'>松</h1>
              
              </div>

            <h4 className = 'absolute right-[5%] text-[4vw] bottom-[17%] hack_font'>Oct. 21-22</h4>
            <h6 className = 'absolute right-[5%] text-[2vw] bottom-[13%] hack_font font-normal text-[#6A747B]'>11th Hsinchu X Meichu Hackathon</h6>
            <img src = '/assets/images/ball.svg' alt = "bg" className = 'w-[8%] right-[15%] top-[8%] h-auto absolute'/>
            <img src = '/assets/images/console.png' alt = "bg" className = 'w-[15%] left-[12%] bottom-[8%] h-auto absolute'/>
      </div>
      <div className="block md:hidden aspect-[411/725] w-full relative">
        <h4 className="absolute title_bg top-[1%] z-30">2023</h4>

            <div className="w-auto h-[36%] pt-[10%] absolute z-0">
              <Wave />
            </div>
      
            <div className = 'absolute m-auto h-full top-[4%] left-[44%] text-[12vw] w-[12vw] flex flex-col '>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>新</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>竹</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug mx-auto'>X</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>梅</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>竹</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>黑</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>客</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>松</h1>
              </div>

            <h4 className = 'absolute right-[5%] text-[6vw] bottom-[16%] hack_font'>Oct. 21-22</h4>
            <h6 className = 'absolute right-[5%] text-[4vw] bottom-[13%] hack_font font-normal text-[#6A747B]'>11th Hsinchu X Meichu Hackathon</h6>

      </div>
    </>
  );
};
export default Page_title;
