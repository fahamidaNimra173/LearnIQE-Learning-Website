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
      src: "https://i.ibb.co.com/YTNzxH6Y/ostad-logo.jpg",
    },
    {
      name: "edX",
      src: "https://i.ibb.co.com/k2v92qzC/edx.png",
    },
    {
      name: "Programming Hero",
      src: "https://i.ibb.co.com/5W5J9Nxb/ph-logo.jpg",
    },
    {
      name: "Ten Minute School",
      src: "https://i.ibb.co.com/3Q0C6gC/10min-School.png",
    },
    {
      name: "YouTube",
      src: "https://i.ibb.co.com/HLM5nycw/youtube-logopng.png",
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
      src: "https://i.ibb.co.com/YTNzxH6Y/ostad-logo.jpg",
    },
    {
      name: "edX",
      src: "https://i.ibb.co.com/k2v92qzC/edx.png",
    },
    {
      name: "Programming Hero",
      src: "https://i.ibb.co.com/5W5J9Nxb/ph-logo.jpg",
    },
    {
      name: "Ten Minute School",
      src: "https://i.ibb.co.com/3Q0C6gC/10min-School.png",
    },
    {
      name: "YouTube",
      src: "https://i.ibb.co.com/HLM5nycw/youtube-logopng.png",
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
      src: "https://i.ibb.co.com/YTNzxH6Y/ostad-logo.jpg",
    },
    {
      name: "edX",
      src: "https://i.ibb.co.com/k2v92qzC/edx.png",
    },
    {
      name: "Programming Hero",
      src: "https://i.ibb.co.com/5W5J9Nxb/ph-logo.jpg",
    },
    {
      name: "Ten Minute School",
      src: "https://i.ibb.co.com/3Q0C6gC/10min-School.png",
    },
    {
      name: "YouTube",
      src: "https://i.ibb.co.com/HLM5nycw/youtube-logopng.png",
    },
  ];

  const looped = [...logos, ...logos];

  return (
    <div className="w-full  bg-black/70 shadow-2xl shadow-black/40 overflow-hidden relative py-2 ">
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

      <div className="marquee-wrap w-full">
        <div
          className="animate-marquee whitespace-nowrap flex items-center gap-0"
          style={{ width: "200%" }}
        >
          {looped.map((logo, idx) => (
            <div
              key={idx}
              className="relative inline-flex items-center justify-center w-30 rounded-3xl h-15 md:w-48 md:h-24 flex-shrink-0 group"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full rounded-2xl max-w-full h-15 object-contain z-10 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark overlay (removed on hover) */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-300 z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
