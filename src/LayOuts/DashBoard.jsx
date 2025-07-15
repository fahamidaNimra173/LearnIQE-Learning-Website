import React from 'react';
import { Outlet, NavLink } from 'react-router';
import { FiMenu, FiHome, FiUser, FiSettings } from 'react-icons/fi';

const DashBoard = () => {
  return (
    <div className="drawer lg:drawer-open">

      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Top Navbar for mobile */}
        <div className="w-full navbar bg-base-200 px-4 lg:hidden">
          <div className="flex-1">
            {/* Clicking this label will toggle the checkbox automatically */}
            <label htmlFor="dashboard-drawer" className="btn btn-ghost">
              <FiMenu size={20} />
            </label>
            <h2 className="text-xl font-semibold ml-2">Admin Dashboard</h2>
          </div>
        </div>

        {/* Main content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Sidebar drawer */}
      <div className="drawer-side">
        {/* Clicking outside will auto-close on small screen */}
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 min-h-full bg-base-100 text-base-content space-y-1">
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

          <li>
            <NavLink to="/dashboard" className="flex items-center gap-2">
              <FiHome /> Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users" className="flex items-center gap-2">
              <FiUser /> All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userprofile" className="flex items-center gap-2">
              <FiSettings /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allteachers" className="flex items-center gap-2">
              <FiSettings /> Teacher Request
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
