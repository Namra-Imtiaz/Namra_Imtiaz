"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

