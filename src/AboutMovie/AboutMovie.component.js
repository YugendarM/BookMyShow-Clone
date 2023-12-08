import React from "react";
import CastSlider from "../PosterSlider/CastSlider.component";
import CastNCrew from "../DataSet/Cast'n'Crew.dataset";

const AboutMovie = (props) => {
    return (
        <div className="container  w-1/3">
            <div>
                <h1>About the movie</h1>
                <p>
                    {props.discription}
                </p>
                <hr/>
            </div>

            <div className="znsdfjnj">
                <CastSlider content={CastNCrew}/>
            </div>
            

        </div>
    );
};

export default AboutMovie;