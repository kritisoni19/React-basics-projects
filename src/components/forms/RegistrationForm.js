import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function RegistrationForm() {

    const initialValues = {
        name:'',
        email:'',
        phone:''
    }
    const [formvalues,setFormValues] = useState(initialValues);
    const [showResults,setShowresult] = useState(false);

    // on change event gettting value of input field
    const inputEventHandle = (e) =>{
        const {name,value} = e.target;
        // get previous data [name]=> it means taking the username in an array if we r not use[] it add as a property 
        setFormValues({
            ...formvalues,
            [name]:value
        })
        console.log(formvalues);
    }

    // submit handle to prevent submit
    const submitHandle = (e)=>{
        e.preventDefault();
    }
    const registerHandle =()=>{
        if(!formvalues.name || !formvalues.email || !formvalues.phone){
            alert('All Fields Mandatory');
        }else{
        setShowresult(true)
    }
    //    console.log(updformvalue);
    }
  return (
    <>
     <h2 className="mb-3 text-center">Registration Form</h2>
      <Card>
        <CardContent>
           {/* <p>{JSON.stringify(formvalues)}</p> */}
           {showResults? <h3>Hello {formvalues.name} you have Successfully registered.</h3>:''}
       
          <form onSubmit={submitHandle}>
            <div className="mb-3">
              <label className="form-label">
                Enter name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={formvalues.name}
                name="name"
                onChange={inputEventHandle}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Enter Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder=""
                value={formvalues.email}
                name="email"
                onChange={inputEventHandle}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Enter Mobile number
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder=""
                value={formvalues.phone}
                name="phone"
                onChange={inputEventHandle}
              />
            </div>

            <button type="submit" className="btn btn-primary" onClick={registerHandle}>
              Register
            </button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default RegistrationForm;
