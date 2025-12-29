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
        <div className='grid-cols-2 grid gap-5 mt-20 px-6'>
            {courses.map(course => (

                <div className='border-2 p-5'>
                    <div>
                        <img src={course?.image} alt="course image" />
                        <h1 className='text-white'>{course.title}</h1>
                        <h1 className='text-white'>{course.platform}</h1>
                        <h1 className='text-white'>{course.language}</h1>
                        <h1 className='text-white'>{course.Enrollment}</h1>
                        <h1 className='text-white'>{course.rating}</h1>
                        <div>
                            <a href={course.url}></a>
                            <button className='bg-blue-500 text-white px-5 py-2 w-full font-bold rounded-2xl'>Visit</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default FreeCourses;