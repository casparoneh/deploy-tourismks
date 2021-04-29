import React from 'react';
import { useParams, Link } from "react-router-dom";
import {destinations} from "../data";
import "../components/Mountain.css";

const MountainDetails = () => {

    const {id} = useParams();
    let index = parseInt(id)-1;
    const {name,text,restaurant,images} = destinations[index];
    
//    const {name:restaurantName,distance,telephone,website,text:restaurantText} = restaurant;

    

    return (
        <div className="single-mountain">
           <div className="mountain-details">
              <h1 className="mountain-name modify-mountain-name">{name}</h1>
              <h4 className="title-of-single-mountain">{text}</h4>
              <h3 className="mountain-name">Images</h3>
              <div className="mountain-images-gallery">
                  {images.map(image => {
                      return <img src={image} className="images-of-dest" />
                  })}
              </div>
           </div>
           <div className="restaurant-hotels">
              <h3 className="mountain-name modify-mountain-name">Restaurants & Hotels</h3>
              <div className="restaurant-hotel-container">
                  {
                     restaurant.map(restaurant=> {
                         return (
                            <div className="single-restaurant-hotel">
                                <h3 className="mountain-name modify-mountain-name">{restaurant.name}</h3>
                                <div className="restaurant-hotel-info">
                                    <h4>Distance: {restaurant.distance}</h4>
                                    <h4>Telephone: {restaurant.telephone}</h4>
                                    <a className="restaurant-hotel-website" href={restaurant.website}>Website: {restaurant.website}</a>
                                </div>
                                <h2 className="mountain-name modify-mountain-name border-none">Description</h2>
                                <p className="restaurant-hotel-text">{restaurant.text}</p>
                                <div className="restaurant-hotel-image-gallery">
                                    {
                                        restaurant.images.map(image => {
                                            return <img src={image} className="images-of-dest "  />
                                        })
                                    }
                                </div>
                            </div>
                         )
                     })
                  }
              </div>
           </div>
           <div className="others-mountain">

           </div>
        </div>
    )
}

export default MountainDetails
