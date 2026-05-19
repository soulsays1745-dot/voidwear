"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ContactPage() {

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 1000],
    [0, 180]
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
      <section className="relative h-screen overflow-hidden flex items-center">

        {/* BG IMAGE */}
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
              y: 30,
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
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[5rem] md:text-[10rem] leading-[0.85] tracking-[-0.08em] font-black"
          >
            LET’S
            <br />
            CREATE
            <br />
            SOMETHING
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="max-w-2xl mt-10 text-sm md:text-lg text-gray-300 leading-8"
          >
            Reach out for collaborations, partnerships,
            creative direction, or future VOIDWEAR projects.
          </motion.p>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-10 px-6 md:px-16 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

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
          >

            <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-8">
              Contact Information
            </p>

            <h2 className="text-5xl md:text-7xl leading-[0.9] tracking-[-0.08em] font-black mb-10">
              START
              <br />
              A
              <br />
              CONVERSATION
            </h2>

            <p className="text-gray-400 leading-8 text-lg max-w-xl mb-16">
              Whether you’re interested in collaborations,
              fashion campaigns, creative partnerships,
              or future projects — let’s connect.
            </p>

            {/* INFO */}
            <div className="space-y-10">

              <div>
                <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-3">
                  Email
                </p>

                <p className="text-xl text-gray-200">
                  hello@voidwear.com
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-3">
                  Instagram
                </p>

                <p className="text-xl text-gray-200">
                  @voidwear
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-3">
                  Location
                </p>

                <p className="text-xl text-gray-200">
                  Global / Digital First
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
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] p-8 md:p-12"
          >

            <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-10">
              Send Message
            </p>

            <div className="space-y-8">

              {/* NAME */}
              <div>
                <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Subject"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block uppercase tracking-[0.3em] text-[10px] text-gray-500 mb-4">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-lg placeholder:text-gray-600 focus:border-white transition resize-none"
                />
              </div>

              {/* BUTTON */}
              <button className="w-full bg-white text-black py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500 mt-6">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}