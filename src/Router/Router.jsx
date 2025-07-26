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
import TeacherForm from '../Pages/TeacherForm/TeacherForm';
import TeacherRequest from '../DashBoard/TeacherRequests/TeacherRequests';
import AddClass from '../DashBoard/TeacherDashBoard/AddClass/AddClass';
import Myclass from '../DashBoard/TeacherDashBoard/MyClass/Myclass';
import AllClasses from '../DashBoard/AllClassRequests/AllClasses';
import AllApprovedClasses from '../Pages/AllApprovedClasses/AllApprovedClasses';
import CourseDetails from '../Pages/AllApprovedClasses/CourceDetails';
import Payment from '../Pages/Payment/Payment';
import MyEnrollmentClass from '../DashBoard/StudentDashBoard/MyEnrollmentClass/MyEnrollmentClass';
import MyEnrollmentClassDetails from '../DashBoard/StudentDashBoard/EnrollmentClassDetails/MyEnrollmentClassDetails';
import ClassDetails from '../DashBoard/TeacherDashBoard/MyClass/ClassDetails';
import Error from '../Error/Error';


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
      {
        path: 'teacherform',
        Component: TeacherForm
      },
      {
        path: 'allapprovedclasses',
        Component: AllApprovedClasses
      },
      {
        path: 'classdetails/:id',
        Component: CourseDetails
      },
      {
        path: 'payment/:id',
        Component: Payment
      },


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
      },
      {
        path: 'teachersrequest',
        Component: TeacherRequest
      },
      {
        path: 'addclass',
        Component: AddClass
      },
      {
        path: 'myclass',
        Component: Myclass
      }
      ,
      {
        path: 'my-class/:id',
        Component: ClassDetails
      },
      {
        path: 'allclasses',
        Component: AllClasses
      },
      {
        path: 'my-enroll',
        Component: MyEnrollmentClass,

      },
      {
        path: 'myenroll-class/:id',
        Component: MyEnrollmentClassDetails

      }
    ]

  },
  {
    path: '*',
    Component: Error
  }
]);

export default router;