import branding from "../assets/branding.jpg";
import Webdevelopment from "../assets/Web development.jpg";
import UIUX from "../assets/UIUX.jpg";
import DigitalMarketing from "../assets/Digital Marketing.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
const services = [
  {
    no: "01",
    title: "Branding",
    image: branding,
    desc: "Names, marks, voice, and the visual language that makes a brand feel inevitable.",
    tags: ["Logo", "System", "Guidelines"],
  },
  {
    no: "02",
    title: "Web Development",
    image: Webdevelopment,
    desc: "Marketing sites and product surfaces engineered for speed, motion, and conversion.",
    tags: ["Next.js", "React", "Webflow"],
  },
  {
    no: "03",
    title: "UI / UX",
    image: UIUX,
    desc: "Interfaces with rhythm. Flows that breathe. Pixel-perfect down to the edge.",
    tags: ["Research", "Design", "Prototype"],
  },
  {
    no: "04",
    title: "Digital Marketing",
    image: DigitalMarketing,
    desc: "Campaigns that earn attention without renting it – paid, organic, and everything between.",
    tags: ["Strategy", "Content", "Growth"],
  },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              What we do
            </div>

            <h2 className="text-display text-6xl md:text-8xl max-w-3xl">
              Many disciplines,
              <span className="italic text-beige"> one obsession.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.no}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
              }}
              className="group relative bg-background p-10 md:p-14 overflow-hidden min-h-[420px] cursor-pointer"
            >
              {hovered === i && (
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-0"
                >
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-black/60" />
                </motion.div>
              )}

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-12">
                  <span className="font-mono text-xs text-muted-foreground">({s.no})</span>

                  <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    ↗
                  </span>
                </div>

                {/* OLD FONT PRESERVED */}
                <h3 className="text-display text-5xl md:text-6xl mb-6 text-white">{s.title}</h3>

                <p className="max-w-md mb-8 leading-relaxed text-gray-200">{s.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-white/30 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
