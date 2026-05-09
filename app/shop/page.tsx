"use client";

import Link from "next/link";

const products = [
  {
    slug: "void-tee",
    name: "VOID TEE",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "midnight-fit",
    name: "MIDNIGHT FIT",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tight">
          SHOP
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {product.name}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      {product.price}
                    </p>
                  </div>

                  <span className="text-sm uppercase tracking-widest text-gray-500">
                    View
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}