"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/partners", label: "Partners" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-black/5 shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="container-pad flex h-16 md:h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Elevation 100 home"
        >
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image
              src="/images/logo.png"
              alt="Elevation 100 LLC — Utah custom home builder logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-heading tracking-[0.25em] text-brand-black text-lg md:text-xl">
            ELEVATION 100
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-heading tracking-[0.25em] uppercase text-sm transition-colors duration-200 ${
                    active
                      ? "text-brand-gold"
                      : "text-brand-black hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-gold !py-2.5 !px-5 text-xs">
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-brand-black"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-black/10 bg-white"
          >
            <ul className="container-pad flex flex-col py-4 gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-3 font-heading tracking-[0.25em] uppercase text-base transition-colors ${
                        active ? "text-brand-gold" : "text-brand-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 pb-4">
                <Link href="/contact" className="btn-gold w-full">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
