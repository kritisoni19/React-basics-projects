import React, { useReducer} from "react";


function TitleIncrement(){

   
    const reducer = (state,action)=>{
        if(action.type === "INCR"){
            state = state+1;
        }
        if(state>0 && action.type === "DECR"){
            state = state-1;
        }
        return state

    }
    const  initialData = 1;
    const[state,dispatch] = useReducer(reducer,initialData);
  

 
    
    return(
        <>  
            <h2>{state}</h2>
            <button className="btn btn-secondary mt-5" onClick={()=>{dispatch({type:'INCR'})}}>INCREMENT</button>
            <button className="btn btn-secondary mt-5" onClick={()=>{dispatch({type:'DECR'})}}>DECREMENT</button>
        </>
    )

}

export default TitleIncrement;