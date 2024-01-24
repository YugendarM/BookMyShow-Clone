import React from "react";

const leftLinks = ["Movies","Stream","Events","Plays","Sports","Activities","Buzz"];
const rightLinks = ["ListYourShow", "Corporates","Offers", "Gift Cards"];

const Navlinks = () => {

    return(
        <div className="bg-bookmyshow-darkmodeblue h-8">
            <div className="container w-8/12  mx-auto flex justify-between items-center list-none py-2 ">

                
                <div className="flex gap-8 text-xs text-white">
                    {
                        leftLinks.map((link) => (
                            <li className="hover:text-gray-200 hover:border-b cursor-pointer">{link}</li>
                        ))
                    }
                </div>
                <div className="flex gap-8 text-xs text-white">
                    {
                        rightLinks.map((link) => (
                            <li className="hover:text-gray-200 hover:border-b cursor-pointer" >{link}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    );

};

export default Navlinks;