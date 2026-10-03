import { motion } from 'framer-motion'
import './Rules.css'

function Rules() {
  const rules = [
    {
      number: '01',
      title: 'BUILD SOMETHING REAL',
      description:
        'Your project should solve a meaningful problem or create a useful experience.',
    },
    {
      number: '02',
      title: 'WORK AS A TEAM',
      description:
        'Collaboration is part of the challenge. Build together and make every contribution count.',
    },
    {
      number: '03',
      title: 'RESPECT THE CLOCK',
      description:
        'All projects must be completed and submitted before the final deadline.',
    },
    {
      number: '04',
      title: 'OWN YOUR COMMIT',
      description:
        'Know your code, understand your decisions, and be ready to explain what you built.',
    },
  ]

  return (
    <section className="rules section-line" id="rules">
      <motion.div
        className="rules-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="rules-label">// THE PROTOCOL</p>

        <h2>
          KNOW
          <br />
          THE RULES.
        </h2>
      </motion.div>

      <div className="rules-list">
        {rules.map((rule, index) => (
          <motion.article
            className="rule-item"
            key={rule.number}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
          >
            <span className="rule-number">
              {rule.number}
            </span>

            <div className="rule-content">
              <h3>{rule.title}</h3>

              <p>{rule.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Rules