import { motion } from 'framer-motion'
import './ThirdSection.css'

const ThirdSection = () => {
  return (
    <section className="third-section">
      <motion.div
        className="third-box"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h3>Final Reveal</h3>
      </motion.div>
    </section>
  )
}

export default ThirdSection
