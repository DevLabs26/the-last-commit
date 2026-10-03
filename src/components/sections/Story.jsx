import { motion } from 'framer-motion'
import './Story.css'

function Story() {
  return (
    <section className="story section-line" id="story">
      <motion.div
        className="story-label"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        // THE MISSION
      </motion.div>

      <div className="story-content">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          THE SYSTEM
          <br />
          IS DYING.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The world has reached its final hour. Critical systems are
          collapsing, data is disappearing, and there is only one chance
          to build something that survives.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Developers, designers, hackers, and creators are called to one
          final challenge. Build something meaningful. Solve a real
          problem. Leave behind one final commit.
        </motion.p>
      </div>
    </section>
  )
}

export default Story