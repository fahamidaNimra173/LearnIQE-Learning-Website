import { Component } from "@/components/etheral-shadow";

const Banner = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Component
      color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
         />
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
