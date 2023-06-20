import React, { useState,useEffect} from "react";
import FoodDataList from './FoodDataList';
import Foodheader from './Foodheader';
// import foodlistarrrest from './foodlistallres';

function FoodOrderpage(){

  const [foodlistarr, setFoodlistarr] = useState([]);
  const [filterResData,setFilterRes] = useState([]);
  // console.log(foodlistarr);
  const [searchRes,setSearchRes] = useState('');



  const FilterHandle =()=>{
      let filterRatingData =  foodlistarr.filter((res)=>
        res.data.avgRating>4
      )
      setFoodlistarr(filterRatingData);
      // console.log(filterRatingData)
    }
    useEffect(()=>{
      fetchData()
    },[])
    const fetchData = async ()=>{
      //live data of swiggy
      const fetchDataShow = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6609173&lng=77.3410569&page_type=DESKTOP_WEB_LISTING');
      const jsonData = await fetchDataShow.json();
      // console.log(jsonData);
      //optional chaning
      setFoodlistarr(jsonData?.data?.cards[2]?.data?.data?.cards);
      setFilterRes(jsonData?.data?.cards[2]?.data?.data?.cards);
    }
    //conditional rendering
    // if(foodlistarr.length ===0){
    //   return <h2>Loading....</h2>
    // }
   
    // search Restaurants
    
    //by clicking
    const searchHandle=()=>{
      const filterResData = foodlistarr.filter((res)=>{
       return res.data.name.toLowerCase().includes(searchRes.toLowerCase());
        
      });
      console.log(filterResData);
      setFilterRes(filterResData);
    }
    return foodlistarr.length ===0 ? ( <h2>Loading....</h2> ) : (
        <>
          <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Swiggy food order</h2>
                    </div>
                </div>
            <Foodheader/>
            <div className="container">
                <div className="row">
                  <div className="top">
                    <div className="search_container mb-3">
                      <input type="text" className="form-control" value={searchRes} onChange={(e)=>{
                         setSearchRes(e.target.value);
                        }
                         }/>
                      <button type="button" className="btn btn-primary" onClick={searchHandle}>Search</button>
                    </div>
                    <button type="button" className="btn btn-primary mb-3" onClick={FilterHandle}>Filter Top Restaurants</button>
                  </div>
                    {
                        filterResData.map((item)=>{
                            return (
                                <FoodDataList foodlist={item} key={item.data.id}></FoodDataList>
                            )
                        })
                    }
                   
                    
                </div>
            </div>
        </>
    )
}
export default FoodOrderpage;