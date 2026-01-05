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

  const getTextColorClass = () => {
    if (isHomePage && !isScrolled) return 'text-white';
    return 'text-white dark:text-white';
  };

  return (
    <div className={`navbar fixed top-0 z-50 w-full bg-black/75 md:bg-none md:px-25 transition-all duration-300 px-6 py-2`}>

      {/* Left Brand */}
      <div className="navbar-start">
        <div className="flex items-center pt-1.5">
          <span className={`text-2xl sm:text-3xl   ${getTextColorClass()} righteous`}>
            Learn
            <span className="text-[#2a8aff] text-shadow-xs text-shadow-gray-950">IQ</span>
          </span>
          <img
            src="https://i.ibb.co/8ndphk5P/Screenshot-2025-07-28-152838.png"
            className="h-12 sm:h-15 sm:-ml-9 -ml-7 -mt-5"
            alt="Logo"
          />
        </div>
      </div>

      {/* Middle Links */}
      <div className={`navbar-center ${isScrolled ? "border-1 rounded-3xl border-gray-400 bg-black/70  px-15 py-2" : "border-0"}     
        habibi hidden dark:text-[#000000] lg:flex gap-6`}>

        <NavLink to="/" className={`${getTextColorClass()} dark:text-[#51a3f5] 
          font-medium text-[18px] outfit hover:text-[#0A97B0]`}>
          Home
        </NavLink>

        <NavLink to="/explore" className={`${getTextColorClass()} dark:text-[#51a3f5] 
          font-medium flex items-end outfit text-[18px] hover:text-[#0A97B0]`}>
          Explore <IoMdArrowDropdown />
        </NavLink>

        <NavLink to="/freeCourses" className={`${getTextColorClass()} 
          font-medium text-[18px] outfit hover:text-[#0A97B0]`}>
          Free Cources
        </NavLink>

        <NavLink to="/teacherform" className={`${getTextColorClass()} 
          font-medium text-[18px] outfit hover:text-[#0A97B0]`}>
          Teach On
        </NavLink>

        <NavLink to="/allTeacher" className={`${getTextColorClass()} 
          font-medium text-[18px] outfit hover:text-[#0A97B0]`}>
          Instructors
        </NavLink>

        <NavLink to="/aboutUs" className={`${getTextColorClass()} 
          font-medium text-[18px] outfit hover:text-[#0A97B0]`}>
          About Us
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="navbar-end flex items-center gap-3">

        {/* Logged In */}
        {user ? (
          <>
            <div className="dropdown flex gap-2 dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-15 rounded-full">
                  <img src={user.photoURL} alt="User" />
                </div>
              </label>

              <ul tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content 
                bg-[#e7efee] text-[#2A3335] rounded-box w-72">

                <li><span className="text-sm outfit font-bold">{user.displayName}</span></li>
                <li><span className="text-xs">{user.email}</span></li>
                <div className="divider my-1" />
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><button onClick={handleLogout}>Sign out</button></li>
              </ul>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)}>
                <Menu className={`${getTextColorClass()} text-3xl outfit dark:text-[#e7efee]`} />
              </button>
            </div>
          </>
        ) : (
          <>


            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className={`${getTextColorClass()} text-3xl`} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* MOBILE SIDEBAR WITH CIRCLE ANIMATION */}
      <div
        className={`fixed clip-open ${isMenuOpen ? "show" : ""} 
        top-0 right-0 z-50 overflow-hidden lg:hidden`}
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="absolute top-0 right-0 mt-2 bg-gradient-to-br 
          from-[#fcb40d] via-[#e6cb89] to-[#624604] rounded-l-3xl shadow-2xl 
          p-6 min-w-11/12 min-h-screen overflow-hidden">

          {/* Close Button */}
          <div className='relative top-0 mb-8'>
            <button onClick={() => setIsMenuOpen(false)} className='absolute top-2 right-2 group'>
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-70 animate-pulse"></div>
              <div className="absolute inset-0 bg-amber-300 rounded-full blur-lg opacity-30 group-hover:opacity-50"></div>

              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-amber-100 rounded-full opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-200 rounded-full shadow-lg"></div>

                <div className="absolute top-1 left-2 w-4 h-4 bg-white/70 rounded-full blur-sm"></div>

                <RxCrossCircled className='w-8 h-8 text-gray-800 relative z-10 transition-all duration-500 group-hover:rotate-90 group-hover:scale-110' />
              </div>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className='flex flex-col justify-center h-full relative z-10 space-y-2 py-10 md:pt-16'>

            <NavLink to="/" className="group text-black font-semibold text-3xl py-4 px-6 rounded-2xl hover:bg-white/20">
              <span className="relative z-10 outfit group-hover:text-[#FFCFEF]">Home</span>
            </NavLink>

            <NavLink to="/allapprovedclasses" className="group text-black font-semibold text-3xl py-4 px-6 rounded-2xl hover:bg-white/20">
              <span className="relative z-10 outfit group-hover:text-[#FFCFEF]">All Classes</span>
            </NavLink>
            <NavLink to="/freeCourses" className={`${getTextColorClass()} 
          font-medium text-[18px] outfit hover:text-[#0A97B0]`}>
              Free Cources
            </NavLink>

            <NavLink to="/teacherform" className="group text-black font-semibold text-3xl py-4 px-6 rounded-2xl hover:bg-white/20">
              <span className="relative outfit z-10 group-hover:text-[#FFCFEF]">Teach On</span>
            </NavLink>

            <NavLink to="/allTeacher" className="group text-black font-semibold text-3xl py-4 px-6 rounded-2xl hover:bg-white/20">
              <span className="relative outfit z-10 group-hover:text-[#FFCFEF]">Instructors</span>
            </NavLink>

            <NavLink to="/aboutUs" className="group text-black font-semibold text-3xl py-4 px-6 rounded-2xl hover:bg-white/20">
              <span className="relative outfit z-10 group-hover:text-[#FFCFEF]">About Us</span>
            </NavLink>
            <NavLink to="/login" className="btnUI outfit">Log In</NavLink>

          </div>

        </div>
      </div>

    </div>
  );
};

export default NavigationBar;
