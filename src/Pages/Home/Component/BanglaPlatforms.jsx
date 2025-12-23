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
      courses: ["একাডেমিক কোর্স", "স্কিল ডেভেলপমেন্ট", "ভাষা শিক্ষা", "চাকরির প্রস্তুতি", "প্রোগ্রামিং"]
    },
    {
      id: 2,
      name: "Ostad",
      image: "https://i.ibb.co.com/ZRyGK1cD/Screenshot-2025-12-23-021547.png",
      type: "ফ্রি ও পেইড কোর্স",
      focus: "বিভিন্ন ধরনের কোর্স",
      courses: ["প্রোগ্রামিং", "ডিজিটাল মার্কেটিং", "গ্রাফিক ডিজাইন", "ফ্রিল্যান্সিং", "ব্যবসা"]
    },
    {
      id: 3,
      name: "Programming Hero",
      image: "https://i.ibb.co.com/RG3HR2Wr/Screenshot-2025-12-23-021443.png",
      type: "পেইড কোর্স",
      focus: "শুধুমাত্র ওয়েব ডেভেলপমেন্ট",
      courses: ["ওয়েব ডেভেলপমেন্ট", "ফ্রন্টএন্ড ডেভেলপমেন্ট", "ব্যাকএন্ড ডেভেলপমেন্ট", "ফুল স্ট্যাক"]
    },
    {
      id: 4,
      name: "Phitron",
      image: "https://i.ibb.co.com/cXrqtvNC/Screenshot-2025-12-23-021617.png",
      type: "পেইড কোর্স",
      focus: "শুধুমাত্র ওয়েব ডেভেলপমেন্ট",
      courses: ["ওয়েব ডেভেলপমেন্ট", "সফটওয়্যার ইঞ্জিনিয়ারিং", "প্রবলেম সলভিং", "DSA"]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-yellow-200 to-blue-500 text-transparent bg-clip-text">
              বাংলায় শেখার প্ল্যাটফর্ম
            </span>
          </h1>
          <p className="text-white text-xl max-w-2xl mx-auto">
            দেশের শীর্ষস্থানীয় অনলাইন শিক্ষা প্ল্যাটফর্মসমূহ
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col h-full relative">
                {/* Image Section with Overlay Title */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

                  {/* Platform Name on Image */}
                  <div className="absolute bottom-0 left-10 right-0 -mb-2">
                    <h2 className="text-2xl font-medium uppercase text-white mb-2 font-mono">
                      {platform.name}
                    </h2>
                  </div>

                  {/* Type Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="absolute top-0 right-0 bg-blue-950/90 px-4 py-2 rounded-lg backdrop-blur-lg border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.6)]
  "
                  >
                    <span className="text-sm font-bold text-white">
                      {platform.type}
                    </span>
                  </motion.div>

                </div>

                {/* Content Section */}
                <div className="px-2 py-4 flex-grow flex flex-col">
                  {/* Focus */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="mb-3"
                  >
                    <div className=" flex items-center justify-around gap-2 px-3 py-1 rounded-xl text-sm font-bold text-white bg-blue-600">
                      {platform.focus} <span><Cast></Cast></span>
                    </div>
                  </motion.div>

                  {/* Courses */}
                  <div className="flex-grow ">
                    <h3 className="text-lg flex gap-1 font-bold text-black mb-2">
                      <Bike className='text-yellow-400 '></Bike> কোর্স সমূহ:
                    </h3>
                    <ul className=" grid grid-cols-2 gap-0">
                      {platform.courses.map((course, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + 0.5 + idx * 0.1 }}
                          className="flex space-y-1 items-start justify-center gap-0"
                        >
                          <div className="w-2 h-2 rounded-full mt-2   " />
                          <span className="text-gray-700 text-xs">
                            {course} <span className='text-yellow-300'>|</span>|
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex items-center justify-center -mb-4 mt-2'>
                    <button className='bg-black text-white px-6 py-1 border border-blue-500'>
                      আরও জানুন
                    </button>
                  </div>

                </div>

                {/* Bottom Accent - Fixed at absolute bottom */}
                <div className="relative w-full">
                  <motion.div
                    className="h-3 -mb-1 bg-gradient-to-r from-blue-600 to-black -rotate-1"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-yellow-400 p-1 rounded-full">
            <div className="bg-black px-8 py-4 rounded-full">
              <p className="text-xl font-bold text-white">
                আপনার পছন্দের প্ল্যাটফর্মে আজই শুরু করুন ✨
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}