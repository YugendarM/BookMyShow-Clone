import React from 'react';
import Navbar from '../components/Navbar/navbar.component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import Footer from '../components/Footer/Footer.Component';

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar/>
            <HeroCarousel/>
            

            {props.children}
            <Footer/>
        </>
    );

};
export default DefaultLayout; 