import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function OptimizedGlobe() {
  const [connections, setConnections] = useState([]);



  useEffect(() => {
    const generateConnections = () => {
      const newConnections = [];
      for (let i = 0; i < 8; i++) {
        newConnections.push({
          id: i,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2,
          startX: Math.random() * 100,
          startY: Math.random() * 100,
          endX: Math.random() * 100,
          endY: Math.random() * 100,
        });
      }
      setConnections(newConnections);
    };

    generateConnections();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden lg:mt-20 px-6 md:px-15 lg:px-25 pt-10 md:py-20 ">
      {/* Header Content */}
      <div className="text-center mb-8  py-13 relative z-40">
        <h1 className="md:text-4xl lg:text-6xl leading-10 text-2xl font-bold text-[#ffd209] uppercase">
          <span className="text-blue-400">Join</span> the Movement to Learn & Grow
        </h1>
        <div className="flex lg:max-w-8xl mx-auto lg:flex-row justify-center flex-col lg:items-start mt-10 md:mt-20  lg:gap-10 ">
          <div className="lg:max-w-2/4">
            <p className="md:text-[25px] text-[15px] lg:text-start font-mono  text-white"> Start learning today by choosing your preferred platform, course, and language. Explore both free and paid courses from trusted learning platforms to boost your skills. We bring selected courses together—dive deeper by exploring the original platforms and continue learning without limits.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-3  sm:gap-10 text-white items-center justify-center my-10 lg:my-20 z-40">
              <div>
                <h1 className="text-xl md:text-5xl lg:text-6xl font-bold font-mono">150+</h1>
                <h1 className="uppercase text-sm md:text-lg font-medium my-5">Free Courses</h1>
              </div>
              <div>
                <h1 className="text-xl md:text-5xl lg:text-6xl font-bold font-mono text-yellow-400">10</h1>
                <h1 className="uppercase text-sm md:text-lg font-medium my-5">Platforms</h1>
              </div>
              <div className="z-50">
                <h1 className="text-xl z-40 md:text-5xl lg:text-6xl font-bold font-mono">10+</h1>
                <h1 className="uppercase text-sm lg:text-lg font-medium my-5">Categories</h1>
              </div>
            </div>
          </div>



        </div>


      </div>

      {/* Gradient overlay */}
      <div className="absolute w-full  bottom-0 inset-x-0 h-80 bg-gradient-to-b pointer-events-none select-none from-transparent via-black to-black z-20" />

      {/* CSS Globe - Lightweight alternative with smooth scaling */}
      <div
        className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
        <div className="relative w-[500px] h-[300px] sm:h-[500px] ">
          {/* Main Globe Sphere */}
          <motion.div
            className="absolute inset-0 rounded-full z-20 bg-gradient-to-br from-[#d416de] via-[#ffffff] to-[#020b2e] shadow-2xl overflow-hidden"
            style={{ willChange: 'transform' }}
          >
            {/* Animated overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/90 to-transparent" />

            {/* Connection lines */}
            {connections.map((conn) => (
              <svg
                key={conn.id}
                className="absolute z-20 inset-0 w-full h-full pointer-events-none"
                style={{
                  animation: `fadeInOut ${conn.duration}s ease-in-out ${conn.delay}s infinite`,
                }}
              >
                <path
                  d={`M ${conn.startX}% ${conn.startY}% Q ${(conn.startX + conn.endX) / 2
                    }% ${Math.min(conn.startY, conn.endY) - 20}% ${conn.endX}% ${conn.endY
                    }%`}
                  fill="none"
                  stroke="#06b9d4"
                  strokeWidth="2"
                  opacity="0.6"
                />
                {/* Start point */}
                <circle
                  cx={`${conn.startX}%`}
                  cy={`${conn.startY}%`}
                  r="3"
                  fill="#06b6d4"
                  className="animate-pulse"
                />
                {/* End point */}
                <circle
                  cx={`${conn.endX}%`}
                  cy={`${conn.endY}%`}
                  r="4"
                  fill="#ffff55"
                  className="animate-pulse"
                />
              </svg>
            ))}

            {/* Glow effect */}
            <div className="absolute z-10 -inset-1 rounded-full bg-[#060269] blur-2xl" />
          </motion.div>

          {/* Outer atmosphere glow */}
          <div className="absolute -z-5 -inset-8 rounded-full bg-[#6a65fa] blur-3xl" />

          {/* Rotation animation */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div
              className="absolute rounded-t-full z-20 inset-0 bg-gradient-to-r from-blue-100/15 via-purple-600/35 blur-xs to-transparent"
              style={{
                animation: "rotate 10s linear infinite",
                willChange: 'transform' // Performance optimization
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: translateX(-100%) rotate(0deg);
          }
          to {
            transform: translateX(100%) rotate(360deg);
          }
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}