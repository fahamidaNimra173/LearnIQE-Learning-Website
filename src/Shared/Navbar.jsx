import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { HiMenu } from 'react-icons/hi';
import '../App.css';

const NavigationBar = () => {
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
    return 'text-[#0A5EB0]';
  };

  return (
    <div
      className={`navbar fixed top-0 z-50 w-full md:px-25 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-[#EBFFD8] dark:bg-[#2a4114] shadow-md' : 'bg-transparent'
        }`}
    >
      {/* Left - Brand */}
      <div className="navbar-start">
        <div className="flex items-center pt-1.5">
          <span className={`text-2xl sm:text-3xl font-extrabold text-[#0A5EB0] dark:text-[#51a3f5] ${getTextColorClass()} righteous`}>
            Learn
            <span className="text-[#FFCFEF] text-shadow-xs text-shadow-gray-950">IQ</span>
          </span>
          <img
            src="https://i.ibb.co/8ndphk5P/Screenshot-2025-07-28-152838.png"
            className="h-12 sm:h-15 sm:-ml-9 -ml-7 -mt-5"
            alt="Logo"
          />
        </div>
      </div>

      {/* Center - Links */}
      <div className="navbar-center hidden lg:flex gap-6">
        <NavLink to="/" className={`${getTextColorClass()} font-bold text-[18px] hover:text-[#0A97B0]`}>
          Home
        </NavLink>
        <NavLink to="/allapprovedclasses" className={`${getTextColorClass()} font-bold text-[18px] hover:text-[#0A97B0]`}>
          All Classes
        </NavLink>
        <NavLink to="/teacherform" className={`${getTextColorClass()} font-bold text-[18px] hover:text-[#0A97B0]`}>
          Teach On
        </NavLink>
        <NavLink to="/allTeacher" className={`${getTextColorClass()} font-bold text-[18px] hover:text-[#0A97B0]`}>
          Instructors
        </NavLink>
        <NavLink to="/aboutUs" className={`${getTextColorClass()} font-bold text-[18px] hover:text-[#0A97B0]`}>About Us</NavLink>
      </div>

      {/* Right - Avatar or Login */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-15 rounded-full">
                  <img src={user.photoURL} alt="User" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#FFCFEF] text-[#2A3335] rounded-box w-52"
              >
                <li><span className="text-sm font-bold">{user.displayName}</span></li>
                <li><span className="text-xs">{user.email}</span></li>
                <div className="divider my-1" />
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>

                <li><button onClick={handleLogout}>Sign out</button></li>
              </ul>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <HiMenu className={`${getTextColorClass()} text-3xl dark:text-[#51a3f5]`} />
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
                <HiMenu className={`${getTextColorClass()} text-3xl`} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#0A5EB0] dark:text-[#51a3f5] rounded shadow-lg p-4 w-48 lg:hidden">
          <NavLink to="/" className="block text-white py-1 hover:text-[#FFCFEF]">Home</NavLink>
          <NavLink to="/allapprovedclasses" className="block text-white py-1 hover:text-[#FFCFEF]">All Classes</NavLink>
          <NavLink to="/teacherform" className="block text-white py-1 hover:text-[#FFCFEF]">Teach On</NavLink>
          <NavLink to="/allTeacher" className="block text-white py-1 hover:text-[#FFCFEF]">Instructors</NavLink>
          <NavLink to="/aboutUs" className="block text-white py-1 hover:text-[#FFCFEF]">About Us</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
