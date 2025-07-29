import React from 'react';
import { motion } from 'framer-motion';

const BecomeInstructor = () => {
  return (
    <div className="w-full px-4 py-12 mt-32 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Image Side */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="https://i.ibb.co/wZJJz8qG/never-Sto-Learning.jpg"
          alt="Become Instructor"
          className="w-[90%] max-w-[400px] rounded-xl object-contain"
        />
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
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0A5EB0]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Become an Instructor
        </motion.h2>

        {/* Typewriter animation */}
        <p className="text-[19px]  sm:text-xl text-black font-semibold mb-5 dark:text-[#FFCFEF] ">
          Empower students. Teach from anywhere.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#0A5EB0] hover:bg-[#FFCFEF] hover:text-black text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
        >
          Get Started
        </motion.button>
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
