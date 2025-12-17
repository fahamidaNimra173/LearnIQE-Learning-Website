import React, { useState } from "react";
import { FaChalkboardTeacher, FaRocket, FaGlobe } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import { useNavigate } from "react-router";


const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate=useNavigate()

  return (
    <div className="min-h-screen bg-[#060606] dark:bg-[#000101] text-gray-900 overflow-hidden">
      {/* Hero Section with Animated Gradient */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 z-10 ">
          <div className="absolute top-1/7 -left-30 w-86 h-72  bg-[#f4d99c] rounded-t-full   opacity-15 blur-2xl border-[30px] border-black animate-blob"></div>
          <div className="absolute bottom-1/5 -left-0 w-86  h-72 bg-[#2092f0]  mix-blend-multiply filter   opacity-25 animate-blob border-[20px] border-white blur-2xl animation-delay-2000"></div>
          <div className="absolute bottom-0 -left-30 w-86 h-72  bg-[#a427ca] rounded-full mix-blend-multiply filter  opacity-15 blur-2xl animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-40 right-20 w-86 h-72 uppercase  outfit text-7xl font-bold text-blue-400  opacity-65    animation-delay-4000">Udemy</div>
           <div className="absolute bottom-50 right-20 w-86 h-72 uppercase   text-5xl font-extrabold text-blue-500  opacity-45    animation-delay-4000">Courseera</div>
            <div className="absolute bottom-70 right-40 w-86 h-72 uppercase   text-5xl font-extrabold text-blue-400  opacity-45    animation-delay-4000">edx</div>
             <div className="absolute -bottom-70 right-90 w-86 h-72 uppercase   text-5xl font-extrabold text-blue-100  opacity-45    animation-delay-4000">Alison</div>
              <div className="absolute -bottom-20 right-35 w-86 h-72 uppercase   text-5xl font-extrabold text-yellow-400  opacity-45    animation-delay-4000">Ostad</div>
               <div className="absolute bottom-20 right-10 w-86 h-72 uppercase   text-5xl font-extrabold text-green-400  opacity-45    animation-delay-4000">KhanAcademy</div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black mb-6 righteous bg-gradient-to-r from-[#fcf801] via-[#53c0fa] to-[#fbfb2c] bg-clip-text text-transparent animate-pulse-slow ">
              <span className="text-yellow-100">L</span>earnIQ
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#fbbc2c] to-[#2185f7] mx-auto mb-8"></div>
          </div>
          
          <p className="text-2xl md:text-4xl font-light mb-8 text-gray-400">
            Where <span className="text-[#fbbc2c] font-bold">Knowledge</span> Meets{" "}
            <span className="text-[#6d93fc] font-bold">Innovation</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bridging learners and educators in a space where skills are built, 
            opportunities thrive, and futures are shaped.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <button onClick={()=>{navigate('/allapprovedclasses')}} className="group relative px-8 py-4 bg-[#fbbc2c] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
              <span className="relative z-10">Start Learning</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button onClick={()=>{navigate('/teacherform')}} className="px-8 py-4 bg-transparent border-2 border-[#1e8a78] text-[#1e8a78] rounded-full font-bold text-lg hover:bg-[#1e8a78] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
              Become an Instructor
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#fbbc2c] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#1e8a78] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Our Story Section with Image */}
      <div className="relative py-32 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-6xl font-black">
                <span className="bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78]"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                LearnIQ was born from a simple idea: making quality education 
                accessible to everyone, everywhere. What started as a vision to 
                connect learners with passionate instructors has now become a 
                growing community of curious minds.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe that education should break barriers, not create them. 
                Every student deserves access to world-class learning experiences.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fbbc2c] to-[#1e8a78] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white border-2 border-[#1e8a78] rounded-3xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-2xl">
                <img 
                  src="https://i.ibb.co.com/MqXny7y/Screenshot-2025-08-16-234031.png" 
                  alt="LearnIQ Platform" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-20 px-6 bg-gradient-to-b from-white to-[#e7efee]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50K+" label="Active Learners" />
            <StatCard number="1K+" label="Expert Instructors" />
            <StatCard number="500+" label="Courses Available" />
            <StatCard number="95%" label="Success Rate" />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="relative py-32 px-6 bg-[#020202]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fbbc2c] to-transparent opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>
              <div className="relative bg-white backdrop-blur-sm border-2 border-[#fbbc2c]/20 rounded-3xl p-12 h-full hover:border-[#fbbc2c] transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaRocket className="text-6xl text-[#fbbc2c] mb-6" />
                <h3 className="text-4xl font-black mb-6 text-[#fbbc2c]">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower learners with skills, knowledge, and opportunities 
                  through modern, engaging, and flexible online education that 
                  adapts to your pace and goals.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e8a78] to-transparent opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>
              <div className="relative bg-white backdrop-blur-sm border-2 border-[#1e8a78]/20 rounded-3xl p-12 h-full hover:border-[#1e8a78] transition-all duration-300 shadow-lg hover:shadow-2xl">
                <FaGlobe className="text-6xl text-[#1e8a78] mb-6" />
                <h3 className="text-4xl font-black mb-6 text-[#1e8a78]">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To build a global learning platform where students and 
                  instructors grow together, breaking barriers of geography, 
                  background, and resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer - with background image */}
      <div 
        className="relative py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/twJJ5LmD/school-work-851328-1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#fbbc2c]/85"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 text-white">
              What We Offer
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-white to-[#1e8a78] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FaChalkboardTeacher}
              title="Expert Instructors"
              description="Learn from industry professionals and subject experts who are passionate about teaching."
              color="#fbbc2c"
              isHovered={hoveredCard === 0}
              onHover={() => setHoveredCard(0)}
              onLeave={() => setHoveredCard(null)}
            />
            <FeatureCard
              icon={MdCastForEducation}
              title="Flexible Learning"
              description="Access courses anytime, anywhere at your own pace. Learn on your schedule."
              color="#1e8a78"
              isHovered={hoveredCard === 1}
              onHover={() => setHoveredCard(1)}
              onLeave={() => setHoveredCard(null)}
            />
            <FeatureCard
              icon={IoMdCodeWorking}
              title="Practical Skills"
              description="Hands-on projects, real-world examples, and career growth opportunities await."
              color="#fbbc2c"
              isHovered={hoveredCard === 2}
              onHover={() => setHoveredCard(2)}
              onLeave={() => setHoveredCard(null)}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-[#fbbc2c] via-[#1e8a78] to-[#fbbc2c] rounded-3xl p-16 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYtNmg2djZoNnY2aC02djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-5xl font-black mb-6 text-white">Join the LearnIQ Journey</h2>
              <p className="text-2xl mb-10 text-white/90">
                Start your path to knowledge, growth, and success today.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <button nClick={()=>{navigate('/allapprovedclasses')}} className="group relative px-10 py-5 bg-white text-[#fbbc2c] rounded-full font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-110 shadow-xl">
                  <span className="relative z-10">Explore Courses</span>
                </button>
                <button nClick={()=>{navigate('/teacherform')}} className="px-10 py-5 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  Teach With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
    <div className="text-5xl font-black bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, color, isHovered, onHover, onLeave }) => (
  <div
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className="group relative cursor-pointer"
  >
    <div className={`absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-30 rounded-3xl transition-all duration-500 blur-xl`}></div>
    
    <div className="relative bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-3xl p-10 h-full hover:border-white transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
        isHovered ? 'bg-gradient-to-br from-[#fbbc2c] to-[#1e8a78] scale-110' : 'bg-[#e7efee]'
      }`}>
        <Icon className={`text-4xl ${isHovered ? 'text-white' : 'text-[#fbbc2c]'} transition-colors duration-300`} />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#1e8a78] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
        {description}
      </p>
      
      <div className="mt-6 flex items-center text-[#1e8a78] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
        <span className="text-sm font-semibold">Learn More</span>
        <span className="ml-2">→</span>
      </div>
    </div>
  </div>
);

export default AboutUs;