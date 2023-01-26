import '../src/Styles/App.scss'
import Navigation from './Components/Navigation'
import Intro from './Components/Intro'
import HowItWorks from './Components/HowItWorks'

function App() {

  return (
    <body>
      <div className='Landing-page'>
        <Navigation/>
        <Intro/>
      </div>
      <main>
        <HowItWorks/>
      </main>
    </body>
  )
}

export default App
