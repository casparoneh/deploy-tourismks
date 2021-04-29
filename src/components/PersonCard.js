import React from "react";
import "./PersonCard.css";

const PersonCard = (props) => {

 const {id,name,job,image} = props.item; 
    
  return (
    <div className="cardd">
      <img src={image} alt={name} style={{width: "100%", height: "100%",objectFit: "cover"}}  />
      <div style={{padding: "10px 0px"}}>
        <h4>
          <b>{name}</b>
        </h4>
        <p>{job}</p>
      </div>
    </div>
  );
};

export default PersonCard;
