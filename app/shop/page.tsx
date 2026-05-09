"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ShopPage() {
  const products = [
    {
      slug: "void-tee",
      name: "VOID Oversized Tee",
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

    {
      slug: "dark-flame-tee",
      name: "Dark Flame Tee",
      price: "$59",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      slug: "urban-jacket",
      name: "Urban Jacket",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      slug: "midnight-fit",
      name: "Midnight Fit",
      price: "$95",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-32">
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="uppercase tracking-[0.4em] text-gray-400 mb-4">
          Collection
        </p>

        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          SHOP ALL
        </h1>
      </motion.div>

      {/* PRODUCTS */}
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[450px] object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">
                    {product.name}
                  </h2>

                  <span className="text-lg text-gray-300">
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
    </main>
  );
}