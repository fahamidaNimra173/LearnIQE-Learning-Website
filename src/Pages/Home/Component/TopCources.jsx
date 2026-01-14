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
        <div className="relative md:py-1o px-6 md:px-25">
            <div className="relative z-10 mx-auto">
                <h1 className="text-[#ffffff] md:text-5xl lg:text-7xl text-2xl font-mono font-extrabold uppercase  md:mt-40 mb-15 text-center">
                    Demo  <span className="text-[#ffdd00]">Courses</span> to Boost Your Skills
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
                    {courses.map((course) => (
                        <SwiperSlide key={course._id}>
                            <div className="relative h-72 rounded-2xl  overflow-hidden  bg-[#ffffff]  shadow-black hover:shadow-2xl transition-all duration-500 ">
                                {/* Decorative Corner Shape */}
                                {/* <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffff02] opacity-40 z-10  rounded-bl-full"></div> */}
                                



                                {/* Content Area */}
                                <div className="flex flex-col h-full items-stretch  ">
                                    <div className='p-2 flex flex-col h-full gap-2 rounded-full '>

                                        {/* Title */}
                                        <h3 className="text-[15px]  md:text-xl  font-semibold text-[#0f1119]   line-clamp-2 leading-tight">
                                            {course.title}
                                        </h3>

                                        {/* Info Grid */}
                                        <div className="flex items-center justify-between  gap-3">
                                            {/* Enrollments Box */}
                                            <div className="  ">
                                                <div className="flex  items-center text-center">
                                                    {/* <FiUsers className="text-[#fbbc2c] w-7 h-7 mb-2" /> */}
                                                    <span className="text-[13px] lg:text-md text-[#010101] habibi mb-1">Enrollments : <span className=" font-bold text-[#fbbc2c]">{course.totalEnroll}</span></span>

                                                </div>
                                            </div>

                                            {/* Price Box */}
                                            <div className="">
                                                <div className="flex  items-center text-center">
                                                    {/* <FiDollarSign className="text-[#1e8a78] w-7 h-7 mb-2" /> */}
                                                    <span className="text-[13px] lg:text-md  text-[#e9dc2f] habibi mb-1"> <span className=" font-bold text-[#000000]">৳{course.price}</span></span>

                                                </div>
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

                                    </div>
                                    {/* Image Section */}
                                    <div className="relative  rounded-b-xl overflow-hidden h-full shadow-md ">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/*  Custom Navigation Arrows */}
                <div className="flex justify-start gap-8 mt-10">
                    <button
                        ref={prevRef}
                        className="group relative cursor-pointer bg-gradient-to-br from-purple-100 to-pink-100 hover:from-[#fbbc2c] hover:to-[#8a5a8e] p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#937f94]/30 hover:border-transparent overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <IoIosArrowBack className="md:w-10 w-5 h-5 md:h-10 text-[#fbbc2c] group-hover:text-white transition-colors duration-300 relative z-10 group-hover:-translate-x-1 transition-transform" />
                        <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#1e8a78] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button
                        ref={nextRef}
                        className="group relative cursor-pointer bg-gradient-to-br from-teal-100 to-cyan-100 hover:from-[#1e8a78] hover:to-[#2a9d88] p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#1e8a78]/30 hover:border-transparent overflow-hidden"
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

export default TopCources;






