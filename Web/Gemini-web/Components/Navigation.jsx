import React from 'react'
import '../Styles/Navigation.scss';

function Navigation() {
  return (
    <header>
        <div className="header__logo">
            <h1 className="logo">RGB Stoelendans</h1>
        </div>
        <nav className="header__nav">
            <ul>
                <li><a href="" className="links">Home</a></li>
                <li><a href="" className="links">How does it work?</a></li>
                <li><a href="" className="links">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation