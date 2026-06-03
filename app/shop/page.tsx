"use client";

import Link from "next/link";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

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

  {
    slug: "shadow-jacket",
    name: "Shadow Jacket",
    price: "€129",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },

  {
    slug: "future-pants",
    name: "Future Pants",
    price: "€79",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ShopPage() {

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 1000],
    [0, 150]
  );

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* BACK BUTTON */}
      <div className="relative z-20 px-6 md:px-16 pt-32">
        <BackButton />
      </div>

      {/* ATMOSPHERIC GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-white/5 blur-[160px] rounded-full" />

        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-zinc-500/10 blur-[180px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden flex items-center">

        {/* BG */}
        <motion.div
          style={{
            y: heroY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop')",
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 md:px-16">

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
              duration: 1,
            }}
            className="uppercase tracking-[0.5em] text-[10px] text-gray-400 mb-8"
          >
            VOIDWEAR COLLECTION
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 120,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[4rem] md:text-[9rem] leading-[0.85] tracking-[-0.08em] font-black"
          >
            SHOP
            <br />
            VOIDWEAR
          </motion.h1>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* PRODUCTS */}
      <section className="relative z-10 px-6 md:px-16 py-24">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">

          <div>

            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-4">
              Curated Pieces
            </p>

            <h2 className="text-4xl md:text-7xl tracking-[-0.06em] font-black leading-none">
              NEW
              <br />
              ARRIVALS
            </h2>
          </div>

          <p className="text-gray-400 max-w-md leading-7 text-sm">
            Futuristic silhouettes inspired by cinematic fashion,
            underground culture, and modern minimalism.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {products.map((product, index) => (

            <Link
              key={index}
              href={`/shop/${product.slug}`}
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
                  delay: index * 0.12,
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
                    className="w-full h-[550px] md:h-[750px] object-cover group-hover:scale-110 transition duration-[1800ms]"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />

                  {/* INFO */}
                  <div className="absolute bottom-0 left-0 p-8">

                    <p className="uppercase tracking-[0.35em] text-[10px] text-gray-400 mb-3">
                      VOIDWEAR
                    </p>

                    <h3 className="text-3xl md:text-5xl font-black tracking-[-0.05em] leading-none">
                      {product.name}
                    </h3>

                    <p className="text-gray-300 mt-4 text-lg">
                      {product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}