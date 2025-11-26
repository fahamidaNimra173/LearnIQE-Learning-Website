import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { HiMenu } from 'react-icons/hi';
import { IoMdArrowDropdown } from "react-icons/io";
import '../App.css';
import Menu from '../Pages/Home/Component/Shared/Menu';
import { RxCrossCircled } from 'react-icons/rx';

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
        <div className="absolute top-0 right-0 mt-2 bg-gradient-to-br from-[#fbbc2c] via-[#ffc940] to-[#fbbc2c] rounded-l-3xl shadow-2xl p-6 min-w-11/12 min-h-screen lg:hidden overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>

          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          {/* Close button */}
          <div className='relative top-0 mb-8'>
            <button
              onClick={() => setIsMenuOpen(false)}
              className='absolute top-2 right-2 group'
            >
              {/* Outer glow rings */}
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-70 animate-pulse"></div>
              <div className="absolute inset-0 bg-amber-300 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>

              {/* Button container with 3D effect */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* 3D layered effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-amber-100 rounded-full transform translate-y-0.5 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-200 rounded-full shadow-lg"></div>

                {/* Top shine */}
                <div className="absolute top-1 left-2 w-4 h-4 bg-white/70 rounded-full blur-sm"></div>

                {/* Icon */}
                <RxCrossCircled className='w-8 h-8 text-gray-800 relative z-10 drop-shadow-[0_2px_6px_rgba(255,255,255,0.8)] group-hover:drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)] group-hover:rotate-90 transition-all duration-500 group-hover:scale-110' />
              </div>
            </button>
          </div>

          {/* Navigation container */}
          <div className='flex flex-col justify-center h-full relative z-10 space-y-2 pt-16'>
            <NavLink
              to="/"
              className="group relative block text-black font-semibold text-3xl py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-[#FFCFEF] transition-colors duration-300">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </NavLink>

            <NavLink
              to="/allapprovedclasses"
              className="group relative block text-3xl font-medium righteous text-black py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-[#FFCFEF] transition-colors duration-300">All Classes</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </NavLink>

            <NavLink
              to="/teacherform"
              className="group relative block text-3xl font-medium righteous text-black py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-[#FFCFEF] transition-colors duration-300">Teach On</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </NavLink>

            <NavLink
              to="/allTeacher"
              className="group relative block text-3xl font-medium righteous text-black py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-[#FFCFEF] transition-colors duration-300">Instructors</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </NavLink>

            <NavLink
              to="/aboutUs"
              className="group relative block text-3xl righteous text-black py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-[#FFCFEF] transition-colors duration-300">About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </NavLink>
          </div>

          {/* Bottom decorative element */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
