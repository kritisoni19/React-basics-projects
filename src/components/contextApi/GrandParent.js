import React from 'react';
// import Parent from './Parent';
import {MyContext} from './MyContext';

import Childs from './Childs';
import Childs2 from './Childs2';
function GrandParent(){
    const details = {
        name:'kriti',
        age:30
    }
    return (
        <>
        <MyContext.Provider value={details}>
            <h1>This is Grand parent components</h1>
            {/* <Parent details = {details}></Parent>   */}
            <Childs></Childs>
            <Childs2></Childs2>
        </MyContext.Provider>
        
        </>
    )
}

export default GrandParent