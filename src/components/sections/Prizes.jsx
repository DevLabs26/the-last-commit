import { motion, useMotionValue, useSpring } from 'framer-motion'
import './Prizes.css'
function PrizeCard({ prize, index }) {
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
      className="prize-card"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
    >
      <motion.div
        className="prize-spotlight"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      <span className="prize-place">
        {prize.place}
      </span>

      <div className="prize-content">
        <h3>{prize.title}</h3>

        <p>{prize.description}</p>
      </div>
    </motion.article>
  )
}
function Prizes() {
  const prizes = [
    {
      place: '01',
      title: 'THE FINAL BUILD',
      description:
        'The team that delivers the strongest overall solution and execution.',
    },
    {
      place: '02',
      title: 'THE BREAKTHROUGH',
      description:
        'A bold idea that challenges conventional thinking and creates something different.',
    },
    {
      place: '03',
      title: 'THE LAST STAND',
      description:
        'A project that solves a meaningful problem with impressive technical execution.',
    },
  ]

  return (
    <section className="prizes section-line" id="prizes">
      <motion.div
        className="prizes-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="prizes-label">// THE REWARD</p>

        <h2>
          BUILD.
          <br />
          WIN.
          <br />
          REMEMBER.
        </h2>
      </motion.div>

      <div className="prizes-grid">
        {prizes.map((prize, index) => (
  <PrizeCard
    key={prize.place}
    prize={prize}
    index={index}
  />
))}
      </div>
    </section>
  )
}

export default Prizes