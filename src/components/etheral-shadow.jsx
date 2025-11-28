import React, { useRef, useId, useEffect, useMemo } from 'react';
import { animate, useMotionValue } from 'framer-motion';

function mapRange(value, fromLow, fromHigh, toLow, toHigh) {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = () => {
    const id = useId();
    const cleanId = id.replace(/:/g, "");
    const instanceId = `shadowoverlay-${cleanId}`;
    return instanceId;
};

export function Component({
    sizing = 'fill',
    color = 'rgba(128, 128, 128, 1)',
    animation,
    noise,
    style,
    className
}) {
    const id = useInstanceId();
    const animationEnabled = animation && animation.scale > 0;
    const feColorMatrixRef = useRef(null);
    const hueRotateMotionValue = useMotionValue(180);
    const hueRotateAnimation = useRef(null);
    const rafRef = useRef(null);

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;

    // Memoize filter calculations
    const filterSettings = useMemo(() => ({
        baseFrequency: animation ? `${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}` : '0.001,0.004',
        scale: displacementScale
    }), [animation?.scale, displacementScale]);

    useEffect(() => {
        if (feColorMatrixRef.current && animationEnabled) {
            if (hueRotateAnimation.current) {
                hueRotateAnimation.current.stop();
            }
            
            // Cancel any pending RAF
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            
            hueRotateMotionValue.set(0);
            
            // Batch DOM updates with RAF
            let lastUpdateTime = 0;
            const updateInterval = 1000 / 30; // Throttle to 30fps instead of 60fps
            
            hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
                duration: animationDuration / 30,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
                ease: "linear",
                delay: 0,
                onUpdate: (value) => {
                    const now = performance.now();
                    
                    // Throttle updates to reduce DOM manipulation
                    if (now - lastUpdateTime < updateInterval) {
                        return;
                    }
                    
                    lastUpdateTime = now;
                    
                    // Use RAF to batch DOM updates
                    if (rafRef.current) {
                        cancelAnimationFrame(rafRef.current);
                    }
                    
                    rafRef.current = requestAnimationFrame(() => {
                        if (feColorMatrixRef.current) {
                            // Use will-change hint for better performance
                            feColorMatrixRef.current.setAttribute("values", String(Math.round(value)));
                        }
                    });
                }
            });

            return () => {
                if (hueRotateAnimation.current) {
                    hueRotateAnimation.current.stop();
                }
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                }
            };
        }
    }, [animationEnabled, animationDuration, hueRotateMotionValue]);

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                ...style
            }}>
                
                          {/* Dark overlay (removed on hover) */}
              <div className="absolute md:top-1/4 lg:bottom-1/3   md:left-2/7 lg:left-2/5  bg-blue-100/40 blur-3xl md:w-96 lg:w-[500px] h-56 rounded-full   z-10"></div>

            <div
                style={{
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id}) blur(3px)` : "none",
                    willChange: animationEnabled ? 'filter' : 'auto',
                    transform: 'translateZ(0)', // Force GPU acceleration
                }}>
                {animationEnabled && (
                    <svg 
                        style={{ 
                            position: "absolute",
                            width: 0,
                            height: 0
                        }}>
                        <defs>
                            <filter id={id} colorInterpolationFilters="sRGB">
                                <feTurbulence
                                    result="undulation"
                                    numOctaves="2"
                                    baseFrequency={filterSettings.baseFrequency}
                                    seed="0"
                                    type="turbulence" />
                                <feColorMatrix 
                                    ref={feColorMatrixRef} 
                                    in="undulation" 
                                    type="hueRotate" 
                                    values="180" />
                                <feColorMatrix
                                    in="dist"
                                    result="circulation"
                                    type="matrix"
                                    values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0" />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="circulation"
                                    scale={filterSettings.scale}
                                    result="dist" />
                                <feDisplacementMap 
                                    in="dist" 
                                    in2="undulation" 
                                    scale={filterSettings.scale} 
                                    result="output" />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%",
                        willChange: animationEnabled ? 'transform' : 'auto',
                    }} />
            </div>
            <div className='w-full max-w-screen'
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    zIndex: 10
                }}>
                <h1 className="md:text-7xl text-4xl sm:text-5xl  font-bold  bg-gradient-to-r from-blue-600 via-blue-100 to-white text-transparent bg-clip-text outfit w-full relative z-20">
                    Empowering <br /> Your Learning Journey
                </h1>

                <h1 className='text-white lg:text-2xl z-10 outfit sm:my-10 my-5'>Learn with free courses, smart resources, and the skills you’ve always wanted to master.</h1>
            </div>
            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                        backgroundSize: noise.scale * 200,
                        backgroundRepeat: "repeat",
                        opacity: noise.opacity / 4,
                        pointerEvents: 'none'
                    }} />
            )}
        </div>
    );
}

// // Demo with controls
// export default function App() {
//     const [animation, setAnimation] = React.useState({ scale: 50, speed: 50 });
//     const [noise, setNoise] = React.useState({ opacity: 20, scale: 1 });
//     const [color, setColor] = React.useState('rgba(128, 128, 128, 1)');

//     return (
//         <div className="w-full h-screen bg-black">
//             <Component 
//                 animation={animation}
//                 noise={noise}
//                 color={color}
//             />
            
//             <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-4 rounded-lg text-white space-y-2 z-50">
//                 <div>
//                     <label className="text-sm">Animation Scale: {animation.scale}</label>
//                     <input 
//                         type="range" 
//                         min="1" 
//                         max="100" 
//                         value={animation.scale}
//                         onChange={(e) => setAnimation({...animation, scale: Number(e.target.value)})}
//                         className="w-full"
//                     />
//                 </div>
//                 <div>
//                     <label className="text-sm">Animation Speed: {animation.speed}</label>
//                     <input 
//                         type="range" 
//                         min="1" 
//                         max="100" 
//                         value={animation.speed}
//                         onChange={(e) => setAnimation({...animation, speed: Number(e.target.value)})}
//                         className="w-full"
//                     />
//                 </div>
//                 <div>
//                     <label className="text-sm">Noise Opacity: {noise.opacity}</label>
//                     <input 
//                         type="range" 
//                         min="0" 
//                         max="100" 
//                         value={noise.opacity}
//                         onChange={(e) => setNoise({...noise, opacity: Number(e.target.value)})}
//                         className="w-full"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }