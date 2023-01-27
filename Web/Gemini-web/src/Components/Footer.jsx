import React from 'react'
import '../Styles/Footer.scss'

function Footer() {
  return (
    <section className="footer">
      <div className="footer__title">
        <h2>RGB Stoelendans</h2>
        <img src="src\assets\apple.svg" alt="appstore button" />
        <img src="src\assets\google.svg" alt="playstore button" />
      </div>
      <div className="footer__nav buttons">
        <h3>Navigation</h3>
        <ul>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
        </ul>
      </div>
      <div className="footer__app buttons" >
        <h3>App</h3>
        <ul>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
          <li><a href="">Lorem</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer