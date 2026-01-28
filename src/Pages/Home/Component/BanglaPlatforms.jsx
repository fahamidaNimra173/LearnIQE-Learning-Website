import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Cast } from 'lucide-react';

export default function BanglaLearningPlatforms() {
  const platforms = [
    {
      id: 1,
      name: "10 Minute School",
      image: "https://i.ibb.co.com/999ZB1YB/Screenshot-2025-12-23-021519.png",
      type: "ফ্রি ও পেইড কোর্স",
      focus: "বিভিন্ন ধরনের কোর্স",
      courses: ["একাডেমিক কোর্স", "স্কিল ডেভেলপমেন্ট", "ভাষা শিক্ষা", "চাকরির প্রস্তুতি", "প্রোগ্রামিং"],
      url: "https://10minuteschool.com/"
    },
    {
      id: 2,
      name: "Ostad",
      image: "https://i.ibb.co.com/ZRyGK1cD/Screenshot-2025-12-23-021547.png",
      type: "ফ্রি ও পেইড কোর্স",
      focus: "বিভিন্ন ধরনের কোর্স",
      courses: ["প্রোগ্রামিং", "ডিজিটাল মার্কেটিং", "গ্রাফিক ডিজাইন", "ফ্রিল্যান্সিং", "ব্যবসা"],
      url: "https://ostad.app/"
    },
    {
      id: 3,
      name: "Programming Hero",
      image: "https://i.ibb.co.com/RG3HR2Wr/Screenshot-2025-12-23-021443.png",
      type: "পেইড কোর্স",
      focus: "শুধুমাত্র ওয়েব ডেভেলপমেন্ট",
      courses: ["ওয়েব ডেভেলপমেন্ট", "ফ্রন্টএন্ড ডেভেলপমেন্ট", "ব্যাকএন্ড ডেভেলপমেন্ট", "ফুল স্ট্যাক"],
      url: "https://www.programming-hero.com/"
    },
    {
      id: 4,
      name: "Phitron",
      image: "https://i.ibb.co.com/cXrqtvNC/Screenshot-2025-12-23-021617.png",
      type: "পেইড কোর্স",
      focus: "শুধুমাত্র ওয়েব ডেভেলপমেন্ট",
      courses: ["ওয়েব ডেভেলপমেন্ট", "সফটওয়্যার ইঞ্জিনিয়ারিং", "প্রবলেম সলভিং", "DSA"],
      url: "https://phitron.io/"
    }
  ];

  return (
    <div className="min-h-screen bg-black -mt-40 sm:-mt-10 lg:mt-2 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-7xl md:mx-auto">
        {/* Header - REDUCED ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-yellow-200 to-blue-500 text-transparent bg-clip-text">
              বাংলায় শেখার প্ল্যাটফর্ম
            </span>
          </h1>
          <p className="text-white font-mono text-xl md:max-w-2xl md:mx-auto">
            দেশের শীর্ষস্থানীয় অনলাইন শিক্ষা প্ল্যাটফর্মসমূহ
          </p>
        </motion.div>

        {/* Platforms Grid - OPTIMIZED */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col h-full relative">
                {/* Image Section - OPTIMIZED */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 will-change-transform"
                    style={{ transform: 'translateZ(0)' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) translateZ(0)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateZ(0)'}
                  />
                  
                  {/* Dark Overlay - INLINE GRADIENT */}
                  <div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)'
                    }}
                  />

                  {/* Platform Name */}
                  <div className="absolute bottom-0 left-10 right-0 -mb-2">
                    <h2 className="text-2xl font-bold text-yellow-300 mb-2 font-mono">
                      {platform.name}
                    </h2>
                  </div>

                  {/* Type Badge - REMOVED EXTRA ANIMATION */}
                  <div className="absolute top-0 right-0 bg-blue-950/90 px-4 py-2 rounded-lg border border-blue-400/40"
                       style={{
                         boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)'
                       }}>
                    <span className="text-sm font-bold text-white">
                      {platform.type}
                    </span>
                  </div>
                </div>

                {/* Content Section - REMOVED STAGGERED ANIMATIONS */}
                <div className="px-2 py-4 flex-grow flex flex-col">
                  {/* Focus */}
                  <div className="mb-3">
                    <div className="flex items-center justify-around gap-2 px-3 py-1 rounded-xl text-sm font-bold text-white bg-yellow-400">
                      {platform.focus} <span><Cast /></span>
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="flex-grow">
                    <h3 className="text-lg flex gap-1 font-bold text-black mb-2">
                      <Bike className='text-yellow-400' /> কোর্স সমূহ:
                    </h3>
                    <ul className="grid grid-cols-2 gap-0">
                      {platform.courses.map((course, idx) => (
                        <li
                          key={idx}
                          className="flex space-y-1 items-start justify-center gap-0"
                        >
                          <div className="w-2 h-2 rounded-full mt-2" />
                          <span className="text-gray-700 text-xs">
                            {course} <span className='text-yellow-300'>|</span>|
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className='flex items-center justify-center -mb-4 mt-2'>
                    <a href={platform.url} target='_blank' rel='noopener noreferrer'>
                      <button className='bg-black text-white px-6 py-1 border border-blue-500 transition-colors hover:bg-blue-600'>
                        আরও জানুন
                      </button>
                    </a>
                  </div>
                </div>

                {/* Bottom Accent - SIMPLIFIED */}
                <div className="relative w-full">
                  <div
                    className="h-3 -mb-1 -rotate-1"
                    style={{
                      background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(0, 0, 0))'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text - SIMPLIFIED */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-block p-1 rounded-full"
               style={{
                 background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(255, 255, 255), rgb(250, 204, 21))'
               }}>
            <div className="bg-black px-4 py-2 rounded-full">
              <p className="text-xs sm:text-xl font-bold text-white">
                আপনার পছন্দের প্ল্যাটফর্মে আজই শুরু করুন ✨
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}