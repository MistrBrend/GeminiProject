import React from 'react'
import '../Styles/Intro.scss'

function Intro() {
  return (
    <section className='intro' id="home">
      <div className="intro__image">
        <img src="src\assets\Intro-mobile-image.png" alt="" />
      </div>
      <div className="intro__text">
        <h1>Speel <span>stoelendans </span>met verschillende <span>gamemodes</span></h1>
        <p>Via de app te spelen, nu in de appstore en playstore</p>
        <button>Leer meer</button>
      </div>
    </section>
  )
}

export default Intro