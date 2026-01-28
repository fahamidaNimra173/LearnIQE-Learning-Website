import React from 'react';
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooteR = () => {
  return (
    <Footer className="text-[#e7efee] relative pt-0 lg:mt-20 border-t-1 border-dotted border-blue-600/40 bg-[#000108] dark:text-[#f9fdfc] rounded-none shadow-none overflow-hidden">
      <div className="w-full px-3 lg:px-25">

        {/* Glowing Background Text */}
        <div className='absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none'>
          <h1 className='md:text-7xl text-6xl lg:text-[100px] xl:text-[200px] font-extrabold tracking-widest select-none
            bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 bg-clip-text text-transparent
            opacity-35 blur-[1px]45'>
            LEARNIQ
          </h1>

          {/* Glow Effects */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] '></div>
            <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] ' style={{ animationDelay: '1s' }}></div>
            <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/25 rounded-full blur-[90px] animate-pulse' style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="grid bg-black/20 pt-20 px-3 w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 relative z-10">
          {/* Custom Brand */}
          <div className="flex flex-col mb-5">
            <div className="flex items-center pt-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#e7efee] righteous">
                Learn
                <span className="text-[#FFCFEF] text-shadow-xs text-shadow-gray-950 drop-shadow-[0_0_15px_rgba(255,207,239,0.5)]">IQ</span>
              </span>
              <img
                src="https://i.ibb.co/8ndphk5P/Screenshot-2025-07-28-152838.png"
                className="h-12 sm:h-15 sm:-ml-9 -ml-7 -mt-5"
                alt="LearnIQ Logo"
              />
            </div>
            <p className='text-gray-200  mt-2 max-w-xs'>
              We bring together free learning resources from trusted platforms.
              Explore courses and continue your learning journey where knowledge has no limits.
            </p>

          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-2 text-[#fcffff] dark:text-[#fefefe] gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle className='text-[#fcffff] dark:text-[#fefefe] font-bold mb-4' title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  className='text-gray-200 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block'
                  href="/aboutUs"
                >
                  About Us
                </FooterLink>
                <FooterLink
                  className='text-gray-200 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block'
                  href="/freeCourses"
                >
                  Free Courses
                </FooterLink>
                <FooterLink
                  className='text-gray-200 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block'
                  href="/explore"
                >
                  Explore
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle className='text-[#fcffff] dark:text-[#fefefe] font-bold mb-4' title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink
                  className='text-gray-200 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block'
                  href="https://github.com/fahamidaNimra173"
                  target="_blank"
                >
                  GitHub
                </FooterLink>
                <FooterLink
                  className='text-gray-200 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block'
                  href="https://www.linkedin.com/in/fahmida-nimra/"
                  target="_blank"
                >
                  LinkedIn
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle className='text-[#fcffff] dark:text-[#fefefe] font-bold mb-4' title="Legal" />
              <FooterLinkGroup col>
                <FooterLink
                  className='text-gray-200 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block'
                  href="privacy"
                >
                  Privacy Policy
                </FooterLink>
                <FooterLink
                  className='text-gray-200 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block'
                  href="termsandcondition"
                >
                  Terms & Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider className='border-blue-600/20' />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between relative z-10 pb-6">
          <FooterCopyright
            href="#"
            by="LearnIQ™"
            year={2025}
            className='text-gray-400'
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://facebook.com"
              icon={BsFacebook}
              target="_blank"
              className='text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]'
            />
            <FooterIcon
              href="https://instagram.com"
              icon={BsInstagram}
              target="_blank"
              className='text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]'
            />
            <FooterIcon
              href="https://twitter.com"
              icon={BsTwitter}
              target="_blank"
              className='text-gray-400 hover:text-sky-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]'
            />
            <FooterIcon
              href="https://github.com"
              icon={BsGithub}
              target="_blank"
              className='text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
            />
            <FooterIcon
              href="https://dribbble.com"
              icon={BsDribbble}
              target="_blank"
              className='text-gray-400 hover:text-purple-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]'
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooteR;
