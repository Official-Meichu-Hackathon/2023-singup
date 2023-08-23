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
        <div className='mx-[5%] text-[#6A747B]' id='Award'>
            <h2 className = 'w-full mx-auto text-black'>獎項資訊 </h2>
            <img src = 'assets/images/award.png' alt = 'hackathron award' className = 'my-[8vh]'/>
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
                        <h3 className ="w-fit mr-5 text-black">{item.team}</h3>
                        <p>{item.description}</p>
                    </div>
                <div className='ml-[1%]'>
                    <div className="h-auto transition  duration-500 ease-[cubic-bezier(1,0,1,0)]">
                    {/* // "max-h-0 overflow-hidden transition  duration-500 ease-[cubic-bezier(0,1,0,1)]"}> */}
                    {item.award.map((item,index) => {
                            return <p className='mt-4 pr-[10%]'>{item}</p>
                        })}
                    </div>
                </div>
            </div>
            <div className={item.dec}>
                <div className='h-full'>
                
                    <div className='w-full h-[18%]'></div>
                    <div className='w-full h-[6%] item-end bg-[#F3CD71]'></div>
                    <div className='w-full h-[18%]'></div>
                    <div className='w-full h-[6%] item-end bg-[#F3CD71]'></div>
                    <div className='w-full h-[18%]'></div>
                    <div className='w-full h-[6%] item-end bg-[#F3CD71]'></div>
                    <div className='w-full h-[18%]'></div>  
                    <div className='w-full h-[10%] item-end bg-[#A8D5CC]'></div>
                </div>
            </div>
            
        </>
    );
}
export default Award;
