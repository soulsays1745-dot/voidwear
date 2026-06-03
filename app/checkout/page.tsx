"use client";

import {
  motion,
} from "framer-motion";

import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {

  const {
    cartItems,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) =>
      acc +
      Number(
        item.price.replace("€", "")
      ) *
        item.quantity,
    0
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

        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-white/5 blur-[160px] rounded-full" />

        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-zinc-500/10 blur-[180px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative pt-24 px-6 md:px-16 pb-24 z-10">

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
          SECURE CHECKOUT
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 100,
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
          className="text-[4rem] md:text-[8rem] leading-[0.85] tracking-[-0.08em] font-black mb-20"
        >
          CHECKOUT
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="border border-white/10 rounded-[2rem] p-8 md:p-12 bg-white/[0.03] backdrop-blur-2xl"
          >

            <h2 className="text-3xl font-black tracking-[-0.04em] mb-10">
              SHIPPING DETAILS
            </h2>

            <form className="space-y-8">

              <div>
                <label className="uppercase tracking-[0.3em] text-[10px] text-gray-500 block mb-4">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/10 rounded-full px-6 py-5 outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="uppercase tracking-[0.3em] text-[10px] text-gray-500 block mb-4">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-white/10 rounded-full px-6 py-5 outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="uppercase tracking-[0.3em] text-[10px] text-gray-500 block mb-4">
                  Address
                </label>

                <textarea
                  rows={5}
                  placeholder="Shipping Address"
                  className="w-full bg-transparent border border-white/10 rounded-[2rem] px-6 py-5 outline-none focus:border-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
              >
                Complete Purchase
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE */}
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
            className="border border-white/10 rounded-[2rem] p-8 md:p-12 bg-white/[0.03] backdrop-blur-2xl h-fit"
          >

            <h2 className="text-3xl font-black tracking-[-0.04em] mb-10">
              ORDER SUMMARY
            </h2>

            <div className="space-y-8">

              {cartItems.length === 0 ? (

                <p className="text-gray-400">
                  Your cart is empty.
                </p>

              ) : (

                cartItems.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-5 border-b border-white/10 pb-6"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-2xl object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="text-xl font-black tracking-[-0.04em]">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 mt-2">
                        {item.price}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* TOTAL */}
            <div className="mt-12 border-t border-white/10 pt-8 flex items-center justify-between">

              <p className="uppercase tracking-[0.3em] text-[10px] text-gray-500">
                Total
              </p>

              <h3 className="text-3xl font-black tracking-[-0.05em]">
                €{total}
              </h3>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}