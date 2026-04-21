"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative mx-auto flex items-center justify-center rounded-full bg-white aspect-square p-6 sm:p-8 w-[65vw] sm:w-[48vw] md:w-[32vw] lg:w-[28vw]"
      style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="relative w-full h-full">
        <Image
          src="/images/logo.png"
          alt="Elevation 100 LLC crosshair compass logo"
          fill
          sizes="(max-width: 768px) 65vw, 30vw"
          className="object-contain"
          priority
          fetchPriority="high"
        />
      </div>
    </motion.div>
  );
}
