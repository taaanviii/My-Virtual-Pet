import React from 'react'
import { Link } from 'react-router-dom'
import cat from "../assets/cat.png"
import dog from "../assets/dog.png" 
import "../Styles/PetChoice.css"

function PetChoice() {
  return (
    <div className='pet_choice_page'>
        <div className='heading'>
            <h2>Choose your pet</h2>
        </div>
        <div className='pet_choice'>
            <div className='right_pet'>
                <Link to="/pet"><img src={dog} alt="dog" /></Link>
            </div>
            <div className='left_pet'>
                <Link to="/pet"><img src={cat} alt='cat'/></Link>
            </div>
        </div>
    </div>
  )
}

export default PetChoice