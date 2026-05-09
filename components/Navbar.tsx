"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const {
    cartItems,
    openCart,
  } = useCart();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        
        {/* NAV CONTAINER */}
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          
          {/* LEFT LINKS */}
          <div className="hidden md:flex items-center gap-10 uppercase tracking-[0.25em] text-[11px] text-gray-400">
            
            <Link
              href="/shop"
              className="hover:text-white transition duration-300"
            >
              Shop
            </Link>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Collections
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              About
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Journal
            </a>
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-lg md:text-xl tracking-[0.6em] font-extralight text-white"
          >
            VOIDWEAR
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8 uppercase tracking-[0.25em] text-[11px] text-gray-400">
            
            <button className="hidden md:block hover:text-white transition duration-300">
              Search
            </button>

            <button className="hidden md:block hover:text-white transition duration-300">
              Account
            </button>

            {/* CART */}
            <button
              onClick={openCart}
              className="hover:text-white transition duration-300"
            >
              Cart ({cartItems.length})
            </button>

            {/* MOBILE MENU */}
            <button
              className="md:hidden text-white"
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-6 uppercase tracking-[0.3em] text-xs text-gray-300">
            
            <Link href="/shop">
              Shop
            </Link>

            <a href="#">
              Collections
            </a>

            <a href="#">
              About
            </a>

            <a href="#">
              Journal
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}