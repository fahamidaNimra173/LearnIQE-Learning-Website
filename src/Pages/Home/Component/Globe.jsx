import { useState, useEffect } from "react";

export default function OptimizedGlobe() {
  const [connections, setConnections] = useState([]);

  // Generate random connections on mount
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
    <div className="relative w-full min-h-screen overflow-hidden mt-20 py-20 bg-black">
      {/* Header Content */}
      <div className="text-center mb-8 bg-black/10 py-10 relative z-40">
        <h1 className="md:text-4xl lg:text-6xl leading-10 text-2xl font-bold text-[#ffff09] uppercase">
          <span className="text-blue-400">Join</span> the Movement to Learn & Grow
        </h1>
        <p className="text-base md:text-lg font-normal text-neutral-200 font-mono max-w-md mt-2 mx-auto">
          This globe is interactive and customizable. Enjoy exploring!
        </p>
        <div className="flex gap-10 text-white items-center justify-center my-20 z-40">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-mono">150+</h1>
            <h1 className="uppercase text-lg font-medium my-5">Free Courses</h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-mono">10</h1>
            <h1 className="uppercase text-lg font-medium my-5">Platforms</h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-mono">10+</h1>
            <h1 className="uppercase text-lg font-medium my-5">Categories</h1>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute w-full bottom-0 inset-x-0 h-80 bg-gradient-to-b pointer-events-none select-none from-transparent via-black to-black z-40" />

      {/* CSS Globe - Lightweight alternative */}
      <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
        <div className="relative w-[500px] h-[500px]">
          {/* Main Globe Sphere */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#547ad9] via-[#031f66] to-[#020b2e] shadow-2xl overflow-hidden">
            {/* Globe grid pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`lat-${i}`}
                  className="absolute w-full border-1 z-20 border-blue-200/90"
                  style={{ top: `${(i + 1) * 12.5}%` }}
                />
              ))}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`lng-${i}`}
                  className="absolute h-full z-20 border-1 border-blue-200/90"
                  style={{ left: `${(i + 1) * 8.33}%` }}
                />
              ))}
            </div>

            {/* Animated overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/90 to-transparent animate-pulse" />

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
                  d={`M ${conn.startX}% ${conn.startY}% Q ${
                    (conn.startX + conn.endX) / 2
                  }% ${Math.min(conn.startY, conn.endY) - 20}% ${conn.endX}% ${
                    conn.endY
                  }%`}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  opacity="0.6"
                />
                {/* Start point */}
                <circle
                  cx={`${conn.startX}%`}
                  cy={`${conn.startY}%`}
                  r="4"
                  fill="#06b6d4"
                  className="animate-pulse"
                />
                {/* End point */}
                <circle
                  cx={`${conn.endX}%`}
                  cy={`${conn.endY}%`}
                  r="4"
                  fill="#3b82f6"
                  className="animate-pulse"
                />
              </svg>
            ))}

            {/* Glow effect */}
            <div className="absolute z-10 -inset-1 rounded-full bg-[#060269] blur-2xl" />
          </div>

          {/* Outer atmosphere glow */}
          <div className="absolute -z-5 -inset-8 rounded-full bg-[#6a65fa] blur-3xl " />

          {/* Rotation animation */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{
                animation: "rotate 20s linear infinite",
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