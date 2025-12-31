import AxiosSecure from '@/Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { SquareArrowUpLeft, UsersIcon } from 'lucide-react';
import React from 'react';
import { BsStars } from 'react-icons/bs';
import { useNavigate } from 'react-router';

const FreeCourses = () => {
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate();

  const { data: courses = [], isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/freeCourses');
      return res.data;
    },
  });

  // ✅ Platform → Logo mapping
  const platformLogos = {
    Ostad: 'https://i.ibb.co.com/yBmxh0Xx/Screenshot-2025-11-28-125756.png',
    '10 Minute School': 'https://10minuteschool.com/images/logo.svg',
    Alison: 'https://i.ibb.co.com/7xK4KMX7/Screenshot-2025-12-11-230019.png',
    Udemy: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    EdX: 'https://i.ibb.co.com/pvFPY5XT/favicon.jpg',
  };

  if (isLoading) {
    return <h1 className="text-white">Courses are on the way...</h1>;
  }

  if (error) {
    return <h1 className="text-red-500">Something went wrong</h1>;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20 px-6">
      {courses.map((course) => (
        <div key={course._id}>
          {/* Image */}
          <img
            src={course?.image}
            alt="course image"
            className="h-40 w-full object-cover"
          />

          {/* Content */}
          <div className="p-2 bg-white text-black rounded-b-2xl">
            {/* Enrollment & Rating */}
            <div className="flex items-center justify-between px-3">
              <span className="text-[12px] bg-blue-100/50 px-3 py-1 flex items-center rounded-full gap-1 font-medium">
                <UsersIcon className="w-4 text-green-500" />
                {course.Enrollment}
              </span>

              {course.rating !== undefined && (
                <span className="text-[12px] bg-blue-100/50 px-3 py-1 flex items-center rounded-full gap-1 font-medium">
                  <BsStars className="text-yellow-400 w-4 h-4" />
                  {course.rating === 0 ? '...' : course.rating}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-bold text-lg mt-2">{course.title}</h1>

            {/* Platform + Logo */}
            <div className="flex items-center justify-center gap-4 my-3">
              {platformLogos[course.platform] && (
                <img
                  src={platformLogos[course.platform]}
                  alt={course.platform}
                  className="h-6 object-contain"
                />
              )}
              <h1 className="font-bold text-md">{course.platform}</h1>
            </div>

            {/* Language */}
            <h1 className="text-center text-yellow-500 uppercase font-bold">
              {course.language}
            </h1>

            {/* Visit Button */}
            <a href={course.url} target="_blank" rel="noreferrer">
              <button className="bg-blue-500 text-white w-full py-1 mt-3 rounded-2xl flex items-center justify-center gap-2">
                Visit
                <SquareArrowUpLeft className="text-yellow-300 rotate-90" />
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreeCourses;
