"use client"
import React, { useEffect, useRef, useState } from "react";
import '@styles/globals.css'
import '@styles/animation.css'


const CountDown = () => {
    const [timerDay, setTimeDay] = useState(0);
    const [timerHour, setTimeHour] = useState(0);
    const [timerMinute, setTimeMinute] = useState(0);
    const [timerSecond, setTimeSecond] = useState(0);
    let interval = useRef();
    const startTimer = () => {
        const target = new Date("10/20/2023 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();
            const d = difference / (1000 * 60 * 60 * 24);
            const h = (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
            const m = (difference % (1000 * 60 * 60)) / (1000 * 60);
            const s = (difference % (1000 * 60)) / 1000;
            setTimeDay(d);
            setTimeHour(h);
            setTimeMinute(m);
            setTimeSecond(s);
        }, 1000);
    }
    useEffect(() => {
        startTimer();
        return () => clearInterval(interval.current);
    });
    return (
        <div className='w-full h-fit  pt-[20vh] hidden md:block relative'>
            <img src='/assets/images/meta3.png' id='meta' className='w-[20%] absolute top-[10vh] left-[3%]' />
            <div className='w-[60%] m-auto'>
                <h3 className='m-auto mb-10 text-[#6A747B]'>距離報名結束還有</h3>
                <div className="w-full h-auto flex justify-between">
                    <div className="w-[20%] aspect-[1/1]"><Circle now={timerDay} up={365} word="Days" /> </div>
                    <div className="w-[20%] aspect-[1/1]"><Circle now={timerHour} up={24} word="Hours" /> </div>
                    <div className="w-[20%] aspect-[1/1]"> <Circle now={timerMinute} up={60} word="Mins" /> </div>
                    <div className="w-[20%] aspect-[1/1]"><Circle now={timerSecond} up={60} word="Seconds" /> </div>
                </div>
            </div>
        </div>
    );
};

const Circle = ({ now, up, word }) => {
    const ratio = 80
    const PI = 3.141592650897935;
    const len = 0.94 * ratio * 0.60 / 4 * PI
    const percentage = (1 - now / up) * len
    const a = now
    const b = up


    return (
        <>
            <div className={`h-full w-full relative`}>
                <svg className="w-full h-full top-0">
                    <circle className="count"
                        cx='50%'
                        cy='50%'
                        r="47%"
                        fill="none"
                        stroke="#6A747B"
                        stroke-width="3%">
                    </circle>
                </svg>
                <svg className="w-full h-full  top-0 left-0 static -rotate-90 absolute ">
                    <circle className="color-[#A8D5CC]"
                        stroke-dasharray={`${len}` + 'vw'}
                        stroke-dashoffset={`${percentage}` + 'vw'}
                        cx='50%'
                        cy='50%'
                        r="47%"
                        fill="none"
                        stroke-width="3.7%"
                        strokeLinecap="round"
                        stroke="#A8D5CC"
                    >
                    </circle>
                </svg>
                <div className="w-full h-full absolute top-0 left-0 text-[#6A747B]">
                    <div className="w-full h-[50%] flex items-end">
                        <h3 className="mx-auto w-fit h-fit items-end text-[200%] lg:text-[250%]">{Math.floor(now)}</h3>
                    </div>
                    <div className="w-full h-[50%] flex items-start ">
                        <h5 className="mx-auto w-fit h-fit text-[100%] lg:text-[175%]">{word}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountDown;