import React from "react";
import { BiChevronRight,BiSearch,BiMenu } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md"
import { BsShare,BsChevronLeft } from "react-icons/bs";
import Navlinks from "./Navlinks.component";

const NavSm = () => {
    return (
        <>
            <div className=" text-white px-4 py-2 border-b-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between" >
                        <BsChevronLeft className="text-black"/>
                        <h3 className="text-black px-4 font-semibold">It All Starts Here!</h3>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                        {/* <div>
                                <button className="bg-bookmyshow-btnpink rounded-md text-xs p-2 font-semibold">Use App</button>
                        </div> */}
                        <div className="w-4 h-4 ">
                            <BsShare className="w-full h-full text-gray-700"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); 
};
// const NavMd = () => {
//     return (
//         <>
//         <div className=" bg-bookmyshow-navblue w-full px-4 py-3.5">
//             <div className="bg-white flex items-center px-2 py-2 rounded-sm">
//                 <div className="w-5 h-5 text-gray-500">
//                     <BiSearch className="w-full h-full"/>
//                 </div>
//                 <div>
//                     <input type="search" className="w-full focus:outline-none px-2 text-sm" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
//                 </div>
//             </div>
//         </div>        
//         </>
//     );
// };
const NavLg = () => {
    return (
        <>
            <div className=" ">
            <div className="bg-bookmyshow-navblue w-full  ">
                <div className="container w-8/12 mx-auto flex items-center justify-between">

                    <div className="flex items-center w-full ">
                        <div className="w-44 h-12 overflow-hidden">
                            <img  src="https://bookmyshow-clone-masaischool.netlify.app/bookmyshow-logo.png" alt="logo" className="w-full h-full object-cover"/>
                        </div>
                        <div className="bg-white flex items-center px-2 py-0.5 rounded-md w-full">
                            <div className="w-4 h-4 text-gray-500">
                                <BiSearch className="w-full h-full"/>
                            </div>
                            <div className="w-full">   
                                <input type="search" className="w-full focus:outline-none px-2 text-sm" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-end w-3/4 text-4xl gap-3">
                        <div>
                            <span className="text-white opacity-70  flex items-center text-base hover:opacity-100 cursor-pointer">
                                Chennai <MdArrowDropDown/>
                            </span>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <button className="bg-bookmyshow-btnpink rounded-md text-xs px-3.5 py-1 m-0 font-semibold text-white">Sign in</button>
                            </div>
                        </div>
                        <div className="text-white cursor-pointer">
                            <BiMenu className="text-2xl"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );

};

const MovieNavbar = () => {
    return (
        <>
        <nav className="">
            <div className="lg:hidden">
                <NavSm  />
            </div>

            {/* <div className="hidden lg:hidden md:flex">
                <NavMd />
            </div> */}

            <div className="hidden md:hidden lg:block">
                <NavLg />
                <Navlinks/>
            </div>
        </nav>
        </>
    )
};

export default MovieNavbar;