"use client";

import Link from "next/link";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useState,
} from "react";

import {
  Heart,
  ShoppingBag,
} from "lucide-react";

import SearchOverlay from "@/components/SearchOverlay";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const { openCart, cartCount } =
    useCart();

  const { wishlistCount } =
    useWishlist();

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

              {/* SEARCH */}
<button
  onClick={() =>
    setSearchOpen(true)
  }
  className="hover:text-white transition uppercase tracking-[0.3em] text-[10px]"
>
  Search
</button>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* WISHLIST */}
              <Link
                href="/wishlist"
                className="relative w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-500"
              >

                <Heart size={16} />

                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-black text-[9px] flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* CART */}
              <button
                onClick={openCart}
                className="relative w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-500"
              >

                <ShoppingBag size={16} />

                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-black text-[9px] flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* MOBILE SEARCH */}
<button
  onClick={() =>
    setSearchOpen(true)
  }
  className="md:hidden uppercase tracking-[0.3em] text-[10px]"
>
  Search
</button>

              {/* MOBILE MENU */}
              <button
                onClick={() =>
                  setOpen(!open)
                }
                className="md:hidden flex flex-col gap-1 ml-2"
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
                onClick={() =>
                  setOpen(false)
                }
                className="text-4xl tracking-[-0.05em] font-black"
              >
                SHOP
              </Link>

              <Link
                href="/about"
                onClick={() =>
                  setOpen(false)
                }
                className="text-4xl tracking-[-0.05em] font-black"
              >
                ABOUT
              </Link>

              <Link
                href="/contact"
                onClick={() =>
                  setOpen(false)
                }
                className="text-4xl tracking-[-0.05em] font-black"
              >
                CONTACT
              </Link>

              <Link
                href="/wishlist"
                onClick={() =>
                  setOpen(false)
                }
                className="text-4xl tracking-[-0.05em] font-black"
              >
                WISHLIST
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEARCH OVERLAY */}
      <SearchOverlay
        open={searchOpen}
        onClose={() =>
          setSearchOpen(false)
        }
      />
    </>
  );
}