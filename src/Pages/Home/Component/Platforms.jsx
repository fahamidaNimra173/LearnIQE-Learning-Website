import React from 'react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import '../../../App.css';

const Platforms = () => {
    const platforms = [
        {
            id: 1,
            name: "Udemy",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
            url: "https://www.udemy.com"
        },
        {
            id: 2,
            name: "edX",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600",
            url: "https://www.edx.org"
        },
        {
            id: 3,
            name: "Coursera",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
            url: "https://www.coursera.org"
        },
        {
            id: 4,
            name: "Khan Academy",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
            url: "https://www.khanacademy.org"
        },
        {
            id: 5,
            name: "10 Minute School",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
            url: "https://10minuteschool.com"
        },
        {
            id: 6,
            name: "Alison",
            image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
            url: "https://alison.com"
        },
        {
            id: 7,
            name: "Programming Hero",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
            url: "https://www.programming-hero.com"
        },
        {
            id: 8,
            name: "Ostad",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
            url: "https://ostad.app"
        },
        {
            id: 9,
            name: "Hitron",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
            url: "https://hitron.com"
        },
        {
            id: 10,
            name: "Class Central",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
            url: "https://www.classcentral.com"
        }
    ];


    return (
        <div className='relative flex flex-col lg:flex-row gap-10 items-center px-6 md:px-15 lg:px-25 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 backdrop-blur-3xl py-16 border-y-2 border-blue-400/30'>

            {/* Text Section */}
            <div className='flex gap-6 flex-col lg:w-1/2'>
                <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit'>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                    </svg>
                    <span className='text-white font-semibold text-sm uppercase tracking-wider'>Top Platforms</span>
                </div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight'>
                    Explore Online Learning Platforms
                </h1>

                <p className='text-blue-50 text-lg leading-relaxed'>
                    Discover popular learning platforms like Udemy, Coursera, edX, Khan Academy, Alison, and more offering both free and paid courses. Swipe to explore platforms and choose the one that fits your learning goals.
                </p>

                <div className='flex items-center gap-3 text-white/80 text-sm'>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span>Swipe to explore all platforms</span>
                </div>
            </div>
            <div>

            </div>
            <div>
                <div>
                    {/*first row  */}
                    {/*second row  */}
                    {/*third row  */}
                    {/*fourth row  */}
                </div>
            </div>

        </div>
    );
};

export default Platforms;