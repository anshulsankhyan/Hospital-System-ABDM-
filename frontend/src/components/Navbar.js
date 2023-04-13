import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to='/' >HOME</NavLink>
      <NavLink to='login'>LOGIN</NavLink>
      <p className='navbartitle'>XYZ HOSPITAL</p>
    </nav>
  )
}

export default Navbar
