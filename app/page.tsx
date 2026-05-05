import type { Metadata } from "next";
import Link from "next/link";
import {
  Home as HomeIcon,
  PencilRuler,
  Hammer,
  Wrench,
  Construction,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import HeroLogo from "@/components/HeroLogo";
import HeroBackground from "@/components/HeroBackground";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Custom Home Builder Utah | Park City Contractor | Elevation 100",
  },
  description:
    "Elevation 100 LLC is a Utah custom home builder serving Park City, Deer Valley, Heber Valley, and Utah County. Custom homes, framing, remodels, architectural plans, and steel installation. Where Building Begins.",
  keywords: [
    "custom home builder Utah",
    "Park City contractor",
    "Deer Valley custom homes",
    "Heber Valley builder",
    "Utah County custom homes",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Custom Home Builder Utah | Park City Contractor | Elevation 100",
    description:
      "Utah custom home builder serving Park City, Deer Valley, Heber Valley, and Utah County. Custom homes, framing, remodels, and steel installation.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Home Builder Utah | Park City Contractor | Elevation 100",
    description:
      "Utah custom home builder serving Park City, Deer Valley, Heber Valley, and Utah County.",
  },
};

const services = [
  {
    icon: HomeIcon,
    title: "Custom Home Building",
    copy: "From foundation to finish, we craft one-of-a-kind homes tailored to how you live.",
  },
  {
    icon: PencilRuler,
    title: "Architectural Plan Design",
    copy: "Thoughtful, buildable plans that translate your vision into precise blueprints.",
  },
  {
    icon: Hammer,
    title: "Custom Home Framing",
    copy: "Rock-solid framing built to spec by crews who build every home like it's their own.",
  },
  {
    icon: Wrench,
    title: "Remodeling",
    copy: "From Decks, to Additions, to whole home transformations that honor the home's original bones.",
  },
  {
    icon: Construction,
    title: "Steel Installation",
    copy: "Structural steel done right — engineered strength with an architect-grade finish.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      {/* Hero */}
      <section className="relative isolate flex items-center justify-center min-h-screen overflow-hidden">
        <HeroBackground />
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.55)" }}
          aria-hidden
        />

        <div className="relative container-pad py-20 md:py-28 flex flex-col items-center text-center text-white">
          <HeroLogo />

          <Reveal delay={0.35}>
            <h1 className="heading-xl mt-10 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              <span className="sr-only">
                Elevation 100 — Custom Home Builder in Utah, serving Park City,
                Deer Valley, and Heber Valley.{" "}
              </span>
              ELEVATION 100
              <span className="block text-brand-gold text-2xl sm:text-3xl md:text-4xl tracking-[0.3em] mt-3">
                WHERE BUILDING BEGINS
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-8 h-px w-24 bg-brand-gold" />
          </Reveal>

          <Reveal delay={0.7}>
            <p className="mt-6 max-w-xl text-sm md:text-base text-white opacity-90">
              Custom homes, plans, framing, remodels, and steel — serving Park
              City, Deer Valley, Heber Valley, and Utah County with craftsmanship
              that lasts generations.
            </p>
          </Reveal>

          <Reveal delay={0.85}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-gold">
                Get a Quote
              </Link>
              <Link href="/gallery" className="btn-outline-white">
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-black text-white">
        <div className="container-pad py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <span className="section-label">WHAT WE BUILD</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-lg mt-4 max-w-3xl">
                Crafting Structures That Last Generations
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 h-px w-20 bg-brand-gold" />
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <article className="group h-full bg-white/5 border-t-2 border-brand-gold p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold hover:bg-white/10">
                  <s.icon
                    className="text-brand-gold transition-transform duration-300 group-hover:scale-110"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-heading uppercase tracking-[0.15em] text-lg md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    {s.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-black border-t border-white/10">
        <div className="container-pad py-16 md:py-20 flex flex-col items-center text-center gap-6">
          <Reveal>
            <h2 className="heading-lg text-brand-gold">
              Ready to break ground? Let&apos;s talk.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
