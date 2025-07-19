import React, { useState, useEffect, use} from 'react';
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, LogOut } = use(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   console.log(user)
  const handleLogout = () => {
    LogOut()
      .then(() => console.log("Logged out"))
      .catch(err => console.log(err));
  };

  return (
    <Navbar
      className={`fixed w-full mb-3.5 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md" : "!bg-transparent"
      }`}
    >
      <NavbarBrand href="/">
        <img
          src="https://i.ibb.co/Y7dXcphV/skill-Morpg-logo.png"
          className="shadow-2xl shadow-white h-6 sm:h-9"
          alt="SkillMorph Logo"
        />
        <span className="self-center pt-4 ml-0 whitespace-nowrap text-xl font-semibold text-yellow-300 dark:text-yellow-300 abril">
          <span className="metal font-extrabold text-3xl text-purple-700">S</span>
          kill <span className="metal font-extrabold text-2xl text-blue-400">M</span>
          orph
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center">
        {user ? (
          <Dropdown
            className="bg-purple-200 font-bold"
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User Avatar"
                img={user.photoURL}
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">{user.displayName}</span>
              <span className="block truncate text-sm font-medium">{user.email}</span>
            </DropdownHeader>

            <DropdownItem>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </DropdownItem>

            <DropdownItem>
              <NavLink to="/userprofile">Your Profile</NavLink>
            </DropdownItem>

            <DropdownDivider />
            <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
          </Dropdown>
        ) : (
          <NavLink
            to="/login"
            className="text-white mt-4 text-[15px] font-semibold px-4 py-2 hover:underline"
          >
            Log In
          </NavLink>
        )}
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavLink to="/" className="dark:text-white text-white mt-4 text-[15px]">
          Home
        </NavLink>
        <NavLink to="/allapprovedclasses" className="dark:text-white text-white mt-4 text-[15px]">
          All Classes
        </NavLink>
        <NavLink to="/teacherform" className="dark:text-white text-white mt-4 text-[15px]">
          Teach On
        </NavLink>
     
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavigationBar;
