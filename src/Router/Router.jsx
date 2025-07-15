import React from 'react';
import {
  createBrowserRouter,

} from "react-router";
import Root from '../LayOuts/Root';
import Home from '../Pages/Home/Home';
import Login from '../LayOuts/AuthLayout/Login';
import Register from '../LayOuts/AuthLayout/Register';
import DashBoard from '../LayOuts/DashBoard';
import AllUsers from '../DashBoard/AllUsers/AllUsers';
import UserProfile from '../Pages/Home/UserProfile/UserProfile';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
      ,

    ]
  },
  {
    path: '/dashboard',
    Component: DashBoard,
    children: [
      {
        path: 'users',
        Component: AllUsers
      },
      {
        path: 'userprofile',
        Component: UserProfile
      }
    ]

  }
]);

export default router;