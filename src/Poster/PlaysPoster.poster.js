import React from "react";

const Poster = (props) => {
    return (
        <>
        <div className="w-64 h-full  flex flex-col gap-1">
            <img 
                src = {props.src}
                className = "w-full h-full rounded-md cursor-pointer"
                alt = {props.title}
            />
            <h1 className="font-semibold text-2xl">{props.title}</h1>
            <p className="text-xl text-gray-700">{props.subtitle}</p>
            <p className="text-xl text-gray-600">{props.language}</p>
            <p className="text-md text-gray-600">{props.rate}</p>
        </div>
        </>
    );

};
export default Poster;