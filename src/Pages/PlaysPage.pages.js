import React from "react";
import Plays from "../components/DataSet/Plays.dataset";
import PlaysPoster from "../Poster/PlaysPoster.poster";
import PlaysAccordion from "../components/PlaysAccordion/PlaysAccordion.component";
const PlaysPage = ()=> {
    return (
        <div style={{backgroundColor:"#f5f5f5"}}>
            <div className="container mx-auto py-10 flex gap-10">
                <div className="accordian w-1/2">
                    <PlaysAccordion/>
                </div>
                <div className="posters">
                    <h1 className="text-3xl font-bold my-10">Plays in Chennai</h1>
                    <div className="flex gap-3 my-10 ">
                        <p className="text-lg bg-white rounded-full text-bookmyshow-btnpink border-bookmyshow-textCCC border-2 px-2 py-1">Theatre</p>
                        <p className="text-lg bg-white rounded-full text-bookmyshow-btnpink border-bookmyshow-textCCC border-2 px-2 py-1">Storytelling</p>
                        <p className="text-lg bg-white rounded-full text-bookmyshow-btnpink border-bookmyshow-textCCC border-2 px-2 py-1">Monologue</p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                    {Plays.map((play)=> (
                        <div className="">
                            <PlaysPoster {...play}/>
                        </div>
                    
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaysPage;
