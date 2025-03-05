"use client"
import { motion } from "framer-motion"

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-300"
      whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(0, 231, 255, 0.2)" }}
    >
      <div className="bg-cyan-500 text-black p-3 rounded-lg w-fit mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

export default ServiceCard

