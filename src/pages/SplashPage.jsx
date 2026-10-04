"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const SplashPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="h-screen w-full bg-bg flex flex-col items-center justify-center overflow-hidden relative">
      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-ink mb-2">
            Namra Imtiaz
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-muted mb-8">Software Engineer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <p className="text-muted max-w-md mb-8">
            Full-stack engineer building multi-tenant SaaS, cloud-backed products and AI-powered systems, with a focus on
            reliable, production-ready software.
          </p>

          <Link to="/portfolio">
            <motion.button
              className="group bg-accent hover:opacity-90 text-on-accent font-bold py-3 px-8 rounded-lg flex items-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Portfolio
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 0.6,
                }}
              >
                <ArrowRight className="ml-2" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default SplashPage

