import { motion, useScroll, useTransform } from 'framer-motion'
import './OverlayScene.css'

function OverlayScene() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 4])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <motion.div className="overlay-scene">
      <motion.h1 style={{ scale, opacity }} className="overlay-title">
        Zero Limits
      </motion.h1>
      <motion.p style={{ opacity }} className="overlay-subtitle">
        Scroll down to discover
      </motion.p>
    </motion.div>
  )
}

export default OverlayScene
