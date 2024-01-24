import React from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import Navbar from '../components/Navbar/navbar.component';
import Footer from '../components/Footer/Footer.Component';

const MovieLayout = (props) => {
    return (
        <>
            {/* <Navbar/> */}
            <MovieNavbar/>

            {props.children}

            <Footer/>
        </>
    );

};
export default MovieLayout; 