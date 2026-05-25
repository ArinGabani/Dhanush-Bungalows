import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

/* ── Floating animated glow blob ── */
function FloatingBlob({ className }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.18, 1], x: [0, 18, -10, 0], y: [0, -14, 10, 0] }}
      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Magnetic button ── */
function MagneticButton({ children, className, type, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  return (
    <motion.button
      ref={ref} type={type} onClick={onClick}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >{children}</motion.button>
  );
}

/* ── Scroll reveal ── */
function Reveal({ children, delay = 0, y = 40, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

/* ── Stagger variants ── */
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Animated input field ── */
function FloatInput({ label, type = "text", name, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  return (
    <div className="relative">
      <motion.label
        animate={{ top: active ? "8px" : "50%", fontSize: active ? "11px" : "15px", color: active ? "#b97c80" : "#aaa" }}
        transition={{ duration: 0.2 }}
        style={{ position: "absolute", left: "20px", transform: active ? "none" : "translateY(-50%)", pointerEvents: "none", fontWeight: 500, letterSpacing: "0.03em", zIndex: 10 }}
      >{label}</motion.label>
      <motion.input
        type={type} name={name} value={value} onChange={onChange} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        whileFocus={{ borderColor: "#d8a8aa", boxShadow: "0 0 0 3px rgba(216,168,170,0.15)" }}
        style={{ paddingTop: active ? "28px" : "18px" }}
        className="w-full px-5 pb-4 rounded-2xl border border-[#e8dada]/70 bg-white/80 backdrop-blur-sm text-[#2a2a2a] text-base outline-none transition-all duration-200 focus:border-[#d8a8aa]"
      />
    </div>
  );
}

function FloatTextarea({ label, name, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  return (
    <div className="relative">
      <motion.label
        animate={{ top: active ? "10px" : "22px", fontSize: active ? "11px" : "15px", color: active ? "#b97c80" : "#aaa" }}
        transition={{ duration: 0.2 }}
        style={{ position: "absolute", left: "20px", pointerEvents: "none", fontWeight: 500, letterSpacing: "0.03em", zIndex: 10 }}
      >{label}</motion.label>
      <motion.textarea
        name={name} value={value} onChange={onChange} required={required} rows={4}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        whileFocus={{ borderColor: "#d8a8aa", boxShadow: "0 0 0 3px rgba(216,168,170,0.15)" }}
        style={{ paddingTop: active ? "30px" : "20px", resize: "none" }}
        className="w-full px-5 pb-4 rounded-2xl border border-[#e8dada]/70 bg-white/80 backdrop-blur-sm text-[#2a2a2a] text-base outline-none transition-all duration-200 focus:border-[#d8a8aa]"
      />
    </div>
  );
}

/* ── Contact info card ── */
function InfoCard({ icon, title, lines, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(185,124,128,0.13)" }}
      className="flex items-start gap-5 bg-white/80 backdrop-blur-md border border-[#e8dada]/50 rounded-3xl p-7 shadow-lg cursor-default"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d8a8aa]/30 to-[#b97c80]/20 flex items-center justify-center flex-shrink-0 text-2xl"
      >{icon}</motion.div>
      <div>
        <p className="text-xs uppercase tracking-[3px] font-semibold text-[#b97c80] mb-1">{title}</p>
        {lines.map((l, i) => <p key={i} className="text-[#444] font-medium leading-relaxed">{l}</p>)}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#fcf8f8] text-[#2a2a2a] overflow-hidden">

      {/* ══════ HERO ══════ */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <FloatingBlob className="absolute top-[-200px] left-[-160px] w-[520px] h-[520px] bg-[#d8a8aa]/20 blur-[160px] rounded-full pointer-events-none" />
        <FloatingBlob className="absolute bottom-[-180px] right-[-140px] w-[480px] h-[480px] bg-[#f1d7d8]/25 blur-[140px] rounded-full pointer-events-none" />

        {/* decorative rotating ring */}
        <motion.div
          className="absolute top-20 right-[12%] w-40 h-40 rounded-full border-2 border-dashed border-[#d8a8aa]/25 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 left-[8%] w-24 h-24 rounded-full border border-dashed border-[#b97c80]/20 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 backdrop-blur-md shadow-sm text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-8"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#b97c80]"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#d8a8aa] via-[#c99295] to-[#b97c80] bg-clip-text text-transparent">Let's</span>
            {" "}
            <span>Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 text-lg leading-[2] text-[#666] max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out to explore your dream home at
            <span className="font-semibold text-[#2a2a2a]"> Dhanush Bungalows</span> — our team is ready to guide you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* ══════ CONTACT INFO CARDS ══════ */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-24 overflow-hidden">
        {/* ARCHITECTURE BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(#b97c80 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* FLOATING GLOW */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#d8a8aa]/20 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-100px] left-[-100px] w-[280px] h-[280px] bg-[#f3d6d8]/20 blur-[120px] rounded-full"
        />

        <div className="max-w-7xl mx-auto">

          {/* PREMIUM BAR */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              transition: { duration: 0.4 },
            }}
            className="relative overflow-hidden rounded-[42px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
          >

            {/* INNER SHINE */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/20"></div>

            {/* TOP LINE */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d8a8aa]/60 to-transparent"></div>

            <div className="relative z-10 grid md:grid-cols-2">

              {/* LOCATION SIDE */}
              <div className="relative p-10 lg:p-14">

                {/* Divider */}
                <div className="hidden md:block absolute top-10 right-0 w-[1px] h-[80%] bg-gradient-to-b from-transparent via-[#e7d4d5] to-transparent"></div>

                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                    }}
                    className="min-w-[64px] h-16 rounded-[22px] bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] flex items-center justify-center text-white text-2xl shadow-[0_10px_30px_rgba(185,124,128,0.35)]"
                  >
                    📍
                  </motion.div>

                  {/* CONTENT */}
                  <div>

                    <p className="text-xs uppercase tracking-[4px] text-[#b97c80] font-semibold mb-3">
                      Our Location
                    </p>

                    <h3 className="text-3xl font-black text-[#2a2a2a] leading-tight">
                      Visit Our
                      <span className="block text-[#b97c80]">
                        Experience Center
                      </span>
                    </h3>

                    <p className="mt-6 text-[#666] leading-[2] text-lg max-w-xl">
                      Block no 133, Dhanush Bungalows Road,
                      Near Gaurav Path Road,
                      Surat, Gujarat — 395007
                    </p>

                    {/* MINI TAG */}
                    <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#ead7d8] bg-white/80 text-sm text-[#777] shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#b97c80]"></span>
                      Premium Residential Destination
                    </div>
                  </div>
                </div>
              </div>


              {/* TIMING SIDE */}
              <div className="relative p-10 lg:p-14">

                <div className="flex items-start gap-5">

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="min-w-[64px] h-16 rounded-[22px] bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] flex items-center justify-center text-white text-2xl shadow-[0_10px_30px_rgba(185,124,128,0.35)]"
                  >
                    🕒
                  </motion.div>

                  {/* CONTENT */}
                  <div>

                    <p className="text-xs uppercase tracking-[4px] text-[#b97c80] font-semibold mb-3">
                      Office Timings
                    </p>

                    <h3 className="text-3xl font-black text-[#2a2a2a] leading-tight">
                      We’re Here
                      <span className="block text-[#b97c80]">
                        To Assist You
                      </span>
                    </h3>

                    {/* TIMING CARD */}
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="mt-8 rounded-[28px] border border-[#f0e3e3] bg-gradient-to-br from-white to-[#fff8f8] p-7 shadow-lg"
                    >

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-[#444] text-lg font-semibold">
                            Monday – Sunday
                          </p>

                          <p className="mt-2 text-[#999] text-sm tracking-wide">
                            Open All Days
                          </p>
                        </div>

                        <div className="text-right">

                          <p className="text-2xl font-black bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                            9 AM – 7 PM
                          </p>

                          <p className="mt-2 text-xs uppercase tracking-[3px] text-[#b97c80] font-semibold">
                            Working Hours
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* BOTTOM NOTE */}
                    <p className="mt-6 text-[#777] leading-[1.8]">
                      Schedule your site visit and explore the elegance,
                      comfort, and lifestyle experience of Dhanush Bungalows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ FORM + MAP ══════ */}
      <section className="relative z-10 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* CONTACT FORM */}
          <Reveal delay={0}>
            <motion.div
              whileHover={{ boxShadow: "0 32px 64px rgba(185,124,128,0.1)" }}
              className="bg-white/80 backdrop-blur-md border border-[#e8dada]/50 rounded-[40px] p-10 shadow-xl"
            >
              <span className="inline-block px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-6">
                Send a Message
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-10">
                Start Your
                <span className="block bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                  Journey Home
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-5">
                  <motion.div variants={fadeUp}>
                    <FloatInput label="Your Full Name" name="name" value={form.name} onChange={handleChange} required />
                  </motion.div>
                  <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
                    <FloatInput label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} required />
                    <FloatInput label="Mobile Number" type="tel" name="phone" value={form.phone} onChange={handleChange} required />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <FloatTextarea label="Your Message" name="message" value={form.message} onChange={handleChange} required />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <MagneticButton
                      type="submit"
                      className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white font-bold text-lg shadow-xl shadow-[#d8a8aa]/30 hover:shadow-2xl hover:shadow-[#d8a8aa]/40 transition-shadow duration-300"
                    >
                      Send Message ✦
                    </MagneticButton>
                  </motion.div>
                </motion.div>
              </form>

              {/* Success toast */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-6 flex items-center gap-3 bg-gradient-to-r from-[#d8a8aa]/20 to-[#b97c80]/10 border border-[#d8a8aa]/30 rounded-2xl px-6 py-4"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] text-white flex items-center justify-center font-bold flex-shrink-0"
                    >✓</motion.div>
                    <div>
                      <p className="font-semibold text-[#b97c80]">Message Sent!</p>
                      <p className="text-sm text-[#888]">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Reveal>

          {/* MAP + QUICK CONTACT */}
          <div className="space-y-8">
            <Reveal delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[40px] shadow-2xl border border-[#e8dada]/40"
              >
                {/* shimmer sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-10 pointer-events-none"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                />
                <iframe
                  title="Dhanush Bungalows Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.786092914449!2d72.75925363847861!3d21.228742295320522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d007bbba167%3A0x1afbc56fea8f3ef4!2sDHANUSH%20BUNGALOWS!5e1!3m2!1sen!2sin!4v1779715474512!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block", filter: "saturate(0.8) sepia(0.1)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* map label overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg border border-[#e8dada]/50"
                >
                  <p className="text-xs uppercase tracking-widest font-semibold text-[#b97c80]">📍 Find Us</p>
                  <p className="text-sm font-bold text-[#2a2a2a]">Dhanush Bungalows</p>
                  <p className="text-xs text-[#888]">Surat, Gujarat</p>
                </motion.div>
              </motion.div>
            </Reveal>

            {/* QUICK CALL CARD */}
            <Reveal delay={0.25}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 28px 56px rgba(185,124,128,0.15)" }}
                className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#d8a8aa] to-[#b97c80] p-10 shadow-2xl text-white"
              >
                {/* animated bg orbs */}
                <motion.div
                  className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-white/10 blur-[100px] rounded-full"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-[-50px] left-[-40px] w-[160px] h-[160px] bg-white/5 blur-[70px] rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    className="text-4xl mb-4 inline-block"
                  >📞</motion.div>

                  <h3 className="text-3xl font-black mb-2">Prefer to Call?</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">Our property consultants are available Mon–Sat, 9am–7pm to answer all your queries.</p>

                  <motion.div className="space-y-4">
                    {[
                      { label: "Site Visit Booking", number: "+91 98243 86300" },
                      { label: "Sales Enquiry", number: "+91 99046 86300" },
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        href={`tel:${item.number.replace(/\s/g, "")}`}
                        whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.2)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 cursor-pointer"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-widest text-white/60 font-semibold">{item.label}</p>
                          <p className="text-lg font-black">{item.number}</p>
                        </div>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="text-white/70 text-xl"
                        >→</motion.span>
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* WhatsApp button */}
                  <motion.a
                    href="https://wa.me/919824386300"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,1)" }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 w-full flex items-center justify-center gap-3 bg-white/90 text-[#b97c80] font-bold py-4 rounded-2xl transition-colors duration-300"
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    >💬</motion.span>
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}