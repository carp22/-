import React from 'react'
import Toggle from '../Toggle'
import { Link } from 'react-scroll'

import "./index.css"

export const Navbar = () => {

  return (
    <div>
      <nav className="navbar">
        <Link to="about" id="section-1" smooth={true} duration={1000} >About</Link>
        <Link to="resume" id="section-2" smooth={true} duration={1000} >Resume</Link>
        <Link to="contact" id="section-3" smooth={true} duration={1000} >Contact</Link>
        <Toggle />
      </nav>
    </div>
  )
}
