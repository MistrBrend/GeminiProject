import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '../src/Styles/App.scss'
import Navigation from './Components/Navigation'
import Intro from './Components/Intro'
import HowItWorks from './Components/HowItWorks'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
      <Router>
        <div className="Landing-page">
        <Routes>
            <Route path="/" element={<Navigation />}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Intro />}/>
        </Routes>
        </div>
        <div id='HowItWorks'/>
        <Routes>
          <Route path="/" element={<HowItWorks />}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />}/>
        </Routes>
      </Router>
  )
}

export default App
