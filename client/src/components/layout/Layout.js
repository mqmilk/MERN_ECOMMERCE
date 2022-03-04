import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import Notification from './notification/Notification';
import Footer from './footer/Footer';

const Layout = () => {
    return (
        <>
            <Notification 
                announcement="Super Deal!!! Free Shipping on Orders Over $50!!!"
            />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;