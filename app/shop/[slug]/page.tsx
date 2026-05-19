"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import Navbar from "@/components/Navbar";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

import { useParams } from "next/navigation";

import { useState } from "react";

import { Heart } from "lucide-react";

const products = {
  "void-tee": {
    name: "VOID Oversized Tee",
    price: "$49",

    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "Premium oversized streetwear tee designed with luxury minimal aesthetics.",
  },

  "shadow-hoodie": {
    name: "Shadow Hoodie",
    price: "$89",

    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "Heavyweight hoodie inspired by dark cinematic fashion culture.",
  },

  "cargo-pants": {
    name: "Cargo Pants",
    price: "$79",

    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "Relaxed fit cargo pants with modern oversized silhouettes.",
  },

  "dark-flame-tee": {
    name: "Dark Flame Tee",
    price: "$59",

    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "Bold streetwear tee inspired by underground fashion culture.",
  },

  "urban-jacket": {
    name: "Urban Jacket",
    price: "$120",

    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "Premium layered jacket with oversized luxury streetwear fit.",
  },

  "midnight-fit": {
    name: "Midnight Fit",
    price: "$95",

    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "Minimal dark aesthetic outfit inspired by cinematic fashion styling.",
  },
};

export default function ProductPage() {

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const params = useParams();

  const slug = params.slug as string;

  const product =
    products[slug as keyof typeof products];

  const [selectedImage, setSelectedImage] =
    useState(0);

  const { scrollY } = useScroll();

  const imageY = useTransform(
    scrollY,
    [0, 1000],
    [0, 120]
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Product not found.
      </main>
    );
  }

  const wished =
    isInWishlist(product.name);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* ATMOSPHERIC GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-white/5 blur-[160px] rounded-full" />

        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-zinc-500/10 blur-[180px] rounded-full" />
      </div>

      {/* GRAIN */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      <section className="relative z-10 px-6 md:px-16 pt-36 pb-24">

        <div className="grid lg:grid-cols-[0.12fr_0.88fr_1fr] gap-8 items-start">

          {/* THUMBNAILS */}
          <div className="flex lg:flex-col gap-4 order-2 lg:order-1">

            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedImage(index)
                }
                className={`overflow-hidden rounded-2xl border transition duration-500 ${
                  selectedImage === index
                    ? "border-white"
                    : "border-white/10"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="w-20 h-24 object-cover"
                />
              </button>
            ))}
          </div>

          {/* MAIN IMAGE */}
          <motion.div
            className="relative order-1 lg:order-2"
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
          >

            {/* FLOATING WISHLIST BUTTON */}
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
                    image:
                      product.images[selectedImage],
                  });
                }
              }}
              className="absolute top-6 right-6 z-20 w-14 h-14 rounded-full backdrop-blur-2xl bg-black/40 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-500"
            >

              <Heart
                size={20}
                fill={
                  wished
                    ? "white"
                    : "transparent"
                }
              />
            </button>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">

              <AnimatePresence mode="wait">

                <motion.img
                  key={selectedImage}
                  initial={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  style={{
                    y: imageY,
                  }}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[700px] md:h-[900px] object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* PRODUCT INFO */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="lg:sticky lg:top-32 order-3"
          >

            <p className="uppercase tracking-[0.5em] text-[10px] text-gray-400 mb-8">
              VOIDWEAR COLLECTION
            </p>

            <h1 className="text-[4rem] md:text-[7rem] leading-[0.9] tracking-[-0.08em] font-black">
              {product.name}
            </h1>

            <p className="text-2xl text-gray-300 mt-8">
              {product.price}
            </p>

            <p className="text-gray-400 leading-8 text-sm md:text-lg mt-10 max-w-xl">
              {product.description}
            </p>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-white/10 my-12" />

            {/* SIZES */}
            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
              Select Size
            </p>

            <div className="flex flex-wrap gap-4 mb-12">

              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border border-white/10 backdrop-blur-xl bg-white/[0.03] px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-500 uppercase tracking-[0.3em] text-[10px]"
                >
                  {size}
                </button>
              ))}
            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                addToCart({
                  name: product.name,
                  price: product.price,
                  image:
                    product.images[selectedImage],
                  quantity: 1,
                })
              }
              className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
            >
              Add To Cart
            </button>

            {/* EXTRA INFO */}
            <div className="mt-16 space-y-8">

              <div>
                <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-3">
                  Material
                </p>

                <p className="text-gray-300">
                  Premium heavyweight cotton blend.
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-3">
                  Fit
                </p>

                <p className="text-gray-300">
                  Oversized cinematic silhouette.
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-3">
                  Shipping
                </p>

                <p className="text-gray-300">
                  Worldwide shipping available.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}