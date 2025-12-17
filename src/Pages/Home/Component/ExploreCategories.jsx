import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaShieldAlt,
  FaLaptop,
  FaBullhorn,
  FaBrain,
  FaCube,
  FaTimes
} from "react-icons/fa";



const ExploreCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Web Development",
      icon: <FaCode size={40} />,
      color: "#3b82f6",

      description:
        "Web development is the skill of creating websites and web applications that people use through a browser. It includes building how a website looks, how it works, and how users interact with it. For example, when you open a website, click buttons, submit forms, or watch videos — all of that is made possible through web development.",

      usage:
        "Web development is used to create personal websites, business websites, online stores, learning platforms, and social media sites. For example, websites like Google, Facebook, YouTube, Amazon, and Netflix are all built using web development technologies.",

      techStack: [
        "HTML – structure of a website",
        "CSS – design, layout, and colors",
        "JavaScript – interactions and logic",
        "React, Vue, or Angular – frontend frameworks",
        "Node.js, Python, or PHP – backend development",
        "MongoDB or MySQL – databases",
        "Git & GitHub – version control"
      ],

      timeline:
        "6–12 months to become job-ready with regular practice (3–4 hours daily)",

      opportunities: [
        "Frontend Developer",
        "Backend Developer",
        "Full-Stack Developer",
        "Freelance Web Developer",
        "Remote Developer",
        "Startup Founder"
      ],

      futureDemand:
        "Very High – Every business needs a website. Demand for web developers is growing rapidly worldwide.",

      whyLearn:
        "Learning web development allows you to build real-world websites and applications, work from anywhere, earn a good income, and turn your ideas into live products on the internet.",

      bangla:
        "ওয়েব ডেভেলপমেন্ট মানে হলো ওয়েবসাইট ও ওয়েব অ্যাপ তৈরি করা। যেমন—ফেসবুক, ইউটিউব, আমাজন। এই স্কিল শিখলে আপনি নিজে ওয়েবসাইট বানাতে পারবেন, ফ্রিল্যান্সিং বা রিমোট জব করতে পারবেন এবং ভালো আয় করতে পারবেন।"
    },

    {
      id: 2,
      title: "Design",
      icon: <FaPalette size={40} />,
      color: "#ec4899",

      description:
        "Design is the skill of making digital products look beautiful and easy to use. It focuses on colors, layout, typography, and user experience. For example, how buttons are placed in an app or how a website feels when you use it is the result of good design.",

      usage:
        "Design is used to create website layouts, mobile app screens, logos, banners, posters, and social media graphics. Apps like Instagram, YouTube, and websites like Apple are designed by professional designers.",

      techStack: [
        "Figma or Adobe XD – UI/UX design",
        "Adobe Photoshop – image editing",
        "Adobe Illustrator – logo & vector design",
        "Prototyping tools – wireframes & previews",
        "Basic HTML & CSS understanding"
      ],

      timeline:
        "4–8 months to build a strong portfolio and start freelancing",

      opportunities: [
        "UI/UX Designer",
        "Graphic Designer",
        "Product Designer",
        "Brand Designer",
        "Freelance Designer"
      ],

      futureDemand:
        "High – Every digital product needs good design to attract users.",

      whyLearn:
        "Design skills let you turn ideas into beautiful visuals, work creatively, and earn through freelancing or agency jobs.",

      bangla:
        "ডিজাইন মানে হলো ওয়েবসাইট বা অ্যাপ দেখতে সুন্দর ও ব্যবহার সহজ করা। যেমন—ইনস্টাগ্রামের ডিজাইন। এই স্কিল শিখলে আপনি লোগো, ওয়েব ডিজাইন, অ্যাপ ডিজাইন করে ইনকাম করতে পারবেন।"
    },

    {
      id: 3,
      title: "Cyber Security & Networking",
      icon: <FaShieldAlt size={40} />,
      color: "#10b981",

      description:
        "Cyber security is the practice of protecting computers, networks, and data from hackers and cyber attacks. Networking focuses on how computers connect and communicate with each other safely.",

      usage:
        "Cyber security is used by banks, hospitals, government systems, and online platforms to protect user data. For example, when you log into your bank app securely, cyber security is working behind the scenes.",

      techStack: [
        "Linux operating system",
        "Networking basics (TCP/IP, DNS)",
        "Security tools (Wireshark, Nmap)",
        "Firewalls & encryption",
        "Python for automation"
      ],

      timeline:
        "8–12 months to gain entry-level security skills",

      opportunities: [
        "Cyber Security Analyst",
        "Network Administrator",
        "Ethical Hacker",
        "Penetration Tester",
        "Security Consultant"
      ],

      futureDemand:
        "Extremely High – Cyber attacks are increasing worldwide.",

      whyLearn:
        "Cyber security lets you protect systems, fight hackers, and earn high salaries in a critical field.",

      bangla:
        "সাইবার সিকিউরিটি মানে হলো হ্যাকার থেকে ডেটা ও সিস্টেম রক্ষা করা। ব্যাংক, হাসপাতাল, সব জায়গায় এই স্কিল দরকার। এই স্কিল শিখলে আপনি নিরাপত্তা বিশেষজ্ঞ হিসেবে কাজ করতে পারবেন।"
    },

    {
      id: 4,
      title: "IT & Software",
      icon: <FaLaptop size={40} />,
      color: "#8b5cf6",

      description:
        "IT & Software focuses on managing computers, systems, software, and technical support in organizations.",

      usage:
        "IT professionals keep company systems running, fix technical problems, and manage servers and cloud platforms.",

      techStack: [
        "Windows & Linux systems",
        "Cloud platforms (AWS, Azure)",
        "Database basics",
        "System troubleshooting",
        "Office & productivity tools"
      ],

      timeline:
        "6–10 months to get job-ready",

      opportunities: [
        "IT Support",
        "System Administrator",
        "Cloud Engineer",
        "IT Manager"
      ],

      futureDemand:
        "High – Every company depends on IT systems.",

      whyLearn:
        "IT skills provide stable jobs, strong career growth, and global demand.",

      bangla:
        "আইটি মানে হলো কম্পিউটার, সফটওয়্যার ও সিস্টেম ম্যানেজ করা। সব কোম্পানিতে আইটি এক্সপার্ট দরকার।"
    },

    {
      id: 5,
      title: "Marketing",
      icon: <FaBullhorn size={40} />,
      color: "#f59e0b",

      description:
        "Digital marketing is the skill of promoting products and services online using ads, content, and social media.",

      usage:
        "Used to grow businesses online through Facebook ads, Google ads, emails, and SEO.",

      techStack: [
        "Google Ads & Analytics",
        "Facebook Ads Manager",
        "SEO tools",
        "Email marketing tools",
        "Content strategy"
      ],

      timeline:
        "4–6 months to start working independently",

      opportunities: [
        "Digital Marketer",
        "SEO Specialist",
        "Social Media Manager",
        "Freelancer"
      ],

      futureDemand:
        "Very High – Online business is growing rapidly.",

      whyLearn:
        "Marketing skills help businesses grow and offer flexible remote work.",

      bangla:
        "ডিজিটাল মার্কেটিং মানে অনলাইনে পণ্য বা সার্ভিস বিক্রি করা। ফেসবুক ও গুগল বিজ্ঞাপন এর উদাহরণ।"
    },

    {
      id: 6,
      title: "Self Development",
      icon: <FaBrain size={40} />,
      color: "#ef4444",

      description:
        "Self development is about improving mindset, habits, communication, and productivity.",

      usage:
        "Used to improve career growth, confidence, leadership, and personal life.",

      techStack: [
        "Time management",
        "Goal setting",
        "Communication skills",
        "Emotional intelligence"
      ],

      timeline:
        "Lifelong journey with results in 1–3 months",

      opportunities: [
        "Leadership roles",
        "Personal branding",
        "Life coaching"
      ],

      futureDemand:
        "Always essential in every career.",

      whyLearn:
        "Self development helps you succeed in any profession.",

      bangla:
        "সেল্ফ ডেভেলপমেন্ট মানে নিজের দক্ষতা, আত্মবিশ্বাস ও চিন্তা উন্নত করা।"
    },

    {
      id: 7,
      title: "OOP (Object-Oriented Programming)",
      icon: <FaCube size={40} />,
      color: "#06b6d4",

      description:
        "Object-Oriented Programming (OOP) is a core programming paradigm used to design and build real-world, large-scale software systems. It organizes code into reusable objects and classes, making applications easier to understand, extend, and maintain. OOP is essential for solving complex problems on platforms like LeetCode, Codeforces, and HackerRank, where most problems are designed around classes, objects, and data structures. It is heavily used in big tech companies such as Google, Meta, Amazon, and Microsoft to build scalable backend systems, enterprise software, mobile applications, game engines, and operating systems. Without OOP, managing large codebases and team-based development would be nearly impossible, which is why strong OOP skills are highly valued in technical interviews and professional software engineering roles.",

      usage:
        "Used in software like games, mobile apps, and enterprise systems.",

      techStack: [
        "Java",
        "Python",
        "C++ / C#",
        "Classes & Objects",
        "Design Patterns"
      ],

      timeline:
        "3–6 months to understand and apply",

      opportunities: [
        "Software Developer",
        "Game Developer",
        "Backend Engineer"
      ],

      futureDemand:
        "Very High – Core of modern software.",

      whyLearn:
        "OOP helps you write professional, scalable code.",

      bangla:
        "অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP) একটি মূল প্রোগ্রামিং পদ্ধতি যা বড় এবং জটিল সফটওয়্যার সিস্টেম তৈরি ও ডিজাইন করার জন্য ব্যবহৃত হয়। এটি কোডকে পুনঃব্যবহারযোগ্য অবজেক্ট এবং ক্লাসে ভাগ করে, ফলে অ্যাপ্লিকেশনগুলো বোঝা, বাড়ানো এবং রক্ষণাবেক্ষণ করা সহজ হয়। OOP দক্ষতা লেভেল লেভেল প্রোবলেমস সমাধান করার জন্য যেমন LeetCode, Codeforces, HackerRank-এ অপরিহার্য। বড় প্রযুক্তি কোম্পানি যেমন Google, Meta, Amazon, এবং Microsoft এ ব্যাকএন্ড সিস্টেম, এন্টারপ্রাইজ সফটওয়্যার, মোবাইল অ্যাপ, গেম ইঞ্জিন এবং অপারেটিং সিস্টেম তৈরিতে OOP অত্যন্ত গুরুত্বপূর্ণ। OOP ছাড়া বড় কোডবেস এবং টিম-ভিত্তিক ডেভেলপমেন্ট পরিচালনা করা প্রায় অসম্ভব, এজন্য এটি সফটওয়্যার ইঞ্জিনিয়ারিং ক্যারিয়ার এবং টেকনিক্যাল ইন্টারভিউতে খুবই মূল্যবান।"
    }
  ];


  return (
    <div className="relative w-full py-20  overflow-hidden">
      {/* Section Title */}
      <div className="relative text-center mb-12 py-3 z-30">
        {/* TEXT CONTENT */}
        <div className="lg:pb-20">
          <h2 className="relative z-30 text-3xl md:text-7xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Choose Your <span className="">Learning</span> Path
          </h2>

          <p className="relative z-30 text-white text-lg font-normal mt-3 drop-shadow font-mono">
            Click on any category to learn more and start your journey
          </p>
        </div>


        {/* BACKGROUND SHAPE */}
        <div className="absolute top-0 lg:ml-50 inset-0 -z-10 flex justify-end lg:justify-center">
          <div className="bg-blue-700  w-90 h-40 blur-3xl rounded-full"></div>
        </div>
      </div>
      {/* Fixed Background Section with Category Cards */}
      <div
        className="w-full  min-h-[600px] bg-fixed bg-center bg-cover flex items-center justify-center "
        style={{
          backgroundImage: "url('https://i.ibb.co/3msWj593/book-5336298-1280.jpg')",
        }}
      >
        <div className="absolute top-0 lg:ml-50 inset-0 -z-10 flex justify-end lg:justify-center">
          <motion.div
            className="hidden lg:block border-4 border-dashed bg-gradient-to-r from-transparent via-transparent to-yellow-700 w-90 h-90 rounded-full"
            whileInView={{
              rotate: 360,
              x: [-120, 320], // left → right → left
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              },
              x: {

                duration: 6,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
          />


        </div>

        {/* <div className="absolute top-0 lg:ml-50 inset-0 -z-10 flex justify-end lg:justify-center">
          <div className="border-4 border-dashed  w-90 h-90 bg-gradient-to-b from-transparent via-transparent to-yellow-600 rounded-full animate-spin [animation-duration:6s] delay-75 blur-in-xs"></div>
        </div> */}


        <div className="w-full bg-black/50 py-10 px-3">




          {/* Category Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                onClick={() => setSelectedCategory(category)}
                className="bg-white border-r-4 overflow-visible flex flex-col items-start justify-between border-amber-100 p-3 cursor-pointer hover:shadow-xl shadow-black group"

              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:-mt-10 group-hover:-rotate-12  transition-transform duration-300"
                  style={{ backgroundColor: `${category.color}45`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3
                  className="text-xl group-hover:mt-10 font-bold mb-2 group-hover:translate-x-1 transition-transform"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>

                <div className="mt-4 flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform" style={{ color: category.color }}>
                  Learn More →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="fixed inset-0  bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed mt-15 lg:mt-0 inset-4 md:inset-10 lg:inset-20 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div
                className="p-6  md:p-8 text-white relative"
                style={{ backgroundColor: selectedCategory.color }}
              >
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                >
                  <FaTimes size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    {selectedCategory.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {selectedCategory.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Description */}
                  <section>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedCategory.color }}>
                      What is {selectedCategory.title}?
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {selectedCategory.description}
                    </p>
                  </section>

                  {/* Where it's used */}
                  <section>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedCategory.color }}>
                      Where is it Used?
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {selectedCategory.usage}
                    </p>
                  </section>

                  {/* Tech Stack */}
                  <section>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedCategory.color }}>
                      What You'll Learn (Tech Stack)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedCategory.techStack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg"
                          style={{ backgroundColor: `${selectedCategory.color}10` }}
                        >
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: selectedCategory.color }}
                          />
                          <span className="text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Timeline */}
                  <section>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedCategory.color }}>
                      How Long Does it Take?
                    </h3>
                    <div
                      className="p-5 rounded-xl text-lg"
                      style={{ backgroundColor: `${selectedCategory.color}15` }}
                    >
                      <p className="text-gray-700 font-medium">
                        {selectedCategory.timeline}
                      </p>
                    </div>
                  </section>

                  {/* Opportunities */}
                  <section>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedCategory.color }}>
                      Career Opportunities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedCategory.opportunities.map((opportunity, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl text-center font-semibold text-white transition-transform hover:scale-105"
                          style={{ backgroundColor: selectedCategory.color }}
                        >
                          {opportunity}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Future Demand */}
                  <section>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedCategory.color }}>
                      Future Demand
                    </h3>
                    <div
                      className="p-5 rounded-xl"
                      style={{ backgroundColor: `${selectedCategory.color}15` }}
                    >
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {selectedCategory.futureDemand}
                      </p>
                    </div>
                  </section>

                  {/* Why Learn */}
                  <section>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedCategory.color }}>
                      Why Should You Learn This?
                    </h3>
                    <div
                      className="p-6 rounded-xl border-l-4"
                      style={{
                        backgroundColor: `${selectedCategory.color}10`,
                        borderColor: selectedCategory.color
                      }}
                    >
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        {selectedCategory.whyLearn}
                      </p>
                    </div>
                  </section>

                  {/* Call to Action */}
                  <section className="text-center pt-6">
                    <button
                      className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
                      style={{ backgroundColor: selectedCategory.color }}
                      onClick={() => setSelectedCategory(null)}
                    >
                      Start Learning {selectedCategory.title}
                    </button>
                  </section>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cover Section */}
      <div className="w-full bg-white pt-10 bg-[url('https://i.ibb.co.com/GfnqkSGZ/Wireframe-Wave-3d-PNG.png')] bg-contain bg-repeat-x bg-center">
        <div className="max-w-full mx-auto text-center opacity-100 bg-white/60 rounded-xl py-7 px-3 md:py-13">
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

export default ExploreCategories;