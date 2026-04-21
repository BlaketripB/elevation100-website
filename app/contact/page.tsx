import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Phone, Mail, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Elevation 100 LLC | Request a Quote",
  description:
    "Start your custom home, remodel, or framing project with Elevation 100. Upload your plans and get a response within 24 hours. Call 801-830-5884.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Elevation 100 LLC | Request a Quote",
    description:
      "Start your custom home, remodel, or framing project with Elevation 100. Upload your plans and get a response within 24 hours. Call 801-830-5884.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="relative blueprint-bg text-white min-h-screen">
      <div className="container-pad py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="section-label">LET&apos;S BUILD SOMETHING</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-lg mt-4 max-w-3xl text-white">
              Start Your Project
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 h-px w-20 bg-brand-gold" />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-sm md:text-base text-white/75">
              Fill out the form below and attach your plans. We&apos;ll get
              back to you within 24 hours.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <div className="mt-12 max-w-3xl mx-auto bg-black/40 backdrop-blur-sm border border-white/10 p-6 md:p-10">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="font-heading uppercase tracking-[0.3em] text-brand-gold text-sm">
              Or reach us directly
            </p>
            <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-gold" />
                <a
                  href="tel:8018305884"
                  className="hover:text-brand-gold transition-colors"
                >
                  801-830-5884
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-gold" />
                <a
                  href="mailto:ryan@elevation100.com"
                  className="hover:text-brand-gold transition-colors"
                >
                  ryan@elevation100.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-brand-gold" />
                <a
                  href="https://elevation100.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  Elevation100.com
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
