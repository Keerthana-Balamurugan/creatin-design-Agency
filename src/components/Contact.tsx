import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Tell us your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "A valid email please";
    if (form.message.trim().length < 10) errs.message = "Just a few more words";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  };

  const field = (label: string, key: keyof typeof form, type: "text" | "email" | "textarea") => (
    <div className="border-b border-border py-6 group">
      <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          rows={3}
          placeholder="Tell us about the project, the deadline, the vibe…"
          className="w-full bg-transparent text-2xl md:text-3xl text-display outline-none resize-none placeholder:text-muted-foreground/40"
        />
      ) : (
        <input
          type={type}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          placeholder={type === "email" ? "yourmailid@.com" : "Your name"}
          className="w-full bg-transparent text-2xl md:text-3xl text-display outline-none placeholder:text-muted-foreground/40"
        />
      )}
      {errors[key] && <p className="mt-2 text-xs font-mono text-ember">{errors[key]}</p>}
    </div>
  );

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-crimson/40 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-ink/60 blur-3xl animate-blob" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            ⟶ Start a project
          </div>
          <h2 className="text-display text-6xl md:text-[9rem] leading-[0.9] mb-16">
            Let's make
            <br />
            <span className="italic text-beige">something loud.</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          {field("Name", "name", "text")}
          {field("Email", "email", "email")}
          {field("Project", "message", "textarea")}

          <div className="pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              hello@CREATIN.studio · +91 8524465432
            </p>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-4 bg-beige text-primary-foreground rounded-full pl-6 pr-2 py-2 font-mono text-sm uppercase tracking-widest self-start"
            >
              {sent ? "Sent ✓" : "Send the message"}
              <span className="w-10 h-10 rounded-full bg-primary-foreground text-beige flex items-center justify-center transition-transform group-hover:rotate-45">
                ↗
              </span>
            </motion.button>
          </div>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs uppercase tracking-widest text-beige"
            >
              Thanks — we'll be in touch within 24 hours.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
