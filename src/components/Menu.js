import React from "react";

import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
        
                    <div className="nav">
                        <ul>
                            <li><Link to="/">Home </Link></li>
                            <li><Link to="/slotmachines">Slot Machine </Link></li>
                            <li><Link to="/incrementdecrement">Increment Decrement </Link></li>
                            <li><Link to="/form">Form </Link></li>
                            <li><Link to="/todolist">To do list </Link></li>
                        </ul>
                    </div>
            
        </>
    )
}

export default Menu;