// LogoMarquee.jsx
import React from "react";

export default function LogoMarquee() {
  const logos = [
    {
      name: "Udemy",
      src: "https://i.ibb.co.com/r2LPHCD1/udemy.png",
    },
    {
      name: "Coursera",
      src: "https://i.ibb.co.com/7NRx2m7F/Coursera-Logo.png",
    },
    {
      name: "Ostad",
      src: "https://i.ibb.co.com/S8xMNzD/Screenshot-2025-11-28-125756.png",
    },
    {
      name: "edX",
      src: "https://i.ibb.co.com/gFLpnNxp/Screenshot-2025-11-28-130455.png",
    },
    {
      name: "Programming Hero",
      src: "https://i.ibb.co.com/vCnP0K2R/Screenshot-2025-11-28-130644.png",
    },
    {
      name: "Ten Minute School",
      src: "https://i.ibb.co.com/3Q0C6gC/10min-School.png",
    },
    {
      name: "YouTube",
      src: "https://i.ibb.co.com/zT2rbLsW/Screenshot-2025-11-28-131003.png",
    },
     {
      name: "Udemy",
      src: "https://i.ibb.co.com/r2LPHCD1/udemy.png",
    },
    {
      name: "Coursera",
      src: "https://i.ibb.co.com/7NRx2m7F/Coursera-Logo.png",
    },
    {
      name: "Ostad",
      src: "https://i.ibb.co.com/S8xMNzD/Screenshot-2025-11-28-125756.png",
    },
    {
      name: "edX",
      src: "https://i.ibb.co.com/gFLpnNxp/Screenshot-2025-11-28-130455.png",
    },
    {
      name: "Programming Hero",
      src: "https://i.ibb.co.com/vCnP0K2R/Screenshot-2025-11-28-130644.png",
    },
    {
      name: "Ten Minute School",
      src: "https://i.ibb.co.com/3Q0C6gC/10min-School.png",
    },
    {
      name: "YouTube",
      src: "https://i.ibb.co.com/zT2rbLsW/Screenshot-2025-11-28-131003.png",
    },
     {
      name: "Udemy",
      src: "https://i.ibb.co.com/r2LPHCD1/udemy.png",
    },
    {
      name: "Coursera",
      src: "https://i.ibb.co.com/7NRx2m7F/Coursera-Logo.png",
    },
    {
      name: "Ostad",
      src: "https://i.ibb.co.com/S8xMNzD/Screenshot-2025-11-28-125756.png",
    },
    {
      name: "edX",
      src: "https://i.ibb.co.com/gFLpnNxp/Screenshot-2025-11-28-130455.png",
    },
    {
      name: "Programming Hero",
      src: "https://i.ibb.co.com/vCnP0K2R/Screenshot-2025-11-28-130644.png",
    },
    {
      name: "Ten Minute School",
      src: "https://i.ibb.co.com/3Q0C6gC/10min-School.png",
    },
    {
      name: "YouTube",
      src: "https://i.ibb.co.com/zT2rbLsW/Screenshot-2025-11-28-131003.png",
    },
     {
      name: "Udemy",
      src: "https://i.ibb.co.com/r2LPHCD1/udemy.png",
    },
    {
      name: "Coursera",
      src: "https://i.ibb.co.com/7NRx2m7F/Coursera-Logo.png",
    },
    {
      name: "Ostad",
      src: "https://i.ibb.co.com/S8xMNzD/Screenshot-2025-11-28-125756.png",
    },
    {
      name: "edX",
      src: "https://i.ibb.co.com/gFLpnNxp/Screenshot-2025-11-28-130455.png",
    },
    {
      name: "Programming Hero",
      src: "https://i.ibb.co.com/vCnP0K2R/Screenshot-2025-11-28-130644.png",
    },
    {
      name: "Ten Minute School",
      src: "https://i.ibb.co.com/3Q0C6gC/10min-School.png",
    },
    {
      name: "YouTube",
      src: "https://i.ibb.co.com/zT2rbLsW/Screenshot-2025-11-28-131003.png",
    },
    {
      name: "Udemy",
      src: "https://i.ibb.co.com/r2LPHCD1/udemy.png",
    },
    {
      name: "Coursera",
      src: "https://i.ibb.co.com/7NRx2m7F/Coursera-Logo.png",
    },
    {
      name: "Ostad",
      src: "https://i.ibb.co.com/S8xMNzD/Screenshot-2025-11-28-125756.png",
    },
    {
      name: "edX",
      src: "https://i.ibb.co.com/gFLpnNxp/Screenshot-2025-11-28-130455.png",
    },
    {
      name: "Programming Hero",
      src: "https://i.ibb.co.com/vCnP0K2R/Screenshot-2025-11-28-130644.png",
    },
    {
      name: "Ten Minute School",
      src: "https://i.ibb.co.com/3Q0C6gC/10min-School.png",
    },
    {
      name: "YouTube",
      src: "https://i.ibb.co.com/zT2rbLsW/Screenshot-2025-11-28-131003.png",
    },
     
  ];

  const looped = [...logos, ...logos];

  return (
    <div className="w-full over  bg-black/70 shadow-2xl shadow-black/40  relative  ">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
        .animate-marquee {
          animation: marquee 42s linear infinite;
        }
        .marquee-wrap:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-wrap  w-full">
        <div
          className="animate-marquee whitespace-nowrap flex items-center sm:gap-0 gap-5"
          style={{ width: "200%" }}
        >
          {looped.map((logo, idx) => (
            <div
              key={idx}
              className="relative inline-flex items-center justify-center rounded-3xl h-10 sm:h-15 md:w-45 md:h-18 flex-shrink-0 group"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full rounded-2xl max-w-ful h-10 object-contain z-10 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark overlay (removed on hover) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300 z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
