"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80";

export default function HeroBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="absolute inset-0 -z-20"
      aria-hidden
    >
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        sizes="100vw"
        priority
        fetchPriority="high"
        className="object-cover object-center"
      />
    </motion.div>
  );
}
