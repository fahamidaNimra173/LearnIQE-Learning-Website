import React from 'react';
import { motion } from "motion/react"
import Banner from './Components/Banner';
import AxiosSecure from '../../Axios/AxiosSecure';
import TotalUsersTEachers from './Components/TotalUsersTEachers';
import { useQuery } from '@tanstack/react-query';
import Loader1 from '../../Shared/Loaders/Loader1'
import TotalDataCollections from './Components/TotalDataCollections';
import PartnerMarquee from './Components/Marque';
import FeedBack from './Components/FeedBack';
import TopCources from './Components/TopCources';
import BecomeAnInstructor from './Components/BecomeAnInstructor';
import Motivation from './Components/Motivation';



const Home = () => {
    const axiosSecure = AxiosSecure();

    const { data: counts, isLoading, isError } = useQuery({
        queryKey: ["homepageCounts"],
        queryFn: async () => {
            const res = await axiosSecure.get("/counts");
            return res.data; // { users, teachers, courses, enrollments, assignments, submittedAssignments, feedbacks }
        },
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });
    if (isLoading) return <div><Loader1></Loader1></div>;
    if (isError) return <p>Error:Failed to load data</p>;
    const users = counts.users;
    const courses = counts.courses;
    const enrollments = counts.enrollments
    console.log(users, courses, enrollments)
    return (
        <div className='bg-[#e7efee] dark:bg-[#e7efee]'>
            <Banner></Banner>
          
                     <TotalDataCollections
             totalUsers={counts.users}
        totalClasses={counts.courses}
        totalEnrollments={counts.enrollments}
            
            />
           
           <TopCources></TopCources>
            <TotalUsersTEachers></TotalUsersTEachers>
            <FeedBack></FeedBack>
           
            <BecomeAnInstructor></BecomeAnInstructor>

            <Motivation></Motivation>

            <PartnerMarquee></PartnerMarquee>
        </div>
    );
};

export default Home;