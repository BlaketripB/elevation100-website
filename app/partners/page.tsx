import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Trusted Trade Partners | Utah Custom Home Builder Network",
  description:
    "Elevation 100 partners with Utah's best excavators, electricians, plumbers, roofers, and cabinetmakers to deliver high-end custom homes in Park City, Deer Valley, and Utah County. BBB accredited.",
  keywords: [
    "Utah construction trade partners",
    "Park City contractor partners",
    "BBB accredited Utah builder",
    "Utah custom home network",
  ],
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Trusted Trade Partners | Utah Custom Home Builder Network",
    description:
      "Elevation 100 partners with Utah's best trade contractors and suppliers. BBB accredited custom home builder serving Park City, Deer Valley, and Utah County.",
    url: "/partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Trade Partners | Utah Custom Home Builder Network",
    description:
      "Elevation 100's network of Utah trade partners and suppliers. BBB accredited.",
  },
};

type Partner = {
  name: string;
  url: string;
  tag?: string;
};

const partners: Partner[] = [
  { name: "BBB Accredited", url: "https://www.bbb.org", tag: "Better Business Bureau" },
  { name: "Trade Partner 1", url: "#", tag: "Excavation" },
  { name: "Trade Partner 2", url: "#", tag: "Electrical" },
  { name: "Trade Partner 3", url: "#", tag: "Plumbing" },
  { name: "Trade Partner 4", url: "#", tag: "Roofing" },
  { name: "Trade Partner 5", url: "#", tag: "Cabinetry" },
];

export default function PartnersPage() {
  return (
    <>
      {/* Top brand section */}
      <section className="bg-white">
        <div className="container-pad py-20 md:py-28 flex flex-col items-center text-center">
          <Reveal>
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <Image
                src="/images/logo.png"
                alt="Elevation 100 LLC — Utah custom home builder crosshair compass logo"
                fill
                sizes="200px"
                className="object-contain"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              aria-label="Elevation 100 — Where Building Begins"
              className="heading-lg mt-8 text-brand-black"
            >
              ELEVATION 100
              <span className="block text-brand-gold text-xl sm:text-2xl md:text-3xl tracking-[0.3em] mt-3">
                WHERE BUILDING BEGINS
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 h-px w-20 bg-brand-gold" />
          </Reveal>
        </div>
      </section>

      {/* Partners grid */}
      <section className="bg-brand-gray">
        <div className="container-pad py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <span className="section-label">OUR TRUSTED PARTNERS</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="heading-lg mt-4 text-brand-black">
                <span className="sr-only">
                  Utah Custom Home Builder Trade Partners —{" "}
                </span>
                Built on Strong Relationships
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 h-px w-20 bg-brand-gold" />
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-sm md:text-base text-brand-black/70">
                Behind every Park City, Deer Valley, and Utah County build is a
                network of craftsmen, suppliers, and trade partners we&apos;re
                proud to work alongside.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center gap-3 bg-white p-8 md:p-10 min-h-[180px] shadow-sm border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-gold"
                >
                  <div className="w-full h-16 md:h-20 flex items-center justify-center bg-brand-gray/80 border border-black/5">
                    <span className="font-heading uppercase tracking-[0.25em] text-brand-black/60 text-sm">
                      {p.name}
                    </span>
                  </div>
                  {p.tag && (
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-black/60">
                      {p.tag}
                    </p>
                  )}
                  <ExternalLink
                    size={14}
                    className="absolute top-3 right-3 text-brand-black/30 group-hover:text-brand-gold transition-colors"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
