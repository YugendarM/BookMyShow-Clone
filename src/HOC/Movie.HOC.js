import React from "react";
import { Route ,Routes } from "react-router-dom";
import Temp from "../components/Temp";
//Layouts
import MovieLayout from "../Layouts/Movie.layout";

const MovieHOC = ({ component : Component , ...rest}) => { 
    return (
        <>
        <Routes>
        <Route 
            {...rest}
            Component = { (props) => (
                <MovieLayout>
                    <Component {...props} />
                </MovieLayout>
            )
        }
        
        />
        </Routes>
        </>
    );
};

export default MovieHOC;