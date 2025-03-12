import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import "../Styles/Pet.css";
import normal_cat from "../assets/Normal_cat.gif";
import sleepy_cat from "../assets/sleepy_cat.gif";
import hungry_cat from "../assets/hungry_cat.gif";
import happy_cat from "../assets/happy_cat.gif";
import sad_cat from "../assets/sad_cat.gif";
import normal_dog from "../assets/dog.png";
import sleepy_dog from "../assets/sleepy_dog.gif";
import hungry_dog from "../assets/hungry_dog.gif";
import happy_dog from "../assets/happy_dog.gif";
import sad_dog from "../assets/sad_dog.gif";
import hearts from "../assets/hearts.png";

function Pet() {
  const { petType } = useParams<{ petType: "dog" | "cat" }>(); // Get pet type from URL
  const [petImage, setPetImage] = useState("");
  const [petName, setPetName] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");
  const navigate = useNavigate();

  const petImages = {
    cat: { normal: normal_cat, sleepy: sleepy_cat, hungry: hungry_cat, happy: happy_cat, sad: sad_cat },
    dog: { normal: normal_dog, sleepy: sleepy_dog, hungry: hungry_dog, happy: happy_dog, sad: sad_dog },
  };

  useEffect(() => {
    if (petType && petImages[petType]) {
      setPetImage(petImages[petType].normal); // Set pet image based on selected pet type
    }
  }, [petType]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleMoodChange = (mood: "happy" | "sad" | "hungry" | "sleepy") => {
    if (petType && petImages[petType]) {
      setPetImage(petImages[petType][mood]);
    }
  };

  return (
    <div className="pet_page">
      <IconButton onClick={handleBack} className="back_button" sx={{ color: "black" }}>
        <ArrowCircleLeftOutlinedIcon fontSize="large" />
      </IconButton>

      <div className="pet_page">
        {submittedName ? (
          <div className="name_header">
            <h2>{submittedName}</h2>
          </div>
        ) : (
          <div className="pet_name">
            <form onSubmit={(e) => { e.preventDefault(); setSubmittedName(petName); setPetName(""); }}>
              <label className="form_name">PET NAME:</label>
              <input className="form_input" type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
            </form>
          </div>
        )}

        <div className="render_pet_image">
          <img src={petImage} alt={`A ${petType}`} />
        </div>

        <div>
          <button onClick={() => handleMoodChange("happy")} className="mood_button">HAPPY</button>
          <button onClick={() => handleMoodChange("sad")} className="mood_button">SAD</button>
          <button onClick={() => handleMoodChange("hungry")} className="mood_button">FEED</button>
          <button onClick={() => handleMoodChange("sleepy")} className="mood_button">SLEEP</button>
        </div>
      </div>
    </div>
  );
}

export default Pet;
