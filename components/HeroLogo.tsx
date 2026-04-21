"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative mx-auto aspect-square w-[60vw] sm:w-[42vw] md:w-[28vw] lg:w-[24vw]"
    >
      <Image
        src="/images/logo.png"
        alt="Elevation 100 LLC crosshair compass logo"
        fill
        sizes="(max-width: 768px) 60vw, 25vw"
        className="object-contain"
        style={{ filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5))" }}
        priority
        fetchPriority="high"
      />
    </motion.div>
  );
}
