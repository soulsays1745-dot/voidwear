"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {

  const {
    cartItems,
    subtotal,
    shipping,
    taxes,
    total,
    clearCart,
  } = useCart();

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 1000],
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
            VOIDWEAR CHECKOUT
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
            SECURE
            <br />
            CHECKOUT
          </motion.h1>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (

        <section className="relative z-10 px-6 py-32 text-center">

          <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-8">
            Your Cart Is Empty
          </p>

          <h2 className="text-5xl md:text-8xl leading-[0.9] tracking-[-0.08em] font-black mb-10">
            NOTHING
            <br />
            TO
            <br />
            CHECKOUT
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto leading-8">
            Add products to your cart before proceeding
            to checkout.
          </p>
        </section>

      ) : (

        <section className="relative z-10 px-6 md:px-16 py-24">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16">

            {/* LEFT SIDE */}
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
              }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] p-8 md:p-12"
            >

              <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-12">
                Shipping Details
              </p>

              <div className="space-y-10">

                <div>
                  <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                    Address
                  </label>

                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">

                  <div>
                    <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="City"
                      className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                      ZIP
                    </label>

                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                    Card Number
                  </label>

                  <input
                    type="text"
                    placeholder="•••• •••• •••• ••••"
                    className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">

                  <div>
                    <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                      Expiry
                    </label>

                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                      CVV
                    </label>

                    <input
                      type="text"
                      placeholder="•••"
                      className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
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
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] p-8 h-fit sticky top-32"
            >

              <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-10">
                Order Summary
              </p>

              {/* CART ITEMS */}
              <div className="space-y-6 mb-10">

                {cartItems.map((item, index) => (

                  <div
                    key={index}
                    className="flex gap-4 border-b border-white/10 pb-6"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-28 object-cover rounded-2xl"
                    />

                    <div className="flex-1">

                      <p className="uppercase tracking-[0.35em] text-[9px] text-gray-500 mb-3">
                        VOIDWEAR
                      </p>

                      <h3 className="text-xl font-bold">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 mt-2">
                        Quantity: {item.quantity}
                      </p>

                      <p className="text-white mt-4">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTALS */}
              <div className="space-y-5 mb-10">

                <div className="flex items-center justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between text-gray-400">
                  <span>Taxes</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>

                <div className="w-full h-[1px] bg-white/10" />

                <div className="flex items-center justify-between">

                  <span className="uppercase tracking-[0.35em] text-[10px] text-gray-500">
                    Total
                  </span>

                  <span className="text-3xl font-black tracking-[-0.05em]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="space-y-4">

                <button
                  onClick={() => {
                    clearCart();
                    alert(
                      "Order placed successfully 🚀"
                    );
                  }}
                  className="w-full bg-white text-black py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
                >
                  Complete Purchase
                </button>

                <button
                  onClick={clearCart}
                  className="w-full border border-white/10 py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-white hover:text-black transition duration-500"
                >
                  Clear Cart
                </button>
              </div>

              {/* SECURITY */}
              <p className="text-center text-gray-500 text-sm mt-6">
                Secure encrypted payment powered by VOIDWEAR.
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}