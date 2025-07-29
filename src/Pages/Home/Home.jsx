import React from 'react';
import { motion } from "motion/react"
import Banner from './Components/Banner';
import TotalUsersTEachers from './Components/TotalUsersTEachers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TotalUsersTEachers></TotalUsersTEachers>
            <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center scale-110"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1470&q=80')",
                        zIndex: 0,
                    }}
                />

                {/* Overlay with Glass Effect */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 bg-white/10 backdrop-blur-md">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        Experience Clarity
                    </h1>
                    <p className="mt-4 text-lg text-white/90 max-w-xl">
                        A new perspective through the glass. Scroll down to explore the depth.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="relative z-20 mt-[-100px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">
                        {["Design", "Performance", "Simplicity"].map((title, index) => (
                            <motion.div
                                key={title}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl"
                            >
                                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                                <p className="text-white/90">
                                    Explore the power of {title.toLowerCase()} in modern interfaces with elegance and responsiveness.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;