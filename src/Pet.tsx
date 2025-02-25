import React, {useState} from 'react'
import normal_pet from "./assets/Cat Animation loop.gif"

function Pet() {
  return (
    <>
    <div>
        <img src={normal_pet} alt="pet in normal position"></img>
        <div>
            <button>Happy</button>
            <button>Sad</button>
            <button>Feed</button>
            <button>Sleep</button>
        </div>
    </div>
    </>
  )
}

export default Pet