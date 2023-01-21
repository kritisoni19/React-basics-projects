import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import checklist from "../../images/checklist.png";
import './ToDoListstyle.css';

function ToDoList(){
    const [itemlist,setItemlist] = useState('');
    const [itemstore, setItemStore] = useState([]);
    const  addItemHandle =()=>{
        if(!itemlist){

        }else{
            setItemStore([...itemstore,itemlist]);
            setItemlist('');

        }
        
    }
    
    const deleteBtn=(id)=>{
        console.log(id);
        const updatedData = 
            itemstore.filter((elem, index)=>{
                return id!== index;
            });
            setItemStore(updatedData);
        
    }
    const clearAllBtn = () =>{
        setItemStore([])
    }

    return(
        <>
            <Card>
                <CardContent>
                    <div className="outer-main">
                        
                        <div>
                            <figure>
                                <img className="todoImg" src = {checklist} alt = "checklist"/>
                                <figcaption>
                                    Add list here 😃
                                </figcaption>
                            </figure>
                        </div>
                        <div className="inputSec">
                            <input type="text" value={itemlist} onChange={(e)=>setItemlist(e.target.value)}/>
                            <i className ="fa fa-plus addIcon" aria-hidden="true" onClick={addItemHandle}></i>
                        </div>
                        {itemstore.map((elem,index)=>{
                           return(  <div className="addItemsec" key ={index}>
                                <div>{elem}</div>
                                <i className="fa fa-trash-o addIcon" aria-hidden="true" onClick={()=>deleteBtn(index)}></i>
                            </div> )
                        })}
                       
                        <div className="mt-10">
                            <button type="button" className="addBtn" onClick={clearAllBtn}>Clear All</button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ToDoList;