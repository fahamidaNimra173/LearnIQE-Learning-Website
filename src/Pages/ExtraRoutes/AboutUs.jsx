import React, { useState } from "react";
import { FaChalkboardTeacher, FaRocket, FaGlobe } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import { useNavigate } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";



const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll();
  // const ref = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"]
  // })

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.4, 7])
  return (
    <div className="min-h-screen bg-[#060606] dark:bg-[#050505] text-gray-900 overflow-hidden">
      {/* Hero Section with Animated Gradient */}
      <div className="relative  min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 z-10 ">
          <div className="absolute top-1/7 -left-30 w-86 h-72  bg-[#f4d99c] rounded-t-full   opacity-25 blur-2xl border-[30px] border-black animate-blob"></div>
          <div className="absolute bottom-1/5 -left-0 w-86  h-72 bg-[#2092f0]  mix-blend-multiply filter   opacity-45 animate-blob border-[20px] border-white blur-2xl animation-delay-2000"></div>
          <div className="absolute bottom-0 -left-30 w-86 h-72  bg-[#a427ca] rounded-full mix-blend-multiply filter  opacity-25 blur-2xl animate-blob animation-delay-4000"></div>

        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <div className=" absolute top-40 blur-2xl -right-70 opacity-30   w-90 h-80 rounded-b-full z-20 rotate-12    bg-[#dafc00]     "></div>
          <div className=" absolute -top-8  blur-2xl opacity-100 -right-120  w-[600px] h-15  z-20 rotate-8     bg-black     "></div>
          <div className=" absolute -bottom-32 blur-xl   opacity-100 -right-110  w-[600px] h-15  z-20 rotate-0     bg-black     "></div>
          <div className="flex rotate-10 absolute items-end justify-end -right-70 lg:-right-120">
            <div className="   opacity-19 -mt-95       w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50 via-tranparent    to-yellow-400/50   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50  to-yellow-400/50   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50  to-yellow-400/50   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50  to-yellow-400/50   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50  to-yellow-400/50   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50  to-yellow-400/50   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50  to-yellow-400/50   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50  to-yellow-400/50   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/50    to-blue-400/70   "></div>
            <div className="   opacity-25 -mt-0  w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/50    to-blue-400/70   "></div>
            <div className="   opacity-25 -mt-0  w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/50    to-blue-400/70 "></div>
            <div className="   opacity-25 -mt-0  w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/50    to-blue-400/70   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/50    to-blue-200/70   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/50    to-blue-200/70   "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/50    to-blue-200/70 "></div>
            <div className="   opacity-25        w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/50    to-blue-200/70   "></div>
          </div>


          <div className="mb-8 mt-28 lg:mt-10">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 righteous bg-gradient-to-r from-[#fcf801] via-[#53c0fa] to-[#fbfb2c] bg-clip-text text-transparent animate-pulse-slow ">
              <span className="text-yellow-100">L</span>earnIQ
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#fbbc2c] to-[#2185f7] mx-auto mb-8"></div>
          </div>

          <p className="text-2xl md:text-4xl font-light mb-8 bg-black/10 p-3 text-gray-100">
            Where <span className="text-[#fbbc2c] font-bold">Knowledge</span> Meets{" "}
            <span className="text-[#6d93fc] font-bold">Innovation</span>
          </p>

          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Making free online learning easy to find and accessible for everyone.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <button onClick={() => { navigate('/allapprovedclasses') }} className="group relative px-8 py-4 bg-[#fbbc2c] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
              <span className="relative z-10">Start Learning</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button onClick={() => { navigate('/teacherform') }} className="px-8 py-4 bg-transparent border-2 border-[#1e8a78] text-[#1e8a78] rounded-full font-bold text-lg hover:bg-[#1e8a78] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
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
        <div className="absolute bg-transparent bottom-11 md:bottom-44 lg:top-49 right-8 lg:right-9 w-78 h-78 border-8 border-t-blue-400 border-b-blue-400 border-l-black border-r-black rotate-6 rounded-full z-10 animate-[spin_8s_linear_infinite_reverse] opacity-70"></div>

        <div className="absolute bg-transparent bottom-22  md:bottom-55 lg:top-60 right-20 w-56 h-56 border-8 border-t-blue-400 border-b-blue-400 border-l-black border-r-black -rotate-20 animate-[spin_3s_ease-in-out_infinite] bg-gradient-to-b from-blue-400/40 via-transparent to-transparent rounded-full z-10 shadow-lg shadow-blue-400/30"></div>

        <div className="absolute bg-transparent  bottom-15 md:bottom-48 lg:top-53 right-13 w-70 h-70 border-2 border-t-blue-400 border-b-blue-400 border-l-black border-r-blue-400 rotate-180 rounded-full z-10 animate-[pulse_4s_ease-in-out_infinite] shadow-2xl shadow-blue-400/70"></div>

        <div className="absolute bg-transparent -bottom-3 lg:top-56 right-16 w-64 h-64 border border-blue-400/30 rounded-full z-10 animate-[spin_12s_linear_infinite] blur-sm"></div>
        <div className="absolute bg-blue-500 rounded-b-2xl rotate-60 lg:rotate-70 z-10 opacity-50 bottom-1 lg:bottom-65 right-1/2 blur-3xl w-4/5 h-26 ">
        </div>
        <div className="absolute bg-blue-500 rounded-b-2xl -rotate-60 lg:-rotate-70 z-10 opacity-50 bottom-2 lg:bottom-65 left-1/2 blur-3xl w-4/5 h-26 ">
        </div>




        <div className="lg:max-w-6xl w-full z-20 lg:mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-10 lg:overflow-hidden items-center">
            <  motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: -7 }}
              transition={{ duration: 2, ease: "linear" }}

              className="space-y-6 lg:block hidden relative border-1 border-blue-500 shadow-2xl shadow-blue-300  p-8">
              <div className="absolute bg-blue-500 rounded-full rotate-60 -z-10 opacity-50 top-0 right-0 blur-3xl w-76 h-76 ">

              </div>
              <h2 className="text-6xl font-medium uppercase">
                <span className=" text-white">
                  Our <span className="text-blue-500">Story</span>
                </span>
              </h2>
              <div className="h-[3px] w-74 bg-gradient-to-r from-[#0c0a05] via-[#0f98e7] to-transparent"></div>
              <p className="text-xl z-20 text-gray-100 leading-relaxed">
                LearnIQ was born from a simple idea: making quality education accessible to everyone, everywhere.
                This platform is being built to gather and share as many free learning resources as possible —
                courses that many people are unaware of or have never discovered.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                By connecting learners with trusted platforms and valuable free courses, LearnIQ helps people
                learn new skills, explore their interests, and build meaningful careers. We believe education
                should break barriers, not create them, and everyone deserves access to world-class learning
                opportunities.
              </p>

            </motion.div>
            {/* for smaller device */}
            <  motion.div


              className="space-y-6 block lg:hidden relative border-1 border-blue-500 shadow-2xl shadow-blue-300  p-2">
              <div className="absolute bg-blue-500 rounded-full rotate-60 -z-10 opacity-50 top-0 right-0 blur-3xl w-76 h-76 ">

              </div>
              <h2 className="text-4xl z-30 font-medium uppercase">
                <span className=" text-white">
                  Our <span className="text-blue-500">Story</span>
                </span>
              </h2>
              <div className="h-[3px]  w-74 bg-gradient-to-r from-[#0c0a05] via-[#0f98e7] to-transparent"></div>
              <p className="text-md z-20 text-gray-100 leading-relaxed">
                LearnIQ was born from a simple idea: making quality education accessible to everyone, everywhere.
                This platform is being built to gather and share as many free learning resources as possible —
                courses that many people are unaware of or have never discovered.
              </p>

              <p className="text-md z-50 text-gray-300 leading-relaxed">
                By connecting learners with trusted platforms and valuable free courses, LearnIQ helps people
                learn new skills, explore their interests, and build meaningful careers. We believe education
                should break barriers, not create them, and everyone deserves access to world-class learning
                opportunities.
              </p>

            </motion.div>

            <div className="relative z-20 mt-10">


              <div className="absolute inset-0 bg-gradient-to-br from-[#f7bd36] via-transparent to-[#010302] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-blue-500/50 border-2 border-[#249fe6] rounded-3xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-2xl">
                <img
                  src="https://i.ibb.co.com/MqXny7y/Screenshot-2025-08-16-234031.png"
                  alt="LearnIQ Platform"
                  className="w-full h-full border-2 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="relative py-20 px-6 bg-gradient-to-b from-white to-[#e7efee]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50K+" label="Active Learners" />
            <StatCard number="1K+" label="Expert Instructors" />
            <StatCard number="500+" label="Courses Available" />
            <StatCard number="95%" label="Success Rate" />
          </div>
        </div>
      </div> */}

      {/* Mission & Vision */}
      <div className="relative py-32 px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 ">
            {/* Mission */}
            <div className="group relative h-full ">
              <div className="absolute blur-3xl bg-blue-400 lg:right-56 opacity-35 lg:w-96 lg:h-60 w-60 h-60 rounded-full z-0"></div>
              {/* Hover Gradient */}
              <div className="absolute z-20 inset-0 bg-gradient-to-br from-[#044085] to-transparent opacity-0 group-hover:opacity-90   transition-opacity duration-500" />


              <div className="relative  group-hover:flex group-hover:flex-col group-hover:gap-10 group-hover:items-center group-hover:justify-center backdrop-blur-sm border-r-2 border-b-2 md:p-12 p-6 h-full  
                  transition-all duration-300 shadow-lg hover:shadow-2xl">

                <FaRocket className="text-6xl text-[#fbbc2c]  group-hover:text-white mb-6 transition-transform duration-300 group-hover:scale-170 " />

                {/* Title */}
                <h3 className="text-4xl font-black mb-6 group-hover:text-white habibi text-[#0289f7]
                   transition-all duration-300 group-hover:text-5xl">
                  Our Mission
                </h3>

                {/* Description (keeps space, fades out) */}
                <p
                  className="text-lg text-gray-100 leading-relaxed
                 transition-all duration-300
                 group-hover:opacity-0 group-hover:hidden "
                >
                  Our mission is to simplify access to quality education by bringing together free courses from multiple trusted learning platforms such as Udemy, edX, Coursera, Ostad, and Khan Academy in one centralized place. We aim to help learners easily discover relevant courses, develop practical skills, and learn at their own pace—without worrying about cost, platform confusion, or geographical limitations.

                </p>
              </div>
            </div>







            <div className="group relative h-full ">
              <div className="absolute blur-3xl bg-blue-400 lg:right-26 opacity-35 lg:w-96 lg:h-60 w-60 h-60 rounded-full z-0"></div>
              {/* Hover Gradient */}
              <div className="absolute z-20 inset-0 bg-gradient-to-br from-[#044085] to-transparent opacity-0 group-hover:opacity-90   transition-opacity duration-500" />


              <div className="relative  group-hover:flex group-hover:flex-col group-hover:gap-10 group-hover:items-center group-hover:justify-center backdrop-blur-sm border-l-2 border-b-2 md:p-12 p-6 h-full  
                  transition-all duration-300 shadow-lg hover:shadow-2xl">

                <FaGlobe className="text-6xl text-[#058dfd] group-hover:text-white mb-6 transition-transform duration-300 group-hover:scale-170 " />

                {/* Title */}
                <h3 className="text-4xl font-black mb-6 group-hover:text-white habibi text-[#0289f7]
                   transition-all duration-300 group-hover:text-5xl">
                  Our Vision
                </h3>

                {/* Description (keeps space, fades out) */}
                <p
                  className="text-lg text-gray-100 leading-relaxed
                 transition-all duration-300
                 group-hover:opacity-0 group-hover:hidden "
                >
                  Our vision is to create a globally accessible learning ecosystem where education is truly free, inclusive, and barrier-free. We envision a future where learners from all backgrounds can continuously grow by accessing high-quality educational resources across platforms, empowering them to improve their skills, unlock opportunities, and shape a better future for themselves and their communities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* What We Offer - with background image */}
      <div
        className="relative py-10 px-6 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://i.ibb.co/twJJ5LmD/school-work-851328-1280.jpg')" }}
      >
        {/* Add keyframes style */}


        <div className="absolute inset-0 bg-[#2c86fb]/80"></div>

        <div className="relative z-10 w-full lg:max-w-7xl lg:mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Student Image with Floating Platform Logos */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Central Student Image */}
              <div className="relative z-20 w-80 h-80 rounded-full overflow-hidden border-2 border-white shadow-2xl">
                <img
                  src="https://i.ibb.co.com/Ldh3T7gX/home-based-learning-8968710-1280-1-1.png"
                  alt="Student learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>

              {/* Floating Platform Logos */}
              {/* Udemy - Top Left */}
              <div className="float-1 absolute top-0 left-0 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/pBtG5PQ5/udemy.png" alt="Udemy" className="w-16 h-16 object-contain" />
              </div>

              {/* Coursera - Top Right */}
              <div className="float-2 absolute top-10 right-0 w-28 h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/r2KS9zf4/Coursera-Logo.png" alt="Coursera" className="w-18 h-18 object-contain" />
              </div>

              {/* edX - Left Middle */}
              <div className="float-3 absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/QvYnY3q0/favicon.jpg" alt="edX" className="w-14 h-14 object-contain" />
              </div>

              {/* Khan Academy - Right Middle */}
              <div className="float-4 absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Khan_Academy_logo.svg" alt="Khan Academy" className="w-16 h-16 object-contain" />
              </div>

              {/* Ostad - Bottom Left */}
            <div className="float-5 absolute bottom-5 left-10 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="hhttps://i.ibb.co.com/SDHnw2fD/ostad-logo.jpg" alt="Khan Academy" className="w-16 h-16 object-contain" />
              </div>

              {/* Alison - Bottom Right */}
             <div className="float-6 absolute bottom-0 right-20 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/Y4ftBZVB/Screenshot-2025-12-11-230019.png" alt="Khan Academy" className="w-16 h-16 object-contain" />
              </div>

              {/* 10 Minute School - Bottom Center */}
              <div className="float-7 absolute top-10 left-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/SXJx72YD/10min-School.png" alt="Khan Academy" className="w-16 h-16 object-contain" />
              </div>

              {/* Decorative Elements */}
              <div className="ping-custom absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="ping-custom absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full" style={{ animationDelay: '0.5s' }}></div>
              <div className="ping-custom absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Right Side - Motivational Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h2 className="sm:text-5xl text-4xl lg:text-6xl font-black leading-tight">
                  Learn Anything,
                  <span className="block text-[#fbbc2c]">Completely Free</span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-white to-[#fbbc2c]"></div>
              </div>

              <div className="space-y-6 text-lg">
                <p className="leading-relaxed text-white/90">
                  Access <span className="font-bold text-[#fbbc2c]">thousands of premium courses</span> from world-renowned platforms like Udemy, Coursera, edX, and Khan Academy — all at zero cost.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex sm:flex-row flex-col items-start gap-4">
                    <div className="w-12 h-12 bg-[#fbbc2c] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">AI-Powered Learning Assistant</h3>
                      <p className="text-white/80">Get instant help, personalized recommendations, and 24/7 support from our intelligent AI tutor.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#fbbc2c] rounded-full"></div>
                    <p className="text-white/90">No hidden fees, no credit card required</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#1e8a78] rounded-full"></div>
                    <p className="text-white/90">Learn at your own pace, on your schedule</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#fbbc2c] rounded-full"></div>
                    <p className="text-white/90">Certificates and practical skills for career growth</p>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-[#fbbc2c] via-[#1e8a78] to-[#fbbc2c]  p-16 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnYtNmg2djZoNnY2aC02djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl font-black mb-6 text-white">Join the LearnIQ Journey</h2>
              <p className="text-2xl mb-10 text-white/90">
                Start your path to knowledge, growth, and success today.
              </p>

              <div className="flex flex-wrap gap-6 justify-center">
                <button nClick={() => { navigate('/allapprovedclasses') }} className="group relative px-10 py-5 bg-white text-[#fbbc2c] rounded-full font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-110 shadow-xl">
                  <span className="relative z-10">Explore Courses</span>
                </button>
                <button nClick={() => { navigate('/teacherform') }} className="px-10 py-5 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  Teach With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* learn anything complety free animation */}
      <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-delayed-1 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-25px); }
    }
    @keyframes float-delayed-2 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-18px); }
    }
    @keyframes float-delayed-3 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-22px); }
    }
    @keyframes ping-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.5); }
    }
    
    .float-1 { animation: float 3s ease-in-out infinite; }
    .float-2 { animation: float-delayed-1 4s ease-in-out infinite; }
    .float-3 { animation: float-delayed-2 3.5s ease-in-out infinite; }
    .float-4 { animation: float-delayed-3 4.5s ease-in-out infinite; }
    .float-5 { animation: float 3.8s ease-in-out infinite; }
    .float-6 { animation: float-delayed-1 4.2s ease-in-out infinite; }
    .float-7 { animation: float-delayed-2 3.3s ease-in-out infinite; }
    .ping-custom { animation: ping-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
  `}</style>
      {/* banner animation */}
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
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${isHovered ? 'bg-gradient-to-br from-[#fbbc2c] to-[#1e8a78] scale-110' : 'bg-[#e7efee]'
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