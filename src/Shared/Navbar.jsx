import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

import { IoMdArrowDropdown } from "react-icons/io";
import '../App.css';
import Menu from '../Pages/Home/Component/Shared/Menu';
import { RxCrossCircled } from 'react-icons/rx';
import { X } from 'lucide-react';

const NavigationBar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, LogOut } = useContext(AuthContext);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    LogOut()
      .then(() => console.log('Logged out'))
      .catch((err) => console.log(err));
  };

  // Determine text color class
  const getTextColorClass = () => {
    if (isHomePage && !isScrolled) return 'text-white';
    return 'text-white dark:text-white';
  };

  return (
    <div
      className={`navbar fixed top-0 z-50 w-full md:px-25 transition-all duration-300 px-6 py-4`}
    >
      {/* Left - Brand */}
      <div className="navbar-start">
        <div className="flex items-center pt-1.5">
          <span className={`text-2xl sm:text-3xl font-extrabold  ${getTextColorClass()} righteous`}>
            Learn
            <span className="text-[#f1620b] text-shadow-xs text-shadow-gray-950">IQ</span>
          </span>
          <img
            src="https://i.ibb.co/8ndphk5P/Screenshot-2025-07-28-152838.png"
            className="h-12 sm:h-15 sm:-ml-9 -ml-7 -mt-5"
            alt="Logo"
          />
        </div>
      </div>

      {/* Center - Links */}
      <div className={`navbar-center ${isScrolled ? "border-1 rounded-3xl border-gray-400 bg-black/70  px-15 py-2" : "border-0"}     habibi hidden dark:text-[#000000] lg:flex gap-6`}>
        <NavLink to="/" className={`${getTextColorClass()} dark:text-[#51a3f5] font-medium text-[18px] hover:text-[#0A97B0]`}>
          Home
        </NavLink>
        <NavLink to="/" className={`${getTextColorClass()} dark:text-[#51a3f5] font-medium flex items-end text-[18px] hover:text-[#0A97B0]`}>
          Explore <IoMdArrowDropdown />
        </NavLink>
        <NavLink to="/allapprovedclasses" className={`${getTextColorClass()} font-medium text-[18px] hover:text-[#0A97B0]`}>
          Free Cources
        </NavLink>
        <NavLink to="/teacherform" className={`${getTextColorClass()} font-medium text-[18px] hover:text-[#0A97B0]`}>
          Teach On
        </NavLink>
        <NavLink to="/allTeacher" className={`${getTextColorClass()} font-medium text-[18px] hover:text-[#0A97B0]`}>
          Instructors
        </NavLink>
        <NavLink to="/aboutUs" className={`${getTextColorClass()} font-medium text-[18px] hover:text-[#0A97B0]`}>About Us</NavLink>
      </div>

      {/* Right - Avatar or Login */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <div className="dropdown flex gap-2 dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-15 rounded-full">
                  <img src={user.photoURL} alt="User" />
                </div>

              </label>
              {/* <Menu className="hidden lg:block"></Menu> */}
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#e7efee] text-[#2A3335] rounded-box w-72"
              >
                <li><span className="text-sm font-bold">{user.displayName}</span></li>
                <li><span className="text-xs">{user.email}</span></li>
                <div className="divider my-1" />
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>

                <li><button onClick={handleLogout}>Sign out</button></li>
              </ul>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)}>
                <Menu className={`${getTextColorClass()} text-3xl dark:text-[#e7efee]`} />
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btnUI"
            >
              Log In
            </NavLink>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className={`${getTextColorClass()} text-3xl`} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}/>

          {/* Sidebar */}
          <div className="absolute top-0 right-0 w-5/6 h-full bg-[#fbbc2c] shadow-2xl">
            {/* Close Button Container */}
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="relative group"
                aria-label="Close menu"
              >
                {/* Glow layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-300 rounded-full blur-md opacity-60 group-hover:opacity-90" />

                {/* Button container with 3D effect */}
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-white via-yellow-100 to-amber-200 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  {/* Inner shadow for depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black opacity-20" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-transparent to-transparent opacity-40" />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <X className="w-6 h-6 text-gray-800 group-hover:text-black transition-colors drop-shadow-sm" strokeWidth={2.5} />
                  </div>

                  {/* Highlight */}
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full opacity-60 blur-sm" />
                </div>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col justify-center h-full px-8">
              <a
                href="#home"
                className="block text-black text-3xl my-5 font-semibold hover:text-[#FFCFEF] transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#classes"
                className="block text-black text-3xl my-5 font-medium hover:text-[#FFCFEF] transition-colors duration-200"
              >
                All Classes
              </a>
              <a
                href="#teach"
                className="block text-black text-3xl my-5 font-medium hover:text-[#FFCFEF] transition-colors duration-200"
              >
                Teach On
              </a>
              <a
                href="#instructors"
                className="block text-black text-3xl my-5 font-medium hover:text-[#FFCFEF] transition-colors duration-200"
              >
                Instructors
              </a>
              <a
                href="#about"
                className="block text-black text-3xl my-5 font-medium hover:text-[#FFCFEF] transition-colors duration-200"
              >
                About Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
