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
  function hexToRgb(hex) {
    // Remove hash if exists
    hex = hex.replace('#', '');
    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  const categories = [
    {
      id: 1,
      title: "Web Development",
      icon: <FaCode size={40} />,
      color: "#3b82f6",
      description:
        "Web development is the skill of creating websites and web applications that people can use through a browser. It involves building how a website looks, how it works, and how users interact with it. Beginners can start by making simple personal websites, blogs, or landing pages. Advanced developers build complex platforms like e-commerce sites, streaming platforms, and social media apps.",
      usage:
        "Used to make personal websites, business websites, online stores, learning platforms, social media sites, and web apps. Examples: Google, YouTube, Amazon, Netflix, Facebook. Every interactive website or online service uses web development skills.",
      techStack: [
        "HTML – structure of web pages",
        "CSS – design, layout, colors, and fonts",
        "JavaScript – making pages interactive (clicks, forms, animations)",
        "React, Vue, or Angular – frontend frameworks to build dynamic interfaces",
        "Node.js, Python, PHP – backend development for servers and databases",
        "MongoDB or MySQL – storing data like user info, posts, products",
        "Git & GitHub – version control and collaboration"
      ],
      timeline: "6–12 months to become job-ready with regular practice (3–4 hours daily)",
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
        "Learning web development allows you to build real websites and apps, work remotely, earn income, and turn ideas into live internet products.",
      bangla:
        "ওয়েব ডেভেলপমেন্ট মানে হলো ওয়েবসাইট ও ওয়েব অ্যাপ তৈরি করা। যেমন—ফেসবুক, ইউটিউব, আমাজন। এই স্কিল শিখলে আপনি নিজে ওয়েবসাইট বানাতে পারবেন, ফ্রিল্যান্সিং বা রিমোট জব করতে পারবেন এবং ভালো আয় করতে পারবেন।"
    },
    {
      id: 2,
      title: "Design",
      icon: <FaPalette size={40} />,
      color: "#ec4899",
      description:
        "Design is the skill of making digital content look attractive and easy to use. It includes UI/UX design, graphic design, product design, and visual storytelling. Beginners can start by designing YouTube thumbnails, posters, social media banners, or simple website layouts.",
      usage:
        "Used to design mobile app screens, website layouts, banners, posters, logos, social media posts, and product interfaces. Examples: Instagram app screens, YouTube thumbnails, Apple website design. Good design improves user experience and engagement.",
      techStack: [
        "Figma or Adobe XD – UI/UX design & prototypes",
        "Adobe Photoshop – image editing, photo manipulation, thumbnails",
        "Adobe Illustrator – logos, vectors, and icons",
        "Sketch – Mac-based UI/UX design tool",
        "Prototyping tools like InVision – show interactive app flow",
        "Basic HTML & CSS knowledge – to understand how designs work in web"
      ],
      timeline: "4–8 months to build a strong portfolio and start freelancing",
      opportunities: [
        "UI/UX Designer",
        "Graphic Designer",
        "Product Designer",
        "Brand Designer",
        "Freelance Designer"
      ],
      futureDemand:
        "High – Every digital product needs good design to attract and retain users.",
      whyLearn:
        "Design skills let you turn ideas into visuals, improve user experience, work creatively, and earn via freelance or agency jobs.",
      bangla:
        "ডিজাইন মানে হলো ওয়েবসাইট, অ্যাপ, বা সোশ্যাল মিডিয়ার জন্য আকর্ষণীয় এবং ব্যবহার সহজ ডিজাইন তৈরি করা। যেমন—ইনস্টাগ্রামের ইউজার ইন্টারফেস, ইউটিউব থাম্বনেইল। এই স্কিল শিখলে আপনি লোগো, পোস্টার, ব্যানার, ওয়েব ডিজাইন করে ইনকাম করতে পারবেন।"
    },
    {
      id: 3,
      title: "Cyber Security & Networking",
      icon: <FaShieldAlt size={40} />,
      color: "#10b981",
      description:
        "Cyber security protects computers, networks, and data from hackers, viruses, and online threats. Networking focuses on how devices communicate securely. Beginners can start by learning basic network setup and online safety practices.",
      usage:
        "Used by banks, hospitals, online platforms, and governments to protect sensitive data. Examples: secure login for banking apps, encrypted messages, protection against ransomware. Networking skills help connect multiple devices safely in offices or cloud systems.",
      techStack: [
        "Linux operating system – common for servers",
        "Networking protocols (TCP/IP, DNS)",
        "Security tools like Wireshark & Nmap",
        "Firewalls & encryption methods",
        "Python – scripting for security automation"
      ],
      timeline: "8–12 months to gain foundational skills and entry-level certifications",
      opportunities: [
        "Cyber Security Analyst",
        "Network Administrator",
        "Ethical Hacker",
        "Penetration Tester",
        "Security Consultant"
      ],
      futureDemand:
        "Extremely High – With increasing cyber attacks, demand for security professionals is skyrocketing.",
      whyLearn:
        "Cyber security skills allow you to protect systems, prevent hacking, and work in a high-demand, high-paying field.",
      bangla:
        "সাইবার সিকিউরিটি মানে হলো কম্পিউটার ও নেটওয়ার্ককে হ্যাকার ও ভাইরাস থেকে রক্ষা করা। ব্যাংক, হাসপাতাল, সরকারি প্রতিষ্ঠান সব জায়গায় এই স্কিল প্রয়োজন। এই স্কিল শিখলে আপনি নিরাপত্তা বিশেষজ্ঞ হিসেবে কাজ করতে পারবেন।"
    },
    {
      id: 4,
      title: "IT & Software",
      icon: <FaLaptop size={40} />,
      color: "#8b5cf6",
      description:
        "IT & Software involves managing computers, networks, software, and technical systems in organizations. Beginners can start by learning to fix computers, install software, or manage cloud accounts.",
      usage:
        "IT professionals maintain company computers, manage servers, troubleshoot software issues, and work with cloud services. Examples: managing Google Workspace for a company, fixing office network issues, or deploying AWS cloud applications.",
      techStack: [
        "Windows & Linux systems",
        "Cloud platforms (AWS, Azure, Google Cloud)",
        "Database basics (SQL, NoSQL)",
        "System troubleshooting and support",
        "Productivity tools (Microsoft Office, Google Workspace)"
      ],
      timeline: "6–10 months to become job-ready",
      opportunities: [
        "IT Support Specialist",
        "System Administrator",
        "Cloud Engineer",
        "IT Manager"
      ],
      futureDemand:
        "High – Every business needs IT professionals to manage their systems efficiently.",
      whyLearn:
        "IT skills provide stable jobs, career growth, and opportunities to work in almost every industry.",
      bangla:
        "আইটি মানে হলো কম্পিউটার, সফটওয়্যার এবং সিস্টেম পরিচালনা করা। এই স্কিল শিখলে আপনি কোম্পানিতে আইটি এক্সপার্ট হিসেবে কাজ করতে পারবেন।"
    },
    {
      id: 5,
      title: "Marketing",
      icon: <FaBullhorn size={40} />,
      color: "#f59e0b",
      description:
        "Digital marketing is the skill of promoting products and services online using ads, social media, email campaigns, and content. Beginners can start by running small ad campaigns or creating social media posts.",
      usage:
        "Used to grow businesses online through platforms like Facebook, Instagram, Google, and YouTube. Examples: running Google Ads for a store, promoting content on social media, sending email newsletters.",
      techStack: [
        "Google Ads & Google Analytics",
        "Facebook & Instagram Ads Manager",
        "SEO tools like SEMrush & Ahrefs",
        "Email marketing tools like Mailchimp",
        "Content strategy and social media planning"
      ],
      timeline: "4–6 months to learn basics and start campaigns",
      opportunities: [
        "Digital Marketer",
        "SEO Specialist",
        "Social Media Manager",
        "Freelancer"
      ],
      futureDemand:
        "Very High – With more businesses going online, digital marketing demand is growing rapidly.",
      whyLearn:
        "Digital marketing skills help you grow businesses, work remotely, or start your own marketing agency.",
      bangla:
        "ডিজিটাল মার্কেটিং মানে অনলাইনে পণ্য বা সার্ভিস প্রচার করা। যেমন—ফেসবুক ও গুগল বিজ্ঞাপন। এই স্কিল শিখলে আপনি ব্যবসা বাড়াতে, ফ্রিল্যান্সিং করতে বা নিজের এজেন্সি শুরু করতে পারবেন।"
    },
    {
      id: 6,
      title: "Self Development",
      icon: <FaBrain size={40} />,
      color: "#ef4444",
      description:
        "Self development is about improving your mindset, habits, communication, emotional intelligence, and productivity. Beginners can start by reading books, practicing time management, or learning communication skills.",
      usage:
        "Used to improve career growth, confidence, relationships, leadership, and personal life. Examples: learning public speaking, improving daily habits, or building a personal brand.",
      techStack: [
        "Time management techniques",
        "Goal setting frameworks",
        "Communication & interpersonal skills",
        "Emotional intelligence practices",
        "Productivity tools and apps"
      ],
      timeline: "Ongoing journey – see results in 1–3 months with consistent practice",
      opportunities: [
        "Better career advancement",
        "Leadership roles",
        "Life coach or mentor",
        "Public speaker",
        "Productivity consultant"
      ],
      futureDemand: "Always essential – personal growth skills never go out of style.",
      whyLearn:
        "Self development helps you become confident, efficient, and successful in any career path.",
      bangla:
        "সেল্ফ ডেভেলপমেন্ট মানে নিজের দক্ষতা, আত্মবিশ্বাস, চিন্তা ও সময় ব্যবস্থাপনা উন্নত করা। এই স্কিল শিখলে আপনি যেকোনো ক্ষেত্রে সফল হতে পারবেন।"
    },
    {
      id: 7,
      title: "OOP (Object-Oriented Programming)",
      icon: <FaCube size={40} />,
      color: "#06b6d4",
      description:
        "Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects and classes to build real-world software efficiently. Beginners can start by creating small programs like a bank account system, simple games, or task managers. OOP is essential for competitive programming platforms like LeetCode, HackerRank, and Codeforces, and is highly valued in tech companies like Google, Meta, Microsoft, and Amazon for backend systems, apps, and game engines.",
      usage:
        "Used to build games, mobile apps, enterprise systems, e-commerce platforms, and operating systems. Examples: Minecraft (game), WhatsApp (app), Amazon (backend), banking systems.",
      techStack: [
        "Java – popular for OOP and enterprise apps",
        "Python – beginner-friendly OOP programming",
        "C++ / C# – powerful OOP for games and systems",
        "Understanding Classes & Objects",
        "Design Patterns – reusable solutions to common problems"
      ],
      timeline: "3–6 months to understand concepts and apply in projects",
      opportunities: [
        "Software Developer",
        "Game Developer",
        "Backend Engineer",
        "Enterprise Software Engineer"
      ],
      futureDemand:
        "Very High – OOP is the foundation of modern software. Strong OOP skills are highly valued in tech interviews and large companies.",
      whyLearn:
        "Learning OOP helps you build professional, scalable, maintainable software and prepare for coding interviews and real-world projects.",
      bangla:
        "অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP) কোডকে অবজেক্ট ও ক্লাসে ভাগ করে বড় এবং জটিল সফটওয়্যার তৈরি করার জন্য ব্যবহৃত হয়। শুরুতে ছোট প্রোগ্রাম যেমন ব্যাংক একাউন্ট, গেম বা টাস্ক ম্যানেজার তৈরি করা যায়। OOP দক্ষতা লেভেল লেভেল প্রোবলেম সমাধান, LeetCode, Codeforces, HackerRank এবং Google, Meta, Microsoft, Amazon-এর মতো বড় কোম্পানিতে অত্যন্ত মূল্যবান।"
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
                  className=" text-[15px] sm:text-xl group-hover:mt-10 font-medium sm:font-bold mb-2 group-hover:translate-x-1 transition-transform"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>

                <div className="mt-4 flex items-center text-[12px] sm:text-sm font-semibold group-hover:translate-x-2 transition-transform" style={{ color: category.color }}>
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
                className="p-6 md:p-8 text-white relative bg-cover bg-center"
                style={{
                  backgroundColor: `rgba(${hexToRgb(selectedCategory.color)}, 0.5)`, // fallback overlay
                  backgroundImage: `url('https://i.ibb.co.com/Q333ZDH5/frequency-wave-8444627-1280.png')`,
                  backgroundBlendMode: 'overlay',
                }}
              >
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 cursor-pointer right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                >
                  <FaTimes size={20} />
                </button>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    {selectedCategory.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-mono uppercase text-center font-bold">
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
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {selectedCategory.bangla}
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