import React from "react";

const Page_title = () => {
    return(
    <>
        <div className = "hidden md:block aspect-[1440/800] w-full  relative bg-white">
            <h4 className="absolute title_bg ">
              2023
            </h4>
            <img src = '/assets/images/bg-spin.svg' alt = "bg" className = 'w-full h-auto pt-[10%]'/>
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
            <h6 className = 'absolute right-[7%] text-[2vw] bottom-[13%] hack_font text-[#6A747B]'>11th Meichu Hackathon</h6>
            <img src = '/assets/images/ball.svg' alt = "bg" className = 'w-[8%] right-[15%] top-[8%] h-auto absolute'/>
            <img src = '/assets/images/console.png' alt = "bg" className = 'w-[15%] left-[17%] bottom-[8%] h-auto absolute'/>

        </div> 
        <div className = "block md:hidden aspect-[411/725] w-full relative bg-white">
            <h4 className="absolute title_bg top-[1%]">
              2023
            </h4>
            <img src = '/assets/images/bg-straight.svg' alt = "bg" className = 'w-full h-auto pt-[10%]'/>
            <div className = 'absolute m-auto h-full top-[2%] left-[44%] text-[12vw] w-[12vw] flex flex-col '>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>新</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>竹</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug mx-auto'>X</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>梅</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>竹</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>黑</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>客</h1>
              <h1 className  ='text-[12vw] w-[12vw] leading-snug'>松</h1>
              </div>
            <h4 className = 'absolute right-[5%] text-[6vw] bottom-[21%] hack_font'>Oct. 21-22</h4>
            <h6 className = 'absolute right-[7%] text-[5vw] bottom-[15%] hack_font text-[#6A747B]'>11th Meichu Hackathon</h6>
        </div>
    </>
  );
};
export default Page_title;
