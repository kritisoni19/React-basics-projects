import React,{useEffect, useState} from "react";


function EditList(){
    const [name,setName] = useState('');
    const [date, setDate] = useState('');
    const [category,setCategory] = useState('');
    const [status, setStatus] = useState('');
    // const myNewInputVals = {
       
    //     name:name,
    //     date:date,
    //     category:category,
    //     status:status
  
    // }
// console.log(myNewInputVals);

    useEffect(()=>{
        setName(localStorage.getItem("name"));
        setDate(localStorage.getItem("date"));
        setCategory(localStorage.getItem("category"));
        setStatus(localStorage.getItem("status"));
    },[])
    return (
        <>
              <div className="modal fade"
                      id="exampleModal"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit table
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                          <form>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Task Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
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
        
          </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                            
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
        </>
    )
}

export default EditList;