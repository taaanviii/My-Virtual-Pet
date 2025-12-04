import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import "../Styles/Pet.css";

// --- Assets ---
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

import heartsIcon from "../assets/hearts.png";

// Background that matches other pages
import backgroundImage from "../assets/navbar-image.jpg";

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

function Pet() {
  const { petType } = useParams<{ petType: "dog" | "cat" }>();
  const navigate = useNavigate();

  // Define this FIRST
  const petImages = {
    cat: {
      normal: normal_cat,
      sleepy: sleepy_cat,
      hungry: hungry_cat,
      happy: happy_cat,
      sad: sad_cat,
    },
    dog: {
      normal: normal_dog,
      sleepy: sleepy_dog,
      hungry: hungry_dog,
      happy: happy_dog,
      sad: sad_dog,
    },
  };

  // Safe default
  const defaultImage =
    petType && petImages[petType] ? petImages[petType].normal : null;

  const [petImage, setPetImage] = useState<string | null>(defaultImage);
  const [petName, setPetName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // Floating hearts
  const [heartsList, setHeartsList] = useState<FloatingHeart[]>([]);
  const lastHeartTime = useRef(0);

  useEffect(() => {
    if (petType) {
      setPetImage(petImages[petType].normal);
    }
  }, [petType]);

  const handleBack = () => navigate(-1);

  const handleMoodChange = (mood: "happy" | "sad" | "hungry" | "sleepy") => {
    if (petType) {
      setPetImage(petImages[petType][mood]);
    }
  };

  // Floating hearts
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastHeartTime.current < 50) return;
    lastHeartTime.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart: FloatingHeart = { id: now, x, y };
    setHeartsList((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHeartsList((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  return (
    <div
      className="pet_page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <IconButton onClick={handleBack} className="back_button" sx={{ color: "black" }}>
        <ArrowCircleLeftOutlinedIcon fontSize="large" />
      </IconButton>

      <div className="pet_page">
        {/* Pet Name */}
        {submittedName ? (
          <div className="name_header">
            <h2>{submittedName}</h2>
          </div>
        ) : (
          <div className="pet_name">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmittedName(petName);
                setPetName("");
              }}
            >
              <label className="form_name">PET NAME:</label>
              <input
                className="form_input"
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
            </form>
          </div>
        )}

        {/* Image + Hearts */}
        <div className="render_pet_image" onMouseMove={handleMouseMove}>
          {petImage && <img src={petImage} alt={`${petType}`} />}

          {heartsList.map((heart) => (
            <img
              key={heart.id}
              src={heartsIcon}
              className="floating_heart"
              alt=""
              style={{
                left: `${heart.x}px`,
                top: `${heart.y}px`,
                marginLeft: "-10px",
                marginTop: "-10px",
              }}
            />
          ))}
        </div>

        {/* Mood Buttons */}
        <div className="mood_container">
          <button className="mood_button" onClick={() => handleMoodChange("happy")}>
            HAPPY
          </button>
          <button className="mood_button" onClick={() => handleMoodChange("sad")}>
            SAD
          </button>
          <button className="mood_button" onClick={() => handleMoodChange("hungry")}>
            FEED
          </button>
          <button className="mood_button" onClick={() => handleMoodChange("sleepy")}>
            SLEEP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pet;
