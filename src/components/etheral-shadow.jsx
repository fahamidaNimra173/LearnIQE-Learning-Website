import React, { useRef, useId, useEffect, useMemo } from 'react';
import { animate, useMotionValue } from 'framer-motion';
// import { useNavigate } from 'react-router';

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

                <div className='flex items-center justify-center mx-2  gap-1 md:gap-5 lg:gap-10 '>
                  {/* Get Started Button */}
                  <button
                    className="flex bg-[#d7efff] rounded-[40px] justify-center items-center p-[3px] cursor-pointer border-[3px] border-[#2b88f9] shadow-[inset_0_0_20px_rgba(135,206,250,0.7),0_0_25px_rgba(135,206,250,0.9)] transition-shadow duration-300"
                    // onClick={() => navigate("/your-path")}
                  >
                    <span className="flex-1 flex items-center justify-center text-[#003f8a] text-[15px] sm:text-[20px] font-semibold md:font-bold outfit tracking-wide px-[10px]">
                      Get Started!
                    </span>

                    <span className="w-[45px] h-[45px] flex-shrink-0 bg-[#ffe55c] flex items-center justify-center rounded-full border-[3px] border-[#003f8a] group">
                      <svg
                        width="16"
                        height="19"
                        viewBox="0 0 16 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:animate-[arrow_1s_linear_infinite] transition-all duration-[1.5s]"
                      >
                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                        <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
                      </svg>
                    </span>
                  </button>

                  {/* Learn More Button */}
                  <button
                    className="flex bg-[#d7efff] rounded-[40px] justify-center items-center p-[3px] cursor-pointer border-[3px] border-[#2b88f9] shadow-[inset_0_0_20px_rgba(135,206,250,0.7),0_0_25px_rgba(135,206,250,0.9)] transition-shadow duration-300"
                    // onClick={() => navigate("/learn-more")}
                  >
                    <span className="flex-1 flex items-center justify-center text-[#003f8a] text-[15px] sm:text-[20px] font-semibold md:font-bold outfit tracking-wide px-[10px]">
                      Learn More
                    </span>

                    <span className="w-[45px] h-[45px] flex-shrink-0 bg-[#ffe55c] flex items-center justify-center rounded-full border-[3px] border-[#003f8a] group">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:animate-[arrow_1s_linear_infinite] transition-all duration-[1.5s]"
                      >
                        <path
                          d="M13 5L20 12L13 19M4 12H20"
                          stroke="black"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                <style jsx>{`
                  @keyframes arrow {
                    0% {
                      opacity: 0;
                      margin-left: 0px;
                    }
                    100% {
                      opacity: 1;
                      margin-left: 10px;
                    }
                  }
                `}</style>


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
