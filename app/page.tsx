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
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* GLOW EFFECT */}
        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full top-20"></div>

        {/* HERO CONTENT */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.4em] text-gray-300 mb-4">
            Premium Streetwear
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            VOIDWEAR
          </h1>

          <p className="max-w-xl text-gray-200 mt-6 text-lg">
            Dark aesthetics. Oversized silhouettes. Cinematic fashion inspired by
            modern street culture.
          </p>

          <Link href="/shop">
            <button className="mt-8 bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 hover:bg-gray-200 active:scale-95 transition duration-300">
              Shop Now
            </button>
          </Link>
        </motion.div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-6 md:px-16 py-20 bg-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Featured Collection
        </h2>

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
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/40 hover:-translate-y-3 hover:shadow-2xl transition duration-500 cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">
                      {product.name}
                    </h3>

                    <span className="text-lg font-medium">
                      {product.price}
                    </span>
                  </div>

                  <button className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition duration-300">
                    View Product
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 md:px-16 py-12 bg-black">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black">
              VOIDWEAR
            </h2>

            <p className="text-gray-400 mt-2">
              Premium streetwear inspired by modern culture.
            </p>
          </div>

          <div className="flex gap-6 uppercase text-sm tracking-widest text-gray-300">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </footer>
    </main>
  );
}