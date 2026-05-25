import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── Animated counter hook ── */
function useCounter(target, inView, duration = 2) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target, duration]);
  return value;
}

/* ── Magnetic button ── */
function MagneticButton({ children, className, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/* ── Stat card with counter ── */
function StatCard({ value, suffix, label, delay, inView }) {
  const count = useCounter(value, inView, 2);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md border border-[#e8dada]/60 rounded-3xl p-8 shadow-lg cursor-default"
    >
      <span className="text-5xl font-black bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
        {count}{suffix}
      </span>
      <span className="mt-2 text-sm uppercase tracking-widest text-[#999] font-semibold">{label}</span>
    </motion.div>
  );
}

/* ── Floating glow blob ── */
function FloatingBlob({ className }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.15, 1], x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Section reveal wrapper ── */
function Reveal({ children, delay = 0, y = 40 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container ── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  /* parallax scroll */
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(heroScroll, [0, 1], ["0%", "18%"]);
  const textY = useTransform(heroScroll, [0, 1], ["0%", "10%"]);

  /* stats section */
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  /* checklist items */
  const checks = ["Premium Infrastructure", "Luxury Lifestyle Experience", "Customer-First Approach", "Future Growth & Value"];

  return (
    <div className="min-h-screen bg-[#fcf8f8] text-[#2a2a2a] overflow-hidden">

      {/* ══════════════ HERO ══════════════ */}
      <section ref={heroRef} className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* Animated glows */}
        <FloatingBlob className="absolute top-[-180px] left-[-150px] w-[500px] h-[500px] bg-[#d8a8aa]/20 blur-[150px] rounded-full pointer-events-none" />
        <FloatingBlob className="absolute bottom-[-180px] right-[-150px] w-[500px] h-[500px] bg-[#f1d7d8]/30 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 backdrop-blur-md shadow-sm text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-8"
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#b97c80]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              About Dhanush Bungalows
            </motion.div>

            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
            >
              <motion.span variants={fadeUp} className="block bg-gradient-to-r from-[#d8a8aa] via-[#c99295] to-[#b97c80] bg-clip-text text-transparent">
                Luxury
              </motion.span>
              <motion.span variants={fadeUp} className="block">
                Living
              </motion.span>
              <motion.span variants={fadeUp} className="block text-[#777] font-light">
                Redefined
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 text-lg leading-[2] text-[#666] max-w-2xl"
            >
              At <span className="font-semibold text-[#2a2a2a]">Dhanush Bungalows</span>, we believe
              a home is more than just a structure — it is a place where dreams grow, families connect,
              and modern lifestyle meets timeless comfort.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="mt-6 text-lg leading-[2] text-[#666] max-w-2xl"
            >
              Designed with premium infrastructure, peaceful surroundings, and elegant planning,
              Dhanush Bungalows offers a luxurious residential experience crafted for modern families.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <MagneticButton className="px-10 py-4 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white font-semibold shadow-xl shadow-[#d8a8aa]/30 hover:shadow-2xl hover:shadow-[#d8a8aa]/40 transition-shadow duration-300">
                Explore Project
              </MagneticButton>
              <MagneticButton className="px-10 py-4 rounded-full border border-[#d8a8aa]/40 bg-white/70 backdrop-blur-sm text-[#b97c80] font-semibold hover:bg-white transition-colors duration-300">
                Contact Us
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE with parallax */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#d8a8aa]/30 to-[#b97c80]/20 blur-3xl rounded-[40px]"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div style={{ y: imgY }} className="relative z-10 overflow-hidden rounded-[40px]">
              <motion.img
                src="Image/About-Hero.png"
                alt="Luxury Living"
                className="w-full h-[750px] object-cover shadow-2xl border border-white/50 rounded-[40px]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {/* shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-[40px] pointer-events-none"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
            </motion.div>

            {/* floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-8 z-20 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-[#e8dada]/50"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <p className="text-2xl font-black text-[#b97c80]">60%</p>
              <p className="text-xs uppercase tracking-widest text-[#999] font-semibold">Project Sold</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section ref={statsRef} className="relative z-10 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard value={60} suffix="" label="Happy Families"  delay={0}    inView={statsInView} />
          <StatCard value={1}  suffix="+"  label="Years of Excellence"  delay={0.1}  inView={statsInView} />
          <StatCard value={1}  suffix=""   label="Exclusive Community"   delay={0.2}  inView={statsInView} />
          <StatCard value={100}  suffix="%"  label="Customers Satisfaction"    delay={0.3}  inView={statsInView} />
        </div>
      </section>

      {/* ══════════════ ABOUT CONTENT ══════════════ */}
      <section className="relative z-10 py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <Reveal y={50}>
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 blur-3xl rounded-[40px]"
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 overflow-hidden rounded-[40px]">
                <motion.img
                  src="Image/About-OurStory.png"
                  alt="About Dhanush"
                  className="w-full h-[650px] object-cover shadow-2xl rounded-[40px]"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent rounded-[40px] pointer-events-none"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                />
              </div>
              {/* decoration ring */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-dashed border-[#d8a8aa]/40 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </Reveal>

          {/* CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="inline-block px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 backdrop-blur-sm text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-6">
              Our Story
            </motion.span>

            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-black leading-tight">
              Crafted For
              <span className="block bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                Elegant Living
              </span>
            </motion.h2>

            {[
              "Dhanush Bungalows stands as a symbol of modern luxury and thoughtful development, designed to offer families a lifestyle filled with comfort, peace, and sophistication.",
              "Every space is planned with attention to detail — from wide roads and green surroundings to premium infrastructure and future-ready planning — creating a living experience that blends elegance with functionality.",
              "More than just homes, we create communities where families can grow, celebrate, and build lasting memories for generations."
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp} className="mt-6 text-lg leading-[2] text-[#666]">
                {text}
              </motion.p>
            ))}

            {/* divider line */}
            <motion.div
              className="mt-10 h-px bg-gradient-to-r from-[#d8a8aa]/60 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════ VISION & MISSION ══════════════ */}
      <section className="relative z-10 py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* VISION */}
          <Reveal delay={0}>
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(185,124,128,0.12)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/75 backdrop-blur-md border border-[#e8dada]/50 rounded-[40px] p-12 shadow-xl h-full"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 backdrop-blur-sm text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-6"
              >
                Our Vision
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Creating Spaces
                <span className="block bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                  For Better Living
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-8 text-lg leading-[2] text-[#666]"
              >
                Our vision is to redefine luxury living by building thoughtfully designed communities
                that combine elegance, comfort, and long-term value.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="mt-6 text-lg leading-[2] text-[#666]"
              >
                We aspire to create future-ready living spaces where families can enjoy peaceful
                surroundings, modern infrastructure, and a premium lifestyle.
              </motion.p>
            </motion.div>
          </Reveal>

          {/* MISSION */}
          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] p-12 shadow-2xl text-white h-full"
            >
              {/* animated bg glow */}
              <motion.div
                className="absolute top-[-100px] right-[-100px] w-[280px] h-[280px] bg-white/10 blur-[120px] rounded-full"
                animate={{ scale: [1, 1.3, 1], x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] bg-white/5 blur-[80px] rounded-full"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />

              <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-[3px] font-semibold mb-6">
                Our Mission
              </span>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Building Trust
                <span className="block text-white/80">Through Excellence</span>
              </h2>

              <p className="mt-8 text-lg leading-[2] text-white/90">
                Our mission is to deliver premium residential developments with superior quality,
                modern planning, and customer-focused values.
              </p>

              <p className="mt-6 text-lg leading-[2] text-white/90">
                We are committed to creating elegant spaces that provide comfort, security,
                lifestyle enhancement, and long-term investment value.
              </p>

              <motion.div
                className="mt-10 space-y-5"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {checks.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full bg-white text-[#b97c80] flex items-center justify-center font-bold flex-shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 + 0.3, type: "spring", stiffness: 200, damping: 12 }}
                    >
                      ✓
                    </motion.div>
                    <p className="text-lg font-medium">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}