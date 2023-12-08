import React,{useState,useEffect} from "react";
import HeroSlider from "react-slick";



import { NextArrow,PrevArrow } from "./Arrows.Component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";


const HeroCarousel = () => {

    const [ images, setImages] = useState([]);


    useEffect(()=>{
        const getNowPlayingMovies = async () => {
            const getImages =await axios.get("/movie/now_playing");
            setImages(getImages.data.results)
            console.log(getImages);
        }
        getNowPlayingMovies();
    },[]);

    const settings = {
        arrows:true,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };

    const settingsLg = {
        arrows: true,
        autoplay: true,
        dots: false,
        centerMode: true,
        infinite: true,
        centerPadding: "300px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };

    // const images= [
    //     "https://assets-in.bmscdn.com/promotions/cms/creatives/1678276688384_bbsweb.jpg",
    //     "https://assets-in.bmscdn.com/promotions/cms/creatives/1678966505133_karenpirieweb.jpg",
    //     "https://assets-in.bmscdn.com/promotions/cms/creatives/1678769262431_blropenairweb.jpg"
    // ];

    return (
        <div className="bg-bookmyshow-classicBg">
        <div className=" lg:hidden">
            <HeroSlider { ...settings } >
                {
                    images.map ((image) => (
                        <div className="w-full h-48 md:h-64">
                            <img src= {`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                             alt="images" className="w-full h-full object-fill "  />
                        </div>
                    ))
                }
            </HeroSlider>
        </div>

        <div className="hidden lg:block">
            <HeroSlider { ...settingsLg } >
                {
                    images.map ((image) => (
                        <div className="w-full h-1/3 px-1 py-2" >
                            <img  src= {`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                             alt="images" className="w-full  rounded-md" style={{height:"500px"}}/>
                        </div>
                    ))
                }
            </HeroSlider>
        </div>
        </div>
    );
};

export default HeroCarousel;