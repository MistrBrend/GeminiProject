import React, { useState, useEffect } from "react";
import '../Styles/Navigation.scss';

function Navigation() {
  const [navPadding, setnavPadding] = useState("1%");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#523CD6") : setnavColor("transparent");
    window.scrollY > 10 ? setnavPadding("0.7%") : setnavPadding("1%");
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header style={{
        backgroundColor: navColor,
        padding: navPadding,
        transition: "all 0.8s"
    }}>
        <div className="header__logo">
            <h1 className="logo">RGB Stoelendans</h1>
        </div>
        <nav className="header__nav">
            <ul>
                <li><a href="" className="links">Home</a></li>
                <li><a href="" className="links">Hoe werkt het?</a></li>
                <li><a href="" className="links">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation