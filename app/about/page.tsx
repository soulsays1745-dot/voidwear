"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function AboutPage() {

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 1000],
    [0, 180]
  );

  return (
    <main className="relative bg-black text-white overflow-x-hidden">

      {/* ATMOSPHERIC GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-white/5 blur-[160px] rounded-full" />

        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-zinc-500/10 blur-[180px] rounded-full" />
      </div>

      {/* GRAIN OVERLAY */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex items-center">

        {/* BG IMAGE */}
        <motion.div
          style={{
            y: heroY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop')",
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
            ABOUT VOIDWEAR
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
            BUILT
            <br />
            FOR THE
            <br />
            FUTURE
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
            VOIDWEAR exists at the intersection of cinematic
            storytelling, futuristic streetwear, and underground
            culture. We design experiences, not just clothing.
          </motion.p>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* MANIFESTO */}
      <section className="relative z-10 px-6 md:px-16 py-32">

        <div className="max-w-6xl">

          <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-8">
            Manifesto
          </p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl leading-[0.95] tracking-[-0.06em] font-black"
          >
            WE CREATE
            <br />
            ATMOSPHERE,
            <br />
            NOT JUST
            <br />
            CLOTHING.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-24">

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
              Philosophy
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              Every VOIDWEAR silhouette is designed to feel
              cinematic, oversized, immersive, and emotionally
              charged. We draw inspiration from futuristic
              architecture, underground fashion, and digital
              culture.
            </p>
          </motion.div>

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
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
              Vision
            </p>

            <p className="text-gray-300 leading-8 text-lg">
              VOIDWEAR is built for the next generation of
              creators, outsiders, and visionaries who see
              fashion as identity and movement as emotion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL IMAGE */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* IMAGE */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop')",
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">

          <p className="uppercase tracking-[0.5em] text-[10px] text-gray-400 mb-8">
            Editorial Campaign
          </p>

          <h2 className="text-[4rem] md:text-[9rem] leading-[0.85] tracking-[-0.08em] font-black">
            FUTURE
            <br />
            MOTION
          </h2>

          <p className="max-w-xl mx-auto mt-10 text-gray-300 leading-8 text-sm md:text-lg">
            Inspired by cinematic storytelling and modern
            underground culture.
          </p>
        </div>

        {/* GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* VALUES */}
      <section className="relative z-10 px-6 md:px-16 py-32">

        <div className="mb-24">

          <p className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-8">
            Core Values
          </p>

          <h2 className="text-5xl md:text-8xl leading-[0.9] tracking-[-0.08em] font-black">
            DESIGN
            <br />
            WITH
            <br />
            EMOTION
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "CINEMATIC",
              text: "Every interaction is designed to feel immersive and atmospheric.",
            },

            {
              title: "FUTURISTIC",
              text: "Minimal futuristic aesthetics inspired by digital culture.",
            },

            {
              title: "EMOTIONAL",
              text: "Fashion should create identity, feeling, and movement.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
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
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] p-10"
            >

              <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
                0{index + 1}
              </p>

              <h3 className="text-3xl font-black tracking-[-0.05em] mb-6">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}