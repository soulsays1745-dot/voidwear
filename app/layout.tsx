import type { Metadata } from "next";

import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import CartDrawer from "@/components/CartDrawer";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "VOIDWEAR",
  description: "Cinematic futuristic streetwear experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className="bg-black text-white overflow-x-hidden">

        <WishlistProvider>

          <CartProvider>

            {/* LOADER */}
            <PageLoader />

            {/* SMOOTH SCROLL */}
            <SmoothScroll />

            {/* CART DRAWER */}
            <CartDrawer />

            {/* WEBSITE */}
            {children}

          </CartProvider>

        </WishlistProvider>

      </body>
    </html>
  );
}