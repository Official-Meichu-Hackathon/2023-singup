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
            <div className="w-full aspect-[1/1]"> <Circle/> </div>
            <div className="w-full aspect-[1/1] bg-gray-300"> temp </div>
        </div>
    );
};

function Circle (){
    return (
    <>  
            {/* <p className = "bg-gray-400">Countdown Timer</p> */}
            <div className ="h-full w-full">
                <svg className="w-full h-full">
                    <circle className=""
                        cx='50%'
                        cy='50%'
                        r="47%" 
                        fill="none" 
                        stroke="black" 
                        stroke-width="3%">
                    </circle>
                </svg>
                {/* <svg className="countdown_circle">
                    <circle 
                        stroke-dasharray="628.3185307179587" 
                        stroke-dashoffset={a} 
                        r="100" 
                        cx="100" 
                        cy="100" 
                        fill="none" 
                        stroke-linecap="round" 
                        stroke="lightgreen" 
                        stroke-width="12">                        
                    </circle>
                </svg> */}
            </div>
        </>
    );
};

export default CountDown;