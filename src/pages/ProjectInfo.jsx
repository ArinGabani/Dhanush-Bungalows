import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};


const ProjectInfo = () => {
  return (

    <div className="relative min-h-screen bg-[#fdf8f8] text-[#2a2a2a] overflow-hidden">

      {/* SOFT PREMIUM GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#d8a8aa] opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#f3d6d8] opacity-30 blur-[150px] rounded-full"></div>

      <div className="relative z-10">

        {/* HERO */}
       <section className="relative min-h-screen md:min-h-[80vh] lg:h-screen flex items-center md:items-center lg:items-center justify-center pt-20 md:pt-10 lg:pt-0 overflow-hidden bg-gradient-to-br from-[#fdfcfc] via-[#fdf8f8] to-[#faf5f5]">
          {/* ENHANCED ANIMATED BLOBS */}
          <motion.div
            animate={{ 
              x: [0, 100, -50, 0], 
              y: [0, -60, 40, 0],
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 90, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[800px] h-[800px] bg-gradient-to-br from-[#f3d6d8] to-[#d8a8aa] opacity-30 rounded-full blur-[140px] top-[-300px] left-[-300px]"
          />

          <motion.div
            animate={{ 
              x: [0, -80, 60, 0], 
              y: [0, 70, -40, 0],
              scale: [1, 0.9, 1.1, 1],
              rotate: [0, -90, -180, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[700px] h-[700px] bg-gradient-to-tl from-[#d8a8aa] to-[#b97c80] opacity-25 rounded-full blur-[130px] bottom-[-250px] right-[-200px]"
          />

          <motion.div
            animate={{ 
              x: [0, 40, -30, 0], 
              y: [0, -30, 30, 0],
              scale: [1, 1.2, 0.95, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[600px] h-[600px] bg-[#f7efef] opacity-40 rounded-full blur-[110px] top-[25%] left-[35%]"
          />

          {/* FLOATING PARTICLES */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}

          {/* SUBTLE GRID OVERLAY */}
          <div className="absolute inset-0 opacity-[0.015]" 
              style={{
                backgroundImage: `linear-gradient(#d8a8aa 1px, transparent 1px), linear-gradient(90deg, #d8a8aa 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} 
          />

          {/* CONTENT CONTAINER */}
          <div className="relative z-10 px-6 max-w-6xl mx-auto text-center lg:text-left">

            {/* MAIN HEADING WITH STAGGERED ANIMATION */}
            <div className="mb-8 overflow-hidden">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-9xl font-heading leading-tight"
              >
                <motion.span 
                  className="block bg-gradient-to-r from-[#d8a8aa] via-[#c99295] to-[#b97c80] bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Dhanush
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="block text-[#2a2a2a] mt-2"
                >
                  Bungalows
                </motion.span>
              </motion.h1>
            </div>

            {/* TAGLINE */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-xl md:text-3xl text-[#666] max-w-4xl mx-auto font-light leading-relaxed mb-4"
            >
              Spacious Open Plots Crafted for a {' '}
              <span className="text-[#b97c80] font-medium">Modern</span> &{' '}
              <span className="text-[#d8a8aa] font-medium">Elegant</span> Lifestyle
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* PRIMARY CTA */}
              <Link to="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-4 bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white rounded-full font-semibold shadow-2xl shadow-[#d8a8aa]/40 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Plots

                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </span>

                  {/* ANIMATED SHINE EFFECT */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.button>
              </Link>

              {/* SECONDARY CTA */}
              <a href="https://www.google.com/maps/place/DHANUSH+BUNGALOWS/@21.2282268,72.7601509,773m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3be04c7ca7106f3f:0x73e5a5c159b0b8ec!2sDhanush+Bungalow+Rd,+Okha,+Gujarat+395005!3b1!8m2!3d21.2282218!4d72.7627258!16s%2Fg%2F11yw66gdcp!3m5!1s0x3be04d007bbba167:0x1afbc56fea8f3ef4!8m2!3d21.2287398!4d72.7605411!16s%2Fg%2F11y3q6zhc3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white/80 backdrop-blur-md text-[#b97c80] rounded-full font-semibold border-2 border-[#d8a8aa]/30 hover:border-[#d8a8aa]/60 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Site Map
                </motion.button>
              </a>
            </motion.div>

            {/* FEATURE PILLS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-16"
            >
              {[
                { icon: '🏡', text: 'Only 60 Plots' },
                { icon: '🔐', text: 'Fully Gated Community' },
                { icon: '✨', text: 'Low Maintainence Society' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center gap-2 px-5 py-2 bg-white/50 backdrop-blur-md rounded-full border border-[#d8a8aa]/20 shadow-md"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-[#666] font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* SECTION 1 INFORMATION */}
        <section className="relative py-32 px-6 md:px-20 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdf8f8] via-white to-[#faf5f5]" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#d8a8aa]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#b97c80]/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">

              {/* Image side with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Decorative border accent */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#d8a8aa]/30 to-[#b97c80]/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#d8a8aa]/5 to-transparent z-10 pointer-events-none" />
                  
                  <img 
                    src="Image/DhanushLayout.png" 
                    alt="Premium Living at Dhanush Bungalows"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000 ease-out"
                  />
                </div>

                {/* Floating accent element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] rounded-2xl opacity-20 blur-2xl" />
              </motion.div>

              {/* Content side with refined typography */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Premium badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d8a8aa]/10 to-[#b97c80]/10 rounded-full border border-[#d8a8aa]/20"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80]" />
                  <span className="text-sm font-medium bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                    RERA Approved Premium Development
                  </span>
                </motion.div>

                {/* Heading with enhanced styling */}
                <h2 className="lg:text-5xl md:text-6xl text-4xl font-heading leading-tight">
                  <span className="block bg-gradient-to-r from-[#d8a8aa] via-[#c99295] to-[#b97c80] bg-clip-text text-transparent">
                    Premium Living
                  </span>
                  <span className="block text-[#2a2a2a] mt-2">
                    Experience
                  </span>
                </h2>

                {/* Description with better spacing */}
                <p className="text-lg md:text-xl text-[#666] leading-relaxed font-light max-w-xl space-y-3">
                  <span className="block">
                    Experience a refined and elevated lifestyle at <span className="text-[#b97c80] font-medium">Dhanush Bungalows</span>, where every detail is thoughtfully designed to offer comfort, space, and long-term value. With well-planned open plots, wide internal roads, and a peaceful, pollution-free environment, it is the perfect destination to build your dream home exactly the way you envision it.
                  </span>

                  <span className="block">
                    With rapid development in the area and rising land value, your investment here is not just secure—it’s designed to appreciate over time.
                  </span>
                </p>

                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#d8a8aa] to-[#b97c80]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#2a2a2a]">60 Exclusive Plots</h3>
                    <p className="text-sm text-[#888]">East & West Facing Plots • Vastu-Aligned Planning • 20 Plots per Lane</p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#d8a8aa] to-[#b97c80]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#2a2a2a]">Prime Location</h3>
                    <p className="text-sm text-[#888]">Block no 133 Dhanush bungalows Road Okha, Near New Gauravpath Road, Surat - 395005</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link to="/gallery">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group mt-8 px-8 py-4 bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white rounded-full font-medium shadow-lg shadow-[#d8a8aa]/30 hover:shadow-xl hover:shadow-[#d8a8aa]/40 transition-all duration-300 flex items-center gap-3"
                  >
                    <span>Explore Plots</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>       

      {/* SECTION 2 WHY CHOOSE DHANUSH BUNGALOWS ? HIGHLIGHTS & AMENITIES */}
        <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#fdfbfb] via-[#fdf8f8] to-[#faf5f5] relative overflow-hidden">
            
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d8a8aa]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#b97c80]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
              
              {/* Section Header */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#d8a8aa]/20 
                rounded-full text-sm font-medium text-[#b97c80] mb-4">
                  Why Choose Dhanush Bungalows
                </span>
                <h2 className="text-4xl md:text-6xl font-heading leading-tight">
                  <span className="bg-gradient-to-r from-[#b97c80] via-[#d8a8aa] to-[#b97c80] 
                  bg-clip-text text-transparent">
                    Designed for Your
                  </span>
                  <br />
                  <span className="text-[#2d2d2d]">Dream Lifestyle</span>
                </h2>
              </motion.div>

              {/* SVG Connecting Lines (Behind Cards) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <defs>
                  {/* Gradient for Highlight lines */}
                  <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b97c80" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d8a8aa" stopOpacity="0.3" />
                  </linearGradient>
                  {/* Gradient for Amenity lines */}
                  <linearGradient id="amenityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d8a8aa" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#b97c80" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Connecting Lines - Highlights (Left side path) */}
                {/* Line from Row 1 Highlight to Row 3 Highlight */}
                <motion.path
                  d="M 25% 12% Q 20% 30% 25% 36%"
                  stroke="url(#highlightGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                
                {/* Line from Row 3 Highlight to Row 5 Highlight */}
                <motion.path
                  d="M 25% 36% Q 20% 54% 25% 60%"
                  stroke="url(#highlightGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  viewport={{ once: true }}
                />

                {/* Connecting Lines - Amenities (Right side path) */}
                {/* Line from Row 1 Amenity to Row 3 Amenity */}
                <motion.path
                  d="M 75% 12% Q 80% 30% 75% 36%"
                  stroke="url(#amenityGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                
                {/* Line from Row 3 Amenity to Row 5 Amenity */}
                <motion.path
                  d="M 75% 36% Q 80% 54% 75% 60%"
                  stroke="url(#amenityGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  viewport={{ once: true }}
                />

                {/* Opposite side connecting lines */}
                {/* Line from Row 2 Amenity to Row 4 Amenity */}
                <motion.path
                  d="M 25% 24% Q 20% 42% 25% 48%"
                  stroke="url(#amenityGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  viewport={{ once: true }}
                />

                {/* Line from Row 4 Amenity to Row 6 Amenity */}
                <motion.path
                  d="M 25% 48% Q 20% 66% 25% 72%"
                  stroke="url(#amenityGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  viewport={{ once: true }}
                />

                {/* Line from Row 2 Highlight to Row 4 Highlight */}
                <motion.path
                  d="M 75% 24% Q 80% 42% 75% 48%"
                  stroke="url(#highlightGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  viewport={{ once: true }}
                />

                {/* Line from Row 4 Highlight to Row 6 Highlight */}
                <motion.path
                  d="M 75% 48% Q 80% 66% 75% 72%"
                  stroke="url(#highlightGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  viewport={{ once: true }}
                />

                {/* Connection Dots at intersection points */}
                {[
                  { x: "25%", y: "12%", type: "highlight" },
                  { x: "75%", y: "12%", type: "amenity" },
                  { x: "25%", y: "24%", type: "amenity" },
                  { x: "75%", y: "24%", type: "highlight" },
                  { x: "25%", y: "36%", type: "highlight" },
                  { x: "75%", y: "36%", type: "amenity" },
                  { x: "25%", y: "48%", type: "amenity" },
                  { x: "75%", y: "48%", type: "highlight" },
                  { x: "25%", y: "60%", type: "highlight" },
                  { x: "75%", y: "60%", type: "amenity" },
                  { x: "25%", y: "72%", type: "amenity" },
                  { x: "75%", y: "72%", type: "highlight" },
                ].map((dot, i) => (
                  <motion.circle
                    key={i}
                    cx={dot.x}
                    cy={dot.y}
                    r="4"
                    fill={dot.type === "highlight" ? "#b97c80" : "#d8a8aa"}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </svg>

              {/* Zigzag Layout */}
              <div className="space-y-8 relative" style={{ zIndex: 1 }}>

                {/* Row 1: Project Highlight (LEFT) + Amenity (RIGHT) */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* LEFT - Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">🏛️</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Highlight
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            Under SMC Jurisdiction
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Official approval and governance under Surat Municipal Corporation
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* RIGHT - Amenity */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">🛣️</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Amenity
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            25ft Wide Internal Roads
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Smooth connectivity throughout the community
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Row 2: Amenity (LEFT) + Highlight (RIGHT) */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* LEFT - Amenity */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">🛝</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Amenity
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            Kids Area & Badmintion Court & Jog Track
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Play, Relax & Stay Active, Where Fun Meets Fitness
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* RIGHT - Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">🧭</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Highlight
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            East & West Facing Plots
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Choose your preferred direction for optimal sunlight
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Row 3: Highlight (LEFT) + Amenity (RIGHT) */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* LEFT - Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">📈</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Highlight
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            High Investment Potential
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Strong ROI in a rapidly developing area
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* RIGHT - Amenity */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">💧</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Amenity
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            Water & Drainage System
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Modern infrastructure for hassle-free living
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Row 4: Amenity (LEFT) + Highlight (RIGHT) */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* LEFT - Amenity */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                          rounded-xl flex items-center justify-center flex-shrink-0
                          group-hover:scale-110 transition-all duration-300">

                          <img 
                            src="./GardenBench.png"   // 👈 put your image path here
                            alt="Garden Bench"
                            className="w-10 h-10 object-contain"
                          />

                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Amenity
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            Landscaped Garden Seating
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Relax in Nature’s Comfort - Sit Back. Breathe. Relax.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* RIGHT - Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-green-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">🌳</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Highlight
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            Green & Peaceful Environment
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Escape the city chaos in nature's embrace
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Row 5: Highlight (LEFT) + Amenity (RIGHT) */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* LEFT - Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">🔒</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Highlight
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            Secure Gated Community
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Peace of mind with controlled access
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* RIGHT - Amenity */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">🚪</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Amenity
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            Dedicated Gazebo Area
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            A Space for Community Gatherings
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Row 6: Amenity (LEFT) + Highlight (RIGHT) */}
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* LEFT - Amenity */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                          rounded-xl flex items-center justify-center flex-shrink-0
                          group-hover:scale-110 transition-all duration-300">
                          <img 
                            src="./SolarPanel.png"   // 👈 put your image path here
                            alt="Garden Bench"
                            className="w-10 h-10 object-contain"
                          />

                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Amenity
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            5 kW Solar Power System
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Solar Power Supports Street Lights & Common Area Lights for Low Maintenance
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* RIGHT - Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm 
                    border border-[#e8dada]/50 shadow-md hover:shadow-xl 
                    transition-all duration-300 group-hover:border-[#d8a8aa]/40
                    group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-600/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                        rounded-xl flex items-center justify-center flex-shrink-0
                        group-hover:scale-110 transition-all duration-300">
                          <span className="text-4xl">✅</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <span className="text-xs font-semibold text-[#b97c80] uppercase tracking-wider">
                            Highlight
                          </span>
                          <h3 className="font-semibold text-[#2d2d2d] text-2xl mt-1 
                          group-hover:text-[#b97c80] transition-colors">
                            NA Plan Approved
                          </h3>
                          <p className="text-sm text-[#777] mt-2">
                            Legally compliant with all necessary approvals
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>

              {/* Bottom CTA Badge */}
              <Link to="/gallery">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-16 text-center"
                >
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r 
                  from-[#b97c80] to-[#d8a8aa] text-white rounded-full shadow-2xl
                  hover:shadow-[#d8a8aa]/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <span className="text-2xl">🎯</span>
                    <span className="font-semibold text-lg">Your Perfect Plot Awaits</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </motion.div>
              </Link> 
            </div>
        </section>

        {/* SECTION 3 CONNECTIVITY*/}
        <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#faf6f6] via-[#f7efef] to-[#fdefef]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#d8a8aa]/20 
                rounded-full text-sm font-medium text-[#b97c80] shadow-sm">
                  Strategic Location
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-[#b97c80] via-[#d8a8aa] to-[#b97c80] 
                bg-clip-text text-transparent">
                  Connected to
                </span>
                <br />
                <span className="text-[#2d2d2d]">Everything That Matters</span>
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="text-lg text-[#666] leading-relaxed mb-8"
              >
                Experience unparalleled convenience at Dhanush Bungalows. With premium schools, 
                healthcare, retail, and entertainment within arm's reach, every day brings effortless living.
              </motion.p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: "🏫", text: "Schools, Hospitals & D-Mart", sub: "within 5 km radius" },
                  { icon: "🛣️", text: "300 ft Outer Ring Road", sub: "just 2 minutes away" },
                  { icon: "✨", text: "New Gaurav Path Road", sub: "400 meters proximity" },
                  { icon: "🌟", text: "120 ft Wide Main Road", sub: "proposed frontage" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-4 bg-white/40 backdrop-blur-sm 
                    rounded-xl border border-[#d8a8aa]/10 hover:border-[#d8a8aa]/30
                    hover:shadow-lg hover:bg-white/60 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                    rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#2d2d2d] group-hover:text-[#b97c80] transition-colors">
                        {item.text}
                      </p>
                      <p className="text-sm text-[#888] mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SVG ILLUSTRATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Background Elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#d8a8aa]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#b97c80]/10 rounded-full blur-3xl"></div>
              
              {/* Main SVG Container */}
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-[#d8a8aa]/20">
                <svg viewBox="0 0 400 400" className="w-full h-auto">
                  {/* Central Home Icon */}
                  <g>
                    {/* Home Base */}
                    <motion.path
                      d="M 180 220 L 180 280 L 220 280 L 220 220 Z"
                      fill="#b97c80"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    {/* Roof */}
                    <motion.path
                      d="M 200 180 L 160 220 L 240 220 Z"
                      fill="#d8a8aa"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                    {/* Door */}
                    <rect x="190" y="250" width="20" height="30" fill="white" rx="2"/>
                    {/* Window */}
                    <rect x="185" y="235" width="12" height="10" fill="white" rx="1"/>
                    <rect x="203" y="235" width="12" height="10" fill="white" rx="1"/>
                  </g>

                  {/* Orbiting Connection Nodes */}
                  {[
                    { angle: 0, icon: "🏫", label: "International School", color: "#4CAF50" },
                    { angle: 90, icon: "🏥", label: "Multispecialty Hospital", color: "#2196F3" },
                    { angle: 180, icon: "🛒", label: "Shopping", color: "#FF9800" },
                    { angle: 270, icon: "🎭", label: "Entertainment", color: "#9C27B0" }
                  ].map((node, index) => {
                    const radius = 120;
                    const x = 200 + radius * Math.cos((node.angle * Math.PI) / 180);
                    const y = 200 + radius * Math.sin((node.angle * Math.PI) / 180);
                    
                    return (
                      <g key={index}>
                        {/* Connecting Line */}
                        <motion.line
                          x1="200"
                          y1="200"
                          x2={x}
                          y2={y}
                          stroke={node.color}
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.3 }}
                          transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                        />
                        
                        {/* Node Circle */}
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="30"
                          fill="white"
                          stroke={node.color}
                          strokeWidth="3"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          className="drop-shadow-lg"
                        />
                        
                        {/* Emoji Icon */}
                        <motion.text
                          x={x}
                          y={y + 8}
                          fontSize="24"
                          textAnchor="middle"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        >
                          {node.icon}
                        </motion.text>
                        
                        {/* Label */}
                        <motion.text
                          x={x}
                          y={y + 50}
                          fontSize="12"
                          fontWeight="600"
                          textAnchor="middle"
                          fill="#666"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        >
                          {node.label}
                        </motion.text>
                      </g>
                    );
                  })}

                  {/* Pulsing Center Glow */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="60"
                    fill="url(#centerGlow)"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  
                  {/* Gradient Definition */}
                  <defs>
                    <radialGradient id="centerGlow">
                      <stop offset="0%" stopColor="#d8a8aa" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#d8a8aa" stopOpacity="0"/>
                    </radialGradient>
                  </defs>

                  {/* Distance Indicators (Rings) */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="80"
                    fill="none"
                    stroke="#d8a8aa"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                    opacity="0.2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="#b97c80"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                    opacity="0.15"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </svg>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 
                  bg-gradient-to-r from-[#b97c80] to-[#d8a8aa] 
                  text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl 
                  text-xs md:text-sm font-semibold
                  whitespace-nowrap max-w-[90vw] text-center"
                >
                  🎯 Everything within 5 km
                </motion.div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SECTION 4 VIDEO WALKTHROUGH */}
         <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fdf7f7] to-white">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#d8a8aa]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#b97c80]/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(216,168,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(216,168,170,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md 
            border border-[#d8a8aa]/30 rounded-full text-sm font-semibold text-[#b97c80] 
            shadow-lg shadow-[#d8a8aa]/10 mb-6 hover:shadow-xl hover:shadow-[#d8a8aa]/20 
            transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
                Project Experience
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r 
                from-[#8b5a5f] via-[#b97c80] to-[#8b5a5f] bg-clip-text text-transparent leading-tight"
              >
                Experience the Vision
              </motion.h2>
          
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[#666] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              >
                Take a closer look at the project and explore the surroundings, layout, 
                and peaceful environment through our immersive site walkthrough.
              </motion.p>
            </motion.div>

            {/* Video Card with Advanced Effects */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-6xl mx-auto relative"
            >
              {/* Glow Effect Container */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#d8a8aa]/20 via-[#b97c80]/20 to-[#d8a8aa]/20 
              rounded-3xl blur-3xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative group">
                {/* Floating Border Animation */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d8a8aa] via-[#b97c80] to-[#d8a8aa] 
                rounded-3xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-700 
                animate-gradient-shift" />
                
                {/* Main Video Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 
                bg-white/5 backdrop-blur-sm transform transition-all duration-700 
                group-hover:scale-[1.02] group-hover:shadow-[0_25px_60px_-12px_rgba(216,168,170,0.4)]">

                  {/* Video Element */}
                  <div className="relative aspect-video">
                    <video
                      src="./Dhanush-site-video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    {/* Multi-Layer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent 
                    opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/30 rounded-tl-3xl" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/30 rounded-br-3xl" />

                    {/* Play Icon Overlay (appears on hover) */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md 
                      border-2 border-white/40 flex items-center justify-center 
                      transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>
                    </motion.div>

                    {/* Bottom Info Bar */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="absolute bottom-6 left-6 right-6 flex items-center justify-between 
                      bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 
                      transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                      transition-all duration-500"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-white font-medium text-sm md:text-base">
                          Virtual Site Tour
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        HD Quality
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Particles */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#d8a8aa]/40 blur-xl"
                />
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[#b97c80]/30 blur-xl"
                />
              </div>
            </motion.div>

            {/* Additional Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { icon: "🌟", title: "Surat Prime Gaurav Path Road", desc: "Located just 400m from Dhanush Bungalows.." },
                { icon: "🛣️", title: "300 ft Outer Ring Road", desc: "Smooth travel with direct highway access." },
                { icon: "📈", title: "Fast Developing Area", desc: "Rapidly growing with strong potential." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/60 backdrop-blur-sm border border-[#d8a8aa]/20 rounded-xl 
                  p-6 text-center shadow-lg hover:shadow-xl hover:border-[#d8a8aa]/40 
                  transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-[#8b5a5f] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#666]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <style jsx>{`
            @keyframes gradient-shift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient-shift {
              background-size: 200% 200%;
              animation: gradient-shift 3s ease infinite;
            }
          `}</style>
        </section>
        
        {/* CTA */}
        <section className="relative py-32 px-6 overflow-hidden">
      
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdf7f7] via-[#f7efef] to-[#fdf7f7]">
            {/* Animated Gradient Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#d8a8aa]/30 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#b97c80]/20 to-transparent rounded-full blur-3xl"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(216,168,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(216,168,170,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md 
              border-2 border-[#d8a8aa]/30 rounded-full text-sm font-semibold text-[#b97c80] 
              shadow-lg shadow-[#d8a8aa]/20">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-[#d8a8aa] rounded-full"
                />
                Limited Availability
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center mb-6"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#8b5a5f] via-[#d8a8aa] to-[#b97c80] 
                bg-clip-text text-transparent inline-block">
                  Book Your Dream
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#b97c80] via-[#d8a8aa] to-[#8b5a5f] 
                bg-clip-text text-transparent inline-block">
                  Plot Today
                </span>
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#555] text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed"
            >
              Secure your investment in paradise. Limited plots available.
            </motion.p>

            {/* CTA Buttons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-5 mb-16"
            >
              
              {/* Primary CTA - Call Now */}
              <a href="tel:+919824386300">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] 
                  text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl 
                  shadow-[#d8a8aa]/40 hover:shadow-[#d8a8aa]/60 transition-all duration-300 
                  min-w-[280px] flex items-center justify-center gap-3"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <svg className="w-6 h-6 relative z-10 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>

                  <span className="relative z-10">Call Now: 9824386300</span>
                </motion.button>
              </a>

              {/* Secondary CTAs */}
              <div className="flex gap-4 flex-wrap justify-center">
                
                {/* Map Button */}
                <a 
                  href="https://www.google.com/maps/place/DHANUSH+BUNGALOWS/@21.2287398,72.7581593,386m/data=!3m1!1e3!4m10!1m2!2m1!1sdhanush+bungalows!3m6!1s0x3be04d007bbba167:0x1afbc56fea8f3ef4!8m2!3d21.2287398!4d72.7605411!15sChFkaGFudXNoIGJ1bmdhbG93c1oTIhFkaGFudXNoIGJ1bmdhbG93c5IBE2hvdXNpbmdfZGV2ZWxvcG1lbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTklhSEoxUmxkbkVBReABAPoBBQjGARBK!16s%2Fg%2F11y3q6zhc3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-white/80 backdrop-blur-md border-2 border-[#d8a8aa]/40 
                    text-[#8b5a5f] px-8 py-5 rounded-full text-lg font-semibold shadow-lg 
                    hover:bg-[#d8a8aa] hover:text-white hover:border-[#d8a8aa] 
                    transition-all duration-300 flex items-center gap-3"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    View Map
                  </motion.button>
                </a>

                {/* Whatsapp Button */}
                <a
                  href="https://wa.me/919824386300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-white/80 backdrop-blur-md border-2 border-[#d8a8aa]/40 
                    text-[#8b5a5f] px-8 py-5 rounded-full text-lg font-semibold shadow-lg 
                    hover:bg-[#d8a8aa] hover:text-white hover:border-[#d8a8aa] 
                    transition-all duration-300 flex items-center gap-3"
                  >
                    <FaWhatsapp className="text-xl"/>
                    Whatsapp
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  ),
                  title: "RERA Approved", 
                  desc: "Fully certified project" 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  ),
                  title: "Quick Response", 
                  desc: "24/7 support available" 
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  ),
                  title: "Plot Loan Facility", 
                  desc: "Easy financing available for plot purchase." 
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl 
                  bg-white/60 backdrop-blur-sm border border-[#d8a8aa]/20 
                  shadow-lg hover:shadow-xl hover:border-[#d8a8aa]/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 
                  flex items-center justify-center text-[#b97c80] mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#8b5a5f] mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-[#666]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Action Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex justify-center"
            >
            </motion.div>
          </div>

          {/* Corner Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-20 h-20 border-2 border-[#d8a8aa]/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-16 h-16 border-2 border-[#b97c80]/20 rounded-full"
          />
        </section>

      </div>
    </div>
  );
};

export default ProjectInfo;
