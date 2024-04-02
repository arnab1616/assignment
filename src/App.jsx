import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/partials/Navbar'
import HeroSection from './components/HeroSection'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Footer from './components/partials/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Section2/>
      <Section3 />
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </>
  )
}

export default App
