import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import boop from "./assets/Boop.gif"

function Home() {


  return (
    <>
      <div>
        <h1>MY VIRTUAL PET</h1>
        <img src={boop} alt='pet'></img>
        <button><Link to="/pet">Start</Link></button>
      </div>
    </>
  )
}

export default Home
