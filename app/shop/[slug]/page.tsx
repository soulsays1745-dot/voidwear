"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

import {
  Heart,
  ShoppingBag,
} from "lucide-react";

import {
  use,
  useState,
} from "react";

import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const products = [
  {
    slug: "obsidian-tee",
    name: "Obsidian Tee",
    price: "€49",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
    description:
      "Minimal futuristic tee crafted with cinematic silhouettes and premium comfort.",
  },

  {
    slug: "void-hoodie",
    name: "Void Hoodie",
    price: "€89",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1400&auto=format&fit=crop",
    description:
      "Oversized monochrome hoodie inspired by underground culture and future aesthetics.",
  },

  {
    slug: "shadow-jacket",
    name: "Shadow Jacket",
    price: "€129",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1400&auto=format&fit=crop",
    description:
      "Technical outerwear engineered for cinematic layering and modern streetwear.",
  },

  {
    slug: "future-pants",
    name: "Future Pants",
    price: "€79",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
    description:
      "Relaxed futuristic pants blending comfort, utility, and minimalist aesthetics.",
  },
];

export default function ProductPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const resolvedParams = use(params);

  const product = products.find(
    (item) =>
      item.slug === resolvedParams.slug
  );

  const { addToCart } = useCart();

  const {
    addToWishlist,
  } = useWishlist();

  const [selectedSize, setSelectedSize] =
    useState("M");

  if (!product) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-5xl font-black tracking-[-0.06em] mb-6">
            PRODUCT NOT FOUND
          </h1>

          <Link
            href="/shop"
            className="uppercase tracking-[0.35em] text-[10px] text-gray-400 hover:text-white transition"
          >
            Return To Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* BACK BUTTON */}
      <div className="relative z-20 px-6 md:px-16 pt-32">
        <BackButton />
      </div>

      {/* PRODUCT */}
      <section className="relative z-10 px-6 md:px-16 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[700px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >

            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
              VOIDWEAR PRODUCT
            </p>

            <h1 className="text-5xl md:text-8xl leading-[0.9] tracking-[-0.08em] font-black">
              {product.name}
            </h1>

            <p className="text-3xl text-gray-300 mt-8">
              {product.price}
            </p>

            <p className="mt-10 text-gray-400 leading-8 text-sm md:text-lg max-w-xl">
              {product.description}
            </p>

            {/* SIZE */}
            <div className="mt-14">

              <p className="uppercase tracking-[0.35em] text-[10px] text-gray-500 mb-6">
                Select Size
              </p>

              <div className="flex flex-wrap gap-4">

                {["S", "M", "L", "XL"].map((size) => (

                  <button
                    key={size}
                    onClick={() =>
                      setSelectedSize(size)
                    }
                    className={`w-16 h-16 rounded-full border transition duration-500 ${
                      selectedSize === size
                        ? "bg-white text-black border-white"
                        : "border-white/10 hover:bg-white hover:text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-4 mt-14">

              <button
                onClick={() =>
                  addToCart({
                    name: `${product.name} (${selectedSize})`,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
                className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
              >

                <ShoppingBag size={16} />

                Add To Cart
              </button>

              <button
                onClick={() =>
                  addToWishlist({
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  })
                }
                className="flex items-center gap-3 border border-white/10 px-10 py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-white hover:text-black transition duration-500"
              >

                <Heart size={16} />

                Wishlist
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}