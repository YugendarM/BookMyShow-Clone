import React from "react";

const CastnCrewPoster  = (props) => {
    return(
    
        <>
            <div className="w-full h-full px-4 flex flex-col items-center gap-1">
            <img 
                src = {props.src}
                className = "w-5/6 h-5/6 rounded-full cursor-pointer"
                alt = {props.name}
            />
            <h1 className="font-semibold text-sm">{props.name}</h1>
            <p className=" text-xs font-medium ">{props.role}</p>
        </div>
        </>
    );
};

export default CastnCrewPoster;