import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import {
  FaUser, FaHome, FaChalkboardTeacher,
  FaClipboardList, FaUsers, FaBook,
  FaClipboardCheck, FaBars, FaTimes
} from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import AxiosSecure from '../Axios/AxiosSecure';
import DashNavBar from '../DashBoard/DasboardNavbar/DashNavBar';
import UserRoleChart from '../DashBoard/AllUsers/Components/UserRoleChart';


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [role, setRole] = useState(null);
  const axiosSecure = AxiosSecure()
  const [sidebarOpen, setSidebarOpen] = useState(false);

useEffect(() => {
    if (user?.email) {
      // Fetch current user info directly from a "me" endpoint to avoid pagination issues
      axiosSecure.get(`/users/me?email=${user.email}`)
        .then(res => {
          setRole(res.data?.role || null);
        })
        .catch(err => {
          console.error(err);
          setRole(null);
        });
    }
  }, [user, axiosSecure]);

  const isDashboardRoot = location.pathname === '/dashboard';

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Link styles with vertical layout
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md text-lg font-medium transition-colors
    ${isActive
      ? 'bg-white text-[#0A5EB0] shadow-lg font-semibold'
      : 'text-[#0A5EB0] hover:bg-white hover:text-[#073b78]'
    }`;

  const commonLinks = (
    <>
      <NavLink to="/dashboard" className={linkClasses}>
        <FaHome /> Dashboard Home
      </NavLink>

      <NavLink to="/dashboard/userprofile" className={linkClasses}>
        <FaUser /> Profile
      </NavLink>
    </>
  );

  const adminLinks = (
    <>
      <NavLink to="/dashboard/allclasses" className={linkClasses}>
        <FaClipboardList /> All Classes
      </NavLink>
      <NavLink to="/dashboard/users" className={linkClasses}>
        <FaUsers /> All Users
      </NavLink>
      <NavLink to="/dashboard/teachersrequest" className={linkClasses}>
        <FaChalkboardTeacher /> Teacher Requests
      </NavLink>
    </>
  );

  const teacherLinks = (
    <>
      <NavLink to="/dashboard/addclass" className={linkClasses}>
        <FaBook /> Add Class
      </NavLink>
      <NavLink to="/dashboard/myclass" className={linkClasses}>
        <FaClipboardCheck /> My Class
      </NavLink>
    </>
  );

  const studentLinks = (
    <>
      <NavLink to="/dashboard/my-enroll" className={linkClasses}>
        <FaBook /> My Enroll Classes
      </NavLink>
    </>
  );

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 relative">
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-screen w-64
          bg-gradient-to-b from-[#EBFFD8] via-[#FFCFEF] to-[#0A5EB0]
          shadow-lg
          transform transition-transform duration-300
          md:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center p-5">
          <h2 className="text-2xl font-bold text-[#0A5EB0] dark:text-white select-none">Dashboard</h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-[#0A5EB0] dark:text-white text-2xl"
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-2">
          {commonLinks}
          {role === 'admin' && adminLinks}
          {role === 'teacher' && teacherLinks}
          {role === 'student' && studentLinks}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 ml-0 md:ml-64 transition-all duration-300 min-h-screen flex flex-col">
        {/* Mobile menu toggle */}
        <header className="md:hidden flex items-center p-4 bg-white dark:bg-gray-900 shadow">
          <button
            onClick={toggleSidebar}
            className="text-[#0A5EB0] dark:text-white text-3xl"
            aria-label="Open Sidebar"
          >
            <FaBars />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-[#0A5EB0] dark:text-white">Dashboard</h1>
        </header>

        <main className=" flex-1 bg-white dark:bg-gray-900">
          <DashNavBar></DashNavBar>
          <Outlet />
          {isDashboardRoot && (
            <div className="text-center mt-20">
              <h1 className="text-3xl font-bold text-[#0A5EB0] dark:text-white">
                Welcome {user?.name || 'to your Dashboard'} 
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Use the sidebar to navigate through your role-based tools.
              </p>
              {/* <DotLottieReact
                src="https://lottie.host/e2c3698d-4895-49a7-9f5a-f3ba9ea0f405/iQ1apuityN.lottie"
                loop
                autoplay
              /> */}
              <UserRoleChart></UserRoleChart>

            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
// make a navbar under dashboard on that navbar user image icon and home route will be and a button which is TER(teacher evalution report) but this button will on;y show when the user role is student and the path is :'/dashboard/myenroll-class/:id' . if i click on that button then a modal with a react hook form inside it will open where will be user name , then Description
// ratings use(react raring components)
// Send button after send button click the datas: form data, user email, user name, teacher email, teacher name will save on a collection name feedBack . 