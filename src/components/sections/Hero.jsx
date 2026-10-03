import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <motion.p
        className="hero-status"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SYSTEM STATUS: CRITICAL
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        THE
        <br />
        LAST COMMIT
      </motion.h1>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        One hackathon. One final build. One commit that changes everything.
      </motion.p>

      <motion.button
  className="hero-button"
  onClick={() => {
    document
      .getElementById('register')
      .scrollIntoView({ behavior: 'smooth' })
  }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.7 }}
>
  ENTER THE LAST COMMIT
</motion.button>
    </section>
  )
}

export default Hero