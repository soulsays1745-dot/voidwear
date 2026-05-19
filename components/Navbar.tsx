"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
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

          {/* NAV LINKS */}
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

          {/* RIGHT BUTTON */}
          <button className="uppercase tracking-[0.3em] text-[10px] border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-500">
            Cart
          </button>
        </div>
      </div>
    </motion.nav>
  );
}