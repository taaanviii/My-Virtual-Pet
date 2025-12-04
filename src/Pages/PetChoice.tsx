import { Link } from "react-router-dom";
import cat from "../assets/cat.png";
import dog from "../assets/dog.png";
import HomeButton from "../Components/HomeButton";
import "../Styles/PetChoice.css";

function PetChoice() {
  return (
    <div className="pet-choice-page">
      <div
        style={{ position: "fixed", top: "20px", right: "80px", zIndex: 1000 }}
      >
        <HomeButton />
      </div>
      <h2 className="title">Choose your pet</h2>

      <div className="pet-options">
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
  );
}

export default PetChoice;
