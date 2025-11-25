import React from "react";
import Marquee from "react-fast-marquee";

const partners = [
  {
    name: "Google for Education",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description: "Global tools and learning resources for everyone.",
  },
  {
    name: "Coursera",
    logo: "https://i.ibb.co/ccdk5wy8/Coursera-Logo-600x600-svg.png",
    description: "Top university courses available online.",
  },
  {
    name: "Udemy",
    logo: "https://i.ibb.co/V0DrBrMY/Screenshot-2025-07-29-184609.png",
    description: "Thousands of expert-led courses for skills development.",
  },
  {
    name: "Microsoft Learn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    description: "Skill-based programs and certification support.",
  },
  {
    name: "Udemy",
    logo: "https://i.ibb.co/V0DrBrMY/Screenshot-2025-07-29-184609.png",
    description: "Thousands of expert-led courses for skills development.",
  },
];

const PartnerMarquee = () => {
  return (
    <div className="relative py-16 px-4 mb-15 md:mb-30 overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('https://i.ibb.co/1YyHM5XN/step-by-step-6655274-1280.jpg')",
          zIndex: 0,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-white">
        <h2 className="text-center text-3xl font-bold mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-center text-sm mb-8 max-w-xl mx-auto">
          We collaborate with leading educational and tech platforms to ensure high-quality content and resources for our students.
        </p>

        <Marquee pauseOnHover={true} speed={60} gradient={false}>
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white bg-opacity-90 text-black mx-4 p-4 rounded-xl shadow-lg min-w-[250px] max-w-xs h-48 text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain mb-2"
              />
              <h3 className="font-semibold text-lg text-[#0A5EB0]">{partner.name}</h3>
              <p className="text-xs text-gray-700">{partner.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PartnerMarquee;
