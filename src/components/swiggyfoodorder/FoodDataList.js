import React from "react";
import {CARD_URL} from '../../utils/constants';
function FoodDataList({foodlist}){
  
  const {name,cloudinaryImageId,cuisines,address,costForTwoString,avgRating} = foodlist.data;
  
  return (
    <>
       <div className="col-md-3">
       
                        <div className="card mb-3 card_cus">
                            <img src={CARD_URL+ cloudinaryImageId} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"> {name}</h5>
                                <p className="card-text">{cuisines.join(' , ')}</p>
                                <p>{address}</p>
                                <p style={{color: 'blue'}}>{costForTwoString}</p>
                                <h3>Ratings: {avgRating}</h3>
                                
                            </div>
                        </div>
                    </div>
    </>
  )
}
export default FoodDataList;
  