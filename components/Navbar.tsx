"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const {
    cartItems,
    openCart,
  } = useCart();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="/"
            className="text-2xl font-black tracking-wide hover:opacity-80 transition duration-300"
          >
            VOIDWEAR
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
            <a
              href="/"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              Home
            </a>

            <a
              href="/shop"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              Shop
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              Collection
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              Contact
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            
            {/* CART BUTTON */}
            <button
              onClick={openCart}
              className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition duration-300"
            >
              Cart ({cartItems.length})
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              className="md:hidden text-white"
            >
              {isMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
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
          <div className="flex flex-col px-6 pb-6 pt-2 gap-6 bg-black/95 text-sm uppercase tracking-widest text-gray-300">
            
            <a
              href="/"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="/shop"
              className="hover:text-white transition"
            >
              Shop
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Collection
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}