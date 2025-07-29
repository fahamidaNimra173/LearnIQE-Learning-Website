import React from 'react';

const Motivation = () => {
  return (
    <div className="w-full my-30 relative mt-16 px-4">
      {/* Background Image */}
      <img
        src="https://i.ibb.co/zhjjQyPG/didUKnow.jpg"
        alt="Motivational"
        className="w-full h-auto rounded-xl object-cover"
      />

      {/* Card overlaid at the bottom */}
      <div className="max-w-3xl mx-auto bg-[#FFCFEF] text-black p-6 rounded-xl shadow-lg md:-mt-50 -mt-20 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          🌟 *The Resilience of Thomas Edison*
        </h2>
        <p className="italic text-center text-black font-semibold md:text-lg leading-relaxed">
          When Thomas Edison was a young boy, his teacher told him he was too stupid to learn anything. Later, he was fired from his first two jobs for being "non-productive." Despite more than 1,000 failed attempts at inventing the light bulb, Edison never gave up. When asked about those failures, he said, "I have not failed. I've just found 10,000 ways that won't work." His perseverance gave the world light — both literally and metaphorically. Sp never stop Learning!
        </p>
      </div>
    </div>
  );
};

export default Motivation;
