import React from 'react'
import {pageInfo} from "../data";
import { Link } from 'react-router-dom';
import "./Footer.css";


const Footer = () => {

    const {socialMedia} = pageInfo;

    return (
        <div className="footer">
            <div className="first-info">
                <h2 className="page-info-title">VISIT KOSOVO</h2>
                <h2 className="page-info-second-title">Hiking is without a doubt one of the best things to do in Kosovo</h2>
                <h2 className="telephone-number">+373 45 123 456</h2>
                <h2 className="email">visit-kosovo@hotmail.com</h2>
            </div>
            <div className="second-info">
                
                 <ul className="nav_links ">
                  <li>
                      <Link to="/"  className="nav-link-footer">Home</Link>
                  </li>
                  <li>
                      <Link  className="nav-link-footer">Destinations</Link>
                  </li>
                  <li>
                      <Link className="nav-link-footer">About Kosovo</Link>
                  </li>
                  <li>
                      <Link className="nav-link-footer">Contact</Link>
                  </li>
                </ul>
               
                <div className="social-media ">
                    <a href={socialMedia.facebookUrl} style={socialMedia.facebookUrl ? {display:"block"} : {display:"none"}} target="_blank"  ><i class="fab fa-facebook"></i></a>
                    <a href={socialMedia.instagramUrl} style={socialMedia.instagramUrl ? {display:"block"} : {display:"none"}} target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href={socialMedia.twitterUrl} style={socialMedia.twitterUrl ? {display:"block"} : {display:"none"}} target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="#" style={socialMedia.twitterUrl ? {display:"block"} : {display:"none"}} target="_blank"><i className="fab fa-youtube"></i></a>  
                </div>
            </div>
        </div>
    )
}

export default Footer
