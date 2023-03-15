import React from "react";

import { Link } from "react-router-dom";
import './Menu.css'; 

function Menu(){
    
    return(
        <>
        {/* style={isActive => ({
         color: isActive ? "green" : "blue"
      })} */}
                    <div className="navCustom">
                        <ul id="mySidenav" className = "sidenav">
                            <li><p>Table of Content</p></li>
                            <li ><Link to="/">1. Home </Link></li>
                            <li><Link to="/slotmachines">2. Slot Machine </Link></li>
                            <li><Link to="/incrementdecrement">3. Increment Decrement </Link></li>
                            <li><Link to="/form">4. Form </Link></li>
                            <li><Link to="/todolist">5. To do list </Link></li>
                            <li><Link to="/foodcart">6. Food carts </Link></li>
                            <li><Link to="/displayitems">7. display items </Link></li>
                            <li><Link to="/apnaskill">8. Skill </Link></li>
                            <li><Link to="/todolistwithedit">9. To do list with edit </Link></li>
                            
                        </ul>
                    </div>
            
        </>
    )
}

export default Menu;