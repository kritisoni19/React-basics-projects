import React, { useState } from "react";


function Form(){

    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    //creating empty array for storing the data
    const [details,setDetails] =useState([]);
    
    //code for formSubmitHandle 
    let formSubmitHandle = (e) =>{
        e.preventDefault();
        
        console.log(name);
        const details = {
            name:name,
            email:email,
            id:Math.floor(Math.random()*10000)
        }
        setDetails(details);
        console.log(details);
    }

    return(
        <>
            <form onSubmit={formSubmitHandle}>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <h3>{details.name}</h3>
                <label>
                    Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </label>
                <label>
                    email: <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;