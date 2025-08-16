import React from 'react';

const Motivation = () => {
  return (
    <div className="w-full my-30  relative mt-16 px-4 ">
      {/* Background Image */}
      <img
        src="https://i.ibb.co/zhjjQyPG/didUKnow.jpg"
        alt="Motivational"
        className="w-full h-auto rounded-xl object-cover"
      />

      {/* Card overlaid at the bottom */}
      <div className="max-w-3xl mx-auto animations bg-white  text-pink-500   rounded-xl shadow-lg md:-mt-50 -mt-20 relative z-10">
       
       
       <div className='py-15 px-6 md:px-9'>
            <div className='flex gap-10'>
          {/* //star */}
          <div class="loader">
            <svg
              viewBox="0 0 256 256"
              class="star star1"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 256 256"
              class="star star2"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 256 256"
              class="star star3"
              height="32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
              ></path>
            </svg>
          </div>
          {/* ------------ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              The Resilience of Thomas Edison*
            </h2>
          </div>
        </div>
         <p className="italic text-center text-black merienda font-semibold md:text-lg leading-relaxed">
          When Thomas Edison was a young boy, his teacher told him he was too stupid to learn anything. Later, he was fired from his first two jobs for being "non-productive." Despite more than 1,000 failed attempts at inventing the light bulb, Edison never gave up. When asked about those failures, he said, "I have not failed. I've just found 10,000 ways that won't work." His perseverance gave the world light — both literally and metaphorically. Sp never stop Learning!
        </p>
        </div> 
    


        <div>



        </div>

       

        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
