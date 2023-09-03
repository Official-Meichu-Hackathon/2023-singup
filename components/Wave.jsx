import React from "react";
import Marquee from 'react-fast-marquee';
const Wave = () => {
    const row1 = [
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
        "assets/images/wave1.jpg",
        "assets/images/wave2.jpg",
    ];
    return (
        <>
            <div className='h-full w-full hidden md:block z-0'>
                <Marquee direction="left" speed={100} delay={5} classNmae='h-[20%]'>
                    <div className="m-0 h-[36vw] w-auto z-0">
                        <img src={row1[0]} alt="" className='h-full' />
                    </div>
                    <div className="m-0 h-[36vw] w-auto z-0">
                        <img src={row1[1]} alt="" className='h-full' />
                    </div>

                </Marquee>
            </div>
            <div className='h-full w-full block md:hidden z-0'>
                <Marquee direction="left" speed={100} delay={5} classNmae='h-[20%]'>
                    <div className="m-0 h-[120vw] w-auto z-0">
                        <img src={row1[0]} alt="" className='h-full' />
                    </div>
                    <div className="m-0 h-[120vw] w-auto z-0">
                        <img src={row1[1]} alt="" className='h-full' />
                    </div>

                </Marquee>
            </div>
        </>
    );
}
export default Wave;
