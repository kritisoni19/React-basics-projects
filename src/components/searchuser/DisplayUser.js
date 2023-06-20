import React, { useEffect, useState } from "react";

function DisplayUser({username}){

    const [user,setuser] = useState('');
    const [error,setError] = useState('');
    const [loading,setloading] = useState(false);

    useEffect(()=>{
     
        // when fetch call it becomes promise
        const fetchdata = async ()=>{
            setloading(true);
            try{
               const response = await fetch(`https://api.github.com/users/${username}`);
               const responseData = await response.json();
               setuser(responseData);
               setloading(false);
            }catch(error){
                setError(error)
                setloading(false);
            }

        }
        fetchdata();
    },[username])
   
    return(
        <>
        <div>
            <h3 className="mt-3 text-center">
                {loading && <p>loading...</p>}
                {error && <p>{error}</p>}
                {user && 
                    <ul>
                        <li>{user.name ? user.name : "NA"}</li>
                        <li>{user.login ? user.login :"NA"}</li>
                        <li>{user.company ? user.company:"NA"}</li>
                        <li><img src={user.avatar_url} height="200" alt="{user.avatar_url}"/></li>
                    </ul>
                }
            </h3>
        </div>
        </>
    )
}

export default DisplayUser;