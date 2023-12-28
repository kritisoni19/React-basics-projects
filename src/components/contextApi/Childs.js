import React from 'react';
import { useContext } from 'react';

import {MyContext} from './MyContext';

// const { text, setText } = useContext(MyContext);



// function Childs(details){
//     return(
//         <>
//             <h1>This is Child Components</h1>
//             { details.name }
//         </>
//     )
// }

function Childs(){
    const details =  useContext(MyContext)
    console.log(details)

    return(
        <>
            <h1>This is Child Components</h1>
            <p>{details.name}</p>

        </>
    )
}
export default Childs;