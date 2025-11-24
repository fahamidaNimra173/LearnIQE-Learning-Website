import React from "react";
import { FaUserGraduate, FaLaptopCode, FaComments } from "react-icons/fa";

const PlatformFacilities = () => {
  return (
    <div className="relative w-full py-10  overflow-hidden">
      <div className="max-w-4xl mx-auto text-center md:py-12 px-4">
        <h1 className="text-[#fbbc2c] md:leading-15 md:text-5xl text-2xl habibi font-extrabold uppercase  text-center">
          Explore What Our Platform Offers
        </h1>
        <p className="text-black font-semibold text-lg max-w-xl mx-auto mb-15 mt-7">
          Empowering students with easy access to learning tools and resources that foster success.
        </p>
      </div>

      {/* Fixed Background Section */}
      <div
        className="w-full min-h-[600px] bg-fixed bg-center bg-cover flex items-center justify-center px-4"
        style={{
          backgroundImage: "url('https://i.ibb.co/3msWj593/book-5336298-1280.jpg')",
        }}
      >
        {/* Glass overlay */}
        <div className="w-full max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl py-8 px-3 my-3">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fbbc2c] drop-shadow">
              Why Students Love Our Platform
            </h2>
            <p className="text-[#fbbc2c] text-[18px] font-medium text-shadow-2xs text-shadow-black mt-3 max-w-xl mx-auto">
              Learn faster, smarter, and better with features designed just for you.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Easy Enrollment",
                description: "Enroll in your favorite courses instantly and start learning right away.",
                icon: <FaUserGraduate size={40} className="text-[#1e8a78]" />,
              },
              {
                title: "Hands-on Projects",
                description: "Practice what you learn through real assignments and feedback.",
                icon: <FaLaptopCode size={40} className="text-[#fbbc2c]" />,
              },
              {
                title: "Evaluate Teachers",
                description: "Give feedback to help improve your learning experience.",
                icon: <FaComments size={40} className="text-[#1e8a78]" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/40 backdrop-blur-md text-center py-6 px-1 rounded-xl shadow-md border border-white/30 hover:shadow-xl transition"
              >
                <div className="mb-3 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#fbbc2c] flex items-center justify-center gap-2">
                  {item.icon}
                  {item.title}
                </h3>
                <p className="text-gray-800 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cover Section */}
      <div
        className="w-full  bg-white pt-10   bg-[url('https://i.ibb.co.com/GfnqkSGZ/Wireframe-Wave-3d-PNG.png')] bg-contain bg-repeat-x bg-center "
      >
        <div className="max-w-full  mx-auto text-center opacity-100 bg-white/60 rounded-xl py-7 px-3 md:py-13 ">
          <h2 className="text-2xl habibi uppercase md:text-4xl font-extrabold text-[#1e8a78] mb-4">
            Designed for Modern Learners
          </h2>
          <p className="text-gray-700 max-w-xl habibi mx-auto">
            Our platform bridges the gap between traditional learning and modern digital convenience — accessible anytime, anywhere.
          </p>
        </div>
      </div>

    </div>
  );
};

export default PlatformFacilities;
