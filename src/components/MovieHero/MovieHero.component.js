import React from "react";
import { AiFillStar } from "react-icons/ai";
import {FiChevronRight} from "react-icons/fi";
import launchRazorpay from "../Razorpay/Razorpay.component";

const MovieHero = (props) => {

    return(
        <div className="bg-transparent container mx:auto lg:px-52 lg:bg-bookmyshow-bgdarkGray ">
            <div className="md:hidden sm:bg-transparent" style={{backgroundColor:"transparent"}}>
                <img 
                    className="bg-transparent"
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/maaveeran-et00357966-1687763694.jpg"
                    alt="poster"
                />
            </div>

            <div className=" hidden md:block  lg:hidden">
            <img 
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/maaveeran-et00357966-1687763694.jpg"
                    alt="poster"
                />
            </div>

            <div className=" container mx-auto  hidden relative lg:block  w-full " style={{height:"390px"}}>
                <div className="absolute  h-full w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100% )"}}/>

                <div className=" flex absolute z-20 justify-start  w-full  h-full lg:px-12">
                    <div className=" w-full flex z-20 justify-start items-center gap-10 ">
                        <div className="rounded-md ">
                            <img
                                className="rounded-t-md lg_poster w-full h-72"
                                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maaveeran-et00357966-1687763694.jpg"
                            />
                            
                            <div className="bg-black flex justify-center rounded-b-md">
                                <p className="text-white py-1 text-xs">In cinemas</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl text-white">Maveeran</h1>
                            <div className="flex align-baseline gap-2 text-white items-end" >
                                <AiFillStar className="text-2xl text-bookmyshow-btnpink"/>
                                <h1 className="font-semibold text-xl">8.2/10</h1>
                                <p className="text-sm">19.8k votes</p>
                                <FiChevronRight/>
                            </div>
                            <div className="flex text-white bg-bookmyshow-bgGray rounded-md py-2 px-4 gap-14 items-center justify-between">
                                <div>
                                    <h2 className="font-semibold text-base">Add your rating & review</h2>
                                    <p className="text-bookmyshow-textCCC text-sm">Your ratings matter</p>
                                </div>
                                <div>
                                    <button className="bg-white text-black rounded-md px-3 py-1 text-sm font-semibold">Rate now</button>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <a className="bg-white text-sm text-black py-0.5 align-middle px-3 rounded-sm">2D</a>
                                <a className="bg-white text-sm text-black py-0.5 align-middle px-3 rounded-sm">Tamil</a>
                            </div>
                            <p className="text-white text-sm">2h 43m • Action, Thriller • UA • 14 Jul, 2023</p>
                            <button onClick={launchRazorpay} className="bg-bookmyshow-btnpink text-white py-2.5 px-8 rounded-md font-semibold text-sm w-40">Book tickets</button>
                        </div>
                    </div>
                </div>

                <img 
                    className="m-auto w-full h-full self-start lg_back_drop"
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/maaveeran-et00357966-1687763694.jpg"
                    alt="poster"
                />
            </div>
        </div>
    ); 
};

export default MovieHero;