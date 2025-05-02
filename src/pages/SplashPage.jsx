"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const SplashPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    setIsLoaded(true)

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/10"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              opacity: 0,
            }}
            animate={{
              x: [Math.random() * dimensions.width, Math.random() * dimensions.width],
              y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            <span className="text-cyan-400">Namra</span> Imtiaz
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Developer & UI/UX Designer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <p className="text-gray-400 max-w-md mb-8">
            Passionate about creating innovative, user-centric digital solutions that bridge creativity and technical
            excellence.
          </p>

          <Link to="/portfolio">
            <motion.button
              className="group bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full flex items-center transition-all duration-300"
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

