import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
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
  const { petType } = useParams<{ petType: string }>(); // Get pet type from URL
  const [petImage, setPetImage] = useState("");
  const [petName, setPetName] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");
  const [heartsVisible, setHeartsVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  const [heartsArray, setHeartsArray] = useState<{ id: number; left: string; top: string }[]>([]);

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

  useEffect(() => {
    if (petType && (petType === "dog" || petType === "cat")) {
      setPetImage(petImages[petType].normal);
    }
  }, [petType]);
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPetName(event.target.value);
  };

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedName(petName);
    setPetName("");
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleFormSubmission(event as unknown as React.FormEvent);
    }
  };

  const happyClick = () => {
    setPetImage(petImages[petType!].happy);
  };

  const sadClick = () => {
    setPetImage(petImages[petType!].sad);
  };

  const hungryClick = () => {
    setPetImage(petImages[petType!].hungry);
  };

  const sleepyClick = () => {
    setPetImage(petImages[petType!].sleepy);
  };

  // Handle hover effects
  const handleMouseEnter = () => {
    setHovering(true);
  };

  useEffect(() => {
    if (heartsVisible) {
      const newHearts = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 40 + 30}%`,
      }));
      setHeartsArray(newHearts);
      setTimeout(() => setHeartsArray([]), 1500);
    }
  }, [heartsVisible]);

  const handleMouseLeave = () => {
    setHovering(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHeartsVisible(false);
  };

  useEffect(() => {
    if (hovering) {
      timeoutRef.current = setTimeout(() => {
        setHeartsVisible(true);
      }, 1500);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hovering]);

  return (
    <div ref={divRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="pet_page">
      <div className="pet_page">
        {submittedName ? (
          <div className="name_header">
            {submittedName && <h2>{submittedName}</h2>}
          </div>
        ) : (
          <div className="pet_name">
            <form>
              <label className="form_name" htmlFor="pet-name">
                PET NAME:
              </label>
              <input className="form_input" type="text" id="pet-name" value={petName} onChange={handleInputChange} onKeyPress={handleKeyPress} />
            </form>
          </div>
        )}

        <div className="render_pet_image">
          <img src={petImage} alt={`pet in normal position`} />
        </div>
        <div>
          <button onClick={happyClick} className="mood_button">
            HAPPY
          </button>
          <button onClick={sadClick} className="mood_button">
            SAD
          </button>
          <button onClick={hungryClick} className="mood_button">
            FEED
          </button>
          <button onClick={sleepyClick} className="mood_button">
            SLEEP
          </button>
        </div>

        {heartsVisible && (
          <div className="hearts-container">
            {heartsArray.map((heart) => (
              <img key={heart.id} src={hearts} alt="Heart" className="hearts" style={{ left: heart.left, top: heart.top }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pet;
