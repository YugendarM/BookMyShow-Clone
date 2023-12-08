import React from "react";
import { BsChevronLeft,BsChevronRight} from "react-icons/bs"

export const PrevArrow = (props) => {
    return (
        <>
        <div 
            className={props.className}
            style = {{...props.style , backgroundColor:"rgba(00,00,00,0.5)" ,height:"40px", width:"40px", color:"white" , borderRadius:"0px 5px 5px 0px", padding:"8px", }}
            onClick = {props.onClick}>
            <BsChevronLeft className="text-2xl font-extrabold"/>
        </div>
        
        </>
    ); 
};

export const NextArrow = (props) => {
    return (
        <>
        <div 
            className={props.className}
            style = {{...props.style , backgroundColor:"rgba(00,00,00,0.5)" ,height:"40px", width:"40px", color:"white" , borderRadius:"5px 0px 0px 5px", padding:"8px", }}
            onClick = {props.onClick}>
            <BsChevronRight className="text-2xl font-extrabold"/>
        </div>
        </>
    ); 
};

