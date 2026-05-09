"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // TOTAL PRICE
  const total = cartItems.reduce((acc, item) => {
    return (
      acc +
      Number(item.price.replace("$", "")) *
        item.quantity
    );
  }, 0);

  return (
    <>
      {/* OVERLAY */}
      {isCartOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-black border-l border-white/10 z-50 transform transition-transform duration-500 ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">
            Your Cart
          </h2>

          <button
            onClick={closeCart}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* CART ITEMS */}
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-220px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-400">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-white/10 pb-4"
              >
                {/* PRODUCT IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-2xl"
                />

                {/* PRODUCT INFO */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold">
                    {item.name} × {item.quantity}
                  </h3>

                  <p className="text-gray-400 mb-3">
                    {item.price}
                  </p>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-3 mb-3">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.name)
                      }
                      className="w-8 h-8 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
                    >
                      -
                    </button>

                    <span className="text-white">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.name)
                      }
                      className="w-8 h-8 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition"
                    >
                      +
                    </button>
                  </div>

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() =>
                      removeFromCart(index)
                    }
                    className="text-sm text-red-400 hover:text-red-300 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/10 bg-black">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">
              Total
            </span>

            <span className="text-white text-xl font-bold">
              ${total}
            </span>
          </div>

          <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-200 transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}