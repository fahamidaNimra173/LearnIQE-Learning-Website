// LogoMarquee.jsx
import React from "react";

export default function LogoMarquee() {
  const logos = [
    {
      name: "Udemy",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Udemy_logo.svg",
    },
    {
      name: "Coursera",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Coursera_logo_2020.svg",
    },
    {
      name: "Ostad",
      src: "https://i.ibb.co/5kYjSgM/ostad-logo.png",
    },
    {
      name: "edX",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/EdX_Logo_2021.svg",
    },
    {
      name: "Programming Hero",
      src: "https://web.programming-hero.com/static/media/logo.5ad9b98f.png",
    },
    {
      name: "Ten Minute School",
      src: "https://upload.wikimedia.org/wikipedia/en/2/2b/Ten_Minute_School_logo.png",
    },
    {
      name: "YouTube",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    },
  ];

  const looped = [...logos, ...logos];

  return (
    <div className="w-full bg-transparent overflow-hidden relative py-6">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
        .marquee-wrap:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-wrap w-full">
        <div
          className="animate-marquee whitespace-nowrap flex items-center gap-10"
          style={{ width: "200%" }}
        >
          {looped.map((logo, idx) => (
            <div
              key={idx}
              className="relative inline-flex items-center justify-center w-40 h-20 md:w-48 md:h-24 flex-shrink-0 group"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain z-10 transition-transform duration-300 group-hover:scale-105"
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
