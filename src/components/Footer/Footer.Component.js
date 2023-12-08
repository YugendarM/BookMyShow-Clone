import React from "react";
import{RiCustomerService2Fill} from "react-icons/ri";
import{IoTicketSharp} from "react-icons/io5";
import{BsNewspaper} from "react-icons/bs";

const Footer =() => {
    return(
        <>
        <div className = "bg-bookmyshow-footerBg py-10 mt-5">
            <div className="container mx-auto  bg-bookmyshow-footerBg ">
                <div className="flex items-center justify-between">
                    <div className="flex text-white  items-center text-2xl  gap-3">
                        <div>
                            <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" className="h-10"/>
                        </div>
                        <h1 className="font-bold">List Your Show</h1>
                        <p>Got a Show, event, Activity or a great experience? Partner with us & get listed by BookMyShow</p>
                    </div>
                    <button className="text-white bg-bookmyshow-btinnpk px-2 py-2.5 font-semibold text-xl rounded-md">Contact today!</button>
                </div>
            </div>
        </div>

        <div className="py-10 bg-bookmyshow-footerBg2  conatainer mx-auto">
        <div className="flex justify-between items-center container mx-auto px-52">
            <div className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-white  ease-in transition cursor-pointer">
                <RiCustomerService2Fill className="text-7xl"/>
                <p>24/7 CUSTOMER CARE</p>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-white  ease-in transition cursor-pointer">
                <IoTicketSharp className="text-7xl"/>
                <p>RESEND BOOKING CONFIRMATION</p>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-white  ease-in transition cursor-pointer">
                <BsNewspaper className="text-7xl"/>
                <p>SUBSCRIBE TO THE NEWSLETTER</p>
            </div>

        </div>
        </div>

        <div className="bg-bookmyshow-footerBg py-5">
        <div className="container mx-auto flex flex-col gap-2">
            <h1 className="text-gray-300">MOVIES NOW SHOWING IN CHENNAI</h1>
            <p className="text-gray-400 hover:text-white ease-in transition cursor-pointer">Mark Antony | Jawan | Chandhramugi | Kushi | Jailer | The Nun II</p>
        </div>
        </div>

        </>
    );
};

export default Footer;