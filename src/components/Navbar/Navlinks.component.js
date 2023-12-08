import React from "react";

const Navlinks = () => {

    return(
        <div className="bg-bookmyshow-darkmodeblue ">
            <div className="container mx-auto flex justify-between items-center list-none py-2 ">
                <div className="flex gap-8 text-lg text-white">
                    <li>Movies</li>
                    <li>Stream</li>
                    <li>Events</li>
                    <li>Plays</li>
                    <li>Sports</li>
                    <li>Activities</li>
                    <li>Buzz</li>
                </div>
                <div className="flex gap-8 text-lg text-white">
                    <li>ListYourShow</li>
                    <li>Corporates</li>
                    <li>Offers</li>
                    <li>Gift Cards</li>
                </div>
            </div>
        </div>
    );

};

export default Navlinks;