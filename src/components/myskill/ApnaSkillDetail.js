import React from "react";


function ApnaSkillDetail({skilldetail}) {
    console.log(skilldetail);
  return (
    <>
        {
            skilldetail.map((currElem)=>{
                return (
                    <div style={{width:'33%'}} key={currElem.id}>
                    <div className="card">
                      <img src={"images/bootstrap.jpeg"} className="card-img-cus" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{currElem.name}</h5>
                        <p className="card-text">
                        {currElem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            })
        }
    
    </>
  );
}

export default ApnaSkillDetail;
