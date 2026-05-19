"use client";

import Link from "next/link";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Heart,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {

  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 800],
    [0, 120]
  );

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
      <section className="relative h-[60vh] overflow-hidden flex items-center">

        {/* BG */}
        <motion.div
          style={{
            y: heroY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop')",
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

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
            SAVED COLLECTION
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
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[4rem] md:text-[8rem] leading-[0.85] tracking-[-0.08em] font-black"
          >
            YOUR
            <br />
            WISHLIST
          </motion.h1>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* EMPTY STATE */}
      {wishlistItems.length === 0 ? (

        <section className="relative z-10 px-6 py-32 text-center">

          <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-10">
            <Heart size={32} />
          </div>

          <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-8">
            Nothing Saved Yet
          </p>

          <h2 className="text-5xl md:text-8xl leading-[0.9] tracking-[-0.08em] font-black mb-10">
            SAVE
            <br />
            YOUR
            <br />
            FAVORITES
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto leading-8 mb-12">
            Explore the VOIDWEAR collection and save
            products you want to revisit later.
          </p>

          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
          >
            Explore Collection
          </Link>
        </section>

      ) : (

        <section className="relative z-10 px-6 md:px-16 py-24">

          {/* TOP BAR */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-20">

            <div>

              <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-4">
                Saved Products
              </p>

              <h2 className="text-4xl md:text-6xl tracking-[-0.06em] font-black">
                CURATED
                <br />
                SELECTION
              </h2>
            </div>

            <button
              onClick={clearWishlist}
              className="border border-white/10 px-8 py-4 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-white hover:text-black transition duration-500"
            >
              Clear Wishlist
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {wishlistItems.map((item, index) => (

              <motion.div
                key={item.name}
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
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 backdrop-blur-xl group"
              >

                {/* IMAGE */}
                <div className="aspect-[4/5] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-[1800ms]"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                {/* ACTION BUTTONS */}
                <div className="absolute top-6 right-6 flex flex-col gap-4 z-20">

                  {/* REMOVE */}
                  <button
                    onClick={() =>
                      removeFromWishlist(
                        item.name
                      )
                    }
                    className="w-12 h-12 rounded-full backdrop-blur-xl bg-black/40 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition duration-500"
                  >
                    <Trash2 size={18} />
                  </button>

                  {/* HEART */}
                  <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white text-black flex items-center justify-center">
                    <Heart
                      size={18}
                      fill="black"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-8">

                  <p className="uppercase tracking-[0.35em] text-[10px] text-gray-400 mb-4">
                    SAVED ITEM
                  </p>

                  <h3 className="text-3xl md:text-5xl tracking-[-0.05em] font-black leading-none">
                    {item.name}
                  </h3>

                  <p className="text-gray-300 mt-5 text-lg">
                    {item.price}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-4 mt-10">

                    <button
                      onClick={() =>
                        addToCart({
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          quantity: 1,
                        })
                      }
                      className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
                    >

                      <ShoppingBag size={16} />

                      Add To Cart
                    </button>

                    <Link
                      href="/shop"
                      className="border border-white/10 px-8 py-4 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-white hover:text-black transition duration-500"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}