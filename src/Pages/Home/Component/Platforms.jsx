import React from 'react';
import '../../../App.css';

const Platforms = () => {
    return (
        <div className='relative flex flex-col lg:flex-row gap-10 items-center px-6 md:px-15 lg:px-25 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 backdrop-blur-3xl py-16 border-y-2 border-blue-400/30'>

            {/* Text Section */}
            <div className='flex gap-6 flex-col lg:w-1/2'>
                <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit'>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                    </svg>
                    <span className='text-white font-semibold text-sm uppercase tracking-wider'>
                        Top Platforms
                    </span>
                </div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight'>
                    Explore Online Learning Platforms
                </h1>

                <p className='text-blue-50 text-lg leading-relaxed'>
                    Discover popular learning platforms like Udemy, Coursera, edX, Khan Academy,
                    Alison, and more offering both free and paid courses.
                </p>

                <div className='flex items-center gap-3 text-white/80 text-sm'>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span>Swipe to explore all platforms</span>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative lg:w-1/2">

                {/*LOW OPACITY BACKGROUND IMAGES */}
                <img
                    src="https://i.ibb.co.com/3mmZPXPq/Screenshot-2026-01-10-193019.png"
                    className="absolute top-0 left-10 w-32 opacity-20 rotate-[-8deg]"
                    alt=""
                />
                <img
                    src="https://i.ibb.co.com/YFpqBHSK/Screenshot-2025-11-30-183411.png"
                    className="absolute top-24 right-0 w-40 opacity-15 rotate-[6deg]"
                    alt=""
                />
                <img
                    src="https://i.ibb.co.com/4R6BjJ6s/Screenshot-2026-01-10-192645.png"
                    className="absolute bottom-10 left-20 w-36 opacity-20 rotate-[4deg]"
                    alt=""
                />
                <img
                    src="https://i.ibb.co.com/B8DKZdn/Screenshot-2026-01-10-192446.png"
                    className="absolute bottom-0 right-20 w-28 opacity-15 rotate-[-5deg]"
                    alt=""
                />

               
                <div className='relative z-10 flex opacity-95 flex-col items-center justify-center gap-10'>
                    {/* first row */}
                    <div className='flex gap-5'>
                        <div className='bg-white rounded-tl-4xl'>
                            <img className='h-15 w-35 rounded-tl-4xl' src="https://i.ibb.co.com/xSYXRLMK/Screenshot-2025-12-11-225942.png" alt="" />
                        </div>
                        <div className='bg-white rounded-tr-4xl'>
                            <img className='h-15 w-35 rounded-tr-4xl' src="https://i.ibb.co.com/BK3XP4ZM/Screenshot-2025-12-11-230019.png" alt="" />
                        </div>
                    </div>

                    {/* second row */}
                    <div className='flex gap-5'>
                        <div className='bg-white rounded-tl-4xl'>
                            <img className='h-15 w-40 rounded-tl-4xl' src="https://i.ibb.co.com/L2MNQK9/Screenshot-2025-11-28-125756.png" alt="" />
                        </div>
                        <div className='bg-white'>
                            <img className='h-15 w-45' src="https://i.ibb.co.com/twgR8DL9/Screenshot-2025-11-28-130644.png" alt="" />
                        </div>
                        <div className='bg-white rounded-tr-4xl'>
                            <img className='h-15 w-40 rounded-tr-4xl' src="https://i.ibb.co.com/7dhqRQJB/Screenshot-2025-11-28-131003.png" alt="" />
                        </div>
                    </div>

                    {/* third row */}
                    <div className='flex gap-5'>
                        <div className='bg-white rounded-l-4xl'>
                            <img className='h-15 w-40 rounded-bl-4xl' src="https://i.ibb.co.com/mr90SdQ2/udemy.png" alt="" />
                        </div>
                        <div className='bg-white'>
                            <img className='h-15 w-45' src="https://i.ibb.co.com/tPKR4D5T/edx.png" alt="" />
                        </div>
                        <div className='bg-white rounded-br-4xl'>
                            <img className='h-15 w-40 rounded-br-4xl' src="https://i.ibb.co.com/cXKcdWm2/Coursera-Logo.png" alt="" />
                        </div>
                    </div>

                    {/* fourth row */}
                    <div className='flex gap-5'>
                        <div className='bg-white rounded-bl-4xl'>
                            <img className='h-15 w-35 rounded-bl-4xl' src="https://i.ibb.co.com/prQp9qKn/10min-School.png" alt="" />
                        </div>
                        <div className='bg-white rounded-br-4xl'>
                            <img className='h-15 w-35 rounded-br-4xl' src="https://i.ibb.co.com/BK3XP4ZM/Screenshot-2025-12-11-230019.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Platforms;
