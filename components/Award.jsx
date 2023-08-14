"use client";
import React, { useState } from 'react';
import useCollapse from 'react-collapsed'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Award = () =>{
    const items = [
        {
            block_css:'ml-[1%] w-[80%] md:w-[60%]',
            team:'黑客組',
            description:'每間企業獨立評選'
        },
        {
            block_css:'ml-[1%] w-[90%] md:w-[80%]',
            team:'創客交流組',
            description:'可重複獲獎'
        },
        {
            block_css:'ml-[1%] w-100%',
            team:'梅竹大獎',
            description:'由各企業第一名共同角逐'
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
    return(
        <div className={item.block_css} onClick={() => setIsActive_hack(!isActive_hack)}>
                <div className ="flex items-center">
                    <h3 className ="mr-5">{item.team}</h3>
                    <div className ="flex-1 border-t-2  border-solid border-[#6A747B]"></div>
                    <div className='rounded-full w-2 h-2 bg-[#6A747B]'></div>
                    
                </div>
                <p>{item.description}</p>
        </div>
    );
}
export default Award;