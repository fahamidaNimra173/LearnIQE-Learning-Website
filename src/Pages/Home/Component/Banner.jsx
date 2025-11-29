// import { Component } from "@/components/etheral-shadow";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Circle from "./Shared/circles";
import { Boxes } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <Circle></Circle>
      <Boxes className="text-blue-500 opacity-70    blur-sm bottom-39 left-0  w-[200px] h-[200px] absolute  z-50 "
       style={{
        animation:"spin 8s linear infinite",
         }}
       ></Boxes>
      <div className="mt-60 flex flex-col gap-5 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-3xl sm:text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          Empowering <br /> Your Learning Journey
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-white">
          Learn with free courses, smart resources, and the skills you’ve always wanted to master.
        </p>
        <div className='flex my-5 md:my-10 z-10 items-center justify-center mx-2  gap-1 md:gap-5 lg:gap-10 '>
          {/* Get Started Button */}
          <button
            className="flex z-30 bg-[#d7efff] rounded-[40px] justify-center items-center p-[3px] cursor-pointer border-[3px] border-[#2b88f9] shadow-[inset_0_0_20px_rgba(135,206,250,0.7),0_0_25px_rgba(135,206,250,0.9)] transition-shadow duration-300"
          // onClick={() => navigate("/your-path")}
          >
            <span className="flex-1 flex items-center justify-center text-[#003f8a] text-[15px] sm:text-[20px] font-semibold md:font-bold outfit tracking-wide px-[10px]">
              Get Started!
            </span>

            <span className="w-[45px] h-[45px] flex-shrink-0 bg-[#ffe55c] flex items-center justify-center rounded-full border-[3px] border-[#003f8a] group">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:animate-[arrow_1s_linear_infinite] transition-all duration-[1.5s]"
              >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
              </svg>
            </span>
          </button>

          {/* Learn More Button */}
          <button className="flex z-30 bg-[#d7efff] rounded-[40px] justify-center items-center p-[3px] cursor-pointer border-[3px] border-[#2b88f9] shadow-[inset_0_0_20px_rgba(135,206,250,0.7),0_0_25px_rgba(135,206,250,0.9)] transition-shadow duration-300"
          // onClick={() => navigate("/learn-more")}
          >
            <span className="flex-1 flex items-center justify-center text-[#003f8a] text-[15px] sm:text-[20px] font-semibold md:font-bold outfit tracking-wide px-[10px]">
              Learn More
            </span>

            <span className="w-[45px] h-[45px] flex-shrink-0 bg-[#ffe55c] flex items-center justify-center rounded-full border-[3px] border-[#003f8a] group">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:animate-[arrow_1s_linear_infinite] transition-all duration-[1.5s]"
              >
                <path
                  d="M13 5L20 12L13 19M4 12H20"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <style jsx>{`
                  @keyframes arrow {
                    0% {
                      opacity: 0;
                      margin-left: 0px;
                    }
                    100% {
                      opacity: 1;
                      margin-left: 10px;
                    }
                  }
                `}</style>

      </div>
    </div>
  );
};
export default Banner
















































// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const Banner = () => {
//   const slides = [

//     {
//       title: "   Learn Smarter, Grow Faster",
//       text: "Access quality content, submit assignments, and earn certifications – all at your own pace and schedule.",
//       image: "https://i.ibb.co.com/6CMt2Q8/home-based-learning-8968710-1280-1-1.png"
//     },
//     {
//       title: "Master Modern Skills from Anywhere",
//       text: "Unlock in-demand skills with flexible, expert-led online courses designed for real-world success.",
//       image: "https://i.ibb.co.com/s9ytFxV1/desk-7781833-1280-1.jpg"
//     },
//     {
//       title: "Advance Your Career with Confidence",
//       text: "Join a vibrant learning community and gain practical knowledge to accelerate your professional growth.",
//       image: "https://i.ibb.co/PZxCMhvb/cup-coffee-with-cinnamons-cookies.jpg.png"
//     },
//   ];

//   return (
//     <div className="h-[80vh]  w-full">
//       <Carousel
//         showArrows={false}
//         showThumbs={false}
//         showStatus={false}
//         infiniteLoop
//         autoPlay
//         interval={5000}
//         transitionTime={800}
//         swipeable
//         emulateTouch
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="relative h-[80vh]  w-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             {/* Semi-transparent dark overlay */}
//             <div className="absolute inset-0 bg-[#2A3335]/60"></div>

//             {/* Centered content */}
//             <div className="relative z-10  flex h-full md:pt-0  pt-18 items-center justify-center text-center text-white px-4">
//               <div className="space-y-4 max-w-2xl">
//                 <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">{slide.title}</h1>
//                 <p className="text-base md:text-lg drop-shadow-md">{slide.text}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Banner;
