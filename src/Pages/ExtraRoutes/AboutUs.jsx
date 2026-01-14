import React from "react";
import { FaChalkboardTeacher, FaRocket, FaGlobe } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import { useNavigate } from "react-router";
import { motion, } from "framer-motion";
import { Download } from "lucide-react";



const AboutUs = () => {
  // const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate()
  // const { scrollYProgress } = useScroll();
  // const ref = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"]
  // })

  // const scale = useTransform(scrollYProgress, [0, 0.4], [0.4, 7])
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
        <div className="relative z-10 text-center px-2 md:px-6 ">
          <div className=" absolute top-40 blur-2xl -right-70   w-90 h-80 rounded-b-full z-20 rotate-12    bg-[#dafc00]  opacity-10   "></div>
          <div className=" absolute -top-8  blur-2xl opacity-100 -right-120  w-[600px] h-15  z-20 rotate-8     bg-black     "></div>
          <div className=" absolute -bottom-32 w-[1800px] blur-xl -left-10  opacity-100  h-15  z-20 rotate-0     bg-black     "></div>
          <div className="flex gap-[1px] backdrop-blur-3xl rotate-2 -top-15 absolute items-end -left-10 justify-center ">
            <div className=" blur-xs  opacity-15       w-9 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/50 via-tranparent    to-yellow-400/50   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/60 via-transparent to-yellow-400/50   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/60 via-transparent to-yellow-400/50   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/60 via-transparent to-yellow-400/50   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/60 via-transparent to-yellow-400/50   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/60 via-transparent to-yellow-400/50   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/60 via-transparent to-yellow-400/50   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-yellow-200/60 via-transparent to-yellow-400/50   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/60  via-transparent  to-blue-400/70   "></div>
            <div className="   opacity-20 blur-[1px]  -mt-0  w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/60  via-transparent  to-blue-400/70   "></div>
            <div className="   opacity-20 blur-[1px]  -mt-0  w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/60  via-transparent  to-blue-400/70   "></div>
            <div className="   opacity-20 blur-[1px]  -mt-0  w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/60  via-transparent  to-blue-400/70 "></div>
            <div className="   opacity-20 blur-[1px]  -mt-0  w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/60  via-transparent  to-blue-400/70   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/60  via-transparent  to-blue-200/70   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/60  via-transparent  to-blue-200/70   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/60  via-transparent  to-blue-200/70 "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/60  via-transparent  to-blue-200/70   "></div>
            <div className="   opacity-20 blur-[1px]  -mt-0  w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/60  via-transparent  to-blue-400/70 "></div>
            <div className="   opacity-20 blur-[1px]  -mt-0  w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-400/60  via-transparent  to-blue-400/70   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/60  via-transparent  to-blue-200/70   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/60  via-transparent  to-blue-200/70   "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/60  via-transparent  to-blue-200/70 "></div>
            <div className="   opacity-20 blur-[1px]         w-20 h-screen z-20    border-l-[#151b27] border-r-[#d9dde7]   bg-gradient-to-r from-blue-200/60  via-transparent  to-blue-200/70   "></div>
          </div>


          <div className="mb-8 mt-28 lg:mt-10">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 righteous bg-gradient-to-r from-[#fcf801] via-[#53c0fa] to-[#fbfb2c] bg-clip-text text-transparent animate-pulse-slow ">
              <span className="text-yellow-100">L</span>earnIQ
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#fbbc2c] to-[#2185f7] mx-auto mb-8"></div>
          </div>

          <p className="text-2xl relative z-40 md:text-4xl font-light mb-8 bg-black/10 p-3 text-gray-100">
            Where <span className="text-[#fbbc2c] font-bold">Knowledge</span> Meets{" "}
            <span className="text-[#6d93fc] font-bold">Innovation</span>
          </p>

          <p className="text-lg relative z-40 font-mono  md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Making free online learning easy to find and accessible for everyone.
          </p>

          <div className="mt-5 md:mt-12 flex flex-wrap gap-4 justify-center">
            <button onClick={() => { navigate('/allapprovedclasses') }} className="group relative px-4 md:px-8 py-2 md:py-4 bg-[#fbbc2c] text-white rounded-full font-bold md:text-lg text-[14px] overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
              <span className="relative z-10">Start Learning</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbbc2c] to-[#1e8a78] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button onClick={() => { navigate('/teacherform') }} className="px-4 relative z-40 md:px-8 py-2 md:py-4 bg-transparent border-2 border-[#1e8a78] text-[#1e8a78] rounded-full font-bold md:text-lg text-[14px] hover:bg-[#1e8a78] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
              Become an Instructor
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-52 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
              <p className="text-xl font-mono z-20 text-gray-100 leading-relaxed">
                LearnIQ was born from a simple idea: making quality education accessible to everyone, everywhere.
                This platform is being built to gather and share as many free learning resources as possible —
                courses that many people are unaware of or have never discovered.
              </p>

              <p className="text-lg font-mono text-gray-300 leading-relaxed">
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
              <p className="text-md font-mono z-20 text-gray-100 leading-relaxed">
                LearnIQ was born from a simple idea: making quality education accessible to everyone, everywhere.
                This platform is being built to gather and share as many free learning resources as possible —
                courses that many people are unaware of or have never discovered.
              </p>

              <p className="text-md font-mono z-50 text-gray-300 leading-relaxed">
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


      {/* Mission & Vision */}
      <div className="relative py-32 px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 ">
            {/* Mission */}
            <div className="group relative h-full ">
              <div className="absolute blur-3xl bg-blue-400 lg:right-56 opacity-35 lg:w-96 lg:h-60 w-60 h-60 rounded-full z-0"></div>
              {/* Hover Gradient */}
              <div className="absolute z-20 inset-0 bg-gradient-to-br from-[#044085] to-transparent opacity-0 group-hover:opacity-90   transition-opacity duration-500" />


              <div className="relative  md:group-hover:flex md:group-hover:flex-col group-hover:gap-10 md:group-hover:items-center md:group-hover:justify-center backdrop-blur-sm border-r-2 border-b-2 md:p-12 p-2 h-full  
                  transition-all duration-300 shadow-lg hover:shadow-2xl">

                <FaRocket className="text-6xl text-[#fbbc2c]  group-hover:text-white mb-6 md:transition-transform duration-300 md:group-hover:scale-170 " />

                {/* Title */}
                <h3 className="text-4xl font-black mb-6 group-hover:text-white habibi text-[#0289f7]
                   transition-all duration-300 md:group-hover:text-5xl">
                  Our Mission
                </h3>

                {/* Description (keeps space, fades out) */}
                <p
                  className="text-lg text-gray-100 leading-relaxed
                 transition-all duration-300
                 md:group-hover:opacity-0 font-mono md:group-hover:hidden "
                >
                  Our mission is to simplify access to quality education by bringing together free courses from multiple trusted learning platforms such as Udemy, edX, Coursera, Ostad, and Khan Academy in one centralized place. We aim to help learners easily discover relevant courses, develop practical skills, and learn at their own pace—without worrying about cost, platform confusion, or geographical limitations.

                </p>
              </div>
            </div>
            {/* vission section */}
            <div className="group relative h-full ">
              <div className="absolute blur-3xl bg-blue-400 lg:right-26 opacity-35 lg:w-96 lg:h-60 w-60 h-60 rounded-full z-0"></div>
              {/* Hover Gradient */}
              <div className="absolute z-20 inset-0 bg-gradient-to-br from-[#044085] to-transparent opacity-0 md:group-hover:opacity-90   md:transition-opacity duration-500" />


              <div className="relative  md:group-hover:flex md:group-hover:flex-col md:group-hover:gap-10 md:group-hover:items-center md:group-hover:justify-center backdrop-blur-sm border-l-2 border-b-2 md:p-12 p-2 h-full  
                  transition-all duration-300 shadow-lg hover:shadow-2xl">

                <FaGlobe className="text-6xl text-[#058dfd] md:group-hover:text-white mb-6 transition-transform duration-300 md:group-hover:scale-170 " />

                {/* Title */}
                <h3 className="text-4xl font-black mb-6 md:group-hover:text-white habibi text-[#0289f7]
                   transition-all duration-300 md:group-hover:text-5xl">
                  Our Vision
                </h3>

                {/* Description (keeps space, fades out) */}
                <p
                  className="text-lg text-gray-100 leading-relaxed
                 transition-all duration-300
                 md:group-hover:opacity-0 font-mono md:group-hover:hidden "
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
        className="relative py-10 md:px-6 px-2 bg-cover bg-center overflow-hidden"
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
              <div className="float-1 absolute top-0 md:left-0 left-20 md:w-24 mdh-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/pBtG5PQ5/udemy.png" alt="Udemy" className="w-16 h-16 object-contain" />
              </div>

              {/* Coursera - Top Right */}
              <div className="float-2 absolute top-10 right-0 md:w-28 md:h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/r2KS9zf4/Coursera-Logo.png" alt="Coursera" className="w-18 h-18 object-contain" />
              </div>

              {/* edX - Left Middle */}
              <div className="float-3 absolute left-0 top-1/5 md:top-1/2 md:left-1 -translate-y-1/2 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/QvYnY3q0/favicon.jpg" alt="edX" className="w-14 h-14 object-contain" />
              </div>

              {/* Khan Academy - Right Middle */}
              <div className="float-4 absolute right-0 top-1/2 -translate-y-1/2 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Khan_Academy_logo.svg" alt="Khan Academy" className="w-16 h-16 object-contain" />
              </div>

              {/* Ostad - Bottom Left */}
              <div className="float-5 absolute bottom-5 left-10 -translate-y-1/2 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="hhttps://i.ibb.co.com/SDHnw2fD/ostad-logo.jpg" alt="Khan Academy" className="w-16 h-16 object-contain" />
              </div>

              {/* Alison - Bottom Right */}
              <div className="float-6 absolute bottom-0 md:right-20 right-0 -translate-y-1/2 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <img src="https://i.ibb.co.com/Y4ftBZVB/Screenshot-2025-12-11-230019.png" alt="Khan Academy" className="w-16 h-16 object-contain" />
              </div>

              {/* 10 Minute School - Bottom Center */}
              <div className="float-7 absolute top-10 md:left-1/2 left-0 -translate-y-1/2 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
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

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:p-6 p-2 border border-white/20">
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
      <div
        className="relative py-20 md:px-6 px-2 bg-cover bg-center overflow-hidden"

      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/95 via-[#16213e]/90 to-[#0f3460]/95"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="md:text-6xl text-4xl lg:text-7xl font-black text-white mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8fb2c] to-[#80f916]">Connect</span>
            </h2>
            <p className="md:text-xl text-[14px] text-gray-300 font-mono max-w-2xl mx-auto">
              Have a question or want to collaborate? I'd love to hear from you!
            </p>
            <div className="h-1 w-40 bg-gradient-to-r from-[#fbbc2c] to-[#f97316] mx-auto mt-6"></div>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Creative Contact Cards */}
            <div className="space-y-6">

              {/* Email Card */}
              <div className="group relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl md:p-6 p-2 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                <div className="absolute -top-6 md:-left-6 -left-2 md:w-16 md:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="lg:ml-8 ml-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase font-mono tracking-wider mb-2">Email Address</h3>
                  <a href="mailto:fahmidanimra@gmail.com" className="md:text-2xl font-mono text-[15px]  font-medium text-white hover:text-blue-400 transition-colors">
                    fahmidanimra@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
                <div className="absolute -top-6 md:-left-6 -left-2 md:w-16 md:h-16 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="md:ml-8 ">
                  <h3 className="text-sm font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">Phone Number</h3>
                  <a href="tel:+8801568029731" className="md:text-2xl font-mono text-[15px] font-medium text-white hover:text-green-400 transition-colors">
                    +8801568029731
                  </a>
                </div>
              </div>

              {/* Social Links Grid */}
              <div className="flex items-center justify-center gap-4 pt-4">

                {/* Portfolio */}
                <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="group relative ">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white">Portfolio</span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group relative ">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="group relative ">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white">LinkedIn</span>
                </a>

              </div>

            </div>

            {/* Right Side - Creative Visual Element */}
            <div className="relative h-[400px] hidden lg:flex items-center justify-center">

              {/* Main Circle with Gradient */}
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2caffb] via-[#1693f9] to-[#ef4444] rounded-full blur-2xl opacity-70"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[#2ce3fb] to-purple-600 rounded-full blur-xl opacity-50"></div>

                {/* Center Content */}
                <div className="relative w-full h-full bg-gradient-to-br from-[#0f92f5] to-[#204ecb] rounded-full border-2 border-[#328df5] shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="relative text-center z-10 p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#fbbc2c] to-[#f97316] rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-3">Start a <span className="text-[#a2fa76]">Conversation</span> </h3>
                    <p className="text-gray-300 font-mono text-lg">Whether it's a project idea, question, or just to say hi!</p>
                  </div>
                </div>

                {/* Orbiting Icons */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-lg shadow-pink-500/50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg font-mono mb-6">Available for freelance projects and collaborations</p>
            <div className="flex gap-4 justify-center">
              <button className="md:px-10 px-5 font-mono md:py-4 py-2 bg-gradient-to-r from-[#fbbc2c] to-[#f97316] hover:from-[#f97316] hover:to-[#ef4444] text-white font-bold rounded-full shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                Send Message
              </button>
              <a href="FAHMIDA NIMRA-MERN_Stack-Developer-fahmidanimra@gmail.pdf" download="Resume-Fahmida_Nimra-fahmidanimra@gmail.com.pdf">
                <button className="md:px-10 flex gap-2 px-5 cursor-pointer font-mono md:py-4 py-2 bg-blue-500/50 hover:bg-white/10  text-white font-bold rounded-full border-2 border-blue-300/50 hover:border-white/40 transition-all hover:scale-105">
                  Download CV <Download className="text-green-300"></Download>
                </button>
              </a>

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
      25% { transform: translateY(-32px); }
      50% { transform: translateY(32px); }
      50% { transform: translateX(-22px); }
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



export default AboutUs;