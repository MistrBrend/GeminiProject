import React from 'react'
import '../Styles/GamemodesModal.scss'

function GamemodesModal({closeInfoModal}) {
  return (
    <div className="GamemodesModal">
        <div className="container">
              <button onClick={() => closeInfoModal(false)}>X</button>
              <img src="src\assets\full-gamemodes-info.png" alt="Full gamemodes info" />
        </div>
    </div>
  )
}

export default GamemodesModal