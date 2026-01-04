import AxiosSecure from '@/Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Earth, SquareArrowUpLeft, UsersIcon, X, Filter } from 'lucide-react';
import React, { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import ShapeIllusion from '../Home/Component/ShapeIllusion';



const FreeCourses = () => {
    const axiosSecure = AxiosSecure();

    const [category, setCategory] = useState('');
    const [language, setLanguage] = useState('');
    const [platform, setPlatform] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const { data: courses = [], isLoading, error } = useQuery({
        queryKey: ['courses', category, language, platform],
        queryFn: async () => {
            const res = await axiosSecure.get(`/freeCourses?category=${category}&platform=${platform}&language=${language}`);
            return res.data;
        },
    });

    const { data: filters = [] } = useQuery({
        queryFn: async () => {
            const res = await axiosSecure.get(`/freeCourses/filters`);
            return res.data;
        },
    });

    // Platform → Logo mapping
    const platformLogos = {
        Ostad: 'https://i.ibb.co.com/yBmxh0Xx/Screenshot-2025-11-28-125756.png',
        '10 Minute School': 'https://10minuteschool.com/images/logo.svg',
        Alison: 'https://i.ibb.co.com/7xK4KMX7/Screenshot-2025-12-11-230019.png',
        udemy: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
        edx: 'https://i.ibb.co.com/pvFPY5XT/favicon.jpg',
    };

    // Toggle filter functions
    const toggleCategory = (cat) => {
        setCategory(category === cat ? '' : cat);
    };

    const toggleLanguage = (lan) => {
        setLanguage(language === lan ? '' : lan);
    };

    const togglePlatform = (p) => {
        setPlatform(platform === p ? '' : p);
    };

    const clearAllFilters = () => {
        setLanguage('');
        setCategory('');
        setPlatform('');
    };

    const hasActiveFilters = category || language || platform;

    if (isLoading) {
        return <h1 className="text-white">Courses are on the way...</h1>;
    }

    if (error) {
        return <h1 className="text-red-500">Something went wrong</h1>;
    }

    return (
        <div>
            <div className="mt-20  w-full overflow-hidden">
                <ShapeIllusion></ShapeIllusion>
                
                <div className="relative mb-10  bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5 border-2 border-yellow-500/20 rounded-3xl text-wrap backdrop-blur-sm lg:p-16">
                    <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-8 z-20">
                            <div className="space-y-6 p-6">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-2 rounded-full text-xs font-bold uppercase lg:tracking-wider">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                    <span>বিনামূল্যে শিখুন</span>
                                </div>

                                <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold leading-none bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                                    FREE COURSES
                                </h1>

                                <p className="text-gray-300 text-lg leading-relaxed lg:max-w-xl">
                                    বিশ্বমানের শিক্ষা এখন সবার হাতের মুঠোয়! 10 Minute School, Ostad, Udemy, Alison, Khan Academy থেকে সংগৃহীত সেরা কোর্সগুলো একদম ফ্রি।
                                </p>
                            </div>

                            <div className="flex md:flex-row flex-col items-center gap-0 md:gap-5 lg:gap-20 md:pt-4">
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center mt-1 justify-center w-12 h-12">
                                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                        </svg>
                                    </div>
                                    <div className='flex gap-3 items-end'>
                                        <div className="text-2xl text-yellow-400">90+</div>
                                        <div className="text-gray-100 text-lg">Courses</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Earth className='text-white h-5'></Earth>
                                    <div className='flex items-center gap-2'>
                                        <div className="text-gray-300 text-lg font-medium">Bangla</div>
                                        <hr className='w-8 border-1 mt-1 border-dotted border-yellow-300' />
                                        <div className="text-gray-300 text-lg font-medium">English</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute z-0 blur-3xl bg-blue-500/30 top-1/7 left-1/3 h-66 w-66 rounded-full'></div>
                        <div className='absolute bg-black z-5 lg:blur-none blur-xl top-1/9 left-1/6 h-96 w-96 rounded-full'></div>
                         <div className='absolute bg-gradient-to-l from-black via-transparent to-transparent hidden lg:block z-10 lg:blur-none blur-xl top-1/13 left-1/8 h-[420px] w-96 rounded-full'></div>
                        <div className='absolute z-0 lg:blur-xs blur-2xl opacity-50 lg:opacity-100 bg-blue-500 lg:top-1/6 top-1/7 left-10 sm:left-20 md:left-40 lg:left-74 h-85 w-83 rounded-full'></div>
                        <div className='absolute z-0 opacity-100 bg-blue-700 lg:top-1/6 top-1/7 left-10 sm:left-20 md:left-40 lg:left-74 h-84 w-81 rounded-full'></div>
                        <div className="absolute z-5 border-blue-700/90 border-2 left-120 top-0 h-[500px]  w-27 rounded-[70%_60%_70%_60%] opacity-24 ">
                        </div>
                        <div className="absolute z-5 border-blue-700/90 border-2 left-117 top-5 h-[450px]  w-27 rounded-[70%_60%_70%_60%] opacity-24 ">
                        </div>
                        <div className="absolute z-5 border-blue-700/90 border-2 left-115 top-7 h-[440px]  w-27 rounded-[70%_60%_70%_60%] opacity-24 ">
                        </div>



                        <div className="flex relative items-center justify-center">
                            <div className='absolute hidden md:block bg-yellow-400 blur-xs top-20 z-10 h-60 w-75 rotate-45 rounded-t-2xl'></div>
                            <div className='absolute blur-b-xs bg-blue-500 top-20 right-10 z-0 h-60 w-75 rotate-45 rounded-t-2xl'></div>

                            <div className="relative z-20 w-full">
                                <div className='absolute md:block hidden bg-gradient-to-t from-black via-transparent bottom-7 to-transparent w-full h-full'></div>
                                <div className="rounded-3xl shadow-2xl">
                                    <img src="https://i.ibb.co.com/FkhZv3V5/adult-education-2706977-1280-removebg-preview.png" alt="Students learning" className="w-full md:h-96 h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter and Courses Section */}
            <div className="mt-12 relative lg:p-0 p-3 lg:flex lg:gap-3 lg:items-start">
                {/* Mobile Filter Toggle Button */}
                <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex cursor-pointer  fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-500 to-indigo-900 text-white p-4 rounded-full shadow-2xl border-1 border-white/70 shadow-black"
                >
                    <div className='absolute bg-white w-8 blur-xs -rotate-45 h-2 border-2 border-blue-600 rounded-2xl z-10 top-3 -left-1'>

                    </div>
                    <div className='absolute bg-blue-600 w-9 blur-xs -rotate-45 h-2 border-2 border-blue-600 rounded-2xl z-10 bottom-3 -right-1'>

                    </div>
                    <div className='absolute bg-blue-900 w-full blur-md  h-5 border-2 border-blue-600 rounded-2xl z-10 -bottom-6 right-0'>

                    </div>
                    <Filter className="w-6 h-6" /><span className=''>Filter</span>
                </button>

                {/* Overlay for mobile */}
                {isFilterOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                        onClick={() => setIsFilterOpen(false)}
                    ></div>
                )}

                {/* Filters Sidebar */}
                <aside className={`
                    ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0
                    fixed lg:sticky
                    top-0 lg:top-6
                    left-0
                    h-screen lg:h-screen
                    w-95
                    z-50 lg:z-auto
                    overflow-y-auto
                    lg:mb-0
                    transition-transform duration-300 ease-in-out
                `}>
                    <div className="bg-white mt-10 border  border-slate-700 rounded-none lg:rounded-tr-2xl shadow-xl overflow-y-scroll h-full">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-white text-2xl font-medium font-mono uppercase tracking-tight">Filters</h2>
                                <div className="flex items-center gap-2">
                                    {hasActiveFilters && (
                                        <button
                                            onClick={clearAllFilters}
                                            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-lg backdrop-blur-sm border border-white/30"
                                        >
                                            <X className="w-4 h-4" />
                                            Clear
                                        </button>
                                    )}
                                    {/* Close button for mobile */}
                                    <button
                                        onClick={() => setIsFilterOpen(false)}
                                        className="lg:hidden bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm border border-white/30"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            {hasActiveFilters && (
                                <p className="text-blue-100 text-sm mt-2">
                                    {courses.length} course{courses.length !== 1 ? 's' : ''} found
                                </p>
                            )}
                        </div>

                        {/* Filter Content */}
                        <div className="p-6 relative  space-y-8">
                            <div className='absolute bg-amber-400 w-10 h-10 t-0 rounded-full blur-xl top-0'>

                            </div>
                            <div className='absolute  bg-gradient-to-b from-amber-400 via-amber-400 to-transparent  w-2.5 h-30 t-0   right-0 top-0'>

                            </div>
                            <div className='absolute bg-gradient-to-b from-green-400 via-green-400 to-transparent  w-2.5 h-20 t-0   right-2 top-0'>

                            </div>
                            {/* Categories */}
                            <div>
                                <h3 className="text-slate-900 text-xl font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-yellow-400 rounded-full"></span>
                                    Categories
                                </h3>
                                <div className="space-y-3 gap-2 md:grid  md:grid-cols-2">
                                    {filters.categories && filters.categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => toggleCategory(cat)}
                                            className={`w-full text-left  rounded-lg font-medium py-1 border-b-2 shadow-2xl shadow-slate-400 px-2 text-sm  ${category === cat
                                                ? 'bg-blue-600 border-blue-500 text-white px-4 py-3 shadow-lg shadow-blue-500/30'
                                                : ' text-slate-900 cursor-pointer hover:pl-5  hover:underline hover:pb-1 hover:border-slate-600'
                                                }`}
                                        >
                                            <div className="flex items-center text-md justify-between">
                                                <span>{cat}</span>
                                                {category === cat && (
                                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Languages */}
                            <div>
                                <h3 className="text-slate-900 text-xl font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-green-400  rounded-full"></span>
                                    Language
                                </h3>
                                <div className="space-y-2">
                                    {filters.language && filters.language.map((lan) => (
                                        <button
                                            key={lan}
                                            onClick={() => toggleLanguage(lan)}
                                            className={`w-full text-left  rounded-lg py-1 border-b-2 shadow-2xl shadow-slate-400 px-2 font-medium text-sm  ${language === lan
                                                ? 'bg-green-500 border-green-600 px-4 py-3 text-white shadow-lg shadow-purple-500/30'
                                                : '  text-slate-900 cursor-pointer hover:pl-5  hover:underline hover:pb-1 hover:border-slate-600'
                                                }`}
                                        >
                                            <div className="flex items-center text-lg justify-between">
                                                <span>{lan}</span>
                                                {language === lan && (
                                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Platforms */}
                            <div>
                                <h3 className="text-slate-900 text-xl font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-purple-400 rounded-full"></span>
                                    Platform
                                </h3>
                                <div className="space-y-2">
                                    {filters.platform && filters.platform.map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => togglePlatform(p)}
                                            className={`w-full text-left  rounded-lg py-1 border-b-2 shadow-2xl shadow-slate-400 px-2 font-medium text-sm  ${platform === p
                                                ? 'bg-purple-600 border-purple-500 px-4 py-3 text-white shadow-lg shadow-purple-500/30'
                                                : '  text-slate-900 cursor-pointer hover:pl-5  hover:underline hover-pb-1 hover:border-slate-600'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className='text-lg'>{p}</span>
                                                {platform === p && (
                                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Courses Grid */}
                <div className="flex-1">
                    {courses.length === 0 ? (
                        <div className="text-center  py-16">
                            <div className="text-slate-400 text-xl">No courses found matching your filters</div>
                            <button
                                onClick={clearAllFilters}
                                className="mt-4 text-blue-500 hover:text-blue-400 font-medium"
                            >
                                Clear filters to see all courses
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                            {courses.map((course) => (
                                <div key={course._id} className='flex bg-white flex-col rounded-xl justify-between'>
                                    <img
                                        src={course?.image}
                                        alt="course image"
                                        className="h-40 w-full object-cover"
                                    />

                                    <div className="p-2 bg-white text-black rounded-b-2xl">
                                        <div className='flex flex-col justify-between'>
                                            <div className="flex items-center justify-between px-3">
                                                <span className="text-[12px] bg-black text-white px-3 flex items-center rounded-full gap-1 font-medium">
                                                    <UsersIcon className="w-4 text-green-400" />
                                                    {course.Enrollment}
                                                </span>
                                                <hr className='w-40 border-1 border-gray-400 border-dashed' />
                                                {course.rating !== undefined && (
                                                    <span className="text-[12px] bg-black text-white px-7 font-bold relative flex items-center rounded-tr-full gap-1">
                                                        <BsStars className="text-yellow-400 w-7 h-9 absolute left-0" />
                                                        {course.rating === 0 ? '...' : course.rating}
                                                    </span>
                                                )}
                                            </div>

                                            <h1 className="font-bold text-lg mt-2 h-15">{course.title}</h1>
                                        </div>

                                        <div className="flex items-end my-5 justify-between gap-4">
                                            {platformLogos[course.platform] && (
                                                <img
                                                    src={platformLogos[course.platform]}
                                                    alt={course.platform}
                                                    className="h-7 object-contain"
                                                />
                                            )}
                                            <h1 className="text-center text-sm bg-purple-500 text-gray-100 px-2 py-1 font-medium">
                                                Language: <span className='text-yellow-200 uppercase'>{course.language}</span>
                                            </h1>
                                        </div>

                                        <a href={course.url} target="_blank" rel="noreferrer">
                                            <button className="bg-blue-500 text-white cursor-pointer w-full py-1 mt-3 rounded-2xl flex items-center justify-center gap-2">
                                                Visit
                                                <SquareArrowUpLeft className="text-yellow-300 rotate-90" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FreeCourses;