import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Form() {

    const [name,setName] = useState('');
    const [fullname,setFullname] = useState('');

    const submitHandle = (e)=>{
        e.preventDefault();
    }
   
    const InputEvent = (e)=>{
        setName(e.target.value);
        console.log(e.target.value);
    }
     //click event
    const clickHandle = ()=>{
        setFullname(name);
        console.log(name);

    }

  return (
    <>
      <Card>
        <CardContent>
            <p>Hello, {fullname}</p>
          <form onSubmit={submitHandle}>
            <div className="mb-3">
              <label className="form-label">
                Enter name
              </label>
              <input
                type="name"
                className="form-control"
                placeholder=""
                value={name}
                onChange={InputEvent}
              />
            </div>
            {/* <div className="mb-3">
              <label className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div> */}

            <button type="submit" className="btn btn-primary" onClick={clickHandle}>
              Submit
            </button>
          </form>
        </CardContent>
      </Card>
  
    </>
  );
}

export default Form;
