import React from 'react';

const ShapeIllusion = () => {
    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
            {/* Central focal point - Main shapes */}
            <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-24 rounded-[70%_60%_70%_60%] border-2 border-blue-400/80"></div>
            <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-23 rounded-[70%_60%_70%_60%] border-2 border-cyan-400/60 ml-2 mt-2"></div>
            <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] w-22 rounded-[70%_60%_70%_60%] border-2 border-indigo-400/40 ml-4 mt-4"></div>

            {/* Left cluster */}
            <div className="absolute z-25 left-1/4 top-1/3 h-[320px] w-20 rounded-[65%_70%_65%_70%] border-2 border-violet-400/70"></div>
            <div className="absolute z-25 left-1/4 top-1/3 h-[300px] w-19 rounded-[65%_70%_65%_70%] border border-violet-400/50 ml-2 mt-2"></div>
            <div className="absolute z-20 left-1/4 top-1/3 h-[320px] w-20 rounded-[65%_70%_65%_70%] bg-violet-500/20 blur-2xl"></div>

            {/* Right cluster */}
            <div className="absolute z-25 right-1/4 top-1/2 h-[340px] w-21 rounded-[60%_70%_60%_70%] border-2 border-cyan-400/70"></div>
            <div className="absolute z-25 right-1/4 top-1/2 h-[320px] w-20 rounded-[60%_70%_60%_70%] border border-cyan-400/50 mr-2 mt-2"></div>
            <div className="absolute z-20 right-1/4 top-1/2 h-[340px] w-21 rounded-[60%_70%_60%_70%] bg-cyan-500/20 blur-2xl"></div>

            {/* Top accent */}
            <div className="absolute z-25 left-1/2 top-20 -translate-x-1/2 h-[280px] w-18 rounded-[68%_62%_68%_62%] border-2 border-blue-300/60"></div>
            <div className="absolute z-20 left-1/2 top-20 -translate-x-1/2 h-[280px] w-18 rounded-[68%_62%_68%_62%] bg-blue-400/15 blur-xl"></div>

            {/* Bottom accent */}
            <div className="absolute z-25 left-1/2 bottom-20 -translate-x-1/2 h-[300px] w-19 rounded-[72%_58%_72%_58%] border-2 border-indigo-300/60"></div>
            <div className="absolute z-20 left-1/2 bottom-20 -translate-x-1/2 h-[300px] w-19 rounded-[72%_58%_72%_58%] bg-indigo-400/15 blur-xl"></div>

            {/* Central glow effect */}
            <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-500/10 blur-2xl"></div>

            {/* Subtle background ambiance */}
            <div className="absolute z-5 left-1/4 top-1/4 h-80 w-80 rounded-full bg-violet-600/5 blur-3xl"></div>
            <div className="absolute z-5 right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-cyan-600/5 blur-3xl"></div>
        </div>
    );
};

export default ShapeIllusion;