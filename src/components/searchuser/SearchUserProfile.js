import React, { useState } from "react";
import DisplayUser from './DisplayUser';

function SearchUserProfile(){

    const [username, setusername] = useState('');
  
    const inputEventhandle=(event)=>{
        console.log(event.target.value);
        setusername(event.target.value);
        
    }
    
    return(
        <>
            <div>
                <h2 style={{textAlign:'center'}} className="mb-3">Search User profile</h2>
                <div style={{width:'450px',margin:'0 auto'}}>
                    <form>
                        <input type="text" value={username} placeholder="Enter user name" onChange={inputEventhandle} className="form-control"/>
                      
                    </form>
                    <div>
                        {username ?  <DisplayUser username= {username }></DisplayUser>:
                         <p>Please Initiate Search...</p>
                         }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchUserProfile;