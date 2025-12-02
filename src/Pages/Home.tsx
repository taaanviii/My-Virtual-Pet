import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Home.css"
import boop from "../assets/Boop.gif"

function Home() {
  return (
    <div className='home'>
      <div className='landing_layout'>
        <h1 className='page_name'>MY VIRTUAL PET</h1>
        {/* Changed class name to target specific sizing */}
        <img src={boop} alt='pet' className='page_photo' /> 
        
        <button className='start_button'>
          {/* Use style to ensure Link inherits button color and decoration is removed */}
          <Link to="/petChoice" style={{ color: 'inherit', textDecoration: 'none' }}>
            START
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home