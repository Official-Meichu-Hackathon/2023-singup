import React from "react";
import '@styles/globals.css'
// import { Dimensions, StyleSheet } from "react-native";
// import Svg, {
//   Defs, LinearGradient, Stop, Circle,
// } from "react-native-svg";
// import Animated from "react-native-reanimated";


const CountDown = () =>{
    return(
        <section className ="">
            <div className="countdown_box">
                <p >Countdown Timer</p>
                <svg className="countdown_circle">
                    <circle cx="100" cy="100" r="100" fill="none" stroke="black" stroke-width="12"></circle>
                </svg>
                <svg className="countdown_circle">
                    <circle stroke-dasharray="628.3185307179587" stroke-dashoffset="606.7462611633088" r="100" cx="100" cy="100" fill="none" stroke-linecap="round" stroke="lightgreen" stroke-width="12"></circle>
                </svg>
            </div>
        </section>
    );
};

export default CountDown;