import React from 'react';
import '../App.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className='mb-40'>
            <DotLottieReact
                src="/public/404 Page not found.json"
                loop
                autoplay
                className=' md:max-w-4/5 lg:-mt-40  md:-mt-25 mx-auto'
            />
            <div className='flex flex-col items-center gap-9'>
                <h1 className="md:text-3xl  text-2xl px-4 righteous font-bold text-center text-purple-700  dark:text-purple-100 mt-15">
                    Sorry, the page you’re looking for was not found.
                </h1>
                <Link to='/'>
                    <button
                        className="bg-purple-200 dark:bg-white  text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
                        type="button"
                    >
                        <div
                            className="bg-purple-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                                height="25px"
                                width="25px"
                            >
                                <path
                                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                    fill="#000000"
                                ></path>
                                <path
                                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                    fill="#000000"
                                ></path>
                            </svg>
                        </div>
                        <p className="translate-x-2">Go Back</p>
                    </button>
                </Link>

            </div>





        </div>
    );
};

export default Error;