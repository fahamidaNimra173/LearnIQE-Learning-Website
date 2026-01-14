import React from "react";


const personalDevelopmentCourses = [
  {
    _id: 1,
    title: "CV Writing & Interview",
    platform: "10 Minute School ",
    language: "Bangla",
    rating: 5,
    Enrollment: "116487",
    image: "https://i.ibb.co.com/wNYJWN88/Screenshot-2026-01-13-182407.png",
    url: "https://www.udemy.com/course/resume-writing/",
    price: "free"
  },
  {
    _id: 2,
    title: "Communication Hacks",
    platform: "10 Minute School",
    language: "Bangla",
    rating: 5,
    Enrollment: "71,830",
    image: "https://i.ibb.co.com/rKgtKJbK/Screenshot-2026-01-13-182638.png",
    url: "https://10minuteschool.com/product/communication-hacks/",
    price: "paid"
  },
  {
    _id: 3,
    title: "How to speak to anyone & be fearless - in less than 55 min",
    platform: "Udemy",
    language: "English",
    rating: 4.4,
    Enrollment: "438,757",
    image: "https://i.ibb.co.com/C5vGnLQy/Screenshot-2026-01-13-180927.png",
    url: "https://www.udemy.com/course/fearless-public-speaker-bootcamp-by-ricky-mendoza/",
    price: "free"
  },
  {
    _id: 4,
    title: "How to Use SMART Goals: Achieve More in Less Time",
    platform: "Coursera",
    language: "English",
    rating: 4.5,
    Enrollment: "231,300",
    image: "https://i.ibb.co.com/fYwxVsRG/Screenshot-2026-01-14-160419.png",
    url: "https://www.udemy.com/course/goal-setting/",
    price: "free"
  },
  {
    _id: 5,
    title: "Public Speaking Essentials: How to Craft Your Personal Story",
    platform: "Udemy",
    language: "English",
    rating: 4.2,
    Enrollment: "75,155",
    image: "https://i.ibb.co.com/fzw34bzp/Screenshot-2026-01-13-180958.png",
    url: "https://www.udemy.com/course/public-speaking-essentials/",
    price: "paid"
  },
  {
    _id: 6,
    title: "Email Writing",
    platform: "10 Minute School ",
    language: "Bangla",
    rating: 5,
    Enrollment: "1,01,659",
    image: "https://i.ibb.co.com/cScmCf1f/Screenshot-2026-01-13-182427.png",
    url: "https://10minuteschool.com/product/email-writing/",
    price: "free"
  },
  {
    _id: 7,
    title: "How To Find a Job at Fortune 100 Company?|10 Practical Steps",
    platform: "Udemy",
    language: "English",
    rating: 4.7,
    Enrollment: "25,792",
    image: "https://i.ibb.co.com/cXRPdP2s/Screenshot-2026-01-13-182141.png",
    url: "https://www.udemy.com/course/10-success-tips-to-land-a-fortune-100-job/",
    price: "free"
  },
  {
    _id: 8,
    title: "Learning How to Learn",
    platform: "Coursera",
    language: "English",
    rating: 4.6,
    Enrollment: "42,190",
    image: "https://i.ibb.co.com/tyr7ksk/Screenshot-2026-01-13-182026.png",
    url: "https://www.coursera.org/learn/learning-how-to-learn",
    price: "free"
  },
  {
    _id: 9,
    title: "The Science of Well-Being",
    platform: "Coursera",
    language: "English",
    rating: 4.9,
    Enrollment: "4,982,570",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500",
    url: "https://www.coursera.org/learn/the-science-of-well-being",
    price: "free"
  },
  {
    _id: 10,
    title: "Developing Interpersonal Skills",
    platform: "Coursera",
    language: "English",
    rating: 4.8,
    Enrollment: "263,098",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
    url: "https://www.coursera.org/learn/interpersonal-skills",
    price: "free"
  }
];


const CourseCard = React.memo(({ course }) => {
  return (
    <div className="relative h-full rounded-2xl overflow-hidden bg-white border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 group">

      <div className="relative h-44 overflow-hidden">
        <img
          loading="lazy"
          decoding="async"
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* CHANGED: removed backdrop-blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

        <div className="absolute top-0 left-0 right-0 flex justify-between p-2">
          <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-800">
            {course.platform}
          </span>
          <span className="bg-yellow-500 px-3 py-1 rounded-md text-xs font-medium text-white uppercase">
            {course.price}
          </span>
        </div>

        <div className="absolute bottom-3 left-2 right-2 flex justify-between text-white text-xs">
          <span>{course.Enrollment}</span>
          <span>⭐ {course.rating}</span>
        </div>
      </div>

      <div className="absolute bottom-28 right-0 bg-blue-500/90 px-2 py-1 text-xs text-white uppercase">
        {course.language}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-base font-bold text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {course.title}
        </h3>

        <a href={course.url} target="_blank" rel="noopener noreferrer">
          <button className="w-full buttonMore">Explore More</button>
        </a>
      </div>
    </div>
  );
});

/* ---------------- MAIN ---------------- */
const PersonalDevelopment = () => {
  return (
    <div className="lg:px-25 mt-10 px-6 py-16">
      <div className="mb-12">
        <h2 className="md:text-4xl text-2xl lg:text-7xl font-bold text-white mb-4">
          Personal Development
        </h2>
        <p className="md:text-lg text-sm text-gray-100 max-w-3xl">
          Master essential skills for career growth with expert guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {personalDevelopmentCourses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PersonalDevelopment;
