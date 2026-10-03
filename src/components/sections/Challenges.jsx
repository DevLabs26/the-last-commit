import { motion, useMotionValue, useSpring } from 'framer-motion'
import './Challenges.css'
function ChallengeCard({ challenge, index }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
  })

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()

    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  return (
    <motion.article
      className="challenge-card"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
    >
      <motion.div
        className="challenge-spotlight"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      <span className="challenge-number">
        {challenge.number}
      </span>

      <h3>{challenge.title}</h3>

      <p>{challenge.description}</p>
    </motion.article>
  )
}
function Challenges() {
    const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)

const smoothX = useSpring(mouseX, {
  stiffness: 150,
  damping: 20,
})

const smoothY = useSpring(mouseY, {
  stiffness: 150,
  damping: 20,
})
  const challenges = [
    {
      number: '01',
      title: 'BUILD',
      description:
        'Create a working solution to a problem that actually matters. Turn an idea into something people can use.',
    },
    {
      number: '02',
      title: 'BREAK',
      description:
        'Question existing systems. Find weaknesses, rethink assumptions, and approach problems from a different angle.',
    },
    {
      number: '03',
      title: 'CHANGE',
      description:
        'Build something that leaves an impact. The final commit should solve more than a technical problem.',
    },
  ]

  return (
    <section className="challenges section-line" id="challenges">
      <motion.div
        className="challenges-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="challenges-label">// THE CHALLENGE</p>

        <h2>
          THREE WAYS
          <br />
          TO BUILD.
        </h2>
      </motion.div>

      <div className="challenge-grid">
        {challenges.map((challenge, index) => (
  <ChallengeCard
    key={challenge.number}
    challenge={challenge}
    index={index}
  />
))}
      </div>
    </section>
  )
}

export default Challenges