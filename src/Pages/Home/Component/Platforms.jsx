import React from 'react';
import { useNavigate } from 'react-router';

const Platforms = () => {
    const navigate=useNavigate()
  return (
    <section className="relative flex flex-col lg:flex-row gap-10 items-center px-6 md:px-15 lg:px-25 py-10 mb-15 md:mb-0 overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 pointer-events-none" />

      {/* text content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center w-full">

        {/* left text */}
        <div className="flex gap-6 flex-col lg:w-1/2">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full w-fit">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            </svg>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Top Platforms
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            Explore Online Learning Platforms
          </h1>

          <p className="text-blue-50 font-mono text-lg leading-relaxed max-w-xl">
            Discover popular learning platforms like Udemy, Coursera, edX, Khan Academy,
            Alison, and more offering both free and paid courses.
          </p>

          <div className="flex items-center gap-3 text-white/80 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className='underline font-mono text-white font-medium cursor-pointer' onClick={()=>{navigate('/explore')}}>Wanna Explore more??</span>
          </div>
        </div>

        {/* right logos */}
        <div className="relative lg:w-1/2">
          <div className="relative z-10 flex flex-col items-center justify-center gap-8">

            {/* row 1 */}
            <div className="flex gap-5">
              <Logo src="https://i.ibb.co.com/xSYXRLMK/Screenshot-2025-12-11-225942.png" w={140} />
              <Logo src="https://i.ibb.co.com/BK3XP4ZM/Screenshot-2025-12-11-230019.png" w={140} />
            </div>

            {/* row 2 */}
            <div className="flex gap-5">
              <Logo src="https://i.ibb.co.com/L2MNQK9/Screenshot-2025-11-28-125756.png" w={160} />
              <Logo src="https://i.ibb.co.com/twgR8DL9/Screenshot-2025-11-28-130644.png" w={180} />
              <Logo src="https://i.ibb.co.com/7dhqRQJB/Screenshot-2025-11-28-131003.png" w={160} />
            </div>

           
            {/* row 3*/}
            <div className="flex gap-5">
              <Logo src="https://i.ibb.co.com/mr90SdQ2/udemy.png" w={160} />
              <Logo src="https://i.ibb.co.com/tPKR4D5T/edx.png" w={180} />
              <Logo src="https://i.ibb.co.com/cXKcdWm2/Coursera-Logo.png" w={160} />
            </div>

            
            {/* row  */}
            <div className="flex gap-5">
              <Logo src="https://i.ibb.co.com/prQp9qKn/10min-School.png" w={140} />
              <Logo src="https://i.ibb.co.com/BK3XP4ZM/Screenshot-2025-12-11-230019.png" w={140} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

/* reusable logos to optimize the component */
const Logo = ({ src, w }) => (
  <div className="bg-white rounded-xl shadow-sm">
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      width={w}
      height={60}
      className="h-14 object-contain px-4"
    />
  </div>
);

export default Platforms;
