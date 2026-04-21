import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/partners", label: "Partners" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-pad py-14 flex flex-col items-center text-center gap-6">
        <div className="relative h-16 w-16">
          <Image
            src="/images/logo.png"
            alt="Elevation 100 LLC logo"
            fill
            sizes="64px"
            loading="lazy"
            className="object-contain invert"
          />
        </div>

        <p className="font-heading tracking-[0.35em] text-brand-gold text-sm">
          ELEVATION 100 — WHERE BUILDING BEGINS
        </p>

        <div className="gold-divider" />

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
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
              className="hover:text-brand-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elevation100.com
            </a>
          </li>
        </ul>

        <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 pt-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-heading uppercase tracking-[0.3em] text-xs text-white/80 hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-xs text-white/50 pt-6">
          © 2025 Elevation 100 LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
