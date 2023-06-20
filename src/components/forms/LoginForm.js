import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function LoginForm() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
// Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );
    const database = [
        {
        username: "user1",
        password: "pass1"
        },
        {
        username: "user2",
        password: "pass2"
        }
    ];
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const submitHandle = (e)=>{
        e.preventDefault();
            // User Login info
// If the document has no forms, the returned collection is empty, with a length of zero.
    var { uname, pass } = document.forms[0];
    // Find user login info
  const userData = database.find((user) => user.username === uname.value);
  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    // Username not found
    setErrorMessages({ name: "uname", message: errors.uname });
  }
    }



  return (
    <>
    <h2>LoginForm</h2>
      <Card>
        <CardContent>
          <form onSubmit={submitHandle}>
          {isSubmitted ? <div>User is successfully logged in</div>:'' }
            <div className="mb-3">
              <label className="form-label">
                Enter Email
              </label>
              <input
                type="name"
                className="form-control"
                placeholder=""
                name="uname"
              />
                {renderErrorMessage("uname")}
            </div>
            <div className="mb-3">
              <label className="form-label">
                Enter Password
              </label>
              <input
                type="name"
                className="form-control"
                placeholder=""
                name="pass"
              />
                 {renderErrorMessage("pass")}
            </div>

            <button type="submit" className="btn btn-primary" >
              Login
            </button>
            
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default LoginForm;
