import { Link } from 'react-router-dom'
import cat from "../assets/cat.png"
import dog from "../assets/dog.png" 
import "../Styles/PetChoice.css"

function PetChoice() {
  return (
    <div className='pet-choice-page'>
      <h2 className='title'>Choose your pet</h2>

      <div className='pet-options'>
        <Link to="/pet/dog" className="pet-card">
          <img src={dog} alt="dog" />
          <p>Dog</p>
        </Link>

        <Link to="/pet/cat" className="pet-card">
          <img src={cat} alt="cat" />
          <p>Cat</p>
        </Link>
      </div>
    </div>
  )
}

export default PetChoice
