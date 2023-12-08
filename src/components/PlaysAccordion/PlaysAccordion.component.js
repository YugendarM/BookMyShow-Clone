import React from 'react'
import { Disclosure } from '@headlessui/react';
import Accordion from './Accordion.component';



function PlaysAccordion() {
  return (
    <>
        <div>
            <h1 className='text-3xl font-bold my-10'>Filters</h1>
        </div>
        <Accordion title="Date" contents = {["Today","Tomorrow","This Weekend"]}/>
        <Accordion title="Language" contents = {["Tamil","English"]}/>
        <Accordion title="Categories" contents = {["Theatre","Storytelling","Monologue"]}/>
        <Accordion title="Generes" contents = {["Drama","Adaptation","Comedy","Classic","Contemporary","Historical","Musical"]}/>
        <Accordion title="More Filters" contents = {["Outdoor Events"]}/>
        <Accordion title="Price" contents = {["Free","0 - 500","501 - 2000"]}/>

        <button className='text-xl bg-transparent border-2 border-bookmyshow-btnpink text-bookmyshow-btnpink w-full py-2 rounded-md'>Browse by Venues</button>
        
    </>
    
  );
};

export default PlaysAccordion;