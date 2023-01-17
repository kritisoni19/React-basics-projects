import React from "react";
import CardContent from '@material-ui/core/CardContent';

function SlotMac(props){

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if(x === y && y === z){
        return(
            <>
            
                        <CardContent>
                         
                        {x} {y} {z} -  Matching
                        </CardContent>
                   
                
                 
            </>
        )
    }else{
        return(
            <>
          
                    <CardContent>
                        {x} {y} {z} - Not Matching
                    </CardContent>
            
               
            </>
        )
    }

}

export default SlotMac;