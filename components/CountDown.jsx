import React from "react";
import '@styles/globals.css'
// import { Dimensions, StyleSheet } from "react-native";
// import Svg, {
//   Defs, LinearGradient, Stop, Circle,
// } from "react-native-svg";
// import Animated from "react-native-reanimated";


const CountDown = () =>{
    const a = 600;
    const x = 0;
    return(
        <div className = "w-full h-auto bg-gray-100 flex justify-between">
            <div className="w-full aspect-[1/1]"> </div>
            <div className="w-full aspect-[1/1] bg-gray-300"> temp </div>
            <div className="w-full aspect-[1/1]"> <Circle /> </div>
            <div className="w-full aspect-[1/1] bg-gray-300"> temp </div>
        </div>
    );
};

function Circle (){
    const PI = 3.141592650897935;
    const a = 120
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
                <svg className="w-full h-full  top-0 left-0 static ">
                    <circle className=""
                        stroke-dasharray="628.3185307179587" 
                        stroke-dashoffset="323"
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
            </div>
        </>
    );
};

export default CountDown;