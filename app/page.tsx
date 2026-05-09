"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      slug: "void-tee",
      name: "VOID Tee",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    },

    {
      slug: "shadow-hoodie",
      name: "Shadow Hoodie",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
    },

    {
      slug: "cargo-pants",
      name: "Cargo Pants",
      price: "$79",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-black flex items-center">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* ATMOSPHERIC GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white/10 blur-[200px] rounded-full" />

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 w-full px-6 md:px-16 pt-32"
        >
          
          {/* SMALL LABEL */}
          <p className="uppercase tracking-[0.6em] text-gray-500 text-[10px] md:text-xs mb-10">
            VOIDWEAR — FUTURISTIC STREET ESSENTIALS
          </p>

          {/* MASSIVE TYPOGRAPHY */}
          <div className="leading-[0.85] tracking-[-0.08em]">
            <h1 className="text-[6rem] md:text-[12rem] lg:text-[15rem] font-black text-white">
              FUTURE
            </h1>

            <h1 className="text-[6rem] md:text-[12rem] lg:text-[15rem] font-black text-white/15">
              MOTION
            </h1>
          </div>

          {/* BOTTOM INFO */}
          <div className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            
            {/* DESCRIPTION */}
            <div className="max-w-lg">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                VOIDWEAR blends cinematic visuals, futuristic silhouettes,
                and modern underground culture into a premium fashion experience.
              </p>

              <Link href="/shop">
                <button className="mt-8 border border-white/20 px-8 py-4 rounded-full uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition duration-500">
                  Explore Collection
                </button>
              </Link>
            </div>

            {/* SIDE TEXT */}
            <div className="text-gray-500 uppercase tracking-[0.4em] text-[10px] leading-6">
              <p>Editorial Experience</p>
              <p>Luxury Streetwear</p>
              <p>Modern Fashion Culture</p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* FEATURED PRODUCTS */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="px-6 md:px-16 py-24 bg-black"
>
  
  <div className="flex items-end justify-between mb-16">
    <div>
      <p className="uppercase tracking-[0.4em] text-gray-500 text-xs mb-4">
        Latest Collection
      </p>

      <h2 className="text-5xl md:text-7xl font-black tracking-tight">
        Featured
      </h2>
    </div>

    <p className="hidden md:block text-gray-500 max-w-sm text-right">
      Curated essentials inspired by futuristic fashion,
      underground culture, and cinematic storytelling.
    </p>
  </div>

  {/* PRODUCT GRID */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {products.map((product, index) => (
      <Link
        key={index}
        href={`/shop/${product.slug}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
          className="group cursor-pointer"
        >
          
          {/* PRODUCT IMAGE */}
          <div className="overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[550px] object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="flex items-center justify-between mt-6">
            <div>
              <h3 className="text-2xl font-semibold">
                {product.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {product.price}
              </p>
            </div>

            <span className="uppercase tracking-[0.3em] text-xs text-gray-500">
              View
            </span>
          </div>
        </motion.div>
      </Link>
    ))}
  </div>
</motion.section>

      {/* CINEMATIC BANNER */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">

        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[0.5em] text-gray-500 text-xs mb-6">
            VOIDWEAR 2026
          </p>

          <h2 className="text-5xl md:text-8xl font-black leading-none tracking-[-0.06em]">
            SHAPING
            <br />
            THE FUTURE
          </h2>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 md:px-16 py-16 bg-black">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div>
            <h2 className="text-4xl font-black tracking-tight">
              VOIDWEAR
            </h2>

            <p className="text-gray-500 mt-4 max-w-md">
              Cinematic streetwear inspired by modern fashion,
              futuristic visuals, and underground culture.
            </p>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-8 uppercase tracking-[0.3em] text-xs text-gray-400">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </footer>
    </main>
  );
}