import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  const slides = [
    {
      title: "Empower Your Learning Journey",
      text: "Explore expert-led courses across development, design, marketing, and more. Learn at your own pace.",
      image: "https://i.ibb.co/G4D6mWNM/skill-Morph-Banner1.png"
    },
    {
      title: "Upgrade Your Skills Today",
      text: "Join thousands of learners on SkillMorph and boost your career with practical knowledge.",
      image: "https://i.ibb.co/whRD2hkq/Skill-Morph-Banner2.png"
    },
    {
      title: "Flexible Learning, Real Results",
      text: "Attend classes, complete assignments, and get certified – all from the comfort of your home.",
      image: "https://i.ibb.co/whRD2hkq/Skill-Morph-Banner2.png"
    },
  ];

  return (
    <div className="h-[80vh] w-full">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={800}
        swipeable
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[80vh] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0  bg-opacity-60"></div>

            {/* Centered content */}
            <div className="relative z-10 flex h-full pt-15 items-center justify-center text-center text-white px-4">
              <div className="space-y-4 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                <p className="text-base md:text-lg">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
