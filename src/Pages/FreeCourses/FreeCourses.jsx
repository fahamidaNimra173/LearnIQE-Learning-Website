import AxiosSecure from '@/Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RatIcon, Stars, UsersIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const FreeCourses = () => {
    const axiosSecure = AxiosSecure();
    const navigate = useNavigate();
    const { data: courses = [], isLoading, error } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await axiosSecure.get("/freeCourses");
            return res.data
        }
    })


    console.log('this is courses',)
    if (isLoading) {
        return <div><h1 className='text-white'>courses are on the way</h1></div>
    }
    if (error) {
        return <div><h1>{error}</h1></div>
    }
    // const freeCourses = [...courses,...coursesEDX,...coursesUdemy]

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4  gap-5 mt-20 px-6'>
            {courses.map(course => (

                <div className=' '>

                    <div className=''>
                        <img src={course?.image} alt="course image" className='h-40 w-full object-cover' />
                    </div>

                    <div className='p-1  bg-white text-black rounded-b-2xl'>
                        <div className='flex items-center justify-between px-5'>
                            <h1 className='text-black text-md bg-blue-100/50 px-3 py-1 flex items-center rounded-full gap-1'><UsersIcon className='w-4'></UsersIcon>{course.Enrollment}</h1>
                            <hr className='border-blue-300 w-36 border-1 border-dashed text-2xl' />
                            <h1 className='text-black text-md bg-blue-100/50 px-3 py-1 flex items-center rounded-full gap-1'><Stars className='text-yellow-400 w-4'></Stars>{course.rating === 0 ? "Didn't mentioned" : course.rating}</h1>
                        </div>
                        <h1 className='text-black font-bold text-xl'>{course.title}</h1>
                        <div className='flex items-center my-3 justify-center gap-10'>
                            <h1 className='text-black font-bold text-md'>{course.platform}</h1>
                            <h1 className='text-yellow-500 border-1 px-2 uppercase text-md font-bold '>{course.language}</h1>
                        </div>

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