import React from 'react';
import "./Mountain.css";
import {Link} from "react-router-dom";

const Mountain = ({images,name,highestPeak,city,id,mountain}) => {
    return (
        <div className="mountain-card">
            <div className="mountain-image">
                <img src={images[0]} alt=""/>
            </div>
            <div className="mountain-data">
                <h2 className="mountain-name">{name}</h2>
                <h3 className="city-rks-flag">{city},<img className="kosovo-flag" src="./images/kosovo-flag.png" /> <span>Republic of Kosovo </span> <img className="kosovo-flag" src="./images/kosovo-flag.png" /></h3>
                <h3>Highest Peak : {highestPeak}</h3>
                <Link to={`/mountain/${id}`}>
                    <button className="explore-btn">
                        EXPLORE
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default Mountain
