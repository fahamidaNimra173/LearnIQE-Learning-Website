import React, { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Axios/AxiosSecure';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiUsers, FiDollarSign } from 'react-icons/fi';

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
        <div className="relative py-10 px-6 md:px-25">
            <div className="relative z-10 mx-auto">
                <h1 className="text-[#6c4370] md:text-5xl text-2xl habibi font-extrabold uppercase mt-10 md:mt-40 mb-15 text-center">
                    Popular <span className="text-[#1e8a78]">Courses</span> to Boost Your Skills
                </h1>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1000: { slidesPerView: 3 },
                    }}
                    // ✅ Initialize navigation after refs are set
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
                            <div className="rounded-lg overflow-hidden hover:shadow-xl transition duration-300 h-full">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 bg-gradient-to-t from-[#1e8a78] via-fuchsia-100 to-pink-200 flex-1 flex flex-col items-center justify-center">
                                    <h3 className="text-xl h-20 my-auto font-extrabold text-[#6c4370] merienda text-center mb-3">
                                        {course.title}
                                    </h3>
                                    <div>
                                        <div className="flex items-center border-b bg-gradient-to-t from-[#aec9c4] via-transparent shadow-2xl shadow-pink-200 p-2 gap-2 text-gray-700 mb-2">
                                            <FiUsers className="text-[#6c4370] w-7 h-7" />
                                            <span className="text-md text-black">
                                                <strong className="habibi text-[#6c4370]">Enrollments:</strong>{' '}
                                                {course.totalEnroll}
                                            </span>
                                        </div>
                                        <div className="flex items-center border-t p-2 bg-gradient-to-b from-pink-100 via-transparent to-transparent gap-2 text-gray-700 mb-3">
                                            <FiDollarSign className="text-[#6c4370] w-7 h-7" />
                                            <span className="text-md text-black">
                                                <strong className="habibi text-[#6c4370]">Price:</strong> ৳{course.price}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => navigate(`/classdetails/${course._id}`)}
                                        className="mt-2  buttonMore"
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
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* ✅ Custom Navigation Arrows */}
                <div className="flex justify-center gap-8 mt-10">
                    <button
                        ref={prevRef}
                        className="cursor-pointer border-4 bg-[#d4f3ed] border-[#937f94] border-dashed hover:bg-[#1e8a78] p-6 rounded-full"
                    >
                        <IoIosArrowBack className="md:w-10 w-5 h-5 md:h-10 text-[#937f94]" />
                    </button>
                    <button
                        ref={nextRef}
                        className="cursor-pointer border-4 bg-[#d4f3ed] border-[#937f94] hover:bg-[#1e8a78] border-dashed p-6 rounded-full"
                    >
                        <IoIosArrowForward className="md:w-10 w-5 h-5 md:h-10 text-[#937f94]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopCources;






