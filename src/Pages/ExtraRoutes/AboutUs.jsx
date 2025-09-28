import React from "react";
import { motion } from 'framer-motion';
import '../../App.css'

import { FaChalkboardTeacher } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className=" text-gray-900">
      {/* Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center bg-gradient-to-r from-pink-200 via-[#1e8a78] to-transparent backdrop-blur-sm shadow-inner shadow-black lg:justify-center mt-20 dark:border-b-7 border-[#6c4370]">
        <div className="md:text-center px-4 lg:px-25 py-10 ">
          <BubbleText />
          <p className=" lg:text-left text-[#6c4370] dark:text-[#6c4370] font-medium text-[20px]">LearnIQ bridges learners and educators, creating a space where knowledge grows, skills are built, and opportunities thrive.</p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}>
          <img src="https://i.ibb.co.com/MqXny7y/Screenshot-2025-08-16-234031.png" alt="" />
        </motion.div>
      </div>

      <div className=" mx-auto  lg:mt-20 mt-15 py-12 lg:space-y-0 space-y-16">
        {/* Our Story */}
        <section className="space-y-4 px-4 lg:px-25 border-b-3 shadow-2xl pb-10 lg:shadow-transparent shadow-pink-300 border-gray-100  bg-gradient-to-t from-[#05f7ce] via-pink-100 to-transparent p-4 text-center">
          <h2 className="lg:text-5xl text-3xl righteous font-extrabold text-[#6c4370] dark:text-[[#6c4370]">Our Story</h2>
          <p className="max-w-3xl  mx-auto text-lg text-[#6c4370] dark:text-[#6c4370]">
            LearnIQ was born from a simple idea: making quality education
            accessible to everyone, everywhere. What started as a vision to
            connect learners with passionate instructors has now become a
            growing community of curious minds.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid px-4 lg:px-25 md:grid-cols-2  items-center">
          <div className="p-13  border-r-3  border-white lg:border-b-3 lg:border-white bg-gradient-to-l from-pink-100 via-pink-100 to-transparent  ">
            <h2 className="lg:text-5xl text-center my-7 text-3xl righteous font-extrabold text-[#1e8a78] dark:text-[#1e8a78]">
              Our Mission
            </h2>
            <p className="text-[#6c4370] text-center dark:text-[#6c4370] text-lg">
              To empower learners with skills, knowledge, and opportunities
              through modern, engaging, and flexible online education.
            </p>
          </div>
          <div className="p-10  border-l-3 lg:border-b-3 lg:border-white border-white bg-gradient-to-r from-[#d682de] via-pink-100 to-transparent  ">
            <h2 className="lg:text-5xl text-center my-7 text-3xl righteous font-extrabold text-[#1e8a78] dark:text-[#1e8a78]">
              Our Vision
            </h2>
            <p className="text-[#6c4370] text-center dark:text-[#6c4370] text-lg">
              To build a global learning platform where **students and
              instructors** grow together, breaking barriers of geography,
              background, and resources.
            </p>
          </div>
        </section>

        {/* What We Offer */}





        <div
          className="relative lg:mt-40 mt-20 p-4 bg-center bg-cover"
          style={{ backgroundImage: "url('https://i.ibb.co/twJJ5LmD/school-work-851328-1280.jpg')" }}
        >
          {/* Overlay: change bg-opacity-30 → 20/40/50 as needed */}
          <div className="absolute inset-0  bg-[#6c4370]/80 bg-opacity-40"></div>

          <div className="relative lg:px-25 py-15 px-4">
            <h2 className="lg:text-5xl text-3xl my-10 righteous font-extrabold text-[#f1f7f6] dark:text-[#f6faf9]">
              What We Offer
            </h2>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
              <Card title="Expert Instructors" subtitle="Learn from industry professionals and subject experts." href="#" icon={FaChalkboardTeacher} />
              <Card title="Flexible Learning" subtitle="Access courses anytime, anywhere at your own pace." href="#" icon={MdCastForEducation} />
              <Card title="Practical Skills" subtitle="Hands-on projects, real-world examples, and career growth." href="#" icon={IoMdCodeWorking} />
            </div>
          </div>
        </div>







        {/* <section className="text-center space-y-6">
          <h2 className="lg:text-5xl text-3xl righteous font-extrabold text-[#1e8a78] dark:text-[#1e8a78]">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#6c4370] dark:bg-[#6c4370] dark:text-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p>Learn from industry professionals and subject experts.</p>
            </div>
            <div className="p-6 bg-[#6c4370] dark:bg-[#6c4370] dark:text-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p>Access courses anytime, anywhere at your own pace.</p>
            </div>
            <div className="p-6 bg-[#6c4370] dark:bg-[#6c4370] dark:text-white rounded-xl shadow-md">
              <h3 className="text-xl dark:text-white font-semibold mb-2">Practical Skills</h3>
              <p>Hands-on projects, real-world examples, and career growth.</p>
            </div>
          </div>
        </section> */}

        {/* Impact in Numbers */}

        {/* Meet Our Instructors Preview */}
        <section className="text-center my-20 space-y-4">
          <h2 className="text-3xl font-bold text-[#0A5EB0] dark:text-[#6c4370]">
            Meet Our Instructors
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-[#6c4370]">
            Behind every successful student, there’s an inspiring instructor.
            Get to know the mentors who are shaping futures.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#6c4370] text-white dark:bg-[#6c4370] dark:text-white  rounded-lg font-semibold hover:bg-purple-700 transition">
            Explore Instructors
          </button>
        </section>

        {/* Student Success Stories */}
        <section className="text-center my-20 space-y-6">
          <h2 className="text-3xl font-bold text-[#6c4370] dark:[#6c4370]">
            Student Success Stories
          </h2>
          <p className="text-[#6c4370] dark:text-[#6c4370] max-w-3xl mx-auto">
            Thousands of learners have upskilled and transformed their careers
            with LearnIQ. From landing dream jobs to starting new ventures,
            their journeys inspire us every day.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12   bg-gradient-to-r from-[#6c4370] to-pink-300  text-white dark:text-white rounded-xl">
          <h2 className="text-4xl font-bold mb-4">Join the LearnIQ Journey</h2>
          <p className="text-lg mb-6">
            Start your path to knowledge, growth, and success today.
          </p>
          <div className="space-x-4 space-y-3">
            <button className="px-6 py-3 bg-[#EBFFD8] dark:bg-[#FFCFEF] text-[#2a4114] rounded-lg font-semibold hover:bg-gray-200 transition">
              Start Learning Today
            </button>
            <button className="px-6 py-3  bg-[#FFCFEF] dark:bg-[#51a3f5] text-purple-900 dark:text-white rounded-lg font-semibold hover:bg-yellow-300 transition">
              Become an Instructor
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};


const BubbleText = () => {
  return (
    <h2 className="lg:text-5xl text-3xl mt-10 mb-5 text-[#6c4370] habibi uppercase dark:text-[rgb(108,67,112)]">
      {"Building a Community of Learning".split("").map((char, idx) => (
        <span className="hoverText" key={idx}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};


const Card = ({ title, subtitle, icon: Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#6c4370] to-pink-200 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-200 group-hover:text-[#1e8a78] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#1e8a78] dark:text-[#1e8a78] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};



export default AboutUs;
