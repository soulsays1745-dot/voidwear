"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const collections = [
  {
    id: "01",
    title: "SPIDER INK",
    subtitle: "NO MERCY. ONLY INSTINCT.",
    front: "/collections/spider-ink-front.png",
    back: "/collections/spider-ink-back.png",
  },
  {
    id: "02",
    title: "SPIDER CODE",
    subtitle: "WITH POWER COMES GREAT RESPONSIBILITY.",
    front: "/collections/spider-code-front.png",
    back: "/collections/spider-code-back.png",
  },
  {
    id: "03",
    title: "INSTINCT MODE",
    subtitle: "INSTINCT OVER FEAR.",
    front: "/collections/instinct-mode-front.png",
    back: "/collections/instinct-mode-back.png",
  },
];

export default function CollectionHero() {
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const current = collections[collectionIndex];

  useEffect(() => {
    const flipTimer = setInterval(() => {
      setShowBack((prev) => !prev);
    }, 3500);

    return () => clearInterval(flipTimer);
  }, []);

  useEffect(() => {
    const collectionTimer = setInterval(() => {
      setCollectionIndex((prev) =>
        prev === collections.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(collectionTimer);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-40 md:pt-48">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-white/[0.04] blur-[180px]" />

        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.05] blur-[100px]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP LABEL */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.8em] text-[10px] text-gray-500">
            VOIDWEAR VOL. 01
          </p>
        </motion.div>

        {/* TITLE */}
        <AnimatePresence mode="wait">

          <motion.div
            key={current.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center mt-8"
          >

            <h1 className="text-5xl md:text-[6rem] lg:text-[7rem] font-black tracking-[-0.08em] leading-[0.9]">
              {current.title}
            </h1>

            <p className="mt-6 uppercase tracking-[0.35em] text-[11px] text-gray-400">
              {current.subtitle}
            </p>

          </motion.div>

        </AnimatePresence>

        {/* SHIRT */}
        <div className="relative flex justify-center mt-16">

          <AnimatePresence mode="wait">

            <motion.div
              key={`${collectionIndex}-${showBack}`}
              initial={{
                rotateY: -90,
                opacity: 0,
              }}
              animate={{
                rotateY: 0,
                opacity: 1,
              }}
              exit={{
                rotateY: 90,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              <motion.img
                src={showBack ? current.back : current.front}
                alt={current.title}
                animate={{
                  y: [0, -18, 0],
                  rotateZ: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full max-w-[650px] md:max-w-[750px] drop-shadow-[0_0_120px_rgba(255,255,255,0.08)]"
              />

            </motion.div>

          </AnimatePresence>

        </div>

        {/* COUNTER */}
        <div className="text-center mt-8">

          <p className="uppercase tracking-[0.6em] text-[10px] text-gray-500">
            {current.id} / 03
          </p>

        </div>

        {/* PROGRESS BAR */}
        <div className="w-[280px] mx-auto mt-6 h-[2px] bg-white/10 rounded-full overflow-hidden">

          <motion.div
            key={collectionIndex}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 7,
              ease: "linear",
            }}
            className="h-full bg-white"
          />

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">

          <Link
            href="/shop"
            className="bg-white text-black px-10 py-4 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
          >
            Explore Collection
          </Link>

        </div>

      </div>
    </section>
  );
}