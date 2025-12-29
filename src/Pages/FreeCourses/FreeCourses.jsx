import AxiosSecure from '@/Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router';

const FreeCourses = () => {
    const axiosSecure = AxiosSecure();
    const navigate = useNavigate();
    const { data: courses = [], isLoading, error } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await axiosSecure.get("/freeCourseMix");
            return res.data
        }
    })
    console.log(courses)
    if (isLoading) {
        return <div><h1>courses are on the way</h1></div>
    }
    if (error) {
        return <div><h1>{error}</h1></div>
    }


    return (
        <div className='grid grid-cols-2 lg:grid-cols-4  gap-5 mt-20 px-6'>
            {courses.map(course => (

                <div className=' '>
                   
                        <div className=''>
                            <img src={course?.image} alt="course image" className='h-full w-full object-cover'  />
                        </div>

                        <div className='p-1  bg-white text-black rounded-b-2xl'>
                            <h1 className='text-black'>{course.title}</h1>
                            <h1 className='text-black'>{course.platform}</h1>
                            <h1 className='text-black'>{course.language}</h1>
                            <h1 className='text-black'>{course.Enrollment}</h1>
                            <h1 className='text-black'>{course.rating}</h1>
                            <div>
                                <a href={course.url} target='blank'>
                                    <button className='bg-blue-500 text-white cursor-pointer px-5 py-2 w-full font-bold rounded-2xl'>Visit</button>
                                </a>

                            </div>
                        </div>

                   
                </div>

            ))}
        </div>
    );
};

export default FreeCourses;