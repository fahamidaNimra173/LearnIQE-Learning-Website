import AxiosSecure from '@/Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Earth, SquareArrowUpLeft, UsersIcon } from 'lucide-react';
import React, { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import { useNavigate } from 'react-router';

const FreeCourses = () => {
    const axiosSecure = AxiosSecure();
    const navigate = useNavigate();
    const[category,setCategory]=useState('')

    const { data: courses = [], isLoading, error } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/freeCourses');
            return res.data;
        },
    });

    // Platform → Logo mapping
    const platformLogos = {
        Ostad: 'https://i.ibb.co.com/yBmxh0Xx/Screenshot-2025-11-28-125756.png',
        '10 Minute School': 'https://10minuteschool.com/images/logo.svg',
        Alison: 'https://i.ibb.co.com/7xK4KMX7/Screenshot-2025-12-11-230019.png',
        udemy: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
        edx: 'https://i.ibb.co.com/pvFPY5XT/favicon.jpg',
    };

    if (isLoading) {
        return <h1 className="text-white">Courses are on the way...</h1>;
    }

    if (error) {
        return <h1 className="text-red-500">Something went wrong</h1>;
    }
    //created this array to catch all categories uniquely and use in filters instead of doing this manually
    const categories=[...new Set(courses.map(cls=>cls.category))];
    console.log('all categories',categories)
    return (
        <div>

            <div class="mt-20  w-full overflow-hidden">
                <div class="relative  bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5 border-2 border-yellow-500/20 rounded-3xl text-wrap backdrop-blur-sm  lg:p-16">

                    <div class="relative z-10  flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">

                        <div class="space-y-8 z-20">

                            <div class="space-y-6 p-6">
                                <div class="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-2 rounded-full text-xs font-bold uppercase lg:tracking-wider">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                    <span>বিনামূল্যে শিখুন</span>
                                </div>

                                <h1 class=" text-2xl md:text-5xl lg:text-7xl font-bold leading-none bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                                    FREE COURSES
                                </h1>

                                <p class="text-gray-300 text-lg leading-relaxed lg:max-w-xl">
                                    বিশ্বমানের শিক্ষা এখন সবার হাতের মুঠোয়! 10 Minute School, Ostad, Udemy, Alison, Khan Academy থেকে সংগৃহীত সেরা কোর্সগুলো একদম ফ্রি।
                                </p>
                            </div>

                            <div class="flex md:flex-row flex-col items-center gap-0 md:gap-5 lg:gap-20 md:pt-4">
                                <div class="flex items-center gap-1">
                                    <div class="flex items-center mt-1 justify-center w-12 h-12 ">
                                        <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                        </svg>
                                    </div>
                                    <div className='flex gap-3 items-end'>
                                        <div class="text-2xl  text-yellow-400">90+</div>
                                        <div class="text-gray-100 text-lg">Courses</div>
                                    </div>
                                </div>

                                <div class="flex items-center gap-3">
                                    <Earth className='text-white h-5'></Earth>
                                    <div className='flex items-center gap-2'>
                                        <div class="text-gray-300 text-lg font-medium">Bangla</div>
                                        <hr className='w-8 border-1  mt-1 border-dotted border-yellow-300' />
                                        <div class="text-gray-300 text-lg font-medium">English</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='absolute z-0 blur-3xl bg-blue-500/30  top-1/7 left-1/3  h-66 w-66  rounded-full  '>

                        </div>
                        <div className='absolute  bg-black z-5 lg:blur-none blur-xl  top-1/9 left-1/6  h-96 w-96  rounded-full  '>

                        </div>
                        <div className='absolute z-0 lg:blur-xs blur-2xl opacity-50 lg:opacity-100 bg-blue-500  lg:top-1/6 top-1/7 left-10 sm:left-20 md:left-40 lg:left-74  h-85 w-83  rounded-full  '>

                        </div>

                        <div class="flex relative items-center justify-center">

                            <div className='absolute hidden md:block bg-yellow-400 blur-xs top-20 z-10 h-60 w-75 rotate-45 rounded-t-2xl  '>

                            </div>
                            <div className='absolute blur-b-xs bg-blue-500  top-20 right-10 z-0 h-60 w-75 rotate-45 rounded-t-2xl  '>

                            </div>

                            <div class="relative z-20 w-full">
                                <div className='absolute md:block hidden bg-gradient-to-t from-black via-transparent bottom-7 to-transparent  w-full h-full '>

                                </div>

                                <div class="rounded-3xl shadow-2xl">
                                    <img src="https://i.ibb.co.com/FkhZv3V5/adult-education-2706977-1280-removebg-preview.png" alt="Students learning" class="w-full md:h-96 h-full object-contain" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='px-6 py-5'>
                <div>
                    <h1 className='text-white text-center text-3xl'>Filters</h1>
                </div>
             
                <div className=' p-5 flex flex-col gap-2 border-2'>
                    {categories.map((cat)=>{
                       return (<div>
                            <h1 className='text-white font-medium text-xl'>{cat}</h1>
                        </div>)
                    })}
                </div>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 px-6">
                {courses.map((course) => (
                    <div key={course._id} className='flex bg-white flex-col rounded-xl justify-between'>
                        {/* Image */}
                        <img
                            src={course?.image}
                            alt="course image"
                            className="h-40 w-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-2 bg-white text-black rounded-b-2xl">
                            {/* Enrollment & Rating */}
                            <div className='flex flex-col  justify-between'>
                                <div className="flex items-center justify-between px-3">
                                    <span className="text-[12px] bg-black text-white px-3  flex items-center rounded-full gap-1 font-medium">
                                        <UsersIcon className="w-4 text-green-400 " />
                                        {course.Enrollment}
                                    </span>
                                    <hr className='w-40 border-1 border-gray-400 border-dashed' />
                                    {course.rating !== undefined && (
                                        <span className="text-[12px] bg-black text-white px-7 font-bold relative   flex items-center rounded-tr-full gap-1">
                                            <BsStars className="text-yellow-400 w-7 h-9 absolute left-0 " />
                                            {course.rating === 0 ? '...' : course.rating}
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="font-bold text-lg mt-2 h-15">{course.title}</h1>
                            </div>

                            {/* Platform + Logo */}
                            <div className="flex items-end my-5 justify-between  gap-4">
                                {platformLogos[course.platform] && (
                                    <img
                                        src={platformLogos[course.platform]}
                                        alt={course.platform}
                                        className="h-7 object-contain"
                                    />
                                )}
                                <h1 className="text-center text-sm bg-purple-500 text-gray-100 px-2 py-1   font-medium">
                                    Language: <span className='text-yellow-200 uppercase'>{course.language}</span>
                                </h1>

                            </div>

                            {/* Language */}


                            {/* Visit Button */}
                            <a href={course.url} target="_blank" rel="noreferrer">
                                <button className="bg-blue-500 text-white cursor-pointer w-full py-1 mt-3 rounded-2xl flex items-center justify-center gap-2">
                                    Visit
                                    <SquareArrowUpLeft className="text-yellow-300 rotate-90" />
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreeCourses;
