import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleHandler = () => {
    setShowLinks(!showLinks);
  };

  return (




    <nav className="navbar">

       <div className="logo">
          <img src="/images/mountain.png" alt=""/>
       </div>

       {/* <button className="nav-toggle" onClick={toggleHandler}>
        <FaBars />
       </button> */}

       <ul className="nav_links">
          <li>
              <Link to="/"  className="nav-link">Home</Link>
          </li>
          <li>
              <Link to="/destinations"  className="nav-link">Destinations</Link>
          </li>
          <li>
              <Link to="/about"  className="nav-link">About Kosovo</Link>
          </li>
          <li>
              <Link  to="/contact" className="nav-link">Contact</Link>
          </li>
       </ul>
    </nav>


  );
};

export default Navbar;
