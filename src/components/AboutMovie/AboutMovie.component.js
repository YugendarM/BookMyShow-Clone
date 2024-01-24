import React from "react";
import CastSlider from "../PosterSlider/CastSlider.component";
import {Cast,Crew} from "../DataSet/Cast'n'Crew.dataset";
import settings from "../Config/Settings.config";

const AboutMovie = (props) => {
    return (
        <>
            <div className=" mx-auto container lg:px-64">
                <div className="container mx-auto ">
                    <div className="flex flex-col gap-4 my-5">
                        <h1 className="font-bold text-xl">About Movie</h1>
                        <p className="text-sm text-gray-800">A cowardly cartoonist starts being `controlled` by a cartoon action figure. Can he take on a corrupt politician?</p>
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
                
            </div>
        </>
    );
};

export default AboutMovie;