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
    <Footer container className="bg-[#EBFFD8] rounded-none shadow-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Custom Brand */}
          <div className="navbar-start">
            <div className="flex items-center pt-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0A5EB0] righteous">
                Learn
                <span className="text-[#FFCFEF] text-shadow-xs text-shadow-gray-950">IQ</span>
              </span>
              <img
                src="https://i.ibb.co/8ndphk5P/Screenshot-2025-07-28-152838.png"
                className="h-12 sm:h-15 sm:-ml-9 -ml-7 -mt-5"
                alt="LearnIQ Logo"
              />
            </div>
          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-2 text-black gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink href="/aboutUs">About Us</FooterLink>
                <FooterLink href="#">Terms & Condition</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="https://github.com/" target="_blank">GitHub</FooterLink>
                <FooterLink href="https://discord.com/" target="_blank">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms & Conditions</FooterLink>
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
