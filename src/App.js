import React from 'react'

import Intro from './Components/Intro'
import About from './Components/About'
import Education from './Components/Education'
import Projcts from './Components/Projects.jsx'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="home">
      <Intro />
      <About />
      <Education />
      <Projcts />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
