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
  const step1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.33], [1, 1, 0]);
  const step1Scale = useTransform(scrollYProgress, [0, 0.3, 0.33], [1, 1, 0.8]);

  // STEP 2: Visible from 33% to 66% scroll
  const step2Opacity = useTransform(scrollYProgress, [0.3, 0.33, 0.63, 0.66], [0, 1, 1, 0]);
  const step2Scale = useTransform(scrollYProgress, [0.3, 0.33, 0.63, 0.66], [0.8, 1, 1, 0.8]);

  // STEP 3: Visible from 66% to 100% scroll
  const step3Opacity = useTransform(scrollYProgress, [0.63, 0.66, 1], [0, 1, 1]);
  const step3Scale = useTransform(scrollYProgress, [0.63, 0.66, 1], [0.8, 1, 1]);

  return (
    <div className="scroll-steps-wrapper">
      <div className="text-9xl text-center mb-20 text-white font-extrabold w-full">
        <h2>How It Works?</h2>
        <p>Three simple steps to start learning</p>
      </div>
      {/* Tall container to enable scrolling - 300vh = 3x screen height */}
      <div ref={containerRef} className="scroll-container pt-20 ">

        {/* Section heading */}


        {/* Sticky container keeps steps visible while scrolling */}
        <div className="steps-sticky-container ">

          {/* STEP 1 */}
          <motion.div
            className="step-card flex items-center justify-around "
            style={{ opacity: step1Opacity, scale: step1Scale }}
          >
            <div className="step-number text-9xl">1</div>
            <div>            
              <h3 className='text-7xl lg:text-9xl text-right text-white font-bold'>Choose Your Course</h3>
              <p className='text-white text-right text-2xl font-medium my-10'>Browse through free and paid courses</p></div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            className="step-card"
            style={{ opacity: step2Opacity, scale: step2Scale }}
          >
            <div className="step-number">2</div>
            <h3>Login to Platform</h3>
            <p>Access the course on the learning platform</p>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            className="step-card"
            style={{ opacity: step3Opacity, scale: step3Scale }}
          >
            <div className="step-number ">3</div>
            <h3>Enjoy the Course</h3>
            <p>Start learning and achieve your goals</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ScrollSteps;