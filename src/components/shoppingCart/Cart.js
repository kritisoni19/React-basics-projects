import React, { useState } from  "react";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import productItems from './cartProducts';



function Cart(){
    // const [val,setVal] = useState(0);
    // const [valTwo,setValTwo] = useState(0);

    const [products] = useState(productItems);
  

    // const incre = () =>{
    //     console.log(val+1);
    //     setVal(val+1)
    // }
    // const decr = () =>{
    //     if(val === 0){
    //        return false;
    //     }
    //     else{
    //         setVal(val-1)
    //     }
    
    // }
    // const increSec = () =>{
    //     console.log(valTwo+1);
    //     setValTwo(valTwo+1)
    // }
    // const decrSec = () =>{
    //     //console.log(val-1);
    //     if(valTwo === 0){
    //        return false;
    //     }
    //     else{
    //         setValTwo(valTwo-1)
    //     }
    
    // }
    
    return (
        <>
            <Card>
                <CardContent>
                <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Items</th>
                                    <th>Action</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                        products.map((elem,index)=>{
                                            let {productname,productIt} = elem;
                                           
                                            return (
                                                <tr key={index}>
                                                    <td>{productname}</td>
                                                    <td>
                                                    
                                                    </td>
                                                    <td>
                                                    {productIt}
                                                    </td>
                                               
                                                    <td>
                                                    
                                                    </td>
                                                </tr>
                                            )
                                          
                                        })
                                       
                                        }
                            </tbody>
                        </table>
                    </div>          
                 
                </CardContent>
            </Card>
        </>
    )
}

export default Cart;