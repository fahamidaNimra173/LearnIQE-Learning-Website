import React from 'react';
import { motion } from 'framer-motion';

const BecomeInstructor = () => {
  return (
    <div className="w-full px-6 md:px-25 bg-[#6c4370] py-12 mt-32 mb-15 flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-5">
      {/* Image Side */}
      <motion.div
        className="w-full lg:w-1/2 flex mb-3 justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Yellow box behind */}
          <div className="absolute inset-0 flex justify-center">
            <div className="bg-yellow-400 p-5 w-[950px] md:h-96 h-40 z-0 -ml-10 -mt-5 md:-mt-10 mr-6 "></div>
          </div>

          {/* Image on top */}
          <img
            src="https://i.ibb.co/wZJJz8qG/never-Sto-Learning.jpg"
            alt="Become Instructor"
            className="relative object-contain z-10"
          />
        </div>
      </motion.div>


      {/* Text Side */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 habibi uppercase text-[#5bffe4] "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Become <span className='text-pink-100'>an</span> Instructor
        </motion.h2>

        {/* Typewriter animation */}
        <p className="text-[19px]  sm:text-xl text-white font-semibold mb-5 dark:text-white habibi ">
          Teaching is more than just sharing knowledge—
          it’s about empowering someone to believe in themselves.

          As an instructor, you have the chance to make a real difference.
          To guide. To inspire. To help students see possibilities they never saw before.

          And the best part? You can do it from anywhere.
          Your voice, your passion, and your expertise are all you need.

          So if you’ve ever wanted to teach—this is your sign.
          Step forward. Share what you know.
          Empower students. Teach from anywhere.
        </p>

        <button

          className=" crush font-bold text-center "
        >
          <p>Get Started</p>
        </button>
      </motion.div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-typing {
          animation: typing 3s steps(30, end), blink 0.8s step-end infinite;
        }
        @keyframes blink {
          0%, 100% {
            border-color: transparent;
          }
          50% {
            border-color: #FFCFEF;
          }
        }
      `}</style>
    </div>
  );
};

export default BecomeInstructor;
