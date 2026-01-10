import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
/**
 * ScrollSteps Component for LearnIQ
 * Simple scroll-triggered steps that show the course enrollment process
 */
const ScrollSteps = () => {
  // Reference to track scroll within this section
  const containerRef = useRef(null);

  // Get scroll progress (0 to 1) as user scrolls through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // STEP 1: Visible from 0% to 33% scroll
  const step1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.30], [1, 0.1, 0]);
  const step1Scale = useTransform(scrollYProgress, [0, 0.4, 0.40], [1, 3, 0.9]);

  // STEP 2: Visible from 33% to 66% scroll
  const step2Opacity = useTransform(scrollYProgress, [0.3, 0.34, 0.70, 0.77], [0, 1, 1, 0]);
  const step2Scale = useTransform(scrollYProgress, [0.3, 0.34, 0.70, 0.57], [5, 1, 0.5, 0.1]);

  // STEP 3: Visible from 66% to 100% scroll
  const step3Opacity = useTransform(scrollYProgress, [0.70, 0.77, 1], [0, 1, 1]);
  const step3Scale = useTransform(scrollYProgress, [0.70, 0.77, 5], [0.1, 0.9, 3]);

  return (
    <div className="scroll-steps-wrapper  bg-black w-full ">
      <div className="lg:text-9xl px-5 text-4xl  sm:text-7xl text-wrap overflow-x-hidden  text-center pt-20 pb-40 text-white font-extrabold w-full">
        <h2>How It <span className='text-blue-400'>Works?</span></h2>
        <p className="bg-gradient-to-r from-white via-blue-400 to-yellow-300 bg-clip-text text-transparent">
          Your Learning Journey In <span className='text-blue-500  border-2 p-1 rounded-b-2xl outfit'> 3</span> Easy Steps
        </p>

      </div>
      <div className='w-96 h-[600px]  hidden md:block rounded-4xl -rotate-45 bg-blue-500 blur-xl sticky z-10 opacity-90 top-2/7 left-2/6'>

      </div>
      <div className='w-96 overflow-hidden hidden md:block h-[550px] rounded-4xl -rotate-45 bg-yellow-500 blur-3xl sticky z-10 opacity-90 top-2/7 left-1/2'>

      </div>
      {/* Tall container to enable scrolling - 300vh = 3x screen height */}
      <div ref={containerRef} className="scroll-container pt-20 z-20 lg:px-20">

        {/* Section heading */}


        {/* Sticky container keeps steps visible while scrolling */}
        <div className="steps-sticky-container overflow-hidden">
          <div className='w-5/6 h-[600px] sm:hidden  rounded-4xl -rotate-45 bg-blue-500 blur-xl sticky -z-10 opacity-90 top-2/7 left-2/6'>

          </div>
          <div className='w-5/6 overflow-hidden block sm:hidden  h-[550px] rounded-4xl -rotate-45 bg-yellow-500 blur-3xl sticky -z-10 opacity-90 top-2/7 left-1/2'>

          </div>
          {/* STEP 1 */}
          <motion.div
            className="absolute px-5 text-center w-full flex-col md:flex-row flex items-center justify-between"
            style={{ opacity: step1Opacity, scale: step1Scale }}
          >
            <div className="  text-white text-[25vh] sm:text-[40vh]">1.</div>
            <div className='border-1 border-blue-400 mx-2 rounded-2xl -rotate-6 p-5 bg-black/15'>
              <h3 className="text-3xl md:text-7xl lg:text-9xl text-right text-white font-bold font-mono">
                Select A <br /> Course
              </h3>
              <p className="text-white text-right text-xl md:text-2xl font-medium my-10 font-mono">
                Explore free and paid courses from trusted platforms
              </p>
            </div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            className="absolute px-5 text-center w-full flex flex-col md:flex-row gap-x-24 items-center justify-between"
            style={{ opacity: step2Opacity, scale: step2Scale }}
          >
            <div className="  text-white text-[25vh] sm:text-[40vh]">2.</div>
            <div className='border-1 rounded-2xl mx-2 rotate-6 p-5 bg-black/5'>
              <h3 className="text-3xl md:text-7xl lg:text-9xl text-right text-white font-bold font-mono">
                Access the <br /> Platform
              </h3>
              <p className="text-white text-right  text-xl md:text-2xl font-medium my-10 font-mono">
                Sign in or create an account on the course provider
              </p>
            </div>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            className="absolute px-5 mb-15 text-center w-full flex flex-col md:flex-row gap-x-24 items-center justify-between"
            style={{ opacity: step3Opacity, scale: step3Scale }}
          >
            <div className="  text-blue-400 text-[25vh] sm:text-[40vh]">3.</div>
            <div className='border-1 border-blue-400 mx-2 rounded-2xl  p-5 bg-black/15'>
              <h3 className="text-3xl md:text-7xl lg:text-9xl text-right text-white font-bold font-mono">
                Start <br /> Learning
              </h3>
              <p className="text-white text-right text-xl md:text-2xl font-medium my-10 font-mono">
                Enroll and learn at your own pace
              </p>
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default ScrollSteps;