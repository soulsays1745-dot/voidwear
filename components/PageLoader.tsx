"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
        >
          
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="text-center"
          >
            
            {/* LOGO */}
            <h1 className="text-4xl md:text-6xl tracking-[0.5em] font-light">
              VOIDWEAR
            </h1>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.4,
                delay: 0.4,
              }}
              className="h-[1px] bg-white/30 mt-6"
            />

            {/* SMALL TEXT */}
            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mt-6">
              Cinematic Streetwear Experience
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}