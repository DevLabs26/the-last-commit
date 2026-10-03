import { useState } from 'react'
import { motion } from 'framer-motion'
import './Register.css'

function Register() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    setSubmitted(true)
  }

  return (
    <section className="register" id="register">
      <motion.div
        className="register-header"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="register-label">// FINAL TRANSMISSION</p>

        <h2>
          MAKE YOUR
          <br />
          LAST COMMIT.
        </h2>

        <p className="register-description">
          The clock is running. Your idea is waiting.
          Build something worth remembering.
        </p>
      </motion.div>

      <motion.form
        className="register-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="form-group">
          <label htmlFor="name">NAME</label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="team">TEAM NAME</label>

          <input
            id="team"
            type="text"
            placeholder="Enter your team name"
            required
          />
        </div>

        <button type="submit" className="register-button">
          INITIALIZE REGISTRATION
        </button>

        {submitted && (
          <p className="register-success">
            ✓ REGISTRATION INITIALIZED. SEE YOU AT THE FINAL COMMIT.
          </p>
        )}
      </motion.form>
    </section>
  )
}

export default Register