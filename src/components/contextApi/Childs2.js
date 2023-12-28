
import React from 'react';
import { useContext,useRef } from 'react';

import {MyContext} from './MyContext';

function Childs2(){
    const inputVal = useRef('this is')
    const details =  useContext(MyContext);
    const inputHandle = () =>{
        inputVal.current = 'the text has been changed'
        console.log(inputVal)
    }
    return(
        <>
            <h2>Child 2 components</h2>
            <p>{details.name} and {details.age}</p>
            <input type="text" ref={inputHandle}/>
        </>
    )
}
export default Childs2;