import React from "react";
import settings from "../Config/Settings.config";
import CastnCrewPoster from "../../Poster/CastnCrewPoster.Poster";
import Slider from "react-slick";

const CastSlider = (props) => {
    return (
        <div className="w-2/3 ">
            
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div className="flex flex-col gap-3">
                <Slider {...settings } >
                    {props.content.map((image) => (
                        <CastnCrewPoster {...image}/>
                    ))}

                </Slider>
                </div>
        </div>
    );
};

export default CastSlider;