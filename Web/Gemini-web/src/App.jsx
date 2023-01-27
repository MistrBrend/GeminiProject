import '../src/Styles/App.scss'
import Navigation from './Components/Navigation'
import Intro from './Components/Intro'
import HowItWorks from './Components/HowItWorks'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <body>
      
      <div className='Landing-page'>
        <Navigation />
        <Intro/>
      </div>
      <main>
        <HowItWorks/>
        <Contact/>
      </main>
      <Footer/>
    </body>
  )
}

export default App
