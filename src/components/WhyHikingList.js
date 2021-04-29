import React from 'react'
import WhyHiking from './WhyHiking';
import "./WhyHiking.css";

const WhyHikingList = ({whyHiking}) => {
    return (
       
        <div className="container">
            <div className="why-hiking">
            {whyHiking.map(item => {
                return <WhyHiking {...item} />
            })}
            </div>
            <div className="color-overlay">

            </div>
        </div>

       
    )
}

export default WhyHikingList
