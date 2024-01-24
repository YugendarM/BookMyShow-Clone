import React from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import Footer from '../components/Footer/Footer.Component';

const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar/>

            {props.children}

            <Footer/>
        </>
    );

};
export default MovieLayout; 