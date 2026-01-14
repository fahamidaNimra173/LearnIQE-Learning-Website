import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Motivation = () => {
return (
<section className="lg:mt-40 mt-20 mb-30">
  <h1 className=" text-center uppercase lg:text-5xl text-2xl my-8 font-bold text-[#fbbc2c]">
    Stay <span className="text-[#1e8a78]">Inspired</span>, Stay <span className="text-[#1e8a78]">Strong</span>
  </h1>
      <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        Motivation<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
</section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/tTmwSZyP/download-2.jpg"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/n8r9N0zH/Quotes-Virallady-martinaraimondi12164-Profile-Pinterest.jpg"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/pv4qSPWd/Arabic-quote-Seek-knowledge-from-the-cradle-to-the-grave.jpg"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/YC1F1Pg/Health-and-Fitness.jpg"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/JjND5JRy/download-7.jpg"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/JjND5JRy/download-7.jpg"
        alt="Example image"
        rotate="-3deg"
        top="55%"
        left="65%"
        className="w-24 md:w-48"
      />
            <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/MxS7JvMj/download-5.jpg"
        alt="Example image"
        rotate="-3deg"
        top="45%"
        left="50%"
        className="w-24 md:w-48"
      />
            <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/jPPVF1xP/A-Winner-is-Dreamer.jpg"
        alt="Example image"
        rotate="-3deg"
        top="76%"
        left="35%"
        className="w-24 md:w-48"
      />
       <Card
        containerRef={containerRef}
        src="https://i.ibb.co.com/GQhPpsMy/download-4.jpg"
        alt="Example image"
        rotate="-3deg"
        top="46%"
        left="15%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};

export default Motivation;








































































// import React from 'react';

// const Motivation = () => {
//   return (
//     <div className="w-full my-30  relative mt-16 px-4 ">
//       {/* Background Image */}
//       <img
//         src="https://i.ibb.co/zhjjQyPG/didUKnow.jpg"
//         alt="Motivational"
//         className="w-full h-auto rounded-xl object-cover"
//       />

//       {/* Card overlaid at the bottom */}
//       <div className="max-w-3xl mx-auto animations bg-white  text-pink-500   rounded-xl shadow-lg md:-mt-50 -mt-20 relative z-10">
       
       
//        <div className='py-15 px-6 md:px-9'>
//             <div className='flex gap-10'>
//           {/* //star */}
//           <div class="loader">
//             <svg
//               viewBox="0 0 256 256"
//               class="star star1"
//               height="32"
//               width="32"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
//               ></path>
//             </svg>
//             <svg
//               viewBox="0 0 256 256"
//               class="star star2"
//               height="32"
//               width="32"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
//               ></path>
//             </svg>
//             <svg
//               viewBox="0 0 256 256"
//               class="star star3"
//               height="32"
//               width="32"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
//               ></path>
//             </svg>
//           </div>
//           {/* ------------ */}
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
//               The Resilience of Thomas Edison*
//             </h2>
//           </div>
//         </div>
//          <p className="italic text-center text-black merienda font-semibold md:text-lg leading-relaxed">
//           When Thomas Edison was a young boy, his teacher told him he was too stupid to learn anything. Later, he was fired from his first two jobs for being "non-productive." Despite more than 1,000 failed attempts at inventing the light bulb, Edison never gave up. When asked about those failures, he said, "I have not failed. I've just found 10,000 ways that won't work." His perseverance gave the world light — both literally and metaphorically. Sp never stop Learning!
//         </p>
//         </div> 
    


//         <div>



//         </div>

       

//         <div id="container-stars">
//           <div id="stars"></div>
//         </div>

//         <div id="glow">
//           <div class="circle"></div>
//           <div class="circle"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Motivation;


