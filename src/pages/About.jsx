export default function About() {
  return (
    <div className="min-h-screen bg-[#fdf8f8] text-[#2a2a2a] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-[#d8a8aa]/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-[#f3d6d8]/30 blur-[150px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 backdrop-blur-md shadow-sm text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-8">
              <div className="w-2 h-2 rounded-full bg-[#b97c80]"></div>
              About Dhanush Bungalows
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="bg-gradient-to-r from-[#d8a8aa] via-[#c99295] to-[#b97c80] bg-clip-text text-transparent">
                Luxury
              </span>
              <br />
              <span>
                Living
              </span>
              <br />
              <span className="text-[#777] font-light">
                Redefined
              </span>
            </h1>

            <p className="mt-10 text-lg leading-[2] text-[#666] max-w-2xl">
              At <span className="font-semibold text-[#2a2a2a]">Dhanush Bungalows</span>, we believe a home is more than just a property — it is a place where comfort, peace, and modern lifestyle come together.
            </p>

            <p className="mt-6 text-lg leading-[2] text-[#666] max-w-2xl">
            Designed with premium infrastructure, wide roads, green surroundings, and future-ready planning, our open plot development delivers the perfect balance of luxury living, flexibility, and long-term investment value.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">

              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white font-semibold shadow-xl shadow-[#d8a8aa]/30 hover:scale-105 transition duration-300">
                Explore Project
              </button>

              <button className="px-10 py-4 rounded-full border border-[#d8a8aa]/40 bg-white/70 backdrop-blur-sm text-[#b97c80] font-semibold hover:scale-105 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-br from-[#d8a8aa]/30 to-[#b97c80]/20 blur-3xl rounded-[40px]"></div>

            <img
              src="/images/about-banner.jpg"
              alt="Luxury Bungalow"
              className="relative z-10 w-full h-[700px] object-cover rounded-[40px] shadow-2xl border border-white/50"
            />
          </div>
        </div>
      </section>


      {/* STATS SECTION */}
      <section className="relative z-10 py-20 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              number: "500+",
              label: "Happy Families"
            },
            {
              number: "25+",
              label: "Premium Amenities"
            },
            {
              number: "10+",
              label: "Years Experience"
            },
            {
              number: "100%",
              label: "Customer Satisfaction"
            }
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-[#e8dada]/50 rounded-[30px] p-10 text-center shadow-lg hover:shadow-2xl transition duration-500"
            >
              <h2 className="text-5xl font-black bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                {item.number}
              </h2>

              <p className="mt-4 text-[#666] text-lg font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="relative z-10 py-28 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <span className="inline-block px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 backdrop-blur-sm text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-6">
              Why Choose Us
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Experience Premium

              <span className="block bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                Community Living
              </span>
            </h2>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Prime Location",
                desc: "Strategically connected to major roads, schools, hospitals, and commercial hubs.",
                icon: "📍"
              },
              {
                title: "Wide Internal Roads",
                desc: "Designed with spacious roads and premium infrastructure for comfortable living.",
                icon: "🛣️"
              },
              {
                title: "Green Environment",
                desc: "Beautiful landscapes and open spaces that create peaceful surroundings.",
                icon: "🌿"
              },
              {
                title: "Modern Amenities",
                desc: "Premium facilities designed for comfort, convenience, and lifestyle enhancement.",
                icon: "🏡"
              },
              {
                title: "Gated Security",
                desc: "Safe and secure environment for families with controlled access and planning.",
                icon: "🛡️"
              },
              {
                title: "Investment Growth",
                desc: "Excellent long-term appreciation potential in Surat’s rapidly growing areas.",
                icon: "📈"
              }
            ].map((item, index) => (

              <div
                key={index}
                className="group relative bg-white/75 backdrop-blur-md border border-[#e8dada]/50 rounded-[32px] p-10 overflow-hidden hover:shadow-2xl transition duration-500"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-[#d8a8aa]/10 to-[#b97c80]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">

                  <div className="text-5xl mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#2a2a2a] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#666] leading-[1.9] text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* OUR VISION */}
      <section className="relative z-10 py-28 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative order-2 lg:order-1">

            <div className="absolute inset-0 bg-gradient-to-br from-[#d8a8aa]/20 to-[#b97c80]/20 blur-3xl rounded-[40px]"></div>

            <img
              src="/images/about-vision.jpg"
              alt="Luxury Vision"
              className="relative z-10 w-full h-[650px] object-cover rounded-[40px] shadow-2xl"
            />
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2">

            <span className="inline-block px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 backdrop-blur-sm text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-6">
              Our Vision
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Creating Spaces

              <span className="block bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                For Better Living
              </span>
            </h2>

            <p className="mt-10 text-lg leading-[2] text-[#666]">
              Our vision is to create thoughtfully designed communities that combine modern infrastructure, peaceful surroundings, and future-ready investment opportunities.
            </p>

            <p className="mt-6 text-lg leading-[2] text-[#666]">
              We focus on delivering premium residential experiences where families can enjoy comfort, security, and luxury while building long-term value for the future.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Premium Infrastructure & Planning",
                "Luxury Lifestyle Experience",
                "Future Growth & Appreciation",
                "Peaceful Community Environment"
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] flex items-center justify-center text-white text-sm">
                    ✓
                  </div>

                  <p className="text-lg text-[#555] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="relative z-10 py-28 px-6 md:px-12 lg:px-20">

        <div className="max-w-6xl mx-auto rounded-[50px] bg-white/70 backdrop-blur-md border border-[#e8dada]/50 p-16 text-center shadow-2xl overflow-hidden relative">

          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#d8a8aa]/20 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#f3d6d8]/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <span className="inline-block px-5 py-2 rounded-full border border-[#d8a8aa]/30 bg-white/70 backdrop-blur-sm text-[#b97c80] text-xs uppercase tracking-[3px] font-semibold mb-6">
              Get In Touch
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Discover Your

              <span className="block bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] bg-clip-text text-transparent">
                Dream Lifestyle
              </span>
            </h2>

            <p className="mt-8 text-lg text-[#666] leading-[2] max-w-3xl mx-auto">
              Explore premium plots, luxury surroundings, and future-ready investment opportunities with Dhanush Bungalows.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#d8a8aa] to-[#b97c80] text-white font-semibold shadow-xl shadow-[#d8a8aa]/30 hover:scale-105 transition duration-300">
                Schedule Visit
              </button>

              <button className="px-10 py-4 rounded-full border border-[#d8a8aa]/40 bg-white/70 backdrop-blur-sm text-[#b97c80] font-semibold hover:scale-105 transition duration-300">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
