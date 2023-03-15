import React from "react";
import itemLists from './itemsList';



function DisplayItems(){
    // //const [upd, setupd] = useState([]);
    // const handleDelete = (id)=>{

    //     console.log('click'+ id);
    //    const upd =  itemLists.filter((elem,index)=>{
    //         return id!== index;
    //     })
    //     console.log(upd)
    // }

  return(
    <>
    
    <table className="table">
        <thead>
            <tr>
                <th>#id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
                {itemLists.map((i,index)=>{
                    return (
                        <tr key={index}>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.description}</td>
                            <td>{i.price}</td>
                            {/* <td><button type="button" onClick={()=>handleDelete(index)} className="btn btn-danger">Delete</button></td> */}
                        </tr>
                    
                    )
                
                })}
      
          
        </tbody>
    </table>
                
    </>
  )
}

export default DisplayItems;