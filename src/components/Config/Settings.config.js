import React from "react";
import {
  PosterNextArrow,
  PosterPrevArrow,
} from "../../Poster/PosterArrrow.components";
const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  nextArrow: <PosterNextArrow />,
  prevArrow: <PosterPrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ],
};

export default settings;
