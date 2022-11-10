import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
    return (
        <div>
            <Header />

            {/* dynamic content goes here */}

            <div className="w-[95%] md:w-[90%] mx-auto">
                <Outlet />
                <ToastContainer />
            </div>



        </div>
    );
};

export default Layout;
