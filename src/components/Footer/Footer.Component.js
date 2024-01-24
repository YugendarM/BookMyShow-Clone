import React from "react";
import{RiCustomerService2Fill} from "react-icons/ri";
import{IoTicketSharp} from "react-icons/io5";
import{BsNewspaper} from "react-icons/bs";

const Footer =() => {
    return(
        <div className=" bg-bookmyshow-footerBg py-5">
        <div className = "  md:px-4">
            <div className=" py-4  mx-auto container lg:lg:px-64  bg-bookmyshow-footerBg ">
                <div className="flex items-center justify-between">
                    <div className="flex text-white  items-center text-2xl  gap-3">
                        <div>
                            <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" className="h-8"/>
                        </div>
                        <h1 className="font-semibold text-sm">List Your Show</h1>
                        <p className="text-sm">Got a Show, event, Activity or a great experience? Partner with us & get listed by BookMyShow</p>
                    </div>
                    <button className="text-white bg-bookmyshow-btnpink px-3 py-1.5 rounded font-semibold text-sm ">Contact today!</button>
                </div>
            </div>
        </div>

        <div className="py-10 bg-bookmyshow-footerBg2 lg:px-64 container  mx-auto">
        <div className="flex justify-between items-center container mx-auto px-20">
            <div className="w-64   flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-white  ease-in transition cursor-pointer">
                <RiCustomerService2Fill className="text-5xl"/>
                <p className="text-xs">24/7 CUSTOMER CARE</p>
            </div>

            <div className="w-64  flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-white  ease-in transition cursor-pointer">
                <IoTicketSharp className="text-5xl"/>
                <p className="text-xs">RESEND BOOKING CONFIRMATION</p>
            </div>

            <div className=" w-64 flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-white  ease-in transition cursor-pointer">
                <BsNewspaper className="text-5xl"/>
                <p className="text-xs">SUBSCRIBE TO THE NEWSLETTER</p>
            </div>

        </div>
        </div>

        <div className="bg-bookmyshow-footerBg mx-auto  lg:px-64 container md:px-4">
            <div className="container mx-auto flex flex-col gap-2 my-4">
                <h1 className="text-gray-300 text-xs">MOVIES NOW SHOWING IN CHENNAI</h1>
                <p className="text-gray-400 text-xs hover:text-white ease-in transition cursor-pointer">Mark Antony | Jawan | Chandhramugi | Kushi | Jailer | The Nun II</p>
            </div>
            <div className="container mx-auto flex flex-col gap-2 my-4">
                <h1 className="text-gray-300 text-xs">UPCOMING MOVIES IN CHENNAI</h1>
                <p className="text-gray-400 text-xs hover:text-white ease-in transition cursor-pointer">Mark Antony | Jawan | Chandhramugi | Kushi | Jailer | The Nun II</p>
            </div>
            <div className="container mx-auto flex flex-col gap-2 my-4">
                <h1 className="text-gray-300 text-xs">MOVEIS BY GENRE</h1>
                <p className="text-gray-400 text-xs hover:text-white ease-in transition cursor-pointer">Mark Antony | Jawan | Chandhramugi | Kushi | Jailer | The Nun II</p>
            </div>
            <div className="container mx-auto flex flex-col gap-2 my-4">
                <h1 className="text-gray-300 text-xs">MOVIES BY LANGUAGE</h1>
                <p className="text-gray-400 text-xs hover:text-white ease-in transition cursor-pointer">Mark Antony | Jawan | Chandhramugi | Kushi | Jailer | The Nun II</p>
            </div>
        </div>

        <div className="relative my-16">
            <hr className="border-gray-500 h-0.5  left-0 top-0 w-full"/>
            <div className="bg-bookmyshow-footerBg relative bottom-7 w-32 flex justify-center items-center" style={{inset:"46%", bottom:"30px"}}>
            <img src="https://bookmyshow-clone-masaischool.netlify.app/bookmyshow-logo.png" className="h-16 "/>
            </div>
        </div>


        </div>
    );
};

export default Footer;