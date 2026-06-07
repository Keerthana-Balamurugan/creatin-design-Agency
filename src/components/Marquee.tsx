export function Marquee() {
  const items = [
    "Branding",
    "✶",
    "Digital Marketing",
    "✶",
    "Web development",
    "✶",
    "Editing",
    "✶",
    "SEO",
    "✶",
    "UI/UX",
    "✶",
  ];
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-background">
      <div className="marquee-track text-display text-3xl md:text-5xl text-foreground">
        {[...items, ...items].map((t, i) => (
          <span key={i} className={i % 2 === 1 ? "text-yellow-200" : ""}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
