"use client";
import React, { useState } from 'react';
import useCollapse from 'react-collapsed'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Award = () =>{
    const items = [
        {
            block_css:'ml-[1%] w-full',
            team:'黑客組',
            description:'每間企業獨立評選',
            award:['第一名：新台幣壹萬元整、實體獎品、實習或實習面試資格','第二名：新台幣伍仟元整、實體獎品','第三名：新台幣參仟元整、實體獎品'],
            dec:''
        },
        {
            block_css:'ml-[1%] w-full',
            team:'創客交流組',
            description:'可重複獲獎',
            award:['第一名：新台幣壹萬元整','第二名：新台幣伍仟元整','第三名：新台幣參仟元整'],
            dec:''
        },
        {
            block_css:'ml-[1%] w-[80%]',
            team:'梅竹大獎',
            description:'由各企業第一名共同角逐',
            award:['第一名：新台幣壹萬元整','第二名：新台幣伍仟元整','第三名：新台幣參仟元整'],
            dec:'w-[20%] '
        }
    ]
    return(
        <>
        <div className='md:mx-[5%] text-[#6A747B] my-12' id='award'>
            <h2 className = 'w-full mx-auto text-black hidden md:block'>獎項資訊 </h2>
            <div className = "block md:hidden w-full">
                <h4 className = 'w-fit m-auto text-black'>獎項資訊 </h4>
            </div>
            <img src = 'assets/images/award.png' alt = 'hackathron award' className = 'my-[8vh] w-full h-auto'/>
            <>
                <div className = 'block md:hidden mx-[5%] relative'>
                    <div className ="flex items-center ml-[1%] my-[3%]">
                        <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                        <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                    </div>
                    <Award_each item = {items[0]}/>
                    <div className ="flex items-center ml-[1%] my-[3%]">
                        <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                        <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                    </div>
                    <Award_each item = {items[1]}/>
                    <div className ="flex items-center ml-[1%] my-[3%]">
                        <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                        <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                    </div>
                    <Award_each item = {items[2]}/> 
                </div>
            </>
            <>
                <div className = 'hidden md:block relative'>
                <img src='assets/images/Award_decoration_1.png' className = 'absolute w-[30%] top-[-16vw] left-[-6vw] z-[-10]'></img>   
                <img src='assets/images/Award_decoration_2.png' className = 'absolute w-[30%] bottom-[-5vw] right-[-3vw] z-[-10]'></img>   
                    <div className ="flex items-center ml-[1%]">
                        <div className ="flex-1   h-full">
                            <div className='w-[90%] border-t-2 border-solid border-[#6A747B]'></div>
                        </div>
                        <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                        <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                    </div>
                    <div className='flex mb-7'>
                        <Award_each item = {items[0]}/>
                        <Award_each item = {items[1]}/>
                    </div>
                    <div className ="flex items-center ml-[1%]">
                        <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                        <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                    </div>
                    <div className='flex h-auto'>
                        <Award_each item = {items[2]}/>
                    </div>
                    
                </div>
            </>
        </div>
        </>
    );
} 
const Award_each = ({item}) => {
    // const [isSelected,setIsSelected] = useState(false)
    // const toggle = () =>{
    //     setIsSelected(!isSelected)
    // } 
    return(
        <>
            <div className={item.block_css} >
                    <div className ="flex flex-wrap items-end w-[90%]">
                        <h3 className ="w-fit mr-5 text-black hidden md:block ">{item.team}</h3>
                        <h6 className ="w-fit mr-5 text-black block md:hidden">{item.team}</h6>
                        <p className = 'leading-none text-[0.75em]'>{item.description}</p>
                    </div>
                <div className='ml-[1%]'>
                    <div className="h-auto transition  duration-500 ease-[cubic-bezier(1,0,1,0)]">
                    {/* // "max-h-0 overflow-hidden transition  duration-500 ease-[cubic-bezier(0,1,0,1)]"}> */}
                    {item.award.map((item,index) => {
                            return <p className=' mt-2 md:mt-4 pr-[10%]'>{item}</p>
                        })}
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Award;
