import { motion } from 'framer-motion'
import './Timeline.css'

function Timeline() {
  const events = [
    {
      time: 'DAY 01',
      title: 'THE SIGNAL',
      description: 'The challenge is revealed. Teams form and the clock begins.',
    },
    {
      time: 'DAY 02',
      title: 'THE BUILD',
      description: 'Ideas become prototypes. Teams turn concepts into working products.',
    },
    {
      time: 'DAY 03',
      title: 'THE COMMIT',
      description: 'Final testing, final fixes, and one last push to the repository.',
    },
    {
      time: 'FINAL',
      title: 'THE LAST COMMIT',
      description: 'Projects are submitted. The strongest builds face the final evaluation.',
    },
  ]

  return (
    <section className="timeline section-line" id="timeline">
      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="timeline-label">// THE CLOCK</p>

        <h2>
          TIME
          <br />
          IS RUNNING.
        </h2>
      </motion.div>

      <div className="timeline-list">
        {events.map((event, index) => (
          <motion.article
            className="timeline-item"
            key={event.time}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <span className="timeline-number">
              0{index + 1}
            </span>

            <span className="timeline-time">
              {event.time}
            </span>

            <div className="timeline-content">
              <h3>{event.title}</h3>

              <p>{event.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Timeline