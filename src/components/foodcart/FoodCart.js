import React, { useState } from "react";
import menuItems from './foodmenu';
import './FoodCartCss.css';


function FoodCart(){
    const [items] = useState(menuItems);

    return(
        <>
            <div className="">
                <div>Breakfast</div>
                <div>Lunch</div>
                <div>Dinner</div>
            </div>
           <h1 style={{textAlign:'center',marginBottom: '60px'}}>Order Your favourite Food</h1>
            <div>
                <div className="grid_container">
                    {
                        items.map((elem,index)=>{
                            let {id,name,description,price,img} = elem;
                    
                            return (
                                    <div className="mainsec" key={index}>
                                        <img className="imgCs" src = {img} alt = {name}/>
                                        <div className="contentSection">
                                            {/* <h1>{id}</h1> */}
                                            <h2>{name}</h2>
                                            <p style={{fontSize:'13px',marginTop:'8px'}}>{description}</p>
                                            <div className="innerContent">
                                                <p className="price">{price}-{id}</p>
                                                <button type="button" className="orderBtn">Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                        
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FoodCart;