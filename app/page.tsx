"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 1000],
    [0, 180]
  );

  const editorialY = useTransform(
    scrollY,
    [0, 2000],
    [0, -120]
  );

  const products = [
    {
      slug: "obsidian-tee",
      name: "Obsidian Tee",
      price: "€49",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      slug: "void-hoodie",
      name: "Void Hoodie",
      price: "€89",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="relative bg-black text-white overflow-x-hidden">

      {/* ATMOSPHERIC GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-white/5 blur-[160px] rounded-full" />

        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-zinc-500/10 blur-[180px] rounded-full" />

        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[220px] rounded-full" />
      </div>

      {/* GRAIN OVERLAY */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center">

        {/* BG IMAGE */}
        <motion.div
          style={{
            y: heroY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop')",
          }}
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/65" />

        {/* CONTENT */}
        <div className="relative z-10 w-full px-6 pt-44 md:pt-28 pb-20">

          <div className="max-w-sm">

            {/* LABEL */}
            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-400 mb-8">
              VOIDWEAR 2026
            </p>

            {/* HEADLINE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-[4.5rem] md:text-[8rem] leading-[0.9] tracking-[-0.08em] font-black"
            >
              BUILT
              <br />
              FOR
              <br />
              DARKNESS.
            </motion.h1>

            {/* SUBTEXT */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 1,
              }}
              className="mt-10"
            >

              <div className="w-12 h-[1px] bg-white/30 mb-6" />

              <p className="uppercase tracking-[0.3em] text-[11px] text-gray-300 leading-7">
                Cinematic Streetwear
                <br />
                For The Future.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <Link href="/shop">
                  <button className="w-full sm:w-auto border border-white/20 px-8 py-4 uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition duration-500">
                    Shop Collection
                  </button>
                </Link>

                <button className="w-full sm:w-auto bg-white text-black px-8 py-4 uppercase tracking-[0.3em] text-[10px] hover:bg-zinc-200 transition duration-500">
                  Explore World
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* PRODUCTS */}
      <motion.section
        initial={{
          opacity: 0,
          y: 100,
          filter: "blur(20px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="relative z-10 px-6 py-32 bg-black"
      >

        {/* TOP */}
        <div className="flex items-end justify-between mb-12">

          <div>
            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-4">
              Best Sellers
            </p>

            <h2 className="text-5xl md:text-7xl leading-none tracking-[-0.06em] font-black">
              NEW
              <br />
              ARRIVALS
            </h2>
          </div>

          <button className="uppercase tracking-[0.3em] text-[10px] text-gray-400 border-b border-white/20 pb-2">
            View All
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {products.map((product, index) => (
            <Link
              key={index}
              href={`/shop/${product.slug}`}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="group hover:-translate-y-4 transition duration-700"
              >

                {/* CARD */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-white/30 transition duration-700">

                  {/* IMAGE */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] md:h-[700px] object-cover group-hover:scale-110 transition duration-[1800ms]"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  {/* INFO */}
                  <div className="absolute bottom-0 left-0 p-8">

                    <p className="uppercase tracking-[0.35em] text-[10px] text-gray-400 mb-3">
                      VOIDWEAR
                    </p>

                    <h3 className="text-2xl md:text-4xl font-black leading-none tracking-[-0.04em]">
                      {product.name}
                    </h3>

                    <p className="text-gray-300 mt-4 text-sm">
                      {product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* EDITORIAL */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* IMAGE */}
        <motion.div
          style={{
            y: editorialY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop')",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">

          <p className="uppercase tracking-[0.5em] text-[10px] text-gray-400 mb-8">
            EDITORIAL CAMPAIGN
          </p>

          <h2 className="text-[4rem] md:text-[10rem] leading-[0.85] tracking-[-0.08em] font-black">
            FUTURE
            <br />
            MEETS
            <br />
            MOTION
          </h2>

          <p className="max-w-xl mx-auto mt-10 text-gray-300 text-sm md:text-lg leading-8">
            A cinematic exploration of futuristic silhouettes,
            monochrome fashion, and modern underground culture.
          </p>

          <button className="mt-10 border border-white/20 px-10 py-5 uppercase tracking-[0.35em] text-[10px] hover:bg-white hover:text-black transition duration-500">
            Explore Editorial
          </button>
        </div>

        {/* GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* STICKY EXPERIENCE */}
      <section className="relative bg-black">

        <div className="h-[250vh] relative">

          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

            {/* GLOW */}
            <div className="absolute w-[700px] h-[700px] bg-white/5 blur-[140px] rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 text-center px-6">

              <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-8">
                VOIDWEAR EXPERIENCE
              </p>

              <h2 className="text-[4rem] md:text-[10rem] leading-[0.85] tracking-[-0.08em] font-black">
                MOTION
                <br />
                CREATES
                <br />
                EMOTION
              </h2>

              <p className="max-w-xl mx-auto mt-10 text-gray-400 text-sm md:text-lg leading-8">
                Every interaction is designed to feel immersive,
                cinematic, and emotionally driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-20 bg-black">

        <h2 className="text-3xl md:text-5xl tracking-[0.4em] font-light">
          VOIDWEAR
        </h2>

        <p className="text-gray-500 mt-6 text-sm leading-7 max-w-sm">
          Futuristic streetwear blending cinematic visuals,
          premium silhouettes, and underground culture.
        </p>

        <div className="flex gap-8 mt-12 uppercase tracking-[0.3em] text-[10px] text-gray-400">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Pinterest</a>
        </div>
      </footer>
    </main>
  );
}