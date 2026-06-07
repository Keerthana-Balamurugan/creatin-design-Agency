import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import aboutImg from "../assets/About us.jpg";

export function About() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isTestimonialOpen, setIsTestimonialOpen] = useState(false);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Most branding and bespoke web systems take between 4 to 8 weeks. We focus on depth and detail rather than speed.",
    },
    {
      question: "Do you collaborate with international clients?",
      answer:
        "Yes, we work with ambitious partners globally, utilizing seamless digital workflows to co-create from anywhere.",
    },
    {
      question: "What is the process for starting a project?",
      answer:
        "We begin with a deep-dive strategy session, transition into custom UX/UI prototyping, and deliver with high-fidelity development.",
    },
  ];

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

            {/* FAQ Accordion Section */}
            <div className="pt-8 border-t border-border/40 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                ( Frequently Asked Questions )
              </h3>
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border/20 last:border-0 pb-3">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="flex items-center justify-between w-full text-left py-2 font-display text-xl md:text-2xl text-white hover:text-beige transition-colors duration-200 cursor-pointer focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <motion.span
                        animate={{ rotate: activeFaq === index ? 45 : 0 }}
                        className="text-beige font-mono text-sm ml-4"
                      >
                        ✶
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-1 pb-2 text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial Trigger Card */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setIsTestimonialOpen(true)}
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-beige/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-beige/15 flex items-center justify-center text-beige text-lg font-mono">
                    ★
                  </div>
                  <div className="text-left">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      Client Success
                    </p>
                    <h4 className="font-display text-lg text-white font-medium group-hover:text-beige transition-colors">
                      Read Client Testimonial
                    </h4>
                  </div>
                </div>
                <span className="w-8 h-8 rounded-full bg-beige text-primary-foreground flex items-center justify-center font-mono text-sm transition-transform group-hover:translate-x-1 duration-300">
                  →
                </span>
              </button>
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

      {/* Testimonial Pop-up Modal */}
      <AnimatePresence>
        {isTestimonialOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTestimonialOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-card border border-border rounded-2xl p-8 md:p-12 max-w-lg w-full overflow-hidden shadow-2xl z-10"
            >
              {/* Elegant ambient glow behind popup */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-beige/10 rounded-full blur-3xl" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsTestimonialOpen(false)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-white transition-colors cursor-pointer font-mono text-xs uppercase tracking-wider"
              >
                [ Close ]
              </button>

              {/* Content */}
              <div className="space-y-8 pt-4">
                <span className="text-display text-7xl text-beige/30 block -mb-8 font-serif leading-none">
                  “
                </span>
                <p className="text-display text-2xl md:text-3xl italic text-white/95 leading-relaxed font-light">
                  Creatin transformed our digital presence from a standard landing page into an
                  immersive luxury experience. Their attention to detail is unmatched.
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                  <div className="w-12 h-12 rounded-full bg-beige/15 flex items-center justify-center text-beige font-display text-xl border border-beige/20 font-semibold">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-white font-medium">Sarah Jenkins</h4>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Design Director, Vespera
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
