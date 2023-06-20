import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormDataList from './FormDataList';


const getLocalData =()=>{
  const listStore = localStorage.getItem("Task List");
  if(listStore){
      return JSON.parse(listStore);
  }else{
      return []
  }
}
function CrudApp() {

  const [name,setName] = useState('');
  const [date, setDate] = useState('');
  const [category,setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [list, setList] = useState(getLocalData());
  const [showResults, setShowResults] = useState(false)


  const nameHandle = (e)=>{
    setName(e.target.value);
    // console.log(e.target.value);
  }
  const addHandle = ()=>{
    // console.log(`${name},${date},${category}, ${status}`);
    if(name=== '' || date ==='' || category ==='' || status===''){
      alert("please fill value")
    }
    
    else{
      setShowResults(true)
      const myNewInputVal = {
        id:new Date().getTime().toString(),
        name:name,
        date:date,
        category:category,
        status:status
  
    }
      setList([...list,myNewInputVal]);
      setName('');
      setDate('');
      setCategory('');
      setStatus('');
    
      //  console.log("dfdf"+ [...list])
      // console.log(list);
    }
  }

  // for delete row
  const deleteHandle = (index)=>{
    const updatedDatas = list.filter((item)=>{
      //jo match ho raha h usko chhodh kr jo bach gaya usko return krna h
      return item.id!== index;
    })
    setList(updatedDatas);
    // console.log(index)
    // console.log(updatedDatas)
  }

  
  const editHandle = (name,date,category,status) =>{

    localStorage.setItem("name", name);
    localStorage.setItem("date", date);
    localStorage.setItem("category", category);
    localStorage.setItem("status", status);
  }
  useEffect(()=>{
    localStorage.setItem("Task List",JSON.stringify(list))
  },[list])
  return (
    <>
      <h2>Crud</h2>
      <Card className="mb-3">
        <CardContent>
          <form>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Task Name"
                    value={name}
                    onChange={nameHandle}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Start Date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                  >
                    <option>--Category--</option>
                    <option>Household</option>
                    <option>Study</option>
                    <option>Work</option>
                  </select>
                </div>
              </div>
          
            </div>
            <div className="row">
          
              <div className="col-md-4">
                <div className="mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                  >
                    <option>--Status--</option>
                    <option>High</option>
                    <option>Low</option>
                    <option>Medium</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <button type="button" className="btn btn-primary" onClick={addHandle}>
                  ADD
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      
    {
      showResults ?   <Card>
      <CardContent>
        
        <FormDataList list = {list} deleteHandle={deleteHandle} editHandle={editHandle} ></FormDataList>
      </CardContent>
    </Card>:null
    }
    
    </>
  );
}

export default CrudApp;
