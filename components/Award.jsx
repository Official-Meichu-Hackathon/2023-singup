"use client";
import React, { useState } from 'react';
import useCollapse from 'react-collapsed'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Award = () =>{
    const items = [
        {
            block_css:'ml-[1%] w-[80%] md:w-[60%] cursor-pointer',
            team:'黑客組',
            description:'每間企業獨立評選',
            award:['第一名：新台幣壹萬元整、實體獎品、實習或實習面試資格','第二名：新台幣伍仟元整、實體獎品','第三名：新台幣參仟元整、實體獎品']
        },
        {
            block_css:'ml-[1%] w-[90%] md:w-[80%] cursor-pointer',
            team:'創客交流組',
            description:'可重複獲獎',
            award:['第一名：新台幣壹萬元整','第二名：新台幣伍仟元整','第三名：新台幣參仟元整']
        },
        {
            block_css:'ml-[1%] w-100% cursor-pointer',
            team:'梅竹大獎',
            description:'由各企業第一名共同角逐',
            award:['第一名：新台幣壹萬元整','第二名：新台幣伍仟元整','第三名：新台幣參仟元整']
        }
    ]
    return(
        <>
        <div className='mx-[5%] text-[#6A747B]'>
            <h1>獎項資訊 </h1>
            {items.map((item,index) =>{
                return <Award_each key={index} item={item}/>;
            })}
        </div>
        </>
    );
} 
const Award_each = ({item}) => {
    const [isSelected,setIsSelected] = useState(false)
    const toggle = () =>{
        setIsSelected(!isSelected)
    }
    return(
        <>
            <div className={item.block_css} onClick={toggle} >
                    <div className ="flex items-center">
                        <h3 className ="mr-5">{item.team}</h3>
                        <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                        <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                        
                    </div>
                    <p>{item.description}</p>
            </div>
            <div className='ml-[1%]'>
                <div className={isSelected ?
                "h-auto transition  duration-500 ease-[cubic-bezier(1,0,1,0)]" 
                :"max-h-0 overflow-hidden transition  duration-500 ease-[cubic-bezier(0,1,0,1)]"}>
                {item.award.map((item,index) => {
                        return <h5 className='m-2 text-black'>{item}</h5>
                    })}
                </div>
            </div>
        </>
    );
}
export default Award;
