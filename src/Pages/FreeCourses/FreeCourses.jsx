import AxiosSecure from '@/Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router';

const FreeCourses = () => {
const axiosSecure=AxiosSecure();
const navigate=useNavigate();
const {data:courses=[],isLoading,error}=useQuery({
    queryKey:["courses"],
    queryFn: async()=>{
        const res = await axiosSecure.get("/freeCourseMix");
        return res.data
    }
})




    return (
        <div>
            
        </div>
    );
};

export default FreeCourses;