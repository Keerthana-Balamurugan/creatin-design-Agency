import { motion } from "framer-motion";

const words = ["Crafting", "Timeless", "Digital", "Experiences"];

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end pb-16 px-6 md:px-12">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-crimson/40 to-ink/60" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-9 h-px bg-beige" />
          <span className="text-grobold text-xs uppercase tracking-widest text-bold-foreground">
            Creative Design Studio
          </span>
        </motion.div>

        <h1 className="text-display text-[9vw] md:text-[5.5vw] leading-[1.1] text-foreground">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.2em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${i === 3 ? "text-beige" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-sans text-bold`-foreground text-base md:text-lg leading-relaxed"
          >
            We craft brand systems, digital products, and the rare interfaces 
            that make people pause, lean in, and remember.
          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-4 bg-beige text-primary-foreground rounded-full pl-6 pr-2 py-2 font-mono text-sm uppercase tracking-widest self-start"
          >
            DISCOVER MORE
            <span className="w-10 h-10 rounded-full bg-primary-foreground text-beige flex items-center justify-center transition-transform group-hover:rotate-45">
              ↗
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
