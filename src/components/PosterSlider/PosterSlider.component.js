import React from "react";

import Poster from "../../Poster/Poster.component";
import settings from "../Config/Settings.config";
import Slider from "react-slick";
const PosterSlider = (props) => {
  return (
    <>
      <div className="container mx-auto flex flex-col ">
        <h1
          className={`font-bold text-4xl px-3 ${
            props.isDark ? "text-white" : "text-black"
          }`}
        >
          {props.title}
        </h1>
        <p
          className={`px-3 text-lg font-semibold pb-2 ${props.isDark ? "text-white" : "text-black"}`}
        >
          {props.subtitle}
        </p>
        <Slider {...settings}>
          {props.contents.map((image) => (
            <Poster {...image} isDark={props.isDark} />
          ))}
        </Slider>
      </div>
    </>
  );
};



export default PosterSlider;
