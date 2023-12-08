import React from "react";
import '../App.css';
import MovieHero from "../components/MovieHero/MovieHero.component";
import AboutMovie from "../components/AboutMovie/AboutMovie.component";
const MoviePage = () => {
    return (
        <>
        <MovieHero/>
        <AboutMovie discription="A cowardly cartoonist starts being `controlled` by a cartoon action figure. Can he take on a corrupt politician?"/>
        </>
    );
};
export default MoviePage;