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

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed clip-open ${isMenuOpen ? "show" : ""} top-0 right-0 z-50 overflow-y-scroll lg:hidden h-screen w-11/12`}>
        <div className="absolute top-0 right-0 min-h-screen min-w-11/12 rounded-l-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0A5EB0] via-[#5FA8FF] to-[#EBFFD8] shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-xl p-2  overflow-y-scroll mb-10">
          {/* this divs are for creating folding effect on close button */}
          <div className='absolute -top-2 right-17 -rotate-30 w-3 h-14 blur-xs   border-black/60 border-[1.5px] bg-gradient-to-r from-transparent to-white/17'>

          </div>
          <div className='absolute -top-2 right-12 -rotate-12 w-3 h-14 blur-xs   border-black/40 border-1 bg-white/20'>

          </div>
          <div className='absolute -top-2 right-8 -rotate-0 w-3 h-14 blur-xs   border-black/90 border-1 bg-white/25'>

          </div>
          <div className='absolute -top-2 right-5 rotate-17 w-3 h-14 blur-xs   border-black/40 border-1 bg-white/17'>

          </div>
          <div className='absolute -top-2 right-0 rotate-37 w-3 h-17 blur-xs   border-black/40 border-1 bg-white/47'>

          </div>
          <div className='absolute top-10 right-0 rotate-90 w-2 h-10 blur-xs   border-black/60 border-1 bg-white/37'>

          </div>
          <div className='absolute top-5 right-20 rotate-110 w-3 h-14 blur-xs   border-black/40 border-1 bg-gradient-to-r from-transparent to-white/17'>

          </div>
          {/* Close Button */}
          <div className="relative mb-10 mt-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-2 group">
              <div className="relative w-11 h-11 rounded-full border-1 border-black/30 bg-yellow-200 backdrop-blur-md
          flex items-center justify-center shadow-lg
          transition-all duration-300 group-hover:scale-110">
                <RxCrossCircled className="w-8 h-8 text-[#079607] transition-transform duration-300 group-hover:rotate-90" />
              </div>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col justify-center h-full gap-3 pt-12">

            {[
              { to: "/", label: "Home" },
              // { to: "/allapprovedclasses", label: "All Classes" },
              { to: "/explore", label: "Explore" },
              { to: "/freeCourses", label: "Free Courses" },
              { to: "/teacherform", label: "Teach On" },
              { to: "/allTeacher", label: "Instructors" },
              { to: "/aboutUs", label: "About Us" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className=" group relative text-white text-[20px] font-mono font-medium px-4 py-2 rounded-2xl bg-black/15 hover:bg-white/25 transition-all duration-300">
                <span className="relative z-10 group-hover:tracking-wide">
                  {item.label}
                </span>
              </NavLink>
            ))}

            <NavLink
              to="/login"
              className="my-6 bg-[#ffdc2f] text-center text-[#000000] font-semibold font-mono uppercase text-zxl  rounded-2xl py-3 shadow-md hover:shadow-xl transition-all duration-300"
            >
              Log In
            </NavLink>

          </div>
        </div>
      </div>


    </div>
  );
};

export default NavigationBar;
