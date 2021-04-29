import React from 'react'
import { useState } from 'react';
import PopularTours from './PopularTours'
import "./PopularTours.css";

const PopularToursList = ({exploreData}) => {


    const [showPopularTours,setShowPopularTours] = useState(false);

    const thirdPopularTours = exploreData.slice(0,3).map(item =>{
        return <PopularTours {...item} />
    })
    
    const allPopularTours = exploreData.map(item => {
         return <PopularTours {...item} />
    })

    return (
        <>
            <div className="popular-list">
            {showPopularTours ? allPopularTours : thirdPopularTours}
            </div>
            <div className="centrize">
                <a 
                onClick={() => setShowPopularTours(!showPopularTours)}
                className="showPopularList-btn" >
                {showPopularTours ? "Show Less" : "Show More"}</a>
            </div>
            
        </>
        
    )
  
}

   
    


export default PopularToursList
