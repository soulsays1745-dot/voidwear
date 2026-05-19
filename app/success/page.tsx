"use client";

import Link from "next/link";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Check,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function SuccessPage() {

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 800],
    [0, 100]
  );

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* ATMOSPHERIC GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-white/5 blur-[180px] rounded-full" />

        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-zinc-500/10 blur-[200px] rounded-full" />
      </div>

      {/* GRAIN */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* BACKGROUND */}
        <motion.div
          style={{
            y: heroY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop')",
          }}
          className="absolute inset-0 bg-cover bg-center scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-5xl">

          {/* SUCCESS ICON */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-28 h-28 rounded-full border border-white/10 bg-white text-black flex items-center justify-center mx-auto mb-12 shadow-[0_0_120px_rgba(255,255,255,0.15)]"
          >

            <Check size={42} />
          </motion.div>

          {/* LABEL */}
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
              delay: 0.2,
              duration: 1,
            }}
            className="uppercase tracking-[0.5em] text-[10px] text-gray-400 mb-8"
          >
            ORDER CONFIRMED
          </motion.p>

          {/* TITLE */}
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
            className="text-[4rem] md:text-[9rem] leading-[0.85] tracking-[-0.08em] font-black"
          >
            THANK
            <br />
            YOU
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="max-w-2xl mx-auto mt-10 text-sm md:text-lg text-gray-300 leading-8"
          >
            Your VOIDWEAR order has been successfully placed.
            A confirmation email and tracking information
            will be sent shortly.
          </motion.p>

          {/* ORDER BOX */}
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
              delay: 0.7,
              duration: 1,
            }}
            className="mt-20 border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 max-w-3xl mx-auto"
          >

            <div className="grid md:grid-cols-3 gap-10 text-left">

              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-gray-500 mb-4">
                  Order ID
                </p>

                <p className="text-xl font-semibold">
                  #VW-2048
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-gray-500 mb-4">
                  Estimated Delivery
                </p>

                <p className="text-xl font-semibold">
                  3–5 Days
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-gray-500 mb-4">
                  Payment Status
                </p>

                <p className="text-xl font-semibold">
                  Paid
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-white/10 my-10" />

            {/* MESSAGE */}
            <p className="text-gray-400 leading-8 text-sm md:text-base">
              Thank you for supporting VOIDWEAR. Your
              order is now being prepared by our fulfillment
              team and will soon begin its journey.
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="flex flex-wrap items-center justify-center gap-6 mt-16"
          >

            <Link
              href="/shop"
              className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
            >

              <ShoppingBag size={16} />

              Continue Shopping
            </Link>

            <Link
              href="/"
              className="flex items-center gap-3 border border-white/10 px-10 py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-white hover:text-black transition duration-500"
            >

              Back Home

              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>
    </main>
  );
}