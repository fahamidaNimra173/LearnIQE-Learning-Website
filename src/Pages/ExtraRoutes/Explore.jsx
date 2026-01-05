import React from 'react';

const Explore = () => {
    const platforms = [
        {
            name: "10 Minute School",
            logo: "https://10minuteschool.com/images/logo.svg",
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
            logo: "https://i.ibb.co.com/yBmxh0Xx/Screenshot-2025-11-28-125756.png",
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
            logo: "https://i.ibb.co.com/example/programming-hero.png",
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
            logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
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
            logo: "https://i.ibb.co.com/7xK4KMX7/Screenshot-2025-12-11-230019.png",
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
            logo: "https://i.ibb.co.com/pvFPY5XT/favicon.jpg",
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
            logo: "https://cdn.kastatic.org/images/khan-logo-dark-background.png",
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
            logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-assets/coursera-logo.png",
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
        <div>

        </div>
    );
};

export default Explore;