import React, { useState } from "react";
import './ChangeColorStyle.css';

function ChangeColor(){
    const [clr,setclr] = useState('rgb(234,222,123)');
    const getRandomColor = ()=>{
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }
    const changeClrEvent = ()=>{
       
        const randomrClr = getRandomColor();
        setclr(randomrClr);
        console.log(randomrClr);
    }
    return(
        <>
        <div>
            <h2 className="mb-3" style={{textAlign:'center'}}>COLORIZE</h2>
            <div className="boxSize mb-3" style={{backgroundColor:clr}}>
                <p className="rgbTxt">{clr}</p>
            </div>
            <div className="chgclrbtn">
                <button className="btn btn-primary" onClick={changeClrEvent}>Change Color</button>
                
            </div>
        </div>
        </>
    )
}

export default ChangeColor;