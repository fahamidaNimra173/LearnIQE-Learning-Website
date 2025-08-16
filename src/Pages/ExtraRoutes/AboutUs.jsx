import React from "react";

const AboutUs = () => {
  return (
    <div className=" text-gray-900">
      {/* Banner */}
      <div className="relative h-[300px] flex items-center justify-center dark:bg-gradient-to-r from-[#51a3f5] to-[#2e001f] text-white">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Our Story */}
        <section className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-white">Our Story</h2>
          <p className="max-w-3xl dark:text-white mx-auto text-lg text-gray-700">
            LearnIQ was born from a simple idea: making quality education
            accessible to everyone, everywhere. What started as a vision to
            connect learners with passionate instructors has now become a
            growing community of curious minds.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple-700 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-white text-lg">
              To empower learners with skills, knowledge, and opportunities
              through modern, engaging, and flexible online education.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-700 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-white text-lg">
              To build a global learning platform where **students and
              instructors** grow together, breaking barriers of geography,
              background, and resources.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-white">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-[#142900] dark:text-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p>Learn from industry professionals and subject experts.</p>
            </div>
            <div className="p-6 bg-white dark:bg-[#142900] dark:text-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p>Access courses anytime, anywhere at your own pace.</p>
            </div>
            <div className="p-6 bg-white dark:bg-[#142900] dark:text-white rounded-xl shadow-md">
              <h3 className="text-xl dark:text-white font-semibold mb-2">Practical Skills</h3>
              <p>Hands-on projects, real-world examples, and career growth.</p>
            </div>
          </div>
        </section>

        {/* Impact in Numbers */}
        <section className="bg-purple-100 dark:bg-[#142900] p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-white mb-8">
            Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-4xl font-bold text-purple-900 dark:text-white">10K+</h3>
              <p className="text-gray-700 dark:text-white">Active Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-900 dark:text-white">200+</h3>
              <p className="text-gray-700 dark:text-white">Courses Available</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-900 dark:text-white">100+</h3>
              <p className="text-gray-700 dark:text-white">Expert Instructors</p>
            </div>
          </div>
        </section>

        {/* Meet Our Instructors Preview */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-white">
            Meet Our Instructors
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-white">
            Behind every successful student, there’s an inspiring instructor.
            Get to know the mentors who are shaping futures.
          </p>
          <button className="mt-4 px-6 py-3 bg-purple-600 dark:bg-[#51a3f5] dark:text-white text-white rounded-lg font-semibold hover:bg-purple-700 transition">
            Explore Instructors
          </button>
        </section>

        {/* Student Success Stories */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-white">
            Student Success Stories
          </h2>
          <p className="text-gray-700 dark:text-white max-w-3xl mx-auto">
            Thousands of learners have upskilled and transformed their careers
            with LearnIQ. From landing dream jobs to starting new ventures,
            their journeys inspire us every day.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 dark:bg-gradient-to-r from-[#51a3f5] to-[#2e001f] text-white rounded-xl">
          <h2 className="text-4xl font-bold mb-4">Join the LearnIQ Journey</h2>
          <p className="text-lg mb-6">
            Start your path to knowledge, growth, and success today.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-200 transition">
              Start Learning Today
            </button>
            <button className="px-6 py-3 bg-yellow-400 text-purple-900 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Become an Instructor
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
