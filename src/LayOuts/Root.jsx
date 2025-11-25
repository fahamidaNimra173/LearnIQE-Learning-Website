import React, { useState } from 'react';
import NavigationBar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import FooteR from '../Shared/Footer';

const Root = () => {
     const[activeSection,setActiveSection]=useState("")
    return (
        <div className='flex flex-col min-h-screen'>
            <NavigationBar activeSection={activeSection}></NavigationBar>
            <main className='flex-1'>
             <Outlet context={{ setActiveSection }} >   </Outlet>
            </main>
           
            <FooteR></FooteR>
            
        </div>
    );
};

export default Root;