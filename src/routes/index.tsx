import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creatin — Creative Design Studio" },
      {
        name: "description",
        content:
          "Creatin is a creative design studio crafting brand systems, digital products, and interfaces that make people pause.",
      },
      { property: "og:title", content: "Creatin — Creative Design Studio" },
      {
        property: "og:description",
        content: "Brand, product, UI/UX and digital marketing. Made with intent.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
