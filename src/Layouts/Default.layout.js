import React from 'react';
import Navbar from '../components/Navbar/navbar.component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import Footer from '../components/Footer/Footer.Component';

const DefaultLayout = (props) => {
    return (
        <>
            {/* <h1>Helo DefaultLayout page</h1> */}
            <Navbar/>
            <HeroCarousel/>
            {/* <h1>helo</h1> */}

            {props.children}
            <Footer/>
        </>
    );

};
export default DefaultLayout; 