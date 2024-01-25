import React,{useState,useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
// import PremierSlider from "../components/Premier/Premier.component";

// PosterSlider template
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// DataSet 
import PremierSliderContents from "../components/DataSet/Premiers.dataset";
import RecommendationSliderContents from "../components/DataSet/Recommendation.dataset";
import axios from "axios";


const HomePage = () => {


    const [popularMovies,setPopularMovies] = useState([]);
    const [topRated,setTopRated] = useState([]);
    const [upComing,setUpComing] = useState([]);

    useEffect(() => {
        const getPopularMovies = async() =>{
            const movieData = await axios.get("/movie/popular");
            setPopularMovies(movieData.data.results);
            console.log(movieData.data.results);
        }
        getPopularMovies();
    },[])

    useEffect(() => {
        const getTopRated = async() =>{
            const topRatedData = await axios.get("/movie/top_rated");
            setTopRated(topRatedData.data.results);
            console.log(topRatedData.data.results);
        }
        getTopRated();
    },[])

    useEffect(() => {
        const getUpComing = async() =>{
            const upComingData = await axios.get("/movie/upcoming");
            setUpComing(upComingData.data.results);
            console.log(upComingData.data.results);
        }
        getUpComing();
    },[])

    return(
        <div className="flex justify-center w-full">
            <div className="w-full flex flex-col  justify-center items-center container">

<div className=" ">
        <PosterSlider 
        title = "Recommended Movies" 
        subtitle = "" 
        contents = {popularMovies}
        isDark = {false}
        />
</div>

<div className="container mx-auto lg:px-64 w-full ">
    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" className="w-full lg:px-2"/>
</div>

<div className="container lg:px-64 mx-auto my-10  w-full">
    <h1 className="font-bold text-2xl px-4 text-gray-800">The Best Of Live Events</h1>
    <EntertainmentCardSlider/>
    
</div>
<div className="  my-16 bg-bookmyshow-darkmodeblue w-full py-4  flex flex-col gap-4 " >
    <div className=" container lg:px-64 mx-auto ">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" className="cursor-pointer"/>
    </div>


    <div className="">
        <PosterSlider 
        title = "Premiers" 
        subtitle = "Brand new releases every Friday" 
        contents = {popularMovies}
        isDark = {true}
        />
    </div>

    
</div>

<div className="">
        <PosterSlider 
        title = "Top Rated" 
        subtitle = "Currently Top Rated Movies" 
        contents = {topRated}
        isDark = {false}
        />
    </div>

    <div className="">
        <PosterSlider 
        title = "Upcoming" 
        subtitle = "Top Upcoming movies" 
        contents = {upComing}
        isDark = {false}
        />
    </div>

    

</div>

        </div>
    );
};

export default HomePage;
