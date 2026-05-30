import React, { useEffect, useRef, useState } from "react";
import blogs from "../data/blogs";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// ─── Construction Particle Canvas ───────────────────────────────────────────
function ConstructionParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle types: dot, cross (+), small square, triangle, diamond
    const SHAPES = ["dot", "cross", "square", "triangle", "diamond"];

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 5 + 2,
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      opacity: Math.random() * 0.25 + 0.05,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      rotSpeed: (Math.random() - 0.5) * 0.01,
      rot: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.5 ? "#c99295" : "#d8a8aa",
    }));

    // Connecting lines between nearby particles
    function drawLine(x1, y1, x2, y2, alpha) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(185, 124, 128, ${alpha * 0.4})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    function drawParticle(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.opacity;
      ctx.strokeStyle = p.hue;
      ctx.fillStyle = p.hue;
      ctx.lineWidth = 1;

      switch (p.shape) {
        case "dot":
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "cross":
          ctx.beginPath();
          ctx.moveTo(-p.size, 0); ctx.lineTo(p.size, 0);
          ctx.moveTo(0, -p.size); ctx.lineTo(0, p.size);
          ctx.stroke();
          break;
        case "square":
          ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size);
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size * 0.87, p.size * 0.5);
          ctx.lineTo(-p.size * 0.87, p.size * 0.5);
          ctx.closePath();
          ctx.stroke();
          break;
        case "diamond":
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size * 0.6, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size * 0.6, 0);
          ctx.closePath();
          ctx.stroke();
          break;
      }
      ctx.restore();
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            drawLine(particles[i].x, particles[i].y, particles[j].x, particles[j].y, 1 - dist / 120);
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rot += p.rotSpeed;
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
        drawParticle(p);
      });

      animId = requestAnimationFrame(loop);
    }

    loop();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

// ─── Floating Grid Lines ────────────────────────────────────────────────────
function GridLines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(185,124,128,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(185,124,128,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
}

// ─── Blog data ───────────────────────────────────────────────────────────────
 // Blog data are imported from blogs.json, which contains an array of blog objects with the following structure:

// ─── Easing helpers ──────────────────────────────────────────────────────────
const easeInOut = [0.43, 0.13, 0.23, 0.96];

// ─── Stagger container ───────────────────────────────────────────────────────
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeInOut } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: easeInOut } },
};

// ─── Blog Card ───────────────────────────────────────────────────────────────
function BlogCard({ blog, index, setSelectedBlog }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: easeInOut }}
      whileHover={{ y: -12, transition: { duration: 0.35, ease: easeInOut } }}
      className="group relative"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8a8aa]/30 to-[#b97c80]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />

      <div className="relative bg-white/80 backdrop-blur-sm border border-[#e8dada]/60 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#d8a8aa]/20 transition-all duration-500 group-hover:border-[#d8a8aa]/50 h-full flex flex-col">

        {/* Image */}
        <div className="relative overflow-hidden h-64">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: easeInOut }}
            src={blog.img}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="absolute top-4 left-4 px-3 py-1.5 bg-white/85 backdrop-blur-md rounded-full text-xs font-semibold text-[#b97c80] tracking-wide shadow-md"
          >
            {blog.tag}
          </motion.div>

          {/* Read time */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-full text-xs font-medium text-white/90">
            {blog.readTime} read
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.6, ease: easeInOut }}
            style={{ transformOrigin: "left" }}
            className="h-px bg-gradient-to-r from-[#d8a8aa] to-transparent mb-5"
          />

          <h3 className="text-xl font-semibold leading-snug group-hover:text-[#b97c80] transition-colors duration-300 tracking-tight">
            {blog.title}
          </h3>

          <p className="text-[#888] mt-3 leading-relaxed text-sm flex-1">
            {blog.desc}
          </p>

          {/* Read More */}
          <motion.button
            onClick={() => setSelectedBlog(blog)}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
            className="mt-6 inline-flex items-center gap-2 text-[#b97c80] font-semibold text-sm tracking-wide"
          >
            Read More

            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.25 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.button>
                  </div>
                </div>
        </motion.div>
  );
}

// ─── Main Blog Component ─────────────────────────────────────────────────────
function Blog() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Hero parallax
  const heroY = useTransform(smoothProgress, [0, 0.25], [0, -80]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);

  // Blob parallaxes
  const blob1Y = useTransform(smoothProgress, [0, 1], [0, -200]);
  const blob2Y = useTransform(smoothProgress, [0, 1], [0, 200]);

  // Section title ref
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen bg-[#fdf8f8] text-[#2a2a2a] overflow-x-hidden">

      {/* ── Scroll progress bar ── */}
      <motion.div
        style={{ scaleX: smoothProgress, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-gradient-to-r from-[#d8a8aa] via-[#c99295] to-[#b97c80]"
      />

      {/* ── Background layers ── */}
      <GridLines />
      <ConstructionParticles />

      {/* Static ambient glows */}
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#d8a8aa] opacity-10 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-150px] right-[-150px] w-[550px] h-[550px] bg-[#f3d6d8] opacity-15 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* Parallax blobs */}
        <motion.div
          style={{ y: blob1Y }}
          animate={{ x: [0, 80, -40, 0], scale: [1, 1.08, 0.94, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-200px] left-[-200px] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#f3d6d8] to-[#d8a8aa] opacity-25 blur-[130px] pointer-events-none"
        />
        <motion.div
          style={{ y: blob2Y }}
          animate={{ x: [0, -60, 40, 0], scale: [1, 0.92, 1.06, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-200px] right-[-200px] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#d8a8aa] to-[#b97c80] opacity-18 blur-[130px] pointer-events-none"
        />

        {/* Hero content with scroll fade + translateY */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: easeInOut }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 backdrop-blur-md rounded-full border border-[#d8a8aa]/30 shadow-lg mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80]"
            />
            <span className="text-sm font-semibold text-[#b97c80] tracking-wider uppercase">
              Dhanush Bungalows Blog
            </span>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.1 }}
              className="text-7xl md:text-9xl font-heading leading-tight"
            >
              <span className="block bg-gradient-to-r from-[#d8a8aa] via-[#c99295] to-[#b97c80] bg-clip-text text-transparent">
                Dhanush
              </span>
              <span className="block text-[#2a2a2a]">Insights</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeInOut, delay: 0.35 }}
            className="mt-8 text-xl md:text-2xl text-[#777] leading-relaxed max-w-3xl mx-auto"
          >
            Explore luxury living, premium amenities, smart investment
            opportunities, and modern lifestyle inspirations.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeInOut, delay: 0.55 }}
            className="mt-12 flex items-center justify-center gap-4 flex-wrap"
          >
            <a href="#Articles">
              <motion.button
                whileHover={{ scale: 1.06, y: -3, boxShadow: "0 24px 60px rgba(185,124,128,0.45)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white font-semibold shadow-xl shadow-[#d8a8aa]/30 tracking-wide"
              >
                Explore Articles
              </motion.button>
            </a>
            <a href="tel:+919824386300">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="px-10 py-4 rounded-full bg-white/70 backdrop-blur-sm border border-[#d8a8aa]/40 text-[#b97c80] font-semibold shadow-md tracking-wide"
              >
                Contact Us
              </motion.button>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-[#aaa] tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-[#d8a8aa] to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS ROW
      ═══════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: easeInOut }}
        className="relative z-10 py-12 px-6"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
          {[
            { val: "6+", label: "Articles" },
            { val: "500+", label: "Happy Residents" },
            { val: "10+", label: "Acres of Green" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: easeInOut }}
              className="text-center bg-white/60 backdrop-blur-sm border border-[#e8dada]/50 rounded-2xl py-6 px-4 shadow-sm"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#b97c80] to-[#d8a8aa] bg-clip-text text-transparent">{s.val}</div>
              <div className="text-sm text-[#999] mt-1 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════
          BLOG SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="Articles" className="relative z-10 py-24 px-6 md:px-12 lg:px-20">

        {/* Section title */}
        <div ref={sectionRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="inline-block px-5 py-2 bg-white/60 backdrop-blur-sm border border-[#d8a8aa]/25 rounded-full text-xs font-semibold text-[#b97c80] mb-5 tracking-widest uppercase"
          >
            Latest Articles
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: easeInOut }}
            className="text-5xl md:text-6xl font-heading leading-tight"
          >
            <span className="bg-gradient-to-r from-[#b97c80] via-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
              Luxury Living
            </span>
            <br />
            <span className="text-[#2a2a2a]">Stories & Insights</span>
          </motion.h2>

          {/* Decorative underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={sectionInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: easeInOut }}
            style={{ transformOrigin: "center" }}
            className="mt-6 mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#d8a8aa] to-transparent"
          />
        </div>

        {/* Cards grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={i}
              setSelectedBlog={setSelectedBlog}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-6" ref={ctaRef}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.85, ease: easeInOut }}
          className="max-w-5xl mx-auto text-center bg-white/65 backdrop-blur-md border border-[#e8dada]/50 rounded-[44px] p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d8a8aa]/12 to-[#b97c80]/8 pointer-events-none" />

          {/* Animated orbs inside card */}
          <motion.div
            animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-[#d8a8aa] opacity-15 blur-[60px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] bg-[#f3d6d8] opacity-20 blur-[60px] rounded-full pointer-events-none"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full border border-[#d8a8aa]/25 text-xs text-[#b97c80] font-semibold tracking-widest uppercase mb-6 shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#b97c80]" />
              Premium Living
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: easeInOut }}
              className="text-5xl md:text-6xl font-heading leading-tight"
            >
              <span className="bg-gradient-to-r from-[#b97c80] to-[#d8a8aa] bg-clip-text text-transparent">Experience</span>
              <br />
              <span className="text-[#2a2a2a]">Luxury Living</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.38, ease: easeInOut }}
              className="mt-6 text-lg text-[#777] max-w-2xl mx-auto leading-relaxed"
            >
              Discover premium plots, elegant surroundings, and a future-ready
              lifestyle at Dhanush Bungalows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center justify-center gap-4 flex-wrap"
            >
              <a href="tel:+919824386300">
                <motion.button
                  whileHover={{ scale: 1.06, y: -3, boxShadow: "0 20px 50px rgba(185,124,128,0.4)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="px-10 py-4 bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white rounded-full font-semibold shadow-xl shadow-[#d8a8aa]/30 tracking-wide"
                >
                  Contact Now
                </motion.button>
              </a>
              <a href="/gallery">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="px-10 py-4 border border-[#d8a8aa]/50 text-[#b97c80] rounded-full font-semibold bg-white/50 backdrop-blur-sm tracking-wide"
                >
                  View Plots
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BLOG SIDE PANEL
      ═══════════════════════════════════════════════════════ */}

      <AnimatePresence>

        {selectedBlog && (

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.7,
              ease: easeInOut,
            }}
            className="fixed inset-0 z-[999] bg-[#fdf8f8] overflow-y-auto"
          >

            {/* Background Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#d8a8aa]/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#f3d6d8]/30 blur-[140px] rounded-full"></div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-2xl text-[#b97c80]"
            >
              ✕
            </button>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">

              {/* Image */}
              <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={selectedBlog.img}
                alt={selectedBlog.title}
                className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
              />

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mt-8">

                <div className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-[#d8a8aa]/20 text-sm font-semibold text-[#b97c80]">
                  {selectedBlog.tag}
                </div>

                <div className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-[#d8a8aa]/20 text-sm text-[#777]">
                  {selectedBlog.readTime} read
                </div>
              </div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 text-5xl md:text-7xl font-heading leading-tight"
              >
                <span className="bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                  {selectedBlog.title}
                </span>
              </motion.h1>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 text-[#555] [&_h1]:text-5xl [&_h1]:font-heading [&_h1]:font-bold [&_h1]:text-[#2a2a2a] [&_h1]:mb-8 [&_h1]:mt-16 [&_h1]:leading-tight [&_h2]:text-4xl [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:text-[#2a2a2a] [&_h2]:mb-6 [&_h2]:mt-14 [&_h2]:leading-tight [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#2a2a2a] [&_h3]:mb-4 [&_h3]:mt-10 [&_p]:text-lg [&_p]:leading-[2] [&_p]:mb-7 [&_p]:text-[#666] [&_strong]:text-[#2a2a2a] [&_strong]:font-semibold [&_ul]:mt-6 [&_ul]:mb-8 [&_ul]:pl-6 [&_li]:mb-3 [&_li]:list-disc [&_li]:text-[#666] [&_blockquote]:border-l-4 [&_blockquote]:border-[#d8a8aa] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-[#777] "
                dangerouslySetInnerHTML={{
                  __html: selectedBlog.content,
                }}
              />

            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}

export default Blog;