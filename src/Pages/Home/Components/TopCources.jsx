import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Add this import
import { Navigation } from 'swiper/modules'; // or 'swiper' depending on version
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
import useAxiosSecure from '../../../Axios/AxiosSecure';

const TopCources = () => {
    //   const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { data: courses = [], isLoading } = useQuery({
        queryFn: async () => {
            const res = await axiosSecure.get('/sorted-courses');
            console.log('Response from /sorted-courses:', res.data); // Add this
            return res.data.slice(0, 6);
        },
    });
    console.log(courses)

    if (isLoading) return <div className="text-center py-10">Loading...</div>;

    return (
        <div
            className="relative py-10 px-4 md:px-8 lg:px-16"
        //   style={{
        //     backgroundImage: `url('https://i.ibb.co/3msWj593/book-5336298-1280.jpg')`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundAttachment: 'fixed',
        //   }}
        >
            <div className="absolute inset-0  z-0" />
            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#0A5EB0] dark:text-white/90 mb-8">
                    Approved Courses
                </h2>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    navigation
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                    }}
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course._id}>
                            <div className="bg-[#EBFFD8] dark:bg-[#EBFFD8] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-full">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-[#0A5EB0] dark:text-[#0A5EB0] mb-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-[#0A5EB0] dark:text-[#0A5EB0] mb-1">
                                        <strong>Enrollments:</strong> {course.totalEnroll}
                                    </p>
                                    <p className="text-[#0A5EB0] dark:text-[#0A5EB0] mb-3">
                                        <strong>Price:</strong> ৳{course.price}
                                    </p>
                                    <button
                                        onClick={() => navigate(`/classdetails/${course._id}`)}
                                        className="mt-2 bg-[#FFCFEF] hover:bg-purple-800 text-black font-semibold righteous px-4 py-2 rounded transition"
                                    >
                                        See More
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopCources;
