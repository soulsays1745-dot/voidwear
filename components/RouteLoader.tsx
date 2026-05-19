"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import { usePathname } from "next/navigation";

export default function RouteLoader() {

  const pathname = usePathname();

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, [pathname]);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 z-[999999] bg-black flex items-center justify-center overflow-hidden"
        >

          {/* GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[180px] rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 text-center">

            {/* BRAND */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="uppercase tracking-[0.6em] text-[10px] text-gray-400 mb-8"
            >
              VOIDWEAR
            </motion.p>

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 80,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[4rem] md:text-[8rem] leading-none tracking-[-0.08em] font-black"
            >
              LOADING
            </motion.h1>

            {/* LOADER BAR */}
            <div className="w-[260px] h-[2px] bg-white/10 mx-auto mt-12 overflow-hidden rounded-full">

              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-white"
              />
            </div>
          </div>

          {/* NOISE */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}