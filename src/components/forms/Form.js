import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Form(){

    // const[name, setName] = useState('');
    // const[email,setEmail] = useState('');
    // const[phone,setPhone] = useState('');
    // const[skill,setSkill] = useState('');
    // //creating empty array for storing the data
    // const [details,setDetails] =useState([]);
    
    // //code for formSubmitHandle 
    // let formSubmitHandle = (e) =>{
    //     e.preventDefault();
        
    //     console.log(name);
    //     const details = {
    //         name:name,
    //         email:email,
    //         phone:phone,
    //         skill:skill,
    //         id:Math.floor(Math.random()*10000)
    //     }
    //     setDetails(details);
    //     console.log(details);
    //     setSkill();
    // }

    return(
        <>
           <Card>
            <CardContent>
            {/* <form onSubmit={formSubmitHandle}>
                    <h3>{details.name}</h3>
                    <h3>{details.email}</h3>
                    <h3>{details.phone}</h3>
                    <h3>{details.skill}</h3>
                    <label>
                        Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </label><br></br>
                    <label>
                        email: <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </label><br></br>
                    <label>
                        Phone: <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
                    </label><br></br>
                    <label>
                        Skills:
                        <select onChange={(e)=>{(e.target.value)}}>
                            <option value="html">HTML</option>
                            <option value="css">Css</option>
                            <option value="js">Javascript</option>
                        </select>
                    </label><br></br>
                 
                    <button type="submit">Submit</button>
                </form> */}
            </CardContent>
           </Card>
        
           
           
        </>
    )
}

export default Form;