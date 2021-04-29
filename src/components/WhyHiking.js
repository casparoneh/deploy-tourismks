import React from 'react';
import "./WhyHiking.css";

const WhyHiking = ({icon,title,content}) => {


  
    return (
          
            //  <div className="image-container">
                  <>
                    <div className="why-hiking-data">
                        <i className={icon}></i>
                        <h3 className="title">{title}</h3>
                        <h5>{content}</h5>
                    </div>
                  </>
            //  </div>
               
           
      
    )
}

export default WhyHiking
