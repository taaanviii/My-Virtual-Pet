import React, {useState} from 'react'
import "../Styles/Pet.css"
import normal_pet from "../assets/Normal-cat.gif"
import sleepy from "../assets/Snoozing-Cat-unscreen.gif"
import hungry from "../assets/hungry cats Sticker by Platonic Games - Find & Share on GIPHY.gif"
import happy from "../assets/Happy Good Vibes Sticker by Mino Games - Find & Share on GIPHY.gif"
import sad from "../assets/sad.gif"

function Pet() {
  const [petImage, setPetImage] = useState(normal_pet)
  const [petName, setPetName] = useState<string>('')
  const [submittedName, setSubmittedName] = useState<string>('')

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

  return (
   
    <>
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
    </div>
    </>
  )
}

export default Pet