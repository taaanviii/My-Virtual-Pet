import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Home.css"
import boop from "../assets/Boop.gif"
function Home() {


  return (
    <div className='home'>
      <div className='landing_layout'>
        <h1 className='page_name'>MY VIRTUAL PET</h1>
        <img src={boop} alt='pet' className='page_photo'></img>
        <button className='start_button'><Link to="/pet">START</Link></button>
      </div>
    </div>
  )
}

export default Home
