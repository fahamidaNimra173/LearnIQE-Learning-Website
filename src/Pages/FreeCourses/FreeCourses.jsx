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
    if (isLoading) {
        return <div><h1>courses are on the way</h1></div>
    }
    if (error) {
        return <div><h1>{error}</h1></div>
    }


    return (
        <div>
            {courses}
        </div>
    );
};

export default FreeCourses;