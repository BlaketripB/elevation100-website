"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Photo = {
  src: string;
  category: string;
  caption: string;
  priority?: boolean;
};

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src + i}
            onClick={() => setActive(photo)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group bg-white/5 border border-white/10 overflow-hidden text-left transition-all hover:-translate-y-1 hover:shadow-gold hover:border-brand-gold/60"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={photo.priority ?? false}
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="text-xs font-heading uppercase tracking-[0.3em] text-brand-gold">
                {photo.category}
              </p>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                {photo.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-brand-gold transition-colors"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                setActive(null);
              }}
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
                <Image
                  src={active.src}
                  alt={active.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="bg-brand-black border-t-2 border-brand-gold p-5 md:p-6 text-center">
                <p className="text-xs font-heading uppercase tracking-[0.3em] text-brand-gold">
                  {active.category}
                </p>
                <p className="mt-3 text-base md:text-lg text-white/90">
                  {active.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
