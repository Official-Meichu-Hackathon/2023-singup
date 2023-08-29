"use client";
import { useEffect } from 'react';
import p5 from 'p5';

const WaveAnimation = () => {
  useEffect(() => {
    let numLines = 20;
    let sinAmp = 0.0;
    let cosAmp = 0.0;
    let phaseIncrement = -3;
    let globalPhaseOffset = 0;
    let dir = -0.08;
    let sinColor, cosColor;

    const sketch = (p) => {
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight * 0.6);
            sinColor = p.color(168, 213, 204);
            cosColor = p.color(243, 205, 113);
            cosAmp = 0.8 * (p.height / 2);
            sinAmp = 0.7 * (p.height / 2);
        };

        p.draw = () => {
            p.background(244, 244, 245);
            p.push();
            p.translate(0, p.height / 2);

            let numPoints = p.width;

            p.beginShape();

            for (let x = 0; x < numPoints; x++) {
                let angle = p.map(x, 0, p.width - 1, 0, 360);

                for (let i = 0; i < numLines; i++) {
                    // Adjust angle with phase increment
                    // let phasedAngle = angle + i * phaseIncrement + globalPhaseOffset;
                    let phasedAngle = (angle + i * phaseIncrement/5 + globalPhaseOffset)/1.2;

                    // y1 for phased angle
                    let phasedY1 = p.sin(p.radians(phasedAngle)) * sinAmp + (cosAmp - sinAmp);
                    
                    // cosy1 for phased angle
                    let phasedCosy1 = p.cos(p.radians(phasedAngle)) * cosAmp;

                    // Interpolate between y1 and cosy1
                    let gradientY = p.lerp(-phasedY1, -phasedCosy1, i / (numLines - 1));

                    p.strokeWeight(1.2);
                    p.stroke(p.lerpColor(sinColor, cosColor, i / (numLines - 1))); // Interpolate colors
                    p.line(x, gradientY, x + 1, gradientY);
                }
            }
            p.endShape();
            p.pop();
            globalPhaseOffset += 2;
            phaseIncrement += dir;
        };
    };

    new p5(sketch);
  }, []);

  return <div></div>;
};

export default WaveAnimation;
