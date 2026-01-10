import React from 'react';

const PersonalDevelopment = () => {
  // Manual course data
  const personalDevelopmentCourses = [
    {
      _id: 1,
      title: "Professional Resume Writing Masterclass",
      platform: "Udemy",
      language: "English",
      rating: 4.7,
      Enrollment: "85,432",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500",
      url: "https://www.udemy.com/course/resume-writing/",
      price: "free"
    },
    {
      _id: 2,
      title: "CV Building: Land Your Dream Job",
      platform: "Coursera",
      language: "English",
      rating: 4.5,
      Enrollment: "62,890",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500",
      url: "https://www.coursera.org/learn/cv-building",
      price: "paid"
    },
    {
      _id: 3,
      title: "Career Planning and Development",
      platform: "edX",
      language: "English",
      rating: 4.6,
      Enrollment: "48,765",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500",
      url: "https://www.edx.org/course/career-planning",
      price: "free"
    },
    {
      _id: 4,
      title: "How to Choose the Right Career Path",
      platform: "LinkedIn Learning",
      language: "English",
      rating: 4.8,
      Enrollment: "91,234",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
      url: "https://www.linkedin.com/learning/",
      price: "free"
    },
    {
      _id: 5,
      title: "Interview Preparation & Techniques",
      platform: "Udemy",
      language: "English",
      rating: 4.9,
      Enrollment: "103,567",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500",
      url: "https://www.udemy.com/course/interview-prep/",
      price: "paid"
    },
    {
      _id: 6,
      title: "Personal Branding for Career Success",
      platform: "Coursera",
      language: "English",
      rating: 4.4,
      Enrollment: "37,821",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500",
      url: "https://www.coursera.org/learn/personal-branding",
      price: "free"
    },
    {
      _id: 7,
      title: "LinkedIn Profile Optimization",
      platform: "Skillshare",
      language: "English",
      rating: 4.7,
      Enrollment: "55,432",
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=500",
      url: "https://www.skillshare.com/",
      price: "paid"
    },
    {
      _id: 8,
      title: "Networking Skills for Professionals",
      platform: "edX",
      language: "English",
      rating: 4.6,
      Enrollment: "42,190",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500",
      url: "https://www.edx.org/course/networking",
      price: "free"
    },
    {
      _id: 9,
      title: "Career Transition Strategies",
      platform: "Udemy",
      language: "English",
      rating: 4.5,
      Enrollment: "31,876",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500",
      url: "https://www.udemy.com/course/career-transition/",
      price: "free"
    },
    {
      _id: 10,
      title: "Professional Communication Skills",
      platform: "Coursera",
      language: "English",
      rating: 4.8,
      Enrollment: "78,543",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
      url: "https://www.coursera.org/learn/communication-skills",
      price: "paid"
    }
  ];

  return (
    <div className="lg:px-25 px-6 py-16">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Personal Development
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl">
          Master the essential skills for career growth. Learn how to build professional resumes, create compelling CVs, and make informed career decisions with expert guidance.
        </p>
      </div>


    </div>
  );
};

export default PersonalDevelopment;