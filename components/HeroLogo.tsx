"use client";

import { motion } from "framer-motion";

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative mx-auto aspect-square w-[60vw] sm:w-[42vw] md:w-[28vw] lg:w-[24vw]"
    >
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Elevation 100 LLC crosshair compass logo"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5))" }}
      >
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <circle cx="200" cy="200" r="140" />
          <line x1="30" y1="200" x2="370" y2="200" />
          <line x1="200" y1="30" x2="200" y2="370" />
        </g>
        <text
          x="200"
          y="155"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="38"
          fill="#ffffff"
          letterSpacing="1"
        >
          Elevation
        </text>
        <text
          x="200"
          y="290"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="78"
          fill="#ffffff"
        >
          100
        </text>
      </svg>
    </motion.div>
  );
}
