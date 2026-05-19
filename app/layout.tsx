import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { CartProvider } from "@/context/CartContext";

import CartDrawer from "@/components/CartDrawer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

import { Toaster } from "sonner";
const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "VOIDWEAR",
  description: "Luxury cinematic streetwear experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>

        {/* PAGE LOADER */}
        <PageLoader />

        <CartProvider>

          {/* SMOOTH SCROLL */}
          <SmoothScroll />

          {/* CUSTOM CURSOR */}
          <CustomCursor />

          {/* TOASTS */}
          <Toaster
            richColors
            position="top-right"
          />

          {/* WEBSITE */}
          {children}

          {/* CART DRAWER */}
          <CartDrawer />

        </CartProvider>

      </body>
    </html>
  );
}