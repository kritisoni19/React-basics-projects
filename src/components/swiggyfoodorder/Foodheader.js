import React, { useState } from "react";
import './foodStyle.css';
import {HEAD_URL} from '../../utils/constants';
function Foodheader(){
   
    const [btnName,setbtnName] = useState('Login');
    const loginHandle = ()=>{
        btnName === "Login" ?  setbtnName('Logout'):
        setbtnName('Login')
    }
    return(
        <>
            <div className="head_container">
                <img src={HEAD_URL} alt='logo' style={{width: '120px'}}/>
           
            <div className='nav_links'>
                <ul>
                    <li>Home</li>
                    <li>About us</li> 
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="btn btn-secondary" onClick={loginHandle}>{btnName}</button>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Foodheader;