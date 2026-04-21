"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative mx-auto flex items-center justify-center w-[55vw] sm:w-[42vw] md:w-[30vw] lg:w-[27vw] h-[55vw] sm:h-[42vw] md:h-[30vw] lg:h-[27vw] max-h-[40vh] md:max-h-[45vh]"
    >
      <Image
        src="/images/logo.png"
        alt="Elevation 100 LLC crosshair compass logo"
        fill
        sizes="(max-width: 768px) 55vw, 30vw"
        className="object-contain"
        style={{ filter: "brightness(0) invert(1)" }}
        priority
        fetchPriority="high"
      />
    </motion.div>
  );
}
