import React, { useEffect, useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import checklist from "../../images/checklist.png";
import './TodoListedit.css';


const getLocalData =()=>{
    const list = localStorage.getItem("mytodolist");
    if(list){
        return JSON.parse(list);
    }else{
        return []
    }
}
function TodoListedit(){
    const [inputname,setInputname] = useState('');
    // store input value in an array
    // const [storevalue, setStoreValue] = useState([]);
    // here write get data

    const [storevalue, setStoreValue] = useState(getLocalData());
    const addItems = ()=>{
        if(!storevalue){
            alert("please fill value")
        }
        else{
            //...storevalue it means previous state me jo data h vo store hoga and new data jo ki inputname
            
            const myNewInputVal = {
                id:new Date().getTime().toString(),
                name:inputname
            }
            setStoreValue([...storevalue,myNewInputVal]);
            setInputname('')
            console.log(myNewInputVal)
        }
    }
    //index is taking as parameter and id is argumnet
    const deleteItem = (index)=>{
        const updatedDatas = storevalue.filter((currElem)=>{
            //jo match ho raha h usko chhodh kr jo bach gaya usko return krna h
            return currElem.id!== index;
          
           
        })
        console.log(updatedDatas);
        setStoreValue(updatedDatas);
    }
    const clearAllHandle=()=>{
        setStoreValue([]);
    }
    //data storing in local storage , whenever change in data then useeffect runs setitem is inbuilt fun for locally set data
    useEffect(()=>{
        localStorage.setItem("mytodolist",JSON.stringify(storevalue))
    },[storevalue])
    //console.log(inputname);
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
                            <input type="text" value={inputname} onChange={(e)=>setInputname(e.target.value)}/>
                            <i className ="fa fa-plus addIcon" style={{ left: '84%'}} aria-hidden="true" onClick={addItems}></i>
                            <i className="fa fa-pencil-square-o addIcon" aria-hidden="true"></i>
                        </div>
                        {/* show items */}
                        {
                            storevalue.map((currElem)=>{
                               return (
                                <div className="addItemsec" key={currElem.id}>
                                    <div>{currElem.name}</div>
                                    <i className="fa fa-trash-o addIcon" onClick={()=>{deleteItem(currElem.id)}} aria-hidden="true"></i>
                                </div>
                               )
                            })
                        }
                         
                       
                        <div className="mt-10">
                            <button type="button" className="addBtn" onClick={clearAllHandle}>Clear All</button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default TodoListedit;