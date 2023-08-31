// "use client";
// import { useEffect, useRef } from 'react';
// import p5 from 'p5';

// const Waveanimation = () => {
//     const containerRef = useRef();
//     useEffect(() => {
//         const XSPACING = 1;
//         const PERIOD = 1200;
//         const WAVE_COUNT = 20; // Number of positive amplitude waves, we'll mirror for negative amplitudes
//         const AMPLITUDE_STEP = 20;  // The difference in amplitude for each wave
//         const THETA_STEP = 0.05;    // The difference in theta for each wave
        
//         var YELLOW;
//         var GREEN;
        
//         let w;  // width of wave
//         let waves = [];
//         let dx;
//         let yvalues = [];

//         const sketch = (p) => {
            
//             p.setup = () => {
//                 // if(p.windowWidth <= 768){
//                 //     p.createCanvas(p.windowWidth, p.windowHeight * 0.7);    
//                 // } else if(p.windowHeight > 768 && p.windowHeight <= 992) {
//                 //     p.createCanvas(p.windowWidth, p.windowHeight * 0.6);    
//                 // } else {
//                 //     p.createCanvas(p.windowWidth, p.windowHeight * 0.6);    
//                 // }                
//                 p.createCanvas(p.windowWidth, p.windowHeight * 0.6);    
                
//                 YELLOW = p.color(243, 205, 113);
//                 GREEN = p.color(168, 213, 204);
                
//                 w = p.width + 50;
//                 dx = (p.TWO_PI / PERIOD) * XSPACING;
            
//                 // Generate wave attributes programmatically
//                 for (let i = 0; i < WAVE_COUNT; i++) {
                            
//                     waves.push({
//                         amplitude: 200 - i * AMPLITUDE_STEP,
//                         theta: 0 + i * THETA_STEP,  // phaseAngle
//                     });
//                 }
                
//                 yvalues = new Array(waves.length).fill().map(() => new Array(p.floor(w / XSPACING)));
//             };

//             p.draw = () => {
//                 // p.background(244, 244, 245);
//                 p.background(234, 234, 236);
//                 for (let i = 0; i < waves.length; i++) {
//                     calcWave(i);
//                     renderWave(i);
//                 }
//             };

//             // p.windowResized = () => {
//             //     p.resizeCanvas(p.windowWidth, p.windowHeight * 0.6);
//             //     w = p.width + 50; 
//             //     dx = (p.TWO_PI / PERIOD) * XSPACING; 
//             //     console.log(p.windowWidth);
//             // };
            
//             function calcWave(index) {
//                 waves[index].theta += 0.05;  // speed
//                 let x = waves[index].theta;
//                 for (let i = 0; i < yvalues[index].length; i++) {
//                     yvalues[index][i] = p.sin(x) * waves[index].amplitude;
//                     x += dx;
//                 }
//             };

//             function renderWave(index) {
//                 p.noStroke();
//                 for (let x = 0; x < yvalues[index].length; x++) {
//                     let y = p.height / 2 + yvalues[index][x];
//                     let t = p.map(y, 0, p.height, 0, 1);  
//                     let col = p.lerpColor(YELLOW, GREEN, t); 
//                     p.fill(col); 
//                     p.ellipse(x * XSPACING, p.height / 2 + yvalues[index][x], 2, 2);
//                 }
//             }
//         };

//         new p5(sketch, containerRef.current);
//     }, []);

//     return <div className="sketch-container" ref={containerRef}></div>;
// }

// export default Waveanimation;