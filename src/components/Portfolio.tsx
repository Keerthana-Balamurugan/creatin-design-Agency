import { motion } from "framer-motion";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const works = [
  {
    img: w1,
    title: "Pachy Type Foundry",
    cat: "Branding · Typography",
    year: "2025",
    span: "md:col-span-2",
  },
  {
    img: w2,
    title: "Cretalise Fragrance",
    cat: "Packaging · E-com",
    year: "2024",
    span: "md:col-span-1",
  },
  { img: w3, title: "Macet Studio", cat: "Identity System", year: "2024", span: "" },
  { img: w4, title: "Aurora Mobile", cat: "Product Design", year: "2025", span: "" },
  { img: w5, title: "Brutal Archive", cat: "Editorial · Web", year: "2024", span: "" },
  { img: w6, title: "Helix Labs", cat: "Brand · Motion", year: "2025", span: "md:col-span-2" },
];

export function Portfolio() {
  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              ⟶ OUR WORK
            </div>
            <h2 className="text-display text-6xl md:text-8xl">
              Made with <span className="italic text-crimson">Intense.</span>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {works.length} projects · 2024 — 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href="#"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl bg-card ${w.span}`}
            >
              <div className="overflow-hidden h-[500px]">
                <motion.img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-[500px] object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-crimson mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {w.cat} · {w.year}
                    </div>
                    <h3 className="text-display text-3xl md:text-4xl text-foreground">{w.title}</h3>
                  </div>
                  <span className="w-12 h-12 rounded-full bg-crimson text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
