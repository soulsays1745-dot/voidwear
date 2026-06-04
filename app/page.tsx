"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CollectionHero from "@/components/CollectionHero";
import Link from "next/link";

export default function Home() {
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

      {/* GRAIN */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* NAVBAR */}
      <Navbar />

      {/* NEW HERO */}
      <CollectionHero />

      {/* PRODUCTS */}
      <section
        id="products"
        className="relative z-10 px-6 py-32 bg-black"
      >

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

          <Link
            href="/shop"
            className="uppercase tracking-[0.3em] text-[10px] text-gray-400 border-b border-white/20 pb-2"
          >
            View All
          </Link>
        </div>

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

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-white/30 transition duration-700">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] md:h-[700px] object-cover group-hover:scale-110 transition duration-[1800ms]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

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