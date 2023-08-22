"use client"
import React, { useEffect, useRef, useState } from "react";
import '@styles/globals.css'
// import { Dimensions, StyleSheet } from "react-native";
// import Svg, {
//   Defs, LinearGradient, Stop, Circle,
// } from "react-native-svg";
// import Animated from "react-native-reanimated";


const CountDown = () =>{
    const a = 600;
    const [timerDay,setTimeDay] = useState(0);
    const [timerHour,setTimeHour] = useState(0);
    const [timerMinute,setTimeMinute] = useState(0);
    const [timerSecond,setTimeSecond] = useState(0);
    let Second;
    let interval = useRef();
    const startTimer = () =>{
        const countDownDate = new Date('01/01/2024 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;
        interval = setInterval(() =>{
            const d = Math.floor(distance/(1000*60*60*24));
            const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
            const m = Math.floor((distance%(1000*60*60))/(1000*60));
            const s = (distance%(1000*60))/1000

            Second = s;
            setTimeDay(d);
            setTimeHour(h);
            setTimeMinute(m);
            setTimeSecond(s);
            
        },1000);
    }
    useEffect(()=>{
        startTimer();
        
        return () =>{
            clearInterval(interval.current);
        }
    })
    return(
        <div className='w-[75%] m-auto'>
            {timerSecond}
            <div className = "w-full h-auto bg-gray-100 flex justify-between">
                <div className="w-full aspect-[1/1]"><Circle now={timerDay} up = {365} word = "Days"/> </div>
                <div className="w-full aspect-[1/1]"><Circle now={timerHour} up = {24} word = "Hours"/> </div>
                <div className="w-full aspect-[1/1]"> <Circle now={timerMinute} up = {60} word = "Mins"/> </div>
                <div className="w-full aspect-[1/1]"><Circle now={timerSecond} up = {60} word = "Seconds"/> </div>
            </div>
        </div>
    );
};

const Circle =  ({now, up,word})  =>{
    const PI = 3.141592650897935;
    const len = 0.94*100*0.75/4*PI
    const percentage = 0.94*75*0.75/4*PI
    const a = now
    const b = up
    

    return (
    <>  
            {/* <p className = "bg-gray-400">Countdown Timer</p> */}
            <div className ="h-full w-full relative">
                <svg className="w-full h-full top-0">
                    <circle className="count"
                        cx='50%'
                        cy='50%'
                        r="47%" 
                        fill="none" 
                        stroke="black" 
                        stroke-width="3%">
                    </circle>
                </svg>
                <svg className="w-full h-full  top-0 left-0 static -rotate-90 absolute">
                    <circle className=""
                        stroke-dasharray={`${len}`+'vw'} 
                        stroke-dashoffset={`${percentage}`+'vw'}
                        cx='50%'
                        cy='50%'
                        r="47%" 
                        fill="none" 
                        stroke-width="4.5%"
                        stroke-linecap="round" 
                        stroke="lightgreen" 
                        >                        
                    </circle>
                </svg>
                <div className = " w-full h-full">
                    {Math.floor(now)}
                    {up}
                    {word}
                </div>
            </div>
        </>
    );
};

export default CountDown;