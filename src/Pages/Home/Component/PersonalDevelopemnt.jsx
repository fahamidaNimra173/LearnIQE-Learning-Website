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
        <div className="lg:px-25 mt-10 px-6 py-16">
            {/* Header Section */}
            <div className="mb-12">
                <h2 className="text-4xl uppercase lg:text-7xl  font-bold text-white mb-4">
                    Personal Development
                </h2>
                <p className="text-lg text-gray-100 font-mono max-w-3xl">
                    Master the essential skills for career growth. Learn how to build professional resumes, create compelling CVs, and make informed career decisions with expert guidance.
                </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {personalDevelopmentCourses.map((course) => (
                    <div
                        key={course._id}
                        className="relative h-full rounded-2xl overflow-hidden bg-white border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                    >
                        {/* Image Section */}
                        <div className="relative h-44 overflow-hidden">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

                            {/* Top Badges */}
                            <div className="absolute top-0 left-0 right-0 flex items-center justify-between">
                                <div className="bg-white px-3 py-1 rounded-full">
                                    <span className="text-xs font-bold text-gray-800">{course.platform}</span>
                                </div>
                                <div className={`bg-gradient-to-bl from-transparent via-yellow-600 to-yellow-400 px-3 py-1 rounded-md shadow-lg `}>
                                    <span className="text-md font-medium text-white font-mono">{course.price}</span>
                                </div>
                            </div>

                            {/* Bottom Stats on Image */}
                            <div className="absolute bottom-3  backdrop-blur-2xl left-1 right-1 flex items-center justify-between">
                                <div className="flex items-center gap-1.5 bg-white/0 backdrop-blur-sm px-2 py-1 rounded-lg">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="text-[13px] font-medium text-gray-100 font-mono">{course.Enrollment}</span>
                                </div>
                                <div className="flex items-center gap-1  backdrop-blur-sm px-2 py-1 rounded-lg">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-xs font-bold text-gray-100">{course.rating || 'N/A'}</span>
                                </div>

                            </div>

                        </div>
                        <div className='absolute bottom-26 right-0'>
                            <div className="bg-blue-500/90 backdrop-blur-sm  p-1">
                                <span className="text-xs font-semibold text-white uppercase">{course.language}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col gap-3">
                            <h3 className="text-base font-bold text-gray-900 line-clamp-2 leading-tight min-h-[2.5rem]">
                                {course.title}
                            </h3>

                            <a href={course.url} target='_blank' rel="noopener noreferrer" >
                                <button className="w-full buttonMore">
                                    <span className="buttonMore__icon-wrapper">
                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="buttonMore__icon-svg"
                                            width="10" >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="black"
                                            ></path>
                                        </svg>

                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            width="10"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="buttonMore__icon-svg buttonMore__icon-svg--copy"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    Explore More
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalDevelopment;