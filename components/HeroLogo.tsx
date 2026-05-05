"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative mx-auto aspect-square w-[50vw] sm:w-[38vw] md:w-[25vw] lg:w-[23vw]"
    >
      <Image
        src="/images/logo.png"
        alt="Elevation 100 LLC — Utah custom home builder crosshair compass logo"
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-contain"
        priority
        fetchPriority="high"
      />
    </motion.div>
  );
}
