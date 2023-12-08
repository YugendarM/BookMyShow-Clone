import React from "react";

import { Disclosure } from "@headlessui/react";
import {BsChevronUp,BsChevronDown} from "react-icons/bs";


const Accordion = (props) => {
    return(
        <>
            <div className='bg-white px-3 py-4 rounded-md my-3'>
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button className="py-2">
                                <div>
                                    <div className='flex items-center gap-3 text-xl'>
                                        {open ? <BsChevronUp/>: <BsChevronDown/> }
                                        <p 
                                        className={`${open ? "text-bookmyshow-btnpink": "text-bookmyshow-bgGray"}`}
                                        >{props.title}</p>
                                    </div>
                                    
                                </div>
                                
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500">
                                <div className='flex flex-wrap text-bookmyshow-btnpink gap-3 my-5'>
                                    {props.contents.map((content)=> (
                                        <p className='text-lg border-2 border-gray-300 px-2 py-1'>{content}</p>
                                    ))}
                                    
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                    
                </Disclosure>
            </div>
        </>
    );
};

export default Accordion;