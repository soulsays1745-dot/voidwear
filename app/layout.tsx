import "./globals.css";
import type { Metadata } from "next";

import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "VOIDWEAR",
  description: "Premium streetwear brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          
          {/* TOAST NOTIFICATIONS */}
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