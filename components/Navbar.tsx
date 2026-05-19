"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="fixed top-0 left-0 w-full z-[999]"
      >

        <div className="px-4 md:px-8 pt-4">

          {/* GLASS BAR */}
          <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-full px-6 md:px-8 py-4 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/">
              <h1 className="text-sm md:text-base tracking-[0.45em] font-light">
                VOIDWEAR
              </h1>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10 uppercase tracking-[0.3em] text-[10px] text-gray-300">

              <Link
                href="/shop"
                className="hover:text-white transition"
              >
                Shop
              </Link>

              <Link
                href="/about"
                className="hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              {/* CART */}
              <button className="hidden md:block uppercase tracking-[0.3em] text-[10px] border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-500">
                Cart
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden flex flex-col gap-1"
              >
                <span className="w-5 h-[1px] bg-white" />
                <span className="w-5 h-[1px] bg-white" />
                <span className="w-5 h-[1px] bg-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="fixed inset-0 z-[998] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >

            <motion.div
              initial={{
                y: 60,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 60,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center gap-10"
            >

              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="text-4xl tracking-[-0.05em] font-black"
              >
                SHOP
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-4xl tracking-[-0.05em] font-black"
              >
                ABOUT
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-4xl tracking-[-0.05em] font-black"
              >
                CONTACT
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}