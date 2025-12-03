import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <>
    <div className='navbar'>
    <div className='left_side'>MY VIRTUAL PET</div>
    <div className='right_side'><Link to="/">HOME</Link></div>
    </div>
    </>
  )
}

export default Navbar