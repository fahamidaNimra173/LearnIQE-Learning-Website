import React from 'react';
import ShapeIllusion from '../Home/Component/ShapeIllusion';
import { BookOpen, GraduationCap } from 'lucide-react';

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

            <div className='fixed opacity-60 top-1 overflow-hidden left-0 z-10 w-full'>
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

                <div className="space-y-6 text-lg md:text-xl text-slate-300 font-medium bg-black/20 py-5 leading-relaxed">
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

            <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-6 py-3 rounded-full">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">{platforms.length} Platforms</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-6 py-3 rounded-full">
                    <GraduationCap className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">Free Options Available</span>
                </div>
            </div>

            {/* Platforms Grid */}
            <section className="relative px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Platform Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {platforms.map((platform, index) => (
                            <div
                                key={index}
                                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
                            >
                                {/* Accent gradient line at top */}
                                <div className={`h-1 w-full bg-gradient-to-r from-${platform.accentColor}-500 to-${platform.accentColor}-600`}></div>

                                {/* Platform Logo & Badge */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="h-16 w-40 flex items-center">
                                            <img
                                                src={platform.logo}
                                                alt={platform.name}
                                                className="max-h-12 max-w-full object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                     
                                    </div>


                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-20">
                                        {platform.details}
                                    </p>
                                </div>

                                {/* Features Section */}
                                <div className="px-6 pb-6 space-y-5">


                           

   

                               
                                </div>

                                {/* Bottom hover effect */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${platform.accentColor}-500 to-${platform.accentColor}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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




// import React from 'react';
// import { Award, Video, FileText, Users, Check, X, ExternalLink, BookOpen, GraduationCap } from 'lucide-react';

// // Feature Item Component
// const FeatureItem = ({ icon, label, available }) => (
//     <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${available
//         ? 'bg-slate-800/50 border-slate-700 text-slate-300'
//         : 'bg-slate-800/20 border-slate-700/30 text-slate-600'
//         }`}>
//         <div className={available ? 'text-slate-400' : 'text-slate-700'}>
//             {icon}
//         </div>
//         <span className="text-xs font-medium flex-1">{label}</span>
//         {available ?
//             <Check className="w-4 h-4 text-green-400 flex-shrink-0" /> :
//             <X className="w-4 h-4 text-red-400/50 flex-shrink-0" />
//         }
//     </div>
// );

// const ExplorePlatforms = () => {


//     return (
//         <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
//             {/* Hero Section with Flowing Pipe Illusion */}
//             <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
//                 {/* Flowing Pipe/Spring Illusion - Creates a twisted flowing effect */}
//                 <div className="absolute inset-0 overflow-hidden">
//                     {/* Main flowing curve - like a pipe */}
//                     <div className="absolute left-0 top-1/4 h-32 w-[800px] rounded-[80%_70%_80%_70%] border-2 border-blue-500/40 rotate-12"></div>
//                     <div className="absolute left-0 top-1/4 h-32 w-[800px] rounded-[80%_70%_80%_70%] bg-blue-500/10 blur-xl rotate-12"></div>

//                     <div className="absolute left-40 top-1/3 h-40 w-[700px] rounded-[75%_65%_75%_65%] border-2 border-cyan-500/40 rotate-[20deg]"></div>
//                     <div className="absolute left-40 top-1/3 h-40 w-[700px] rounded-[75%_65%_75%_65%] bg-cyan-500/10 blur-xl rotate-[20deg]"></div>

//                     <div className="absolute left-80 top-2/5 h-48 w-[650px] rounded-[70%_80%_70%_80%] border-2 border-indigo-500/40 rotate-[28deg]"></div>
//                     <div className="absolute left-80 top-2/5 h-48 w-[650px] rounded-[70%_80%_70%_80%] bg-indigo-500/10 blur-xl rotate-[28deg]"></div>

//                     <div className="absolute left-96 top-1/2 h-56 w-[600px] rounded-[65%_75%_65%_75%] border-2 border-violet-500/40 rotate-[35deg]"></div>
//                     <div className="absolute left-96 top-1/2 h-56 w-[600px] rounded-[65%_75%_65%_75%] bg-violet-500/10 blur-xl rotate-[35deg]"></div>

//                     <div className="absolute left-[500px] top-3/5 h-52 w-[550px] rounded-[70%_70%_70%_70%] border-2 border-purple-500/40 rotate-[42deg]"></div>
//                     <div className="absolute left-[500px] top-3/5 h-52 w-[550px] rounded-[70%_70%_70%_70%] bg-purple-500/10 blur-xl rotate-[42deg]"></div>

//                     <div className="absolute left-[600px] top-2/3 h-48 w-[500px] rounded-[75%_65%_75%_65%] border-2 border-pink-500/40 rotate-[48deg]"></div>
//                     <div className="absolute left-[600px] top-2/3 h-48 w-[500px] rounded-[75%_65%_75%_65%] bg-pink-500/10 blur-xl rotate-[48deg]"></div>

//                     {/* Right side continuation */}
//                     <div className="absolute right-40 top-1/4 h-36 w-[700px] rounded-[70%_80%_70%_80%] border-2 border-emerald-500/40 -rotate-12"></div>
//                     <div className="absolute right-40 top-1/4 h-36 w-[700px] rounded-[70%_80%_70%_80%] bg-emerald-500/10 blur-xl -rotate-12"></div>

//                     <div className="absolute right-80 top-1/3 h-44 w-[650px] rounded-[75%_70%_75%_70%] border-2 border-teal-500/40 -rotate-[20deg]"></div>
//                     <div className="absolute right-80 top-1/3 h-44 w-[650px] rounded-[75%_70%_75%_70%] bg-teal-500/10 blur-xl -rotate-[20deg]"></div>

//                     {/* Glow accents */}
//                     <div className="absolute left-1/3 top-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>
//                     <div className="absolute right-1/3 top-1/3 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl"></div>
//                 </div>

//                 {/* Hero Content */}
//                 <div className="relative z-10 max-w-4xl text-center">
//                     <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
//                         <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
//                             Explore Learning Platforms
//                         </span>
//                     </h1>

//                     <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed">
//                         <p>
//                             I tried to bring all platforms together so that people can know about them and explore.
//                             I couldn't bring all free courses and paid courses individually.
//                         </p>
//                         <p>
//                             So I built this page to introduce platforms with detailed information - what they offer,
//                             what's free, what's paid, and the limitations of each.
//                         </p>
//                         <p className="text-cyan-400 font-medium">
//                             Sometimes a small step can bring great changes. So just explore and gain knowledge.
//                         </p>
//                     </div>

//                 </div>
//             </section>

//             {/* Platforms Grid */}
//             <section className="relative px-6 py-20">
//                 <div className="max-w-7xl mx-auto">
//                     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                         Platform Details
//                     </h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {platforms.map((platform, index) => (
//                             <div
//                                 key={index}
//                                 className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
//                             >
//                                 {/* Accent gradient line at top */}
//                                 <div className={`h-1 w-full bg-gradient-to-r from-${platform.accentColor}-500 to-${platform.accentColor}-600`}></div>

//                                 {/* Platform Logo & Badge */}
//                                 <div className="p-6 pb-4">
//                                     <div className="flex items-start justify-between mb-6">
//                                         <div className="h-16 w-40 flex items-center">
//                                             <img
//                                                 src={platform.logo}
//                                                 alt={platform.name}
//                                                 className="max-h-12 max-w-full object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
//                                             />
//                                         </div>
//                                         <a
//                                             href={platform.website}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-slate-400 hover:text-blue-400 transition-colors"
//                                         >
//                                             <ExternalLink className="w-5 h-5" />
//                                         </a>
//                                     </div>

//                                     {/* Type Badge */}
//                                     <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-full mb-4">
//                                         <div className={`w-2 h-2 rounded-full bg-${platform.accentColor}-400 animate-pulse`}></div>
//                                         <span className="text-slate-300 text-xs font-semibold tracking-wide uppercase">
//                                             {platform.type}
//                                         </span>
//                                     </div>

//                                     {/* Description */}
//                                     <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-20">
//                                         {platform.details}
//                                     </p>
//                                 </div>

//                                 {/* Features Section */}
//                                 <div className="px-6 pb-6 space-y-5">
//                                     {/* Free Features */}
//                                     {platform.freeFeatures && (
//                                         <div className="space-y-3">
//                                             <div className="flex items-center gap-2 mb-3">
//                                                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
//                                                 <h4 className="text-green-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
//                                                     <Award className="w-4 h-4" />
//                                                     Free Tier
//                                                 </h4>
//                                                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
//                                             </div>
//                                             <div className="grid grid-cols-2 gap-2 text-xs">
//                                                 <FeatureItem
//                                                     icon={<Video className="w-3.5 h-3.5" />}
//                                                     label="Videos"
//                                                     available={platform.freeFeatures.videos}
//                                                 />
//                                                 <FeatureItem
//                                                     icon={<FileText className="w-3.5 h-3.5" />}
//                                                     label="Materials"
//                                                     available={platform.freeFeatures.materials}
//                                                 />
//                                                 <FeatureItem
//                                                     icon={<Users className="w-3.5 h-3.5" />}
//                                                     label="Support"
//                                                     available={platform.freeFeatures.support}
//                                                 />
//                                                 <FeatureItem
//                                                     icon={<Award className="w-3.5 h-3.5" />}
//                                                     label="Certificate"
//                                                     available={platform.freeFeatures.certificate}
//                                                 />
//                                                 <div className="col-span-2">
//                                                     <FeatureItem
//                                                         icon={<GraduationCap className="w-3.5 h-3.5" />}
//                                                         label="Verified Certificate"
//                                                         available={platform.freeFeatures.verifiedCert}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* Paid Features */}
//                                     {platform.paidFeatures && (
//                                         <div className="space-y-3">
//                                             <div className="flex items-center gap-2 mb-3">
//                                                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
//                                                 <h4 className="text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
//                                                     <GraduationCap className="w-4 h-4" />
//                                                     Paid Tier
//                                                 </h4>
//                                                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
//                                             </div>
//                                             <div className="grid grid-cols-2 gap-2 text-xs">
//                                                 <FeatureItem
//                                                     icon={<Video className="w-3.5 h-3.5" />}
//                                                     label="Videos"
//                                                     available={platform.paidFeatures.videos}
//                                                 />
//                                                 <FeatureItem
//                                                     icon={<FileText className="w-3.5 h-3.5" />}
//                                                     label="Materials"
//                                                     available={platform.paidFeatures.materials}
//                                                 />
//                                                 <FeatureItem
//                                                     icon={<Users className="w-3.5 h-3.5" />}
//                                                     label="Support"
//                                                     available={platform.paidFeatures.support}
//                                                 />
//                                                 <FeatureItem
//                                                     icon={<Award className="w-3.5 h-3.5" />}
//                                                     label="Certificate"
//                                                     available={platform.paidFeatures.certificate}
//                                                 />
//                                                 <div className="col-span-2">
//                                                     <FeatureItem
//                                                         icon={<GraduationCap className="w-3.5 h-3.5" />}
//                                                         label="Verified Certificate"
//                                                         available={platform.paidFeatures.verifiedCert}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* No Free Access Message */}
//                                     {platform.freeFeatures === null && (
//                                         <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center">
//                                             <p className="text-slate-500 text-xs font-medium">No free tier available</p>
//                                         </div>
//                                     )}

//                                     {/* No Paid Access Message */}
//                                     {platform.paidFeatures === null && (
//                                         <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center">
//                                             <p className="text-slate-500 text-xs font-medium">All content is free</p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Bottom hover effect */}
//                                 <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${platform.accentColor}-500 to-${platform.accentColor}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>


//         </div>
//     );
// };

// export default ExplorePlatforms;


