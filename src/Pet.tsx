import React, {useState} from 'react'
import normal_pet from "./assets/Cat Animation loop.gif"
import sleepy from "./assets/Snoozing Cat.gif"
import hungry from "./assets/hungry cats Sticker by Platonic Games - Find & Share on GIPHY.gif"
import happy from "./assets/Happy Good Vibes Sticker by Mino Games - Find & Share on GIPHY.gif"
import sad from "./assets/sad.gif"

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
    <div>
        <img src={petImage} alt="pet in normal position"></img>
        <div>
            <button onClick={happyClick}>Happy</button>
            <button onClick={sadClick}>Sad</button>
            <button onClick={hungryClick}>Feed</button>
            <button onClick={sleepyClick}>Sleep</button>
        </div>
    </div>
    </>
  )
}

export default Pet