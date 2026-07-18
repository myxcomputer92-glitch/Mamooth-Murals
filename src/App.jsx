import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from './Components/Work'
import Testimonial from './Components/Testimonial'
import Why from './Components/Why'
import Services from './Components/Services'
import Rating from './Components/Rating'
import Questions from './Components/Questions'
import Section from './Components/Section'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Services/>
    <Testimonial/>
    <Why/>
    <Rating/>
    <Questions/>
    <Section/>
    <Footer/>
    </>
  )
}

export default App
