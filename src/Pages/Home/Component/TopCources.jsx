import React, { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Axios/AxiosSecure';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TopCources = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { data: courses = [], isLoading } = useQuery({
        queryKey: ['sorted-courses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/sorted-courses');
            return res.data.slice(0, 6);
        },
    });

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (isLoading) return <div className="text-center py-10">Loading...</div>;

    return (
        <div className="relative md:py-10 px-6 md:px-25">
            <div className="relative z-10 mx-auto">
                <h1 className="text-[#ffffff] md:text-5xl lg:text-7xl text-2xl font-mono font-extrabold uppercase md:mt-40 mb-5 md:mb-15 text-center">
                    Demo <span className="text-[#ffdd00]">Courses</span> to Boost Your Skills
                </h1>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        600: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1000: { slidesPerView: 5 },
                    }}
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
                    {courses.map((course) => (
                        <SwiperSlide key={course._id}>
                            <div className="relative h-72 rounded-2xl overflow-hidden bg-[#ffffff] shadow-black hover:shadow-2xl transition-shadow duration-500">
                                {/* Content Area */}
                                <div className="flex flex-col h-full items-stretch">
                                    <div className='p-2 flex flex-col h-full gap-2'>
                                        {/* Title */}
                                        <h3 className="text-[15px] md:text-xl font-semibold text-[#0f1119] line-clamp-2 leading-tight">
                                            {course.title}
                                        </h3>

                                        {/* Info Grid */}
                                        <div className="flex items-center justify-between gap-3">
                                            {/* Enrollments */}
                                            <div className="flex items-center text-center">
                                                <span className="text-[13px] lg:text-md text-[#010101] habibi mb-1">
                                                    Enrollments: <span className="font-bold text-[#fbbc2c]">{course.totalEnroll}</span>
                                                </span>
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center text-center">
                                                <span className="text-[13px] lg:text-md text-[#e9dc2f] habibi mb-1">
                                                    <span className="font-bold text-[#000000]">৳{course.price}</span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <button
                                            onClick={() => navigate(`/classdetails/${course._id}`)}
                                            className="w-full buttonMore"
                                        >
                                            <span className="buttonMore__icon-wrapper">
                                                <svg
                                                    viewBox="0 0 14 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="buttonMore__icon-svg"
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
                                                    className="buttonMore__icon-svg buttonMore__icon-svg--copy"
                                                >
                                                    <path
                                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </span>
                                            Explore More
                                        </button>
                                    </div>

                                    {/* Image Section - OPTIMIZED */}
                                    <div className="relative rounded-b-xl overflow-hidden h-full shadow-md">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 will-change-transform"
                                            style={{ transform: 'translateZ(0)' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) translateZ(0)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateZ(0)'}
                                        />
                                        <div className="absolute inset-0 pointer-events-none" 
                                             style={{
                                                 background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
                                             }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Arrows - SIMPLIFIED */}
                <div className="flex justify-start gap-8 mt-10">
                    <button
                        ref={prevRef}
                        className="relative cursor-pointer p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#937f94]/30 hover:border-transparent overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgb(243, 232, 255) 0%, rgb(252, 231, 243) 100%)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #fbbc2c 0%, #8a5a8e 100%)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, rgb(243, 232, 255) 0%, rgb(252, 231, 243) 100%)'}
                    >
                        <IoIosArrowBack className="md:w-10 w-5 h-5 md:h-10 text-[#fbbc2c] hover:text-white transition-colors duration-300" />
                    </button>
                    
                    <button
                        ref={nextRef}
                        className="relative cursor-pointer p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#1e8a78]/30 hover:border-transparent overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgb(204, 251, 241) 0%, rgb(207, 250, 254) 100%)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #1e8a78 0%, #2a9d88 100%)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, rgb(204, 251, 241) 0%, rgb(207, 250, 254) 100%)'}
                    >
                        <IoIosArrowForward className="md:w-10 w-5 h-5 md:h-10 text-[#1e8a78] hover:text-white transition-colors duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopCources;