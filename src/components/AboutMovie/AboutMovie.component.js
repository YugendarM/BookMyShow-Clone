import React from "react";
import CastSlider from "../PosterSlider/CastSlider.component";
import {Cast,Crew} from "../DataSet/Cast'n'Crew.dataset";
import settings from "../Config/Settings.config";
import launchRazorpay from "../Razorpay/Razorpay.component";

const AboutMovie = (props) => {
    return (
        <>
            <div className=" mx-auto container lg:px-64 md:px-4">
                <div className="container mx-auto ">
                    <div className="flex flex-col gap-4 my-5">
                        <h1 className="font-bold text-xl">About Movie</h1>
                        <p className="text-sm text-gray-800">{props.overview}</p>
                        <hr/>
                    </div>
                    
                    <div className="flex flex-col gap-5 my-5">
                        <h1 className="font-bold text-xl">Cast</h1>
                        <CastSlider content={Cast}/>
                        <hr/>
                    </div>

                    <div className="flex flex-col gap-5 my-5">
                        <h1 className="font-bold text-xl">Crew</h1>
                        <CastSlider content={Crew}/>
                    </div>
                </div>

                <div className="lg:hidden md:block">
                    <button onClick={launchRazorpay} className="bg-bookmyshow-btnpink text-white py-2.5 px-8 rounded-md font-semibold text-sm w-full my-2">Book tickets</button>

                </div>
                
            </div>
        </>
    );
};

export default AboutMovie;