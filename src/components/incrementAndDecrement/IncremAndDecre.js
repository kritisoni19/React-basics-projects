import React, { useState } from "react";
import './IncreDec.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
            <Card>
                <CardContent>
                <h2 style={{textAlign:'center'}}>Increment and Decrement Value</h2>
                <div>
                    <h2 style={styling}>{headval}</h2>
                    <div className="btn-center">
                        <button type="button" className="btn" onClick={incrementhandle}>Increment</button>
                        <button type="button" className="btn" onClick={decrementhandle}>Decrement</button>
                    </div>
                </div>
                </CardContent>
            </Card>
           
           
            
        </>
    )

}

export default IncremAndDecre;