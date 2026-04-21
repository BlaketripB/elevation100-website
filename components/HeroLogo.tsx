"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative w-[60%] sm:w-[45%] md:w-[30%] lg:w-[28%] aspect-square"
    >
      <Image
        src="/images/logo.png"
        alt="Elevation 100 LLC crosshair compass logo"
        fill
        sizes="(max-width: 768px) 60vw, 30vw"
        className="object-contain"
        style={{ filter: "brightness(0) invert(1)" }}
        priority
        fetchPriority="high"
      />
    </motion.div>
  );
}
