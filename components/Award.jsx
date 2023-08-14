"use client";
import React, { Fragment } from 'react';

const Award = () =>{
    return(
        <div className='mx-[5%] text-[#6A747B]'>
            <h1>獎項資訊 </h1>
            
            <div className='ml-[1%] w-[80%] md:w-[60%]'>
                <div className ="flex items-center">
                    <h3 className ="mr-5">黑客組</h3>
                    <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                    <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                </div>
                <p>每間企業獨立評選</p>
            </div>

            <div className='ml-[1%] w-[90%] md:w-[80%]'>
                <div className ="flex items-center">
                    <h3 className ="mr-5">創客交流組</h3>
                    <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                    <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                </div>
                <p>可重複獲獎</p>
            </div>

            <div className='ml-[1%] w-[100%]'>
                <div className ="flex items-center">
                    <h3 className ="mr-5">梅竹大獎</h3>
                    <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                    <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                </div>
                <p>由各企業第一名共同角逐</p>
            </div>










        </div>
    );
}

export default Award;