"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 pointer-events-none z-[9999]"
    />
  );
}