import React from "react";
import '../App.css';
import MovieHero from "../components/MovieHero/MovieHero.component";
import AboutMovie from "../components/AboutMovie/AboutMovie.component";
const MoviePage = () => {
    return (
        <>
        <MovieHero/>
        <AboutMovie />
        </>
    );
};
export default MoviePage;