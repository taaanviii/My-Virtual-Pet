import React, {useState} from 'react'
import "../Styles/Pet.css"
import normal_pet from "../assets/Normal-cat.gif"
import sleepy from "../assets/Snoozing-Cat-unscreen.gif"
import hungry from "../assets/hungry cats Sticker by Platonic Games - Find & Share on GIPHY.gif"
import happy from "../assets/Happy Good Vibes Sticker by Mino Games - Find & Share on GIPHY.gif"
import sad from "../assets/sad.gif"

function Pet() {
  const [petImage, setPetImage] = useState(normal_pet)

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
      <div className='pet_name'>
        <form>
          <label className='form_name'>PET NAME: </label>
          <input className='form_input'></input>
        </form>
      </div>
    <div className='render_pet_image'>
        <img src={petImage} alt="pet in normal position"></img>
        </div>
        <div>
            <button onClick={happyClick} className='mood_button'>Happy</button>
            <button onClick={sadClick} className='mood_button'>Sad</button>
            <button onClick={hungryClick} className='mood_button'>Feed</button>
            <button onClick={sleepyClick} className='mood_button'>Sleep</button>
            </div>
    </div>
    </>
  )
}

export default Pet