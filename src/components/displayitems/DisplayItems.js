import React from "react";
import itemLists from './itemsList';
import { useEffect,useState } from "react";


function DisplayItems(){
    const [data, setData] = useState([]);

    const getData= async()=>{
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        let json =await data.json();
        console.log(json)
        setData(json)
    }

    useEffect(()=>{
      getData();
    })


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

       <h2>Using Fetch API Call</h2>    

       <table>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
        </tr>
        { 
            data.map((e)=>{
                return <tr>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{
                    e.completed ? <input type="checkbox" checked/> :<input type="checkbox"/>
                    }
                    
                    </td>
                </tr>
            })
        }
        </table>     
    </>
  )
}

export default DisplayItems;