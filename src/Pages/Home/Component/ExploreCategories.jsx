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
      description: "Web development is the process of building and maintaining websites and web applications that run on the internet.",
      usage: "Used to create everything from simple personal blogs to complex platforms like Amazon, Facebook, YouTube, and Netflix. Every website you visit was built using web development skills.",
      techStack: [
        "HTML, CSS, JavaScript (basics)",
        "React, Vue, or Angular (frontend)",
        "Node.js, Python, or PHP (backend)",
        "Databases like MongoDB or MySQL",
        "Git for version control"
      ],
      timeline: "6-12 months to become job-ready with consistent practice (3-4 hours daily)",
      opportunities: [
        "Frontend Developer",
        "Backend Developer",
        "Full-Stack Developer",
        "Freelance web developer",
        "Start your own web agency",
        "Remote work opportunities worldwide"
      ],
      futureDemand: "Very High - Every business needs a website. With more companies going online, the demand for web developers continues to grow rapidly. Expected to grow 23% by 2031.",
      whyLearn: "By learning web development, you can build professional websites like Amazon, Netflix, and Airbnb. You'll have the power to bring any idea to life on the internet, work from anywhere in the world, and earn a great income while doing creative work."
    },
    {
      id: 2,
      title: "Design",
      icon: <FaPalette size={40} />,
      color: "#ec4899",
      description: "Design involves creating visual content and user experiences that are both beautiful and easy to use. It includes UI/UX design, graphic design, and product design.",
      usage: "Used to design mobile apps, websites, logos, marketing materials, and product interfaces. Every app you use and every ad you see was designed by someone with these skills.",
      techStack: [
        "Figma or Adobe XD (UI design)",
        "Adobe Photoshop & Illustrator (graphics)",
        "Sketch (Mac design tool)",
        "Basic HTML/CSS knowledge",
        "Prototyping tools like InVision"
      ],
      timeline: "4-8 months to build a strong portfolio and start freelancing or getting hired",
      opportunities: [
        "UI/UX Designer",
        "Graphic Designer",
        "Product Designer",
        "Brand Designer",
        "Freelance designer",
        "Design agency work"
      ],
      futureDemand: "High - As digital products grow, companies need designers to make them look good and work smoothly. Good designers are always in demand.",
      whyLearn: "By learning design, you can create stunning visual experiences that millions of people will use. You'll shape how products look and feel, from apps like Instagram to websites like Apple. Design skills open doors to creative careers with excellent pay and flexibility."
    },
    {
      id: 3,
      title: "Cyber Security & Networking",
      icon: <FaShieldAlt size={40} />,
      color: "#10b981",
      description: "Cyber security protects computer systems and networks from hackers and digital threats. Networking involves connecting computers and devices to share information safely.",
      usage: "Used by banks, hospitals, governments, and all major companies to protect sensitive data from hackers. Every online transaction you make is secured by cyber security professionals.",
      techStack: [
        "Linux operating system",
        "Network protocols (TCP/IP, DNS)",
        "Security tools (Wireshark, Nmap)",
        "Python for security scripts",
        "Firewalls and encryption methods"
      ],
      timeline: "8-12 months to gain foundational skills and certifications for entry-level positions",
      opportunities: [
        "Cyber Security Analyst",
        "Network Administrator",
        "Ethical Hacker",
        "Security Consultant",
        "Information Security Officer",
        "Penetration Tester"
      ],
      futureDemand: "Extremely High - Cyber attacks are increasing every day. Companies desperately need security experts to protect their data. Expected to grow 35% by 2031.",
      whyLearn: "By learning cyber security, you become a digital guardian protecting businesses and people from hackers. You'll solve puzzles, think like a hacker to stop hackers, and earn top salaries while working in one of the most exciting and important tech fields."
    },
    {
      id: 4,
      title: "IT & Software",
      icon: <FaLaptop size={40} />,
      color: "#8b5cf6",
      description: "IT (Information Technology) involves managing computer systems, software, and technical support. It includes everything from fixing computers to managing cloud systems.",
      usage: "Used in every company to keep computers, networks, and software running smoothly. IT professionals help businesses work efficiently and solve technical problems.",
      techStack: [
        "Windows & Linux systems",
        "Cloud platforms (AWS, Azure, Google Cloud)",
        "Database management",
        "Microsoft Office & productivity tools",
        "Troubleshooting and support skills"
      ],
      timeline: "6-10 months to gain practical skills and certifications like CompTIA A+ or AWS",
      opportunities: [
        "IT Support Specialist",
        "System Administrator",
        "Cloud Engineer",
        "Database Administrator",
        "IT Manager",
        "Technical Support"
      ],
      futureDemand: "High - Every business needs IT professionals to manage their technology. As companies move to the cloud, demand for IT skills keeps growing.",
      whyLearn: "By learning IT and software skills, you become the problem-solver every company needs. You'll keep businesses running, work with cutting-edge technology like cloud computing, and build a stable career with excellent job security."
    },
    {
      id: 5,
      title: "Marketing",
      icon: <FaBullhorn size={40} />,
      color: "#f59e0b",
      description: "Digital marketing promotes products and services online using websites, social media, emails, and advertisements to reach customers and grow businesses.",
      usage: "Used by every company to sell products, build brands, and reach customers online. Every ad you see on Facebook, Instagram, or Google was created by a digital marketer.",
      techStack: [
        "Google Analytics & Ads",
        "Facebook Ads Manager",
        "Email marketing tools (Mailchimp)",
        "SEO tools (SEMrush, Ahrefs)",
        "Social media platforms",
        "Content management systems"
      ],
      timeline: "4-6 months to learn basics and start running campaigns independently",
      opportunities: [
        "Digital Marketing Specialist",
        "Social Media Manager",
        "SEO Specialist",
        "Content Marketer",
        "Email Marketing Manager",
        "Freelance marketer"
      ],
      futureDemand: "Very High - Businesses are spending billions on digital marketing. As online shopping grows, marketing professionals are more valuable than ever.",
      whyLearn: "By learning digital marketing, you can help businesses grow and reach millions of people online. You'll master the art of selling, work creatively with data, and have the freedom to work remotely or start your own marketing agency."
    },
    {
      id: 6,
      title: "Self Development",
      icon: <FaBrain size={40} />,
      color: "#ef4444",
      description: "Self development focuses on improving yourself through learning new skills, building better habits, managing time effectively, and becoming the best version of yourself.",
      usage: "Used to achieve personal goals, advance your career, improve relationships, boost confidence, and create a successful and fulfilling life.",
      techStack: [
        "Time management techniques",
        "Goal setting frameworks",
        "Communication skills",
        "Emotional intelligence",
        "Productivity tools & apps",
        "Learning strategies"
      ],
      timeline: "Ongoing journey - Start seeing results in 1-3 months with consistent daily practice",
      opportunities: [
        "Better career advancement",
        "Leadership roles",
        "Life coach or mentor",
        "Public speaker",
        "Productivity consultant",
        "Personal brand building"
      ],
      futureDemand: "Always Essential - Personal growth skills never go out of style. Strong self-development skills give you an advantage in any career or life situation.",
      whyLearn: "By focusing on self development, you unlock your full potential in every area of life. You'll build confidence, communicate better, manage stress effectively, and achieve goals faster. These skills boost your success in any career path you choose."
    },
    {
      id: 7,
      title: "OOP (Object-Oriented Programming)",
      icon: <FaCube size={40} />,
      color: "#06b6d4",
      description: "OOP is a programming approach that organizes code into reusable 'objects' - like building with LEGO blocks. It makes software easier to build, understand, and maintain.",
      usage: "Used to build complex software like video games, mobile apps, banking systems, and operating systems. Most modern programming relies on OOP principles.",
      techStack: [
        "Java (popular for OOP)",
        "Python (easy to learn OOP)",
        "C++ or C# (powerful OOP)",
        "Understanding classes & objects",
        "Design patterns"
      ],
      timeline: "3-6 months to understand OOP concepts and apply them in real projects",
      opportunities: [
        "Software Developer",
        "Game Developer",
        "Mobile App Developer",
        "Enterprise Software Engineer",
        "Backend Developer",
        "Systems Architect"
      ],
      futureDemand: "Very High - OOP is the foundation of most modern software. Companies building complex applications need developers who master these principles.",
      whyLearn: "By learning OOP, you gain the superpower to build professional, scalable software. You'll write cleaner code, work on bigger projects like video games and enterprise systems, and become a more valuable programmer in any programming language."
    }
  ];

  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center  px-4">
        <h1 className="text-[#fbbc2c] md:leading-15 md:text-5xl text-2xl habibi font-extrabold uppercase text-center">
          Explore What Our Platform Offers
        </h1>
        <p className="text-white font-semibold text-lg max-w-xl mx-auto mb-15 mt-7">
          Empowering students with easy access to learning tools and resources that foster success.
        </p>
      </div>

      {/* Fixed Background Section with Category Cards */}
      <div
        className="w-full  min-h-[600px] bg-fixed bg-center bg-cover flex items-center justify-center px-4"
        style={{
          backgroundImage: "url('https://i.ibb.co/3msWj593/book-5336298-1280.jpg')",
        }}
      >
        <div className="w-full bg-black/50 ">
          {/* Section Title */}
          <div className="text-center mb-12 py-3 ">
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-[#ffffff] drop-shadow-lg">
              Choose Your Learning Path
            </h2>
            <p className="text-white text-lg font-medium mt-3 drop-shadow">
              Click on any category to learn more and start your journey
            </p>
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                className="bg-white rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ 
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${category.color}15`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 
                  className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Click to explore opportunities, skills, and why this path might be perfect for you
                </p>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div 
                className="p-6 md:p-8 text-white relative"
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