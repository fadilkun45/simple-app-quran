/**
 * add some dependencies
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css'

export const Navbar = ({scrolled}) => { // getting props from App.js for navbar styling logic
  
    return (
      <nav className={`nav ${scrolled && 'scrolled-nav'}`}> {/* css ternary for dynamically calling class */}
         <div>
         {/* <h1>Quran App</h1> */}
          <Link to='/'> {/* Make the title clickable and directly switch to home if clicked */}
            <h1>Quran App</h1> {/* wrapping to make it more editable */}
          </Link>
         </div>
      </nav>
    )
}
