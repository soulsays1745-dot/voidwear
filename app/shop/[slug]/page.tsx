"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";

const products = {
  "void-tee": {
    name: "VOID Oversized Tee",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    description:
      "Premium oversized streetwear tee designed with luxury minimal aesthetics.",
  },

  "shadow-hoodie": {
    name: "Shadow Hoodie",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
    description:
      "Heavyweight hoodie inspired by dark cinematic fashion culture.",
  },

  "cargo-pants": {
    name: "Cargo Pants",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Relaxed fit cargo pants with modern oversized silhouettes.",
  },

  "dark-flame-tee": {
    name: "Dark Flame Tee",
    price: "$59",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Bold streetwear tee inspired by underground fashion culture.",
  },

  "urban-jacket": {
    name: "Urban Jacket",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Premium layered jacket with oversized luxury streetwear fit.",
  },

  "midnight-fit": {
    name: "Midnight Fit",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Minimal dark aesthetic outfit inspired by cinematic fashion styling.",
  },
};

export default function ProductPage() {
  const { addToCart } = useCart();

  const params = useParams();
  const slug = params.slug as string;

  const product =
    products[slug as keyof typeof products];

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Product not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-32">
      {/* NAVBAR */}
      <Navbar />

      {/* PRODUCT SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* PRODUCT IMAGE */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* PRODUCT INFO */}
        <div>
          <p className="uppercase tracking-[0.4em] text-gray-400 mb-4">
            VOIDWEAR COLLECTION
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            {product.name}
          </h1>

          <p className="text-2xl text-gray-300 mb-8">
            {product.price}
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-xl">
            {product.description}
          </p>

          {/* SIZE BUTTONS */}
          <div className="flex gap-4 mb-10">
            <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
              S
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
              M
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
              L
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
              XL
            </button>
          </div>

          {/* ADD TO CART BUTTON */}
          {/* ADD TO CART BUTTON */}
<button
  onClick={() =>
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }
  className="bg-white text-black px-10 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition duration-300"
>
  Add to Cart
</button>
        </div>
      </div>
    </main>
  );
}