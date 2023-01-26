import '../Styles/App.scss'
import Navigation from '../Components/Navigation'
import Intro from '../Components/Intro'

function App() {

  return (
    <body>
      <div className='Landing-page'>
          <Navigation/>
          <Intro/>
      </div>
      <main></main>
    </body>
  )
}

export default App
