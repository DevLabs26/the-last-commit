import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Story from './components/sections/Story'
import Challenges from './components/sections/Challenges'
import Timeline from './components/sections/Timeline'
import Prizes from './components/sections/Prizes'
import Rules from './components/sections/Rules'
import Register from './components/sections/Register'

function App() {
  
   const [loading, setLoading] = useState(true)
   const [scrollProgress, setScrollProgress] = useState(0)
   const [cursorPosition, setCursorPosition] = useState({
  x: 0,
  y: 0,
})
useEffect(() => {
  function handleScroll() {
    const scrollTop = window.scrollY

    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight

    const progress = (scrollTop / documentHeight) * 100

    setScrollProgress(progress)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
useEffect(() => {
  function handleMouseMove(event) {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    })
  }

  window.addEventListener('mousemove', handleMouseMove)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
    <div className="scroll-progress">
  <div
    className="scroll-progress-bar"
    style={{
      width: `${scrollProgress}%`,
    }}
  />
</div>
    <div
  className="cursor-light"
  style={{
    left: cursorPosition.x,
    top: cursorPosition.y,
  }}
/>
    {loading && (
  <div className="boot-screen">
    <p>INITIALIZING SYSTEM...</p>
    <p>LOADING CORE...</p>
    <p>ESTABLISHING CONNECTION...</p>
    <p>SYSTEM STATUS: CRITICAL<span className="boot-cursor">_</span></p>
  </div>
)}
      <Navbar />

      <main>
        <Hero />
        <Story />
        <Challenges />
        <Timeline />
        <Prizes />
        <Rules />
        <Register />
      </main>

      <Footer />
    </>
  )
}

export default App