import React, { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import useAxiosSecure from '../../../Axios/AxiosSecure';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const HeightsEnrolledCourses = () => {
    const axiosSecure = useAxiosSecure();


    const { data: highestEnrolledCourses = [], isLoading } = useQuery({
        queryKey: ['highestEnrolled'],
        queryFn: async () => {
            const res = await axiosSecure.get('/freeCourses/enrollmentSorted');
            return res.data.slice(0, 10);
        },
    });

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (isLoading) return <div className="text-center py-10">Loading...</div>;

    return (
        <div className="relative md:py-10 px-6 md:px-15 lg:px-25">
            <div className="relative z-10 mx-auto">
                <h1 className="text-[#ffffff] md:text-5xl lg:text-7xl text-2xl font-mono font-extrabold uppercase  md:mt-40 mb-15 text-center">
                    highest enrolled <span className="text-[#ddff00]">Courses</span> to Boost Your Skills
                </h1>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        600: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1350: { slidesPerView: 4 },
                        1500: { slidesPerView: 5 },
                    }}
                    // Initialize navigation after refs are set
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                    className="relative"
                >
                    {highestEnrolledCourses.map((course) => (
                        <SwiperSlide key={course._id}>
                            <div className="relative h-full rounded-2xl overflow-hidden bg-white border-2 border-gray-100 hover:border-blue-500 shadow-md hover:shadow-2xl transition-all duration-500 group">

                                {/* Image with Overlay Info */}
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

                                    {/* Platform Logo Area */}
                                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                                        <div className="bg-white px-3 py-1 rounded-full shadow-lg">
                                            <span className="text-xs font-bold text-gray-800">{course.platform}</span>
                                        </div>
                                        <div className="bg-green-500 px-3 py-1 rounded-full shadow-lg">
                                            <span className="text-xs font-bold text-white">FREE</span>
                                        </div>
                                    </div>

                                    {/* Bottom Stats on Image */}
                                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                            <span className="text-xs font-bold text-gray-800">{course.Enrollment}</span>
                                        </div>
                                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-xs font-bold text-gray-800">{course.rating || 'N/A'}</span>
                                        </div>
                                        <div className="bg-blue-500/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                                            <span className="text-xs font-semibold text-white uppercase">{course.language}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col gap-3">
                                    <h3 className="text-base font-bold text-gray-900 line-clamp-2 leading-tight min-h-[2.5rem]">
                                        {course.title}
                                    </h3>

                                    <a
                                        href={course.url}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        
                                    >
                                        <button

                                            className="w-full buttonMore"
                                        >
                                            <span className="buttonMore__icon-wrapper">
                                                <svg
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="buttonMore__icon-svg"
                                                    width="10"
                                                >
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
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/*  Custom Navigation Arrows */}
                <div className="flex justify-center gap-8 mt-10">
                    <button
                        ref={prevRef}
                        className="group relative cursor-pointer bg-gradient-to-br from-purple-100 to-pink-100 hover:from-[#fbbc2c] hover:to-[#8a5a8e] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#937f94]/30 hover:border-transparent overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <IoIosArrowBack className="md:w-10 w-5 h-5 md:h-10 text-[#fbbc2c] group-hover:text-white transition-colors duration-300 relative z-10 group-hover:-translate-x-1 transition-transform" />
                        <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#1e8a78] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button
                        ref={nextRef}
                        className="group relative cursor-pointer bg-gradient-to-br from-teal-100 to-cyan-100 hover:from-[#1e8a78] hover:to-[#2a9d88] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#1e8a78]/30 hover:border-transparent overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <IoIosArrowForward className="md:w-10 w-5 h-5 md:h-10 text-[#1e8a78] group-hover:text-white transition-colors duration-300 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#fbbc2c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeightsEnrolledCourses;






