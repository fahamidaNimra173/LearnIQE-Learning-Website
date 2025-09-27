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
    <Footer container className="bg-[#6c4370] text-[#e7efee] dark:text-[#f9fdfc] dark:bg-[#6c4370]  rounded-none shadow-none">
      <div className="w-full lg:px-25 ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Custom Brand */}
          <div className="flex flex-col mb-5">
            <div className="flex items-center pt-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#e7efee] righteous">
                Learn
                <span className="text-[#FFCFEF] text-shadow-xs text-shadow-gray-950">IQ</span>
              </span>
              <img
                src="https://i.ibb.co/8ndphk5P/Screenshot-2025-07-28-152838.png"
                className="h-12 sm:h-15 sm:-ml-9 -ml-7 -mt-5"
                alt="LearnIQ Logo"
              />
            </div>
            <p className=''>Your Journey to Knowledge Starts Here.</p>
          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-2 text-[#fcffff] dark:text-[#fefefe] gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle className='text-[#fcffff] dark:text-[#fefefe]' title="About" />
              <FooterLinkGroup col>
                <FooterLink className='text-[#fcffff] dark:text-[#fefefe]' href="/aboutUs">About Us</FooterLink>
                {/* <FooterLink href="#">Terms & Condition</FooterLink> */}
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className='text-[#fcffff] dark:text-[#fefefe]' title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink className='text-[#fcffff] dark:text-[#fefefe]' href="https://github.com/fahamidaNimra173" target="_blank">GitHub</FooterLink>
                <FooterLink className='text-[#fcffff] dark:text-[#fefefe]' href="https://www.linkedin.com/in/fahmida-nimra/" target="_blank">Linkedin</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className='text-[#fcffff] dark:text-[#fefefe]' title="Legal" />
              <FooterLinkGroup col>
                <FooterLink className='text-[#fcffff] dark:text-[#fefefe]' href="privacy">Privacy Policy</FooterLink>
                <FooterLink className='text-[#fcffff] dark:text-[#fefefe]' href="termsandcondition">Terms & Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="LearnIQ™"
            year={2025}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://facebook.com"
              icon={BsFacebook}
              target="_blank"
            />
            <FooterIcon
              href="https://instagram.com"
              icon={BsInstagram}
              target="_blank"
            />
            <FooterIcon
              href="https://twitter.com"
              icon={BsTwitter}
              target="_blank"
            />
            <FooterIcon
              href="https://github.com"
              icon={BsGithub}
              target="_blank"
            />
            <FooterIcon
              href="https://dribbble.com"
              icon={BsDribbble}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooteR;
