import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0 }
}

const MotionArticle = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ delay: 0.2, type: 'easeInOut', duration: 0.3 }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.article>
  )
}

export default MotionArticle
