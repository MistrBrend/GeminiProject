import {Router, Routes, Route} from "react-router-dom"

import '../src/Styles/App.scss'
import Navigation from './Components/Navigation'
import Intro from './Components/Intro'
import HowItWorks from './Components/HowItWorks'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <Router>
      <Routes>
        <body>
          <div className='Landing-page'>
            <Route path="/" element={<Navigation />} />
            <Route path="/" element={<Intro />} />
          </div>
          <main>
            <Route path="/" element={<HowItWorks />} />
            <Route path="/" element={<Contact />} />
          </main>
          <Route path="/" element={<Footer />} />
        </body>
      </Routes>
    </Router>

    // <body>
    //   <div className='Landing-page'>
    //     <Navigation />
    //     <Intro/>
    //   </div>
    //   <main>
    //     <HowItWorks/>
    //     <Contact/>
    //   </main>
    //   <Footer/>
    // </body>
  )
}

export default App
