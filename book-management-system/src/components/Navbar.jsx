import React from 'react'
import "./Navbar.css";


function Navbar(){
  return (
    <nav>
        <div className='navbar'>
       <h1 className='header'>Book Management System</h1>
       <hr className='line'></hr>

       <ul className='nav-section'>
          <li>Home</li>
          <li>Books</li>
          <li>Authors</li>
        </ul>
    </div>
    </nav>
  )
}

export default Navbar;

