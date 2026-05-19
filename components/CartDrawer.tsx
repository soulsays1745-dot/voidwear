"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

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

  // TOTAL
  const total = cartItems.reduce((acc, item) => {
    return (
      acc +
      Number(item.price.replace("$", "")) *
        item.quantity
    );
  }, 0);

  return (
    <AnimatePresence>

      {isCartOpen && (
        <>
          {/* OVERLAY */}
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
              duration: 0.4,
            }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          />

          {/* DRAWER */}
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed top-0 right-0 h-full w-full sm:w-[460px] bg-black/90 backdrop-blur-2xl border-l border-white/10 z-50 overflow-hidden"
          >

            {/* ATMOSPHERIC GLOW */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full" />

            {/* HEADER */}
            <div className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-white/10">

              <div>
                <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-2">
                  VOIDWEAR
                </p>

                <h2 className="text-3xl font-black tracking-[-0.05em]">
                  CART
                </h2>
              </div>

              <button
                onClick={closeCart}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-500"
              >
                ✕
              </button>
            </div>

            {/* ITEMS */}
            <div className="relative z-10 px-6 py-6 space-y-6 overflow-y-auto h-[calc(100%-220px)]">

              {cartItems.length === 0 ? (

                <div className="h-full flex flex-col items-center justify-center text-center">

                  <p className="uppercase tracking-[0.4em] text-[10px] text-gray-500 mb-6">
                    Your Cart Is Empty
                  </p>

                  <h3 className="text-4xl font-black tracking-[-0.05em] mb-4">
                    NOTHING
                    <br />
                    HERE.
                  </h3>

                  <p className="text-gray-400 max-w-xs leading-7 text-sm">
                    Explore the VOIDWEAR collection and
                    discover futuristic cinematic fashion.
                  </p>
                </div>

              ) : (

                cartItems.map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="flex gap-4 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-4"
                  >

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-2xl">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-28 object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="flex-1">

                      <p className="uppercase tracking-[0.35em] text-[9px] text-gray-500 mb-3">
                        VOIDWEAR
                      </p>

                      <h3 className="text-lg font-bold leading-tight">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 mt-3">
                        {item.price}
                      </p>

                      {/* CONTROLS */}
                      <div className="flex items-center gap-3 mt-5">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.name)
                          }
                          className="w-9 h-9 rounded-full border border-white/10 hover:bg-white hover:text-black transition duration-500"
                        >
                          -
                        </button>

                        <span className="text-sm text-gray-300">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.name)
                          }
                          className="w-9 h-9 rounded-full border border-white/10 hover:bg-white hover:text-black transition duration-500"
                        >
                          +
                        </button>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() =>
                          removeFromCart(index)
                        }
                        className="mt-5 text-xs uppercase tracking-[0.3em] text-red-400 hover:text-red-300 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* FOOTER */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/80 backdrop-blur-2xl p-6">

              {/* TOTAL */}
              <div className="flex items-center justify-between mb-6">

                <div>
                  <p className="uppercase tracking-[0.35em] text-[10px] text-gray-500 mb-2">
                    Total
                  </p>

                  <h3 className="text-3xl font-black tracking-[-0.05em]">
                    ${total}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm">
                  Taxes included.
                </p>
              </div>

              {/* CHECKOUT BUTTON */}
              <button className="w-full bg-white text-black py-5 rounded-full uppercase tracking-[0.35em] text-[10px] hover:bg-zinc-200 transition duration-500">
                Secure Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}