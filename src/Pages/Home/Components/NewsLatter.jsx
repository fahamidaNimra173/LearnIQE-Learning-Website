import React from 'react';
import Image from '../../../assets/Screenshot 2025-09-25 215732.png'
const NewsLatter = () => {
    return (
        <div className="relative py-16 px-4 bg-[#6c4370] mb-1  md:mb-30 overflow-hidden">
            {/* Background Image with Blur and Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{
                    backgroundImage: { Image },
                    zIndex: 0,
                }}
            ></div>
            <div className="">
                <div className="relative z-10 text-white">
                    <h1 className='md:text-7xl font-bold text-3xl righteous text-[#1e8a78]  tracking-widest'>Be a member</h1>
                    <p className='habibi  font-medium text-2xl'>Subscribe our website to get latest Information </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <legend>Your Email</legend>
                    <input type="email" placeholder='Write your email' className='border-1 px-10 py-2 bg-gray-300 text-black' />
                    <button className='buttonMore '>SUBSCRIBE</button>
                </div>

            </div>

            {/* Foreground Content */}

        </div>
    );
};

export default NewsLatter;