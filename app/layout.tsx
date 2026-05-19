import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

import CartDrawer from "@/components/CartDrawer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import RouteLoader from "@/components/RouteLoader";

import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VOIDWEAR",
  description:
    "Cinematic luxury streetwear ecommerce experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body
        className={`${inter.className} overflow-x-hidden bg-black text-white`}
      >

        <WishlistProvider>

          <CartProvider>

            {/* LOADERS */}
            <PageLoader />

            <RouteLoader />

            {/* GLOBAL EFFECTS */}
            <ScrollProgress />

            <SmoothScroll />

            <CustomCursor />

            {/* CART */}
            <CartDrawer />

            {/* PAGE TRANSITIONS */}
            <PageTransition>
              {children}
            </PageTransition>

            {/* TOASTS */}
            <Toaster
              position="top-center"
              richColors
            />

          </CartProvider>

        </WishlistProvider>

      </body>

    </html>
  );
}