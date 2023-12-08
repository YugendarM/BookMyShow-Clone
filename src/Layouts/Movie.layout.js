import React from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import Navbar from '../components/Navbar/navbar.component';

const MovieLayout = (props) => {
    return (
        <>
            {/* <Navbar/> */}
            <MovieNavbar/>

            {props.children}
        </>
    );

};
export default MovieLayout; 