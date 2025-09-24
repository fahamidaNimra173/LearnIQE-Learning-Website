import React, { useRef, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Axios/AxiosSecure';

const TopCources = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [swiperReady, setSwiperReady] = useState(false);

    const { data: courses = [], isLoading } = useQuery({
        queryFn: async () => {
            const res = await axiosSecure.get('/sorted-courses');
            return res.data.slice(0, 6);
        },
    });

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Wait until buttons are rendered
    useEffect(() => {
        setSwiperReady(true);
    }, []);

    if (isLoading) return <div className="text-center py-10">Loading...</div>;

    return (
        <div className="relative py-10 px-6 md:px-25">
            <div className="relative z-10 mx-auto">
                <h1 className="text-[#6c4370] md:text-5xl text-3xl habibi font-extrabold uppercase mt-40 mb-15 text-center">
                    Popular <span className="text-[#1e8a78]">Courses</span> to Boost Your Skills
                </h1>

                {swiperReady && (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{ 768: { slidesPerView: 3 } }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        className="relative shadow-2xl rounded-2xl"
                    >
                        {courses.map((course) => (
                            <SwiperSlide key={course._id}>
                                <div className="bg-[#ffffff] rounded-xl overflow-hidden hover:shadow-xl transition duration-300 h-full">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-[#070707] mb-2">
                                            {course.title}
                                        </h3>
                                        <p className="text-[#060606] mb-1">
                                            <strong>Enrollments:</strong> {course.totalEnroll}
                                        </p>
                                        <p className="text-[#080808] mb-3">
                                            <strong>Price:</strong> ৳{course.price}
                                        </p>
                                        <button
                                            onClick={() => navigate(`/classdetails/${course._id}`)}
                                            className="mt-2 bg-[#040404] hover:bg-purple-800 text-[#ffffff] font-semibold px-4 py-2 rounded transition"
                                        >
                                            See More
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Custom Arrows at Bottom Center */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        ref={prevRef}
                        className="bg-[#1e8a78] hover:bg-[#14514b] text-white px-4 py-2 rounded-full"
                    >
                        &#8592; Prev
                    </button>
                    <button
                        ref={nextRef}
                        className="bg-[#1e8a78] hover:bg-[#14514b] text-white px-4 py-2 rounded-full"
                    >
                    <span></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopCources;
