import React from 'react';
import "./PopularTours.css";


const PopularTours = ({placeWord1,placeWord2,days,people,guides,
sleep,difficulty,company,image}) => {

   
    return (
  
            <div className="popular-tours">
              
                <div className="card">
                    <div className="thefront">
                      <div className="image-container">
                            <img src={image} />
                            <div className="text-area">
                                <p className="first-text">{placeWord1}</p>
                                <p className="second-text">{placeWord2}</p>
                            </div>
                      </div>
                      <div className="info-tour">
                            <p>{days}</p>
                            <p>{people}</p>
                            <p>{guides}</p>
                            <p>{sleep}</p>
                            <p>Difficulty: {difficulty}</p>
                      </div>                
                    </div>    
                    <div className="theback">
                        <h2>{company.companyName}</h2>
                        <img src={company.companyLogo} alt=""/>
                        <h2 className="price">PRICE: {company.cmimi} &#8364;</h2>
                        <div className="company-social-media">
                          <a href={company.facebookUrl} style={company.facebookUrl ? {display:"block"} : {display:"none"}} target="_blank"  ><i class="fab fa-facebook"></i></a>
                          <a href={company.instagramUrl} style={company.instagramUrl ? {display:"block"} : {display:"none"}} target="_blank"><i class="fab fa-instagram"></i></a>
                          <a href={company.twitterUrl} style={company.twitterUrl ? {display:"block"} : {display:"none"}} target="_blank"><i className="fab fa-twitter"></i></a> 
                        </div>


                        
                        
                    </div>
                </div>          


                      
            </div> 
    ) 
}

export default PopularTours
