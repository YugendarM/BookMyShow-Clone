import React from "react";
import Slider from "react-slick";

import { PosterNextArrow, PosterPrevArrow } from "../../Poster/PosterArrrow.components";
const EntertainmentCard = (props) => {
    return (
        <>
        <div className="px-4 py-2">
            <img
                className="rounded-md"
                src={props.src}            
                alt="Entertainment image"
            />
        </div>
        </>
    );
};


const EntertainmentCardSlider = () => {

    const entertainmentImages = [
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/ipl-collection-202302270454.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/interactive-games-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/dance-classes-collection-202211140440.png"

    ];

    const settings = 
    {
        autoPlay: true,
        InitialSlide: 0,
        slidesToScroll: 5,
        slidesToShow: 5,
        arrows: true,
        infinite: false,
        nextArrow:<PosterNextArrow/>,
        prevArrow:<PosterPrevArrow/>
    };

    return (
        <>
        <Slider {...settings}>
            {entertainmentImages.map((image) => (
                <EntertainmentCard src= {image}/>
            ))}
        </Slider>
        </>
    ); 
}


export default EntertainmentCardSlider;