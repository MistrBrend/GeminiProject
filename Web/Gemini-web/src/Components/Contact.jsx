import React from 'react'
import '../Styles/Contact.scss'

function Contact() {
  return (
    <section className='contact'>
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="contact__containers">
        <div className="contact__containers-C">
          <img src="src\assets\mail.png" alt="mail" />
          <h2>Send us a mail</h2>
          <p>We answer u from monday till friday 9:00-17:00</p>
          <h3>Lorem@gmail.com</h3>
        </div>
        <div className="contact__containers-C">
          <img src="src\assets\phonenumber.png" alt="phonenumber" />
          <h2>Call us</h2>
          <p>We answer u from monday till friday 9:00-17:00</p>
          <h3>06 3242432445</h3>
        </div>
        <div className="contact__containers-C">
          <img src="src\assets\location.png" alt="location" />
          <h2>Come around</h2>
          <p>We are open from monday till friday 9:00-17:00</p>
          <h3>New york, Lorem 3212DP</h3>
        </div>
        </div>
    </section>
  )
}

export default Contact