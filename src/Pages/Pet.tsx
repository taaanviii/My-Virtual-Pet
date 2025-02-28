import React, {useState, useEffect, useRef} from 'react'
import "../Styles/Pet.css"
import normal_pet from "../assets/Normal-cat.gif"
import sleepy from "../assets/Snoozing-Cat-unscreen.gif"
import hungry from "../assets/hungry cats Sticker by Platonic Games - Find & Share on GIPHY.gif"
import happy from "../assets/Happy Good Vibes Sticker by Mino Games - Find & Share on GIPHY.gif"
import sad from "../assets/sad.gif"
import hearts from "../assets/hearts.png"

function Pet() {
  const [petImage, setPetImage] = useState(normal_pet);
  const [petName, setPetName] = useState<string>('');
  const [submittedName, setSubmittedName] = useState<string>('');

  const [heartsVisible, setHeartsVisible] = useState(false); // To control heart visibility
  const [hovering, setHovering] = useState(false); // To track if the mouse is hovering
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Fix: Use ReturnType instead of NodeJS.Timeout
  const divRef = useRef<HTMLDivElement | null>(null); // Reference to the div being hovered

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPetName(event.target.value)
  };

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedName(petName);
    setPetName('');
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      handleFormSubmission(event as unknown as React.FormEvent);
      
    }
  }


  const happyClick = () => {
    setPetImage(happy)
  }

  const sadClick = () => {
    setPetImage(sad)
  }

  const hungryClick = () => {
    setPetImage(hungry)
  }

  const sleepyClick = () => {
    setPetImage(sleepy)
  }

  // Handler to start the timer when the mouse enters the div
  const handleMouseEnter = () => {
    setHovering(true);
  };

  // Handler to stop the timer when the mouse leaves the div
  const handleMouseLeave = () => {
    setHovering(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHeartsVisible(false);
  };

  // Check if the mouse is hovering for more than 3 seconds
  useEffect(() => {
    if (hovering) {
      timeoutRef.current = setTimeout(() => {
        setHeartsVisible(true); // Show hearts after 3 seconds
      }, 1000); // 1 seconds
    }

    // Cleanup timeout if hovering stops before 3 seconds
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hovering]);

  return (
   
    <div   ref={divRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="pet_page">
    <div className='pet_page'>
      {submittedName ? (
       <div className='name_header'> {submittedName && <h2>{submittedName}</h2>} </div>
      ) : (
        <div className='pet_name'>
        <form>
          <label className='form_name' htmlFor='pet-name'>PET NAME: </label>
          <input className='form_input' type='text' id='pet-name' value={petName} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        </form>
      </div>
      )
    }

      <div className='render_pet_image'>
        <img src={petImage} alt="pet in normal position"></img>
        </div>
        <div>
            <button onClick={happyClick} className='mood_button'>HAPPY</button>
            <button onClick={sadClick} className='mood_button'>SAD</button>
            <button onClick={hungryClick} className='mood_button'>FEED</button>
            <button onClick={sleepyClick} className='mood_button'>SLEEP</button>
            </div>

            {heartsVisible && (
        <div className="hearts-container">
          <img src={hearts} alt="Heart" className="hearts" />
          <img src={hearts} alt="Heart" className="hearts" />
          <img src={hearts} alt="Heart" className="hearts" />
        </div>
      )}

    </div>
    </div>
  )
}

export default Pet