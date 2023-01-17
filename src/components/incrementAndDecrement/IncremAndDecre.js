import React, { useState } from "react";
import './IncreDec.css';


function IncremAndDecre(){
    const [headval,setheadval] = useState(0);
    const incrementhandle = ()=>{
        setheadval(headval+1);
        console.log( headval+1)
    }
    const decrementhandle = ()=>{
    
        if(headval === 0){
            alert('0 reached not furthur decrease');
        }
        else{
            setheadval(headval-1);
        }
    }
    const styling = {
        textAlign: 'center',
        fontSize: '44px',
        margin: 0
    }
    return(
        <>
           <section className='section-main'>
                <h2>Increment and Decrement Value</h2>
                <div>
                    <h2 style={styling}>{headval}</h2>
                    <div className="btn-center">
                        <button type="button" className="btn" onClick={incrementhandle}>Increment</button>
                        <button type="button" className="btn" onClick={decrementhandle}>Decrement</button>
                    </div>
                </div>
            </section>
            
        </>
    )

}

export default IncremAndDecre;