import React from 'react';
import logo from "../images/logo.webp";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='Logo'></img>
        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
            <button className='btn1'>Submit</button>
        </ul>
      


        {/* <img src={kfc_png} alt="" />
        <img src={swiggy} alt="" />
        <img src={zomato} alt="" /> */}
      
    </div>
  );
};

export default Navbar;