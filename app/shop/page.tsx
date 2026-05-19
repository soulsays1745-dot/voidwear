"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Link from "next/link";

import {
  Heart,
} from "lucide-react";

import { useWishlist } from "@/context/WishlistContext";

import MagneticCard from "@/components/MagneticCard";

const products = [
  {
    slug: "void-tee",
    name: "VOID TEE",
    price: "$120",
    category: "ESSENTIAL",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "midnight-fit",
    name: "MIDNIGHT FIT",
    price: "$180",
    category: "LIMITED",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "obsidian-hoodie",
    name: "OBSIDIAN HOODIE",
    price: "$240",
    category: "VOID CORE",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "future-mask",
    name: "FUTURE MASK",
    price: "$90",
    category: "ACCESSORY",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ShopPage() {

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 800],
    [0, 120]
  );

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* ATMOSPHERIC GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-white/5 blur-[160px] rounded-full" />

        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-zinc-500/10 blur-[180px] rounded-full" />
      </div>

      {/* GRAIN */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex items-center">

        {/* BG */}
        <motion.div
          style={{
            y: heroY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop')",
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 md:px-12">

          <motion.p
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
            className="uppercase tracking-[0.5em] text-[10px] text-gray-400 mb-8"
          >
            VOIDWEAR COLLECTION 2026
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 120,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[5rem] md:text-[10rem] leading-[0.85] tracking-[-0.08em] font-black"
          >
            DARK
            <br />
            FUTURE
          </motion.h1>

          <motion.p
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
            className="max-w-xl mt-10 text-sm md:text-lg text-gray-300 leading-8"
          >
            A curated cinematic collection of futuristic
            silhouettes, oversized fits, and monochrome
            streetwear essentials.
          </motion.p>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* FILTER BAR */}
      <section className="relative z-10 px-6 md:px-12 py-10">

        <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-full px-6 py-4 flex flex-wrap gap-4 md:gap-8 uppercase tracking-[0.3em] text-[10px] text-gray-300">

          <button className="text-white">
            All
          </button>

          <button className="hover:text-white transition">
            Hoodies
          </button>

          <button className="hover:text-white transition">
            Tees
          </button>

          <button className="hover:text-white transition">
            Accessories
          </button>

          <button className="hover:text-white transition">
            Limited
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative z-10 px-6 md:px-12 pb-32">

        {/* TITLE */}
        <div className="mb-20">

          <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
            New Era Essentials
          </p>

          <h2 className="text-5xl md:text-8xl leading-[0.9] tracking-[-0.08em] font-black">
            CINEMATIC
            <br />
            STREETWEAR
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {products.map((product, index) => {

            const wished =
              isInWishlist(product.name);

            return (

              <MagneticCard
                key={product.slug}
                className="group"
              >

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >

                  {/* HEART BUTTON */}
                  <button
                    onClick={() => {

                      if (wished) {

                        removeFromWishlist(
                          product.name
                        );

                      } else {

                        addToWishlist({
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        });
                      }
                    }}
                    className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full backdrop-blur-xl bg-black/40 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-500"
                  >

                    <Heart
                      size={18}
                      fill={
                        wished
                          ? "white"
                          : "transparent"
                      }
                    />
                  </button>

                  <Link
                    href={`/shop/${product.slug}`}
                  >

                    {/* CARD */}
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 backdrop-blur-xl hover:border-white/30 hover:shadow-[0_0_120px_rgba(255,255,255,0.08)] transition duration-700">

                      {/* IMAGE */}
                      <div className="aspect-[4/5] overflow-hidden">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover scale-105 group-hover:scale-125 transition duration-[2200ms] ease-out"
                        />
                      </div>

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                      {/* INFO */}
                      <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between">

                        <div>

                          <p className="uppercase tracking-[0.35em] text-[10px] text-gray-400 mb-4">
                            {product.category}
                          </p>

                          <h2 className="text-3xl md:text-5xl leading-none tracking-[-0.05em] font-black">
                            {product.name}
                          </h2>

                          <p className="text-gray-300 mt-4 text-sm">
                            {product.price}
                          </p>
                        </div>

                        <div className="uppercase tracking-[0.35em] text-[10px] text-gray-500 group-hover:text-white transition">
                          View
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </MagneticCard>
            );
          })}
        </div>
      </section>
    </main>
  );
}