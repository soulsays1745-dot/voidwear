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
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) =>
        prev === collections.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = collections[active];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32">

        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* LEFT */}
          <div>

            <motion.p
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-6"
            >
              {current.id} / 03
            </motion.p>

            <AnimatePresence mode="wait">

              <motion.div
                key={current.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -50,
                }}
                transition={{
                  duration: 0.6,
                }}
              >

                <h1 className="text-6xl md:text-[8rem] leading-[0.85] tracking-[-0.08em] font-black">
                  {current.title}
                </h1>

                <p className="mt-8 text-gray-400 uppercase tracking-[0.25em] text-sm leading-8 max-w-md">
                  {current.subtitle}
                </p>

              </motion.div>

            </AnimatePresence>

            <div className="flex gap-4 mt-10">

              <Link
                href="/shop"
                className="bg-white text-black px-8 py-4 rounded-full uppercase tracking-[0.3em] text-[10px] hover:bg-zinc-200 transition"
              >
                Explore Collection
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div
            onMouseEnter={() =>
              setHovered(true)
            }
            onMouseLeave={() =>
              setHovered(false)
            }
            className="relative flex justify-center"
          >

            {/* SPOTLIGHT */}
            <div className="absolute w-[700px] h-[700px] rounded-full bg-white/5 blur-[150px]" />

            <AnimatePresence mode="wait">

              <motion.img
                key={`${active}-${hovered}`}
                src={
                  hovered
                    ? current.front
                    : current.back
                }
                alt={current.title}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: -10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -15, 0],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: 10,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full max-w-[850px] drop-shadow-[0_0_120px_rgba(255,255,255,0.08)]"
              />

            </AnimatePresence>

          </div>

        </div>

        {/* COLLECTION SELECTOR */}
        <div className="flex flex-wrap gap-4 mt-20">

          {collections.map((item, index) => (

            <button
              key={item.id}
              onClick={() =>
                setActive(index)
              }
              className={`px-6 py-4 rounded-full border uppercase tracking-[0.3em] text-[10px] transition ${
                active === index
                  ? "bg-white text-black border-white"
                  : "border-white/10 text-gray-400 hover:border-white/30"
              }`}
            >
              {item.id} {item.title}
            </button>

          ))}

        </div>

        {/* PROGRESS BAR */}
        <div className="mt-8 w-full max-w-md h-[2px] bg-white/10 overflow-hidden rounded-full">

          <motion.div
            key={active}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
            className="h-full bg-white"
          />

        </div>

      </div>

    </section>
  );
}