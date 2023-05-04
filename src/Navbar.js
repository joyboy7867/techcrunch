import React from 'react';
import {
  Link,
  
  
} from "react-router-dom";


const Navbar = (props) => {
    return <div>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark shadow-5-strong ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TECH CRUNCH</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sport">Sport</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
  <div className={`form-check form-switch text-light`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.lab}</label>
  </div>
</nav>


    </div>;
}



export default Navbar;