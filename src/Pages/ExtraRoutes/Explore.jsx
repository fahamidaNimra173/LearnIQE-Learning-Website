import React from 'react';
import ShapeIllusion from '../Home/Component/ShapeIllusion';

const Explore = () => {
    const platforms = [
        {
            name: "10 Minute School",
            logo: "https://i.ibb.co.com/svMxxXbm/10min-School.png",
            website: "https://10minuteschool.com",
            type: "Free & Paid",
            freeFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: true,
                verifiedCert: false
            },
            paidFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: true,
                verifiedCert: true
            },
            details: "Offers both free and premium courses with instructor support. Free courses include certificates.",
            accentColor: "emerald"
        },
        {
            name: "Ostad",
            logo: "https://i.ibb.co.com/Nnf7wgCw/Screenshot-2025-11-28-125756.png",
            website: "https://ostad.app",
            type: "Free & Paid",
            freeFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: true,
                verifiedCert: false
            },
            paidFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: true,
                verifiedCert: true
            },
            details: "Provides comprehensive tech education with free introductory courses and premium professional tracks.",
            accentColor: "blue"
        },
        {
            name: "Programming Hero",
            logo: "https://i.ibb.co.com/Gvdpd8wf/Screenshot-2025-11-28-130644.png",
            website: "https://programminghero.com",
            type: "Paid Only",
            freeFeatures: null,
            paidFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: true,
                verifiedCert: true
            },
            details: "Premium coding bootcamp focused on hands-on learning with mentor support and job placement assistance.",
            accentColor: "purple"
        },
        {
            name: "Udemy",
            logo: "https://i.ibb.co.com/JRjjTGLj/udemy.png",
            website: "https://udemy.com",
            type: "Free & Paid",
            freeFeatures: {
                videos: true,
                materials: true,
                support: false,
                certificate: true,
                verifiedCert: false
            },
            paidFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: true,
                verifiedCert: false
            },
            details: "Massive course library. Free courses have limited instructor interaction. Paid courses include Q&A and certificate.",
            accentColor: "violet"
        },
        {
            name: "Alison",
            logo: "https://i.ibb.co.com/XfKZrn4T/Screenshot-2025-12-11-230019.png",
            website: "https://alison.com",
            type: "Free with Premium Options",
            freeFeatures: {
                videos: true,
                materials: true,
                support: false,
                certificate: false,
                verifiedCert: false
            },
            paidFeatures: {
                videos: true,
                materials: true,
                support: false,
                certificate: true,
                verifiedCert: true
            },
            details: "Free access to all course content. Certificates require payment. Limited instructor support on all courses.",
            accentColor: "orange"
        },
        {
            name: "edX",
            logo: "https://i.ibb.co.com/yb5S4L5/Screenshot-2025-11-28-130455.png",
            website: "https://edx.org",
            type: "Audit Free / Verified Paid",
            freeFeatures: {
                videos: true,
                materials: true,
                support: false,
                certificate: false,
                verifiedCert: false
            },
            paidFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: true,
                verifiedCert: true
            },
            details: "Audit courses for free with full content access. Pay for verified certificates and graded assignments.",
            accentColor: "cyan"
        },
        {
            name: "Khan Academy",
            logo: "https://i.ibb.co.com/mCRwvvtC/Screenshot-2025-12-11-225942.png",
            website: "https://khanacademy.org",
            type: "100% Free",
            freeFeatures: {
                videos: true,
                materials: true,
                support: false,
                certificate: false,
                verifiedCert: false
            },
            paidFeatures: null,
            details: "Completely free educational content. Video lessons and practice exercises. No certificates or instructor support.",
            accentColor: "teal"
        },
        {
            name: "Coursera",
            logo: "https://i.ibb.co.com/zVpT8qJM/Screenshot-2026-01-05-163058.png",
            website: "https://coursera.org",
            type: "Audit Free / Verified Paid",
            freeFeatures: {
                videos: true,
                materials: true,
                support: false,
                certificate: false,
                verifiedCert: false
            },
            paidFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: true,
                verifiedCert: true
            },
            details: "University-level courses. Audit for free or pay for certificates and peer-graded assignments.",
            accentColor: "indigo"
        },
        {
            name: "Skillshare",
            logo: "https://static.skillshare.com/assets/images/press/logos/skillshare-logo-dark.png",
            website: "https://skillshare.com",
            type: "Subscription Based",
            freeFeatures: {
                videos: false,
                materials: false,
                support: false,
                certificate: false,
                verifiedCert: false
            },
            paidFeatures: {
                videos: true,
                materials: true,
                support: true,
                certificate: false,
                verifiedCert: false
            },
            details: "Monthly subscription for unlimited access. Focus on creative skills. No formal certificates offered.",
            accentColor: "pink"
        }
    ];
    return (
        <div className=' min-h-screen pt-30 text-white overflow-hidden"'>

            <div className='absolute opacity-90 top-1 overflow-hidden left-0 z-10 w-full'>
                <div className='flex'>
                    <div className='blur-xs'>
                        <ShapeIllusion></ShapeIllusion>
                    </div>

                    <div className='rotate-190'>
                        <ShapeIllusion></ShapeIllusion>

                    </div>

                </div>


            </div>
            <div className='absolute  opacity-10 top-20 animate-pulse  right-50 z-10 '>
                <div className='flex'>
                    <div className='blur-xs'>
                        <ShapeIllusion></ShapeIllusion>
                    </div>



                </div>


            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">

                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                        Explore Learning Platforms
                    </span>
                </h1>

                <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed">
                    <p>
                        I tried to bring all platforms together so that people can know about them and explore.
                        I couldn't bring all free courses and paid courses individually.
                    </p>
                    <p>
                        So I built this page to introduce platforms with detailed information - what they offer,
                        what's free, what's paid, and the limitations of each.
                    </p>
                    <p className="text-cyan-400 font-medium">
                        Sometimes a small step can bring great changes. So just explore and gain knowledge.
                    </p>
                </div>

            </div>

            <footer className="relative px-6 py-12 border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-slate-400 text-sm">
                        Platform information is compiled for educational purposes. Please visit official websites for the most up-to-date details.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Explore;