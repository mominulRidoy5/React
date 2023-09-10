import React from 'react'
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <div className="mainNav">
      
      <Link to="/" className="logoBtn">Logo</Link>

      <div className="navLink">
        <Link to="/about" className="navLink1">About</Link>
        <Link to="/contact" className="navLink2">Contact</Link>
        <Link to="/experiences" className="navLink3">Experiences</Link>
        
      </div>


<Link to="/signin" className="signBtn">SIGN IN</Link>

    </div>
  );
}

export default NavBar;

