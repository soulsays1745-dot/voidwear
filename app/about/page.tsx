"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

export default function AboutPage() {

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
      <section className="relative h-[75vh] overflow-hidden flex items-center">

        {/* BG */}
        <motion.div
          style={{
            y: heroY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop')",
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
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[4rem] md:text-[9rem] leading-[0.85] tracking-[-0.08em] font-black"
          >
            FUTURE
            <br />
            STREETWEAR
          </motion.h1>

          <p className="mt-10 text-gray-300 max-w-2xl leading-8 text-sm md:text-lg">
            VOIDWEAR blends cinematic visuals, futuristic fashion,
            underground culture, and emotional storytelling into
            one immersive streetwear experience.
          </p>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      {/* STORY */}
      <section className="relative z-10 px-6 md:px-16 py-32">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
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

            <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-7xl leading-[0.9] tracking-[-0.06em] font-black mb-10">
              BUILT FOR
              <br />
              THE NEXT
              <br />
              GENERATION
            </h2>

            <p className="text-gray-400 leading-8 text-sm md:text-lg">
              Inspired by cinematic worlds, monochrome aesthetics,
              and modern underground fashion, VOIDWEAR creates
              wearable pieces designed to feel emotional,
              futuristic, and timeless.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10"
          >

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop"
              alt="VOIDWEAR"
              className="w-full h-[700px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative z-10 px-6 md:px-16 py-32 border-t border-white/10">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
            CORE VALUES
          </p>

          <h2 className="text-4xl md:text-7xl leading-[0.9] tracking-[-0.06em] font-black mb-20">
            DESIGN.
            <br />
            MOTION.
            <br />
            EMOTION.
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "CINEMATIC",
                text:
                  "Every collection is designed like a visual film experience.",
              },

              {
                title: "MINIMAL",
                text:
                  "Clean silhouettes and monochrome aesthetics define our identity.",
              },

              {
                title: "FUTURISTIC",
                text:
                  "Built for the next generation of fashion and culture.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
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
                className="border border-white/10 rounded-[2rem] p-10 bg-white/[0.02] backdrop-blur-xl"
              >

                <h3 className="text-2xl font-black tracking-[-0.04em] mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}