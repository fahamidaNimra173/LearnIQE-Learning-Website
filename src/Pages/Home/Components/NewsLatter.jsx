import React from 'react';
import Image from '../../../assets/Screenshot_2025-09-25_215732-removebg-preview.png'
const NewsLatter = () => {
    return (
        <div className="relative py-16 px-4 mb-1 overflow-hidden">
            {/* Background Image with slight blur */}
            <div
                className="absolute inset-0 bg-cover bg-center  z-0"
                style={{
                    backgroundImage: `url(${Image})`,
                }}
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col-reverse lg:gap-30 lg:flex-row gap-4 mt-2 lg:mt-0 text-center lg:text-left text-white lg:justify-between items-center lg:px-25">
                <div>
                    <h1 className="md:text-7xl text-4xl font-bold righteous lg:text-pink-200 text-[#1e8a78] mb-4 tracking-widest">
                        Be a member
                    </h1>
                    <p className="habibi  text-[20px] font-extrabold lg:text-white text-pink-100 md:text-2xl">
                        Subscribe to get the latest information
                    </p>
                </div>

                <div className="flex flex-1 flex-col items-center border-1 backdrop-blur-sm p-4 rounded-2xl   gap-3 justify-center">
                    <label className="lg:text-[#fbbc2c] text-[#fbbc2c] lg:text-5xl text-2xl font-bold habibi uppercase mt-2 mb-4 ">Your Email</label>
                    <input
                        type="email"
                        placeholder="Write your email"
                        className="px-4 py-2 w-full mb-3 bg-[#1e8a78] text-white lg:bg-gray-100 lg:text-black rounded border"
                    />
                    <button className="crush"><p>Subscribe</p></button>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;