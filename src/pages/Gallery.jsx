import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import InstaReel from "../components/InstaReel";

/* ─── Gallery data ────────────────────────────────────────────────────── */
const categories = ["All", "Plots", "Amenities", "Roads", "Greenery", "Community"];

const images = [
  { id: 1,  src: "Image/PlotOverview.png",      cat: "Plots",     title: "Aerial plot overview",       size: "tall" },
  { id: 2,  src: "Image/DhanushGate.png",         cat: "Community", title: "Grand entrance gate",        size: "wide" },
  { id: 3,  src: "Image/LandscapeGarden.jpg",            cat: "Greenery",  title: "Landscaped garden",          size: "square" },
  { id: 4,  src: "Image/WideRoad.jpg",            cat: "Roads",     title: "25 ft internal road",        size: "wide" },
  { id: 5,  src: "Image/KidsArea.jpg",         cat: "Amenities", title: "Kids play area",             size: "square" },
  { id: 6,  src: "Image/GazeboGathering.jpeg",            cat: "Community", title: "Gazebo gathering area",      size: "square" },
  { id: 7,  src: "Image/JoggingTrack.jpg",           cat: "Amenities", title: "Jogging track",              size: "square" },
  { id: 8, src: "Image/TreeLinedWalkway.jpg",        cat: "Greenery",  title: "Tree-lined walkway",         size: "wide" },
  { id: 9, src: "Image/BadmintonCourt.jpg",         cat: "Amenities", title: "Badminton court",            size: "wide" },
  { id: 10, src: "Image/GardenSeating.jpg",           cat: "Community", title: "Garden seating area",        size: "square" },
  
];

/* Gradient placeholder colours per category */
const catColor = {
  Plots:     "linear-gradient(135deg,#e8d5d6 0%,#c9a0a3 100%)",
  Amenities: "linear-gradient(135deg,#d5e8e0 0%,#8fc0aa 100%)",
  Roads:     "linear-gradient(135deg,#d5dce8 0%,#8fa8c0 100%)",
  Greenery:  "linear-gradient(135deg,#dde8d5 0%,#a0c08f 100%)",
  Community: "linear-gradient(135deg,#e8ddd5 0%,#c0a88f 100%)",
};

/* ─── Sub-components ──────────────────────────────────────────────────── */

/** Animated section title */
const SectionBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="text-center mb-4"
  >
    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f3d6d8]/60 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-[#8b5a5f] border border-[#d8a8aa]/30 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#b97c80] inline-block animate-pulse" />
      Project Gallery
    </span>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mt-2"
    >
      <span className="bg-gradient-to-r from-[#b97c80] via-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
        Every Corner
      </span>
      <br />
      <span className="text-[#2a2a2a]">Tells a Story</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.28 }}
      className="text-sm sm:text-base text-[#777] mt-3 max-w-xl mx-auto leading-relaxed"
    >
      Explore the spaces, amenities, and natural beauty that make Dhanush Bungalows truly special.
    </motion.p>
  </motion.div>
);

/** Filter tabs */
const FilterBar = ({ active, onChange }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
  >
    {categories.map((cat) => (
      <motion.button
        key={cat}
        onClick={() => onChange(cat)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className={`relative px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border
          ${active === cat
            ? "bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white border-transparent shadow-lg shadow-[#d8a8aa]/30"
            : "bg-white/60 backdrop-blur-sm text-[#666] border-[#d8a8aa]/20 hover:border-[#d8a8aa]/50 hover:text-[#b97c80]"
          }`}
      >
        {cat}
        {active === cat && (
          <motion.span
            layoutId="filter-pill"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] -z-10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.button>
    ))}
  </motion.div>
);

/** Individual gallery card */
const GalleryCard = ({ img, index, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const aspectClass =
    img.size === "tall"   ? "row-span-2" :
    img.size === "wide"   ? "col-span-2" : "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onClick={() => onClick(img)}
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer ${aspectClass}
        shadow-[0_4px_24px_rgba(185,124,128,0.10)] hover:shadow-[0_12px_40px_rgba(185,124,128,0.22)]
        transition-shadow duration-500`}
      style={{ background: catColor[img.cat] ?? "#f3d6d8" }}
    >
      {/* Actual image — falls back to gradient if missing */}
      <img
        src={img.src}
        alt={img.title}
        loading="lazy"
        onError={(e) => { e.target.style.display = "none"; }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Category badge — always visible */}
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.07 + 0.2 }}
        className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold
          bg-white/80 backdrop-blur-sm text-[#8b5a5f] border border-white/40 z-10"
      >
        {img.cat}
      </motion.span>

      {/* Hover info bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400"
      >
        <p className="text-white font-semibold text-sm sm:text-base leading-snug drop-shadow-sm">
          {img.title}
        </p>
        <div className="flex items-center gap-1.5 mt-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-white/70 text-xs">View full</span>
        </div>
      </motion.div>

      {/* Corner shimmer accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full pointer-events-none" />
    </motion.div>
  );
};

/** Lightbox */
const Lightbox = ({ img, onClose, onPrev, onNext }) => (
  <AnimatePresence>
    {img && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
        style={{ position: "fixed" }}
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: catColor[img.cat] ?? "#f3d6d8" }}
        >
          <img
            src={img.src}
            alt={img.title}
            onError={(e) => { e.target.style.display = "none"; }}
            className="w-full max-h-[75vh] object-cover"
          />

          {/* Info bar */}
          <div className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm flex items-center justify-between">
            <div>
              <p className="font-semibold text-[#2a2a2a] text-base sm:text-lg">{img.title}</p>
              <span className="text-xs sm:text-sm text-[#b97c80] font-medium">{img.cat}</span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f3d6d8] flex items-center justify-center hover:bg-[#d8a8aa] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5a5f" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Prev / Next */}
          {[
            { label: "prev", pos: "left-3 sm:left-4 top-1/2 -translate-y-1/2", action: onPrev,
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/> },
            { label: "next", pos: "right-3 sm:right-4 top-1/2 -translate-y-1/2", action: onNext,
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/> },
          ].map(({ label, pos, action, icon }) => (
            <button
              key={label}
              onClick={(e) => { e.stopPropagation(); action(); }}
              className={`absolute ${pos} w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="#8b5a5f">{icon}</svg>
            </button>
          ))}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─── Stats strip ─────────────────────────────────────────────────────── */
const stats = [
  { val: "60+", label: "Exclusive plots" },
  { val: "3",   label: "Internal lanes" },
  { val: "5kW", label: "Solar system" },
  { val: "100%", label: "RERA approved" },
];

const StatsStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-14 sm:mt-20 mb-6"
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#d8a8aa]/20 shadow-sm hover:shadow-md hover:border-[#d8a8aa]/40 transition-all duration-300"
        >
          <p className="text-2xl sm:text-3xl font-heading text-[#b97c80]">{s.val}</p>
          <p className="text-xs sm:text-sm text-[#888] mt-1">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ─── Main page ───────────────────────────────────────────────────────── */
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImg, setLightboxImg]   = useState(null);
  const [lightboxIdx, setLightboxIdx]   = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const filtered = activeFilter === "All" ? images : images.filter((i) => i.cat === activeFilter);

  const openLightbox = (img) => {
    const idx = filtered.findIndex((i) => i.id === img.id);
    setLightboxIdx(idx);
    setLightboxImg(img);
  };
  const closeLightbox = () => setLightboxImg(null);
  const prevImg = () => {
    const idx = (lightboxIdx - 1 + filtered.length) % filtered.length;
    setLightboxIdx(idx);
    setLightboxImg(filtered[idx]);
  };
  const nextImg = () => {
    const idx = (lightboxIdx + 1) % filtered.length;
    setLightboxIdx(idx);
    setLightboxImg(filtered[idx]);
  };

  /* Keyboard nav */
  useEffect(() => {
    const handler = (e) => {
      if (!lightboxImg) return;
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxImg, lightboxIdx, filtered]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-[#fdf8f8] via-[#fff] to-[#faf5f5] overflow-hidden">

      {/* ── Decorative blobs ── */}
      <motion.div style={{ y: parallaxY }} className="pointer-events-none absolute top-[-120px] left-[-120px] w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] bg-[#f3d6d8] opacity-30 rounded-full blur-[100px]" />
      <motion.div style={{ y: parallaxY }} className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] bg-[#d8a8aa] opacity-20 rounded-full blur-[90px]" />
      <div className="pointer-events-none absolute top-[40%] right-[5%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] bg-[#f7efef] opacity-40 rounded-full blur-[80px]" />

      {/* ── Subtle grid ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `linear-gradient(#d8a8aa 1px,transparent 1px),linear-gradient(90deg,#d8a8aa 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-20 sm:pt-28 pb-20 sm:pb-32">

        <SectionBadge />
        <StatsStrip />

        <FilterBar active={activeFilter} onChange={setActiveFilter} />

        {/* ── Masonry-style grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
            className="
              grid gap-3 sm:gap-4 md:gap-5
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              auto-rows-[220px] sm:auto-rows-[240px] md:auto-rows-[260px]
            "
            style={{ gridAutoFlow: "dense" }}
          >
            {filtered.map((img, i) => (
              <GalleryCard key={img.id} img={img} index={i} onClick={openLightbox} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-[#aaa]"
          >
            <p className="text-lg">No images in this category yet.</p>
          </motion.div>
        )}

        

          <div className="relative z-10 px-6 md:px-12 py-20">
            <InstaReel />
          </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 sm:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a href="tel:+919824386300">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white rounded-full font-semibold shadow-xl shadow-[#d8a8aa]/30 hover:shadow-2xl hover:shadow-[#d8a8aa]/45 transition-all duration-300 flex items-center gap-3"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="relative z-10">Schedule a Site Visit</span>
              </motion.button>
            </a>
            <a href="https://wa.me/919824386300" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 sm:px-10 py-3.5 sm:py-4 bg-white/80 backdrop-blur-md text-[#8b5a5f] rounded-full font-semibold border-2 border-[#d8a8aa]/30 hover:border-[#d8a8aa]/60 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.57a.5.5 0 00.613.614l5.784-1.479A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                WhatsApp Us
              </motion.button>
            </a>
          </div>
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8" onClick={closeLightbox}>
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: catColor[lightboxImg.cat] ?? "#f3d6d8" }}
          >
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              onError={(e) => { e.target.style.display = "none"; }}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#2a2a2a] text-base sm:text-lg">{lightboxImg.title}</p>
                <span className="text-xs sm:text-sm text-[#b97c80] font-medium">{lightboxImg.cat}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs text-[#aaa]">{lightboxIdx + 1} / {filtered.length}</span>
                <button onClick={closeLightbox} className="w-9 h-9 rounded-full bg-[#f3d6d8] flex items-center justify-center hover:bg-[#d8a8aa] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5a5f" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
            {/* Prev */}
            <button onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="#8b5a5f">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            {/* Next */}
            <button onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="#8b5a5f">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Gallery;