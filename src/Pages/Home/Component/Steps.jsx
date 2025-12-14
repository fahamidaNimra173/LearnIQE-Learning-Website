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
  const step1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.40], [1, 1, 0]);
  const step1Scale = useTransform(scrollYProgress, [0, 0.4, 0.40], [1, 1, 0.5]);

  // STEP 2: Visible from 33% to 66% scroll
  const step2Opacity = useTransform(scrollYProgress, [0.4, 0.44, 0.60, 0.66], [0, 1, 1, 0]);
  const step2Scale = useTransform(scrollYProgress, [0.4, 0.44, 0.60, 0.66], [0.8, 1, 1, 0.8]);

  // STEP 3: Visible from 66% to 100% scroll
  const step3Opacity = useTransform(scrollYProgress, [0.63, 0.66, 1], [0, 1, 1]);
  const step3Scale = useTransform(scrollYProgress, [0.63, 0.66, 1], [0.8, 1, 1]);

  return (
    <div className="scroll-steps-wrapper px-5">
      <div className="text-9xl text-center pt-20 pb-40 text-white font-extrabold w-full">
        <h2>How It Works?</h2>
        <p>Three simple steps to start learning</p>
      </div>
      <div className='w-96 h-[500px] rounded-2xl -rotate-45 bg-blue-500 blur-2xl sticky z-10 opacity-90 top-2/7 left-2/6'>
        
      </div>
      {/* Tall container to enable scrolling - 300vh = 3x screen height */}
      <div ref={containerRef} className="scroll-container pt-20 z-20 lg:px-20">

        {/* Section heading */}


        {/* Sticky container keeps steps visible while scrolling */}
        <div className="steps-sticky-container ">

          {/* STEP 1 */}
          <motion.div
            className="absolute text-center w-full flex gap-x-24 items-center justify-between"
            style={{ opacity: step1Opacity, scale: step1Scale }}
          >
            <div className="step-number text-9xl">1</div>
            <div>
              <h3 className='text-7xl lg:text-9xl text-right text-white font-bold font-mono'>Choose Your <br /> Course</h3>
              <p className='text-white text-right text-2xl font-medium my-10 font-mono'>Browse through free and paid courses</p></div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            className="absolute text-center w-full flex gap-x-24 items-center justify-between "
            style={{ opacity: step2Opacity, scale: step2Scale }}
          >
            <div className="step-number text-9xl">2</div>
            <div>
              <h3 className='text-7xl lg:text-9xl text-right text-white font-bold font-mono'>Login to <br /> Platform</h3>
              <p className='text-white text-right text-2xl font-medium my-10 font-mono'>Access the course on the learning platform</p></div>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            className=" w-full flex items-center gap-x-24 justify-between "
            style={{ opacity: step3Opacity, scale: step3Scale }}
          >
            <div className="step-number text-9xl">
              3

            </div>
            <div>
              <h3 className='text-7xl lg:text-9xl text-right text-white font-bold font-mono'>Enjoy <br /> the Course</h3>
              <p className='text-white text-right text-2xl font-medium my-10 font-mono'> Start learning and achieve your goals</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ScrollSteps;