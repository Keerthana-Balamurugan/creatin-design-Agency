import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between mix-blend-difference"
    >
      <a
        href="#"
        className="flex items-center gap-2 text-beige font-mono text-sm tracking-widest uppercase"
      >
        <span className="w-2 h-2 rounded-full bg-beige" />
        CREATIN
      </a>
      <nav className="hidden md:flex items-center gap-10 text-beige font-mono text-xs uppercase tracking-widest">
        <a href="#home" className="hover:text-beige transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-beige transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-beige transition-colors">
          Services
        </a>
        <a href="#work" className="hover:text-beige transition-colors">
          Work
        </a>
        <a href="#contact" className="hover:text-beige transition-colors">
          Contact
        </a>
      </nav>
      <a
        href="#contact"
        className="text-beige font-mono text-xs uppercase tracking-widest border border-white/40 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors"
      >
        Let's Start →
      </a>
    </motion.header>
  );
}
