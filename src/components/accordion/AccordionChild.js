import React, { useState } from "react";
import './AccordionCss.css';
function AccordionChild({questions,answer}){
    const [showdata,setshowdata] = useState(false);
    const setshowdataHandle = () =>{
        setshowdata(!showdata);
    }
    return(
        <>
            {/* <h1>Kriit</h1>
            <p>{questions}</p> */}
            <div className="ques-main" onClick={setshowdataHandle}>
                <span>{showdata ? <i className="fa fa-minus-circle" aria-hidden="true"></i>:<i className="fa fa-plus-circle" aria-hidden="true"></i>}
                </span><span>{questions}</span>
            </div>
            {showdata &&
                <div className="ans-main">{answer}</div>
            }
        </>
    )
}
export default AccordionChild;