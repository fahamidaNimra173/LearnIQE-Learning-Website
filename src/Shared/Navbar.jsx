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
          p-6 min-w-11/12 min-h-screen overflow-y-auto">

          {/* Close Button */}
          <div className='flex justify-between items-center mb-8'>
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl text-gray-900 righteous">
                Learn
                <span className="text-[#2a8aff]">IQ</span>
              </span>
              <img
                src="https://i.ibb.co/8ndphk5P/Screenshot-2025-07-28-152838.png"
                className="h-10 -ml-7 -mt-4"
                alt="Logo"
              />
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className='relative group transition-transform duration-300 hover:scale-110'
            >
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white/60 to-yellow-100/60 rounded-full shadow-lg border border-yellow-600/30">
                <RxCrossCircled className='w-6 h-6 text-gray-900 transition-transform duration-300 group-hover:rotate-90' />
              </div>
            </button>
          </div>

          {/* User Profile Section (if logged in) */}
          {user && (
            <div className="mb-6 px-4 py-5 bg-white/30 backdrop-blur-sm rounded-2xl border border-yellow-700/20 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full ring-2 ring-yellow-700/50 overflow-hidden">
                  <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold text-lg outfit">{user.displayName}</p>
                  <p className="text-gray-700 text-sm">{user.email}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <NavLink 
                  to="/dashboard" 
                  className="flex-1 text-center py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors outfit font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
                <button 
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                  className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors outfit font-medium text-sm"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}

          {/* Mobile Nav Links */}
          <div className='flex flex-col space-y-2 px-2'>
            
            <NavLink 
              to="/" 
              className={({ isActive }) => `group relative overflow-hidden py-4 px-5 rounded-xl transition-all duration-300 border ${
                isActive 
                  ? 'bg-gray-900 border-gray-900 shadow-lg' 
                  : 'bg-white/20 border-transparent hover:bg-white/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={({ isActive }) => `relative font-semibold text-xl outfit transition-colors ${
                isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'
              }`}>
                {({ isActive }) => (
                  <span className={isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'}>
                    Home
                  </span>
                )}
              </span>
            </NavLink>

            <NavLink 
              to="/allapprovedclasses" 
              className={({ isActive }) => `group relative overflow-hidden py-4 px-5 rounded-xl transition-all duration-300 border ${
                isActive 
                  ? 'bg-gray-900 border-gray-900 shadow-lg' 
                  : 'bg-white/20 border-transparent hover:bg-white/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={({ isActive }) => `relative font-semibold text-xl outfit transition-colors ${
                isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'
              }`}>
                {({ isActive }) => (
                  <span className={isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'}>
                    All Classes
                  </span>
                )}
              </span>
            </NavLink>

            <NavLink 
              to="/explore" 
              className={({ isActive }) => `group relative overflow-hidden py-4 px-5 rounded-xl transition-all duration-300 border ${
                isActive 
                  ? 'bg-gray-900 border-gray-900 shadow-lg' 
                  : 'bg-white/20 border-transparent hover:bg-white/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (
                <span className={`relative font-semibold text-xl outfit transition-colors flex items-center gap-1 ${
                  isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  Explore <IoMdArrowDropdown className="text-2xl" />
                </span>
              )}
            </NavLink>

            <NavLink 
              to="/freeCourses" 
              className={({ isActive }) => `group relative overflow-hidden py-4 px-5 rounded-xl transition-all duration-300 border ${
                isActive 
                  ? 'bg-gray-900 border-gray-900 shadow-lg' 
                  : 'bg-white/20 border-transparent hover:bg-white/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (
                <span className={`relative font-semibold text-xl outfit transition-colors ${
                  isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  Free Courses
                </span>
              )}
            </NavLink>

            <NavLink 
              to="/teacherform" 
              className={({ isActive }) => `group relative overflow-hidden py-4 px-5 rounded-xl transition-all duration-300 border ${
                isActive 
                  ? 'bg-gray-900 border-gray-900 shadow-lg' 
                  : 'bg-white/20 border-transparent hover:bg-white/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (
                <span className={`relative font-semibold text-xl outfit transition-colors ${
                  isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  Teach On
                </span>
              )}
            </NavLink>

            <NavLink 
              to="/allTeacher" 
              className={({ isActive }) => `group relative overflow-hidden py-4 px-5 rounded-xl transition-all duration-300 border ${
                isActive 
                  ? 'bg-gray-900 border-gray-900 shadow-lg' 
                  : 'bg-white/20 border-transparent hover:bg-white/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (
                <span className={`relative font-semibold text-xl outfit transition-colors ${
                  isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  Instructors
                </span>
              )}
            </NavLink>

            <NavLink 
              to="/aboutUs" 
              className={({ isActive }) => `group relative overflow-hidden py-4 px-5 rounded-xl transition-all duration-300 border ${
                isActive 
                  ? 'bg-gray-900 border-gray-900 shadow-lg' 
                  : 'bg-white/20 border-transparent hover:bg-white/30'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (
                <span className={`relative font-semibold text-xl outfit transition-colors ${
                  isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  About Us
                </span>
              )}
            </NavLink>

            {/* Login Button (if not logged in) */}
            {!user && (
              <NavLink 
                to="/login" 
                className="mt-6 py-4 px-5 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xl rounded-xl shadow-lg transition-all duration-300 text-center outfit"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </NavLink>
            )}
          </div>

          {/* Footer Section */}
          <div className="mt-8 pt-6 border-t border-yellow-800/30 px-4">
            <p className="text-gray-800 text-sm text-center outfit">
              © 2025 LearnIQ. All rights reserved.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NavigationBar;