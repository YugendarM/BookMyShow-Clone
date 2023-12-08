import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
    return (
        <Link to={"/movie/123"}>
            <div className="w-full h-full px-4 flex flex-col gap-1">
                <img 
                    src = {`https://image.tmdb.org/t/p/original${props.poster_path}`}
                    className = "w-full h-full rounded-md cursor-pointer"
                    alt = {props.original_title}
                />
                <h1
                    className={`font-semibold text-xl
                    ${props.isDark ? "text-white" : "text-black" 
                    }`}
                >{props.original_title}</h1>
                <p className={` text-md  
                    ${props.isDark ? "text-white" : "text-black" 
                }`}
                >{props.release_date}</p>
            </div>
        </Link>
    );

};
export default Poster;