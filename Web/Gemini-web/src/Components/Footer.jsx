import React from 'react'
import '../Styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="col1">
        <h2>RGB Stoelendans</h2>
        <img src="src\assets\google.svg" alt="download from google" />
        <img src="src\assets\apple.svg" alt="download from apple" />
      </div>
      <div className="col2">
        <h3>Navigation</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#hoeWerktHet">Hoe werkt het?</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="col3">
        <h3>App</h3>
        <ul>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer