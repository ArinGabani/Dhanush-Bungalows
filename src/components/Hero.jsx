import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Premium Open Plots in Surat
      </motion.h1>

    </div>
  )
}