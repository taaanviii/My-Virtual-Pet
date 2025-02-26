import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import boop from "./assets/Boop.gif"

function Home() {


  return (
    <>
      <div className='landing_layout'>
        <h1 className='page_name'>MY VIRTUAL PET</h1>
        <img src={boop} alt='pet' className='page_photo'></img>
        <button className='start_button'><Link to="/pet">Start</Link></button>
      </div>
    </>
  )
}

export default Home
