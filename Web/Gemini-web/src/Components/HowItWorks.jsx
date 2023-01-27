import { useState } from 'react'
import React from 'react'
import '../Styles/HowItWorks.scss'
import GamemodesModal from './GamemodesModal'

function HowItWorks() {

    const [openInfoModal, setOpenInfoModal] = useState(false)

    return (
        <section className="HIW" >
            <div className="HIW__left">
                <div className="HIW__left--content">
                    <h1>Hoe werkt het? </h1>
                    <p>Onze game is stoelendans, maar niet zomaar <span>stoelendans</span>, Het werkt met een <span>app</span> waarmee je met <span>meerdere mensen</span> kunt meedoen.</p>
                    <p>Op je app krijg je een keus uit <span>4 kleuren</span>, nadat je een kleur kiest moet je op de <span>zitzak zitten die dezelfde kleur heeft</span>.</p>                <p>Je maakt of doet mee aan een game room. De maker kiest hierbij ook de gamemode.</p>
                    <p><span>De gamemodes zijn:</span></p>
                    <ul>
                        <li>Elimination</li>
                        <li>Gamble-elimination</li>
                        <li>Competitive</li>
                    </ul>
                    <button onClick={() => {setOpenInfoModal(true)}}>Full gamemodes info </button>
                </div>
            </div>
            <div className="HIW__right">
                <div className="HIW__right-up">
                    <img src="src\assets\PrototypeImage.png" alt="PrototypeImage" />
                </div>
                <div className="HIW__right-down">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui turpis.</h4>
                    <button>Full app design</button>
                </div>
                <div id='contact'/>
            </div>

            {openInfoModal && <GamemodesModal closeInfoModal={setOpenInfoModal}/>}
        </section>
  )
}

export default HowItWorks