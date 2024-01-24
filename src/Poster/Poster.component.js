import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className="w-full h-full px-4 flex flex-col gap-1">
                <img 
                    src = {`https://image.tmdb.org/t/p/original${props.poster_path}`}
                    className = "w-full h-full rounded-md cursor-pointer"
                    alt = {props.original_title}
                />
                <h1
                    className={`font-semibold text-lg
                    ${props.isDark ? "text-white" : "text-black" 
                    }`}
                >{props.original_title}</h1>
                <p className={` text-sm  
                    ${props.isDark ? "text-white" : "text-black" 
                }`}
                >{props.release_date}</p>
            </div>
        </Link>
    );

};
export default Poster;