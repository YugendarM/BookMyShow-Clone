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
        <div className="w-full flex flex-col justify-center items-center">

        <div className=" ">
                <PosterSlider 
                title = "Recommended Movies" 
                subtitle = "" 
                contents = {popularMovies}
                isDark = {false}
                />
        </div>

        <div className="container mx-auto w-full py-4 my-16">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" className="w-full"/>
        </div>

        <div className="container mx-auto  w-full">
            <h1 className="font-bold text-2xl px-4 text-gray-700">The Best Of Live Events</h1>
            <EntertainmentCardSlider/>
            
        </div>
        <div className="  my-16 bg-bookmyshow-darkmodeblue w-full py-4  flex flex-col gap-4 " style={{width:"100vw"}}>
            <div className=" container mx-auto ">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" className="cursor-pointer"/>
            </div>
            {/* <PremierSlider/> */}


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
    );
};

export default HomePage;
