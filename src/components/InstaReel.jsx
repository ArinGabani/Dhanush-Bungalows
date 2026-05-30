import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const podcasts = [
  {
    id: 1,
    title: "Where Luxury Meets Lifestyle",
    thumbnail: "/Image/Podcast1.png",
    url: "https://www.instagram.com/p/DO0EnSpj0W5/",
  },
  {
    id: 2,
    title: "Site Visit Experience",
    thumbnail: "/Image/Podcast2.png",
    url: "https://www.instagram.com/p/DOnwHEYiV-r/",
  },
  {
    id: 3,
    title: "Landscape Walkthrough",
    thumbnail: "/Image/Podcast3.png",
    url: "https://www.instagram.com/p/DO75xJHErT2/",
  },
  {
    id: 4,
    title: "Project Overview",
    thumbnail: "/Image/Podcast4.png",
    url: "https://www.instagram.com/p/DVIy_8vjDnd/",
  },
  {
    id: 5,
    title: "Project Overview",
    thumbnail: "/Image/Podcast5.png",
    url: "https://www.instagram.com/p/DYK7j3szbcE/",
  },
  {
    id: 6,
    title: "Project Overview",
    thumbnail: "/Image/Podcast6.png",
    url: "https://www.instagram.com/p/DOs7pL1DNF8/",
  },
];

const InstaReel = () => {
  return (
    <section className="relative mt-32 overflow-hidden">
      {/* Floating Blobs */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#d8a8aa]/20 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#f3d6d8]/30 rounded-full blur-[140px]"
      />

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/60 backdrop-blur-md text-[#8b5a5f] text-sm">
          🎙 Instagram Reels
        </span>

        <h2 className="mt-6 text-5xl md:text-6xl font-heading">
          <span className="bg-gradient-to-r from-[#b97c80] via-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
            Stories In Motion
          </span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-[#777]">
          Explore project highlights, customer experiences and
          behind-the-scenes moments from Dhanush Bungalows.
        </p>
      </motion.div>

      {/* Carousel */}

      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 2,
          scale: 0.9,
        }}
        className="pb-20"
      >
        {podcasts.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="!w-[300px] md:!w-[380px]"
          >
            <motion.a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                // y: -15,
                // scale: 1.03,
              }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/50 backdrop-blur-xl shadow-[0_30px_80px_rgba(185,124,128,0.15)]">

                {/* Spotlight */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/20 rounded-full blur-3xl" />
                </div>

                {/* Image */}

                <div className="relative h-[550px] overflow-hidden">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                  />

                  {/* Instagram Badge */}

                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-lg text-xs font-semibold text-[#b97c80]">
                    Instagram Reel
                  </div>

                  {/* Play Button */}

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative">

                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                        }}
                        className="absolute inset-0 rounded-full bg-white"
                      />

                      <div className="relative w-20 h-20 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                        ▶
                      </div>
                    </div>
                  </motion.div>

                  {/* Text */}

                  <div className="absolute bottom-0 p-8">
                    <h3 className="text-white text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-white/70 mt-2 text-sm">
                      Watch on Instagram
                    </p>
                  </div>

                </div>
              </div>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};
export default InstaReel;