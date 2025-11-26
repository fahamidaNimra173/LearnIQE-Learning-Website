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
        <div className="absolute top-0 right-0 mt-2 bg-[#fbbc2c] rounded shadow-lg p-4 min-w-11/12 min-h-screen lg:hidden">
          <div className='relative top-0'>
            <button
              onClick={() => setIsMenuOpen(false)}
              className='absolute top-0 right-0 group'
            >
              {/* Glow effect layers */}
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-60 group-hover:opacity-80 animate-pulse"></div>
              <div className="absolute inset-0 bg-amber-300 rounded-full blur-md opacity-40 group-hover:opacity-60"></div>

              {/* 3D button effect */}
              <div className="relative">
                <RxCrossCircled className='w-8 h-8 text-black relative z-10 drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.7)] transition-all duration-300 group-hover:scale-110' />

                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-full pointer-events-none"></div>
              </div>
            </button>
          </div>

          <div className='flex flex-col justify-center'>
            <NavLink to="/" className="block text-black pt-20 my-5 font-semibold text-3xl py-1 hover:text-[#FFCFEF]">Home</NavLink>
            <NavLink to="/allapprovedclasses" className="block text-3xl my-5 font-medium righteous text-black py-1 hover:text-[#FFCFEF]">All Classes</NavLink>
            <NavLink to="/teacherform" className="block text-3xl my-5 font-medium righteous text-black py-1 hover:text-[#FFCFEF]">Teach On</NavLink>
            <NavLink to="/allTeacher" className="block text-3xl my-5 font-medium righteous text-black py-1 hover:text-[#FFCFEF]">Instructors</NavLink>
            <NavLink to="/aboutUs" className="block text-3xl my-5 righteous text-black py-1 hover:text-[#FFCFEF]">About Us</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
