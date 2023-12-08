import React from "react";
import Slider from "react-slick";
import PosterSlider from "../PosterSlider/PosterSlider.component";
import PremierSliderContents from "../DataSet/Premiers.dataset";
import settings from "../Config/Settings.config";

import Poster from "../../Poster/Poster.component";
const PremierSlider = () => {
    return (
        <>
        {/* <div className="container flex flex-col  ">
            <h1 className="font-bold text-2xl px-3 text-white">Premieres</h1>
            <p className=" px-3 pb-2 text-white">Brand new releases every Friday</p>
            <Slider {...settings}>
                {PremierSliderContents.map ((image) => (
                    <Poster {...image} isDark/>
                ))}
            </Slider>
        </div> */}

        <div>
            
        </div>
        </>
    );
};
export default PremierSlider;