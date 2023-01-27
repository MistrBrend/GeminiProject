import React, { useState, useEffect } from "react";
import '../Styles/Navigation.scss';

function Navigation() {
  const [navPadding, setnavPadding] = useState("1% 0");
  const [navColor, setnavColor] = useState("#0002");
  const [navTitle, setnavTitle] = useState("2rem");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#523CD6") : setnavColor("#0002");
    window.scrollY > 10 ? setnavPadding("0.7%") : setnavPadding("1% 0");
    window.scrollY > 10 ? setnavTitle("1.8rem") : setnavTitle("2rem")
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
            <h1 style={{
              fontSize: navTitle,
              transition: "all 2s"
            }} className="logo">RGB Stoelendans</h1>
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