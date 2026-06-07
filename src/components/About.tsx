import { motion } from "framer-motion";
import aboutImg from "../assets/About us.jpg";

export function About() {
  const stats = [
    { value: "50+", label: "Projects Launched" },
    { value: "15+", label: "Core Disciplines" },
    { value: "100%", label: "Devoted to Quality" },
  ];

  const pillars = [
    {
      no: "01",
      title: "Obsessed with Craft",
      desc: "We care about the details you can't see — clean semantics, fluid layout transitions, and pixel-perfect design alignment.",
    },
    {
      no: "02",
      title: "Zero Fluff",
      desc: "We create digital systems that actually work. No bloated processes, no cookie-cutter layouts, just intentional execution.",
    },
    {
      no: "03",
      title: "Bold Expression",
      desc: "We build digital platforms and brand identities that stand out, demand attention, and establish industry benchmarks.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 overflow-hidden border-t border-border/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              ( Who we are )
            </div>
            <h2 className="text-display text-6xl md:text-8xl max-w-4xl">
              Where luxury
              <span className="italic text-beige"> meets digital innovation.</span>
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Side: Image and Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8 lg:sticky lg:top-24"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg group border border-border">
              <img
                src={aboutImg}
                alt="Creatin Design Studio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/40">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-display text-4xl md:text-5xl text-beige font-medium">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Description and Pillars */}
          <div className="lg:col-span-6 space-y-12">
            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-gray-200 font-display text-2xl md:text-3xl leading-relaxed text-left md:text-justify"
            >
              <p>
                Creatin is a boutique digital agency dedicated to crafting iconic brands, immersive
                digital experiences, and high-performing websites. We blend strategy, creativity,
                and innovation to build distinctive brand identities that captivate audiences and
                inspire lasting connections.
              </p>
              <p className="italic text-beige">
                From sophisticated brand systems to seamless digital products and elegant web
                experiences, every detail is designed with purpose and precision. We believe
                exceptional design goes beyond aesthetics—it is a powerful fusion of storytelling,
                technology, and human emotion that transforms businesses into unforgettable brands.
              </p>
              <p className="text-2xl md:text-3xl leading-relaxed font-bershka text-white/90 pt-4 text-left">
                For ambitious companies seeking distinction in a crowded digital landscape, we
                create experiences that don't just attract attention—they leave a lasting
                impression.
              </p>
            </motion.div>

            <div className="border-t border-border/40 pt-10 space-y-12">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.no}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex gap-6 md:gap-8 items-start border-b border-border/30 pb-8 last:border-0"
                >
                  <span className="font-mono text-xs text-beige tracking-widest pt-1">
                    {pillar.no}.
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-display text-3xl md:text-4xl text-white">{pillar.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
