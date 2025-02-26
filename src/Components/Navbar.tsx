import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <>
    <div className='navbar'>
    <div className='left_side'>My Virtual Pet</div>
    <div className='right_side'><Link to="/">Home</Link></div>
    </div>
    </>
  )
}

export default Navbar