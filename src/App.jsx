import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Section/Navbar'
import Hero from './Section/Hero'
import About from './Section/About'
import Product from './Section/Product'
import Footer from './Section/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Product />
    <Footer />
      
      
    </>
  )
}

export default App
