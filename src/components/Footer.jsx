import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaFacebook />, label: "Facebook", href: "#" },
    { icon: <FaYoutube />, label: "YouTube", href: "#" }
  ];

  const quickLinks = [
    { name: "Project Info", href: "#project" },
    { name: "Gallery", href: "#gallery" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "RERA Details", href: "#rera" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white via-[#fdf8f8] to-[#faf5f5] overflow-hidden">
      
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-40 left-1/4 w-[600px] h-[600px] 
          bg-gradient-radial from-[#d8a8aa]/30 via-[#e8c8ca]/20 to-transparent 
          blur-3xl rounded-full"
        />
        
        {/* Bottom Right Accent */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] 
          bg-gradient-radial from-[#b97c80]/15 via-[#d8a8aa]/10 to-transparent 
          blur-3xl rounded-full"
        />

        {/* Bottom Left Accent */}
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] 
          bg-gradient-radial from-[#c99195]/12 via-[#e8c8ca]/8 to-transparent 
          blur-3xl rounded-full"
        />

        {/* Subtle Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 lg:text-left text-center">
        
        {/* Top Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          
          {/* Brand Column */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-3xl font-heading font-bold bg-gradient-to-r 
              from-[#b97c80] via-[#c99195] to-[#b97c80] bg-clip-text text-transparent mb-5">
                Dhanush Bungalows
              </h2>
            </motion.div>
            
            <p className="text-[#666] leading-relaxed mb-6 text-sm">
              Premium residential plots in Surat's most promising location. 
              Build your dream home with modern amenities and peaceful surroundings.
            </p>

            {/* RERA Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 
              bg-gradient-to-r from-[#b97c80]/10 to-[#d8a8aa]/10 
              border border-[#d8a8aa]/30 rounded-full text-xs text-[#b97c80] font-medium"
            >
              <span className="w-2 h-2 bg-[#b97c80] rounded-full animate-pulse" />
              RERA: PAA13759/010724/311226
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h3 className="text-sm font-semibold text-[#2d2d2d] mb-6 uppercase tracking-wider ">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#b97c80" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-[#666] hover:text-[#b97c80] transition-colors 
                    flex items-center gap-2 group cursor-pointer" 
                  >
                    <motion.span
                      className="w-1 h-1 bg-[#d8a8aa] rounded-full 
                      group-hover:w-2 group-hover:bg-[#b97c80] transition-all"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h3 className="text-sm font-semibold text-[#2d2d2d] mb-6 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-lg"
                >
                  📞
                </motion.span>
                <span className="text-[#666] group-hover:text-[#b97c80] transition-colors">
                  +91 9824386300
                </span>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="text-lg"
                >
                  📍
                </motion.span>
                <span className="text-[#666] group-hover:text-[#b97c80] transition-colors">
                  Okha, Chorasi, Surat
                </span>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <motion.span
                  whileHover={{ rotate: -10, scale: 1.2 }}
                  className="text-lg"
                >
                  ✉️
                </motion.span>
                <span className="text-[#666] group-hover:text-[#b97c80] transition-colors">
                  dhanushbungalows24@gmail.com
                </span>
              </motion.li>

            </ul>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h3 className="text-sm font-semibold text-[#2d2d2d] mb-6 uppercase tracking-wider">
              Connect
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 5,
                    backgroundColor: "#b97c80",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 h-10 flex items-center justify-center 
                  bg-gradient-to-br from-[#fdf8f8] to-[#f8f0f0] 
                  border border-[#d8a8aa]/20 rounded-full 
                  hover:border-[#b97c80] hover:shadow-lg hover:shadow-[#b97c80]/20
                  transition-all cursor-pointer group"
                  aria-label={social.label}
                >
                  <span className="text-base group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <p className="text-xs text-[#888] mb-3">Stay updated with latest offers</p>
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 8px 20px rgba(185, 124, 128, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-[#b97c80] to-[#c99195] 
                text-white text-sm font-medium rounded-lg 
                shadow-md shadow-[#b97c80]/20 hover:shadow-xl hover:shadow-[#b97c80]/30
                transition-all cursor-pointer"
              >
                Get Updates
              </motion.button>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Divider with Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-[#d8a8aa]/30 to-transparent"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="py-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          
          {/* Copyright */}
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-sm text-[#888]"
          >
            © {currentYear} Dhanush Bungalows. All rights reserved.
          </motion.p>

          {/* Legal Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex gap-6"
          >
            {legalLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -2, color: "#b97c80" }}
                className="text-xs text-[#888] hover:text-[#b97c80] transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

      </div>

      {/* Floating Elements - Decorative */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-20 w-3 h-3 bg-[#d8a8aa]/30 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-48 left-32 w-2 h-2 bg-[#b97c80]/20 rounded-full blur-sm"
      />

    </footer>
  );
}