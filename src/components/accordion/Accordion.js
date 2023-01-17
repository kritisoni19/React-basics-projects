import React, { useState } from 'react';
import {question} from './accApi';
import './AccordionCss.css';
import AccordionChild from './AccordionChild';

function Accordion(){
    const [data,setdata] = useState(question);
    return(
        <>
        
            <section className='section-main'>
                <h2>React Interview Questions</h2>
         
            {
                data.map((currElem)=>{
                    const {id} = currElem
                    return <AccordionChild key ={id}{...currElem} ></AccordionChild>
                })
            }
            </section>
        </>
    )
}
export default Accordion;