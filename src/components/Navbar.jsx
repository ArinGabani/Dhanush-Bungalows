import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: "Project Info", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "backdrop-blur-xl bg-white/80 shadow-lg shadow-[#d8a8aa]/10 border-b border-[#d8a8aa]/20" 
            : "backdrop-blur-md bg-white/60 border-b border-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4 md:py-5">
          
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              {/* Logo Icon */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="./favicon.png"
                  alt="Dhanush Bungalows"
                  className="w-full h-full object-contain p-1"
                />
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                    Dhanush
                  </span>
                  <span className={`ml-1 transition-colors duration-300 ${scrolled ? 'text-[#2a2a2a]' : 'text-[#555]'}`}>
                    Bungalows
                  </span>
                </h1>
                <p className="text-[10px] text-[#999] tracking-widest uppercase">Premium Living</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Hidden on tablet and mobile */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path

              return (
                <Link key={index} to={link.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="relative px-6 py-2.5 group"
                  >
                    {/* Background on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d8a8aa]/10 to-[#b97c80]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Link text */}
                    <span
                      className={`relative z-10 font-medium transition-colors duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent" 
                          : scrolled 
                            ? "text-[#555] group-hover:text-[#b97c80]"
                            : "text-[#666] group-hover:text-[#b97c80]"
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* CTA Button - Desktop only */}
          <a href="./Dhanush_Brochure.pdf" download className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white rounded-full font-medium shadow-lg shadow-[#d8a8aa]/30 hover:shadow-xl hover:shadow-[#d8a8aa]/40 transition-all duration-300"
            >
              <span>Download Brochure</span>
            </motion.button>
          </a>

          {/* Mobile & Tablet Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] shadow-lg"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white rounded-full origin-center transition-all"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-full h-0.5 bg-white rounded-full transition-all"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white rounded-full origin-center transition-all"
              />
            </div>
          </motion.button>

        </div>
      </motion.nav>

      {/* Mobile & Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile & Tablet Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-gradient-to-br from-white via-[#fdf8f8] to-[#faf5f5] shadow-2xl z-40 lg:hidden overflow-y-auto"
            >
              {/* Menu Content */}
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                
                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className="block"
                        >
                          <motion.div
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-6 py-4 rounded-2xl transition-all duration-300 ${
                              isActive 
                                ? "bg-gradient-to-r from-[#d8a8aa]/20 to-[#b97c80]/20 shadow-lg" 
                                : "hover:bg-white/50"
                            }`}
                          >
                            {/* Active indicator */}
                            {isActive && (
                              <motion.div
                                layoutId="mobileActiveIndicator"
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#d8a8aa] to-[#b97c80] rounded-r-full"
                              />
                            )}

                            <span
                              className={`text-lg font-medium ${
                                isActive
                                  ? "bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent"
                                  : "text-[#555]"
                              }`}
                            >
                              {link.name}
                            </span>
                          </motion.div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Mobile & Tablet CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 pt-6 border-t border-[#d8a8aa]/20"
                >
                  <a href="./Dhanush_Brochure.pdf" download className="block">
                    <button className="w-full py-4 bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white rounded-2xl font-semibold shadow-lg shadow-[#d8a8aa]/30 flex items-center justify-center gap-2">
                      <span>Download Brochure</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    </button>
                  </a>

                  {/* Contact Info */}
                  <div className="space-y-3 px-2">
                    <div className="flex items-center gap-3 text-sm text-[#666]">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#b97c80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span>9824386300</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#666]">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#b97c80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span>Okha, Chorasi, Surat</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}