import React from 'react';
import NavigationBar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import FooteR from '../Shared/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavigationBar></NavigationBar>
            <main className='flex-1'>
             <Outlet >   </Outlet>
            </main>
           
            <FooteR></FooteR>
            
        </div>
    );
};

export default Root;