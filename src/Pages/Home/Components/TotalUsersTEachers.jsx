import React from "react";

const TotalUsersTeachers = () => {
  return (
    <div className="relative w-full">
      {/* Section with fixed background image */}
      <div
        className="w-full h-[700px] bg-fixed bg-center bg-cover flex flex-col justify-between"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/3msWj593/book-5336298-1280.jpg')",
        }}
      >
        {/* Glass overlay */}
        <div className="w-full h-full bg-white/10  flex flex-col justify-between">
          {/* Heading */}
          <div className="text-center pt-20 px-6">
            <h2 className="text-4xl font-bold text-white drop-shadow">
              Total Users & Teachers
            </h2>
            <p className="text-white/90 mt-2 max-w-2xl mx-auto">
              Discover how our e-learning platform empowers learners and educators.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-10 max-w-6xl mx-auto">
            {[
              { title: "Total Users", count: "12,345" },
              { title: "Total Teachers", count: "678" },
              { title: "Active Courses", count: "89" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-lg text-center p-6 rounded-xl shadow-md border border-white/30"
              >
                <h3 className="text-xl font-bold text-[#0A5EB0]">{item.title}</h3>
                <p className="text-3xl text-gray-800 mt-2 font-semibold">
                  {item.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Section (covers image on scroll) */}
      <div className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A5EB0] mb-4">
            Welcome to the Next Section
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            As you scroll, this section covers the glass section, creating a layered scroll effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalUsersTeachers;
