
import { motion } from "motion/react"
import Banner from './Component/Banner';
import AxiosSecure from '../../Axios/AxiosSecure';
import TotalUsersTEachers from './Component/TotalUsersTEachers';
import { useQuery } from '@tanstack/react-query';
import Loader1 from '../../Shared/Loaders/Loader1'
import TotalDataCollections from './Component/TotalDataCollections';
import PartnerMarquee from './Component/Marque';
import FeedBack from './Component/FeedBack';
import TopCources from './Component/TopCources';
import BecomeAnInstructor from './Component/BecomeAnInstructor';
import Motivation from './Component/Motivation';
import NewsLatter from './Component/NewsLatter';
import ScrollTracker from '../../utility/sectionTracker';
import { useOutletContext } from 'react-router';
import LogoMarquee from "./Component/intitutionsMarque";



const Home = () => {
    const axiosSecure = AxiosSecure();
    const setActiveSection = useOutletContext()
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
        <div className='bg-[#000000] dark:bg-[#000000]'>
            <ScrollTracker setActiveSection={setActiveSection} ></ScrollTracker>
            <div className="relative overflow-x-hidden">
                <Banner></Banner>
                
            

                <div className="absolute -bottom-5 z-20 overflow-x-hidden">
                    <LogoMarquee></LogoMarquee>
                </div>
            </div>

            <TotalDataCollections
                totalUsers={counts.users}
                totalClasses={counts.courses}
                totalEnrollments={counts.enrollments}

            />

            <TopCources></TopCources>
            <section id='studentLove'>
                <TotalUsersTEachers></TotalUsersTEachers>
            </section>

            <FeedBack></FeedBack>

            <BecomeAnInstructor></BecomeAnInstructor>

            <Motivation></Motivation>

            <PartnerMarquee></PartnerMarquee>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;

// #e7efee,#272a2d,#fbbc2c,#1e8a78