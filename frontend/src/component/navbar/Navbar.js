import React, { useState } from "react";
import {Link} from 'react-router-dom'
 import "./Navbar.css";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div >
     <nav className="navlink" style={{marginTop:"1rem"}}>
      <Link to="/" className="title">
       <span style={{color:"skyblue"}}>Terrafirma </span>
       <span style={{color:"red"}}>Developement  </span>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <Link  to="/">Home</Link>
        </li>
        <li>
          <Link  to="/about">About</Link>
        </li>
        <li>
          <Link  to="/product">Products</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
   </div>
  )
}

export default Navbar