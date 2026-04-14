import { motion } from "framer-motion"

const plots = [
  { size: "150 sq. yard", price: "₹25 Lakhs" },
  { size: "200 sq. yard", price: "₹32 Lakhs" },
  { size: "250 sq. yard", price: "₹40 Lakhs" },
]

export default function Plots() {
  return (
    <div className="py-16 px-6 bg-gray-100">
      
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Available Plots
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plots.map((plot, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{plot.size}</h3>
            <p className="text-gray-600 mt-2">{plot.price}</p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              View Details
            </button>
          </motion.div>

        ))}
      </div>
    </div>
  )
}