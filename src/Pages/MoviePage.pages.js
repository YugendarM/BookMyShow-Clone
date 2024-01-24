import React, { useEffect, useState } from "react";
import '../App.css';
import MovieHero from "../components/MovieHero/MovieHero.component";
import AboutMovie from "../components/AboutMovie/AboutMovie.component";
import axios from "axios";
import { useParams } from "react-router-dom";


const MoviePage = () => {

    const [movie, setMovie] = useState({});

    const {id} = useParams();

    useEffect(()=> {
        const getParticularMovie = async() => {
            const movieData = await axios.get(`/movie/${id}`);
            
            console.log(movieData.data);
            setMovie(movieData.data);
            console.log(movie);
        }

        getParticularMovie();
    },[]);

    return (
        <>
        <MovieHero {...movie}/>
        <AboutMovie {...movie}/>
        </>
    );
};
export default MoviePage;