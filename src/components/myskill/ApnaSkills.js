import React, { useState } from "react";
import skillmenu from './apnaskillmenu';
import "./ApnaSkill.css";
import ApnaSkillDetail from './ApnaSkillDetail';

function ApnaSkills() {
    const [skilldetail,setSkillDetail] = useState(skillmenu);
    

    const filterHandle = (category) =>{
      const updatedmenu = skillmenu.filter((currElem)=>{
        return currElem.category === category;
      })
      setSkillDetail(updatedmenu);
    }
   

  return (
    <>
      <div className="row">
        <nav className="mb-4">

          <button type="button" className="btn btn-primary" onClick={()=>filterHandle("Design")}>Design</button>
          <button type="button" className="btn btn-secondary" onClick={()=>filterHandle("Markup")}>Markup</button>
          <button type="button" className="btn btn-success" onClick={()=>filterHandle("Script")}>Script</button>
          <button type="button" className="btn btn-danger"onClick={()=> setSkillDetail(skillmenu)}>All</button>
        </nav>
        {/* pass as a prop and get it another component */}
        <ApnaSkillDetail skilldetail={skilldetail}/>
       
      </div>
    </>
  );
}

export default ApnaSkills;
