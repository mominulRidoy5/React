import React from 'react'
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    
    <div className="mainNav">
      <Link to="/" className="logoBtn"><img className='bongoGround' src="bongodev.jpg" alt="" /></Link>

      <div className="navLink">
        <Link to="/">Home</Link>
        <Link to="/about" className="navLink1">About Us</Link>
        <Link to="/contact" className="navLink2">Contact</Link>
        <Link to="/experiences" className="navLink3">Experiences</Link>
        
      </div>
      <div>
        <Link to="/about" className='navLink2'>Help</Link>
      </div>

    </div>
  );
}

export default NavBar;

