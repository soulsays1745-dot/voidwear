"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

export default function ContactPage() {

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 1000],
    [0, 150]
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
      <section className="relative h-[70vh] overflow-hidden flex items-center">

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
        <div className="relative z-10 px-6 md:px-16 max-w-5xl">

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
            CONTACT VOIDWEAR
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
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[4rem] md:text-[9rem] leading-[0.85] tracking-[-0.08em] font-black"
          >
            LET'S
            <br />
            CONNECT
          </motion.h1>

          <p className="mt-10 text-gray-300 max-w-2xl leading-8 text-sm md:text-lg">
            Reach out for collaborations, partnerships,
            support, or anything related to VOIDWEAR.
          </p>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-10 px-6 md:px-16 py-32">

        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT */}
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
            }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl md:text-7xl leading-[0.9] tracking-[-0.06em] font-black mb-10">
              START A
              <br />
              CONVERSATION
            </h2>

            <p className="text-gray-400 leading-8 text-sm md:text-lg max-w-xl">
              Whether you want to collaborate, ask a question,
              or simply connect with the VOIDWEAR universe,
              we’re always open to hearing from you.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-14 space-y-8">

              <div>
                <p className="uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-3">
                  EMAIL
                </p>

                <p className="text-lg text-gray-300">
                  contact@voidwear.com
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-3">
                  INSTAGRAM
                </p>

                <p className="text-lg text-gray-300">
                  @voidwear
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-3">
                  LOCATION
                </p>

                <p className="text-lg text-gray-300">
                  Tokyo — Paris — New York
                </p>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
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
            className="border border-white/10 rounded-[2rem] p-8 md:p-12 bg-white/[0.03] backdrop-blur-2xl"
          >

            <form className="space-y-8">

              {/* NAME */}
              <div>
                <label className="uppercase tracking-[0.3em] text-[10px] text-gray-500 block mb-4">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/10 rounded-full px-6 py-5 outline-none focus:border-white transition"
                />
              </div>

              {/* EMAIL */}
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

              {/* MESSAGE */}
              <div>
                <label className="uppercase tracking-[0.3em] text-[10px] text-gray-500 block mb-4">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full bg-transparent border border-white/10 rounded-[2rem] px-6 py-5 outline-none focus:border-white transition resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-white text-black py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}