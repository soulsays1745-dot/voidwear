"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({
  open,
  onClose,
}: Props) {

  return (
    <AnimatePresence>

      {open && (
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
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center px-6"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 hover:bg-white hover:text-black transition duration-500"
          >
            ✕
          </button>

          {/* LABEL */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="uppercase tracking-[0.5em] text-[10px] text-gray-500 mb-8"
          >
            Search VOIDWEAR
          </motion.p>

          {/* INPUT */}
          <motion.input
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            type="text"
            placeholder="Search Collection..."
            className="w-full max-w-4xl bg-transparent border-b border-white/10 text-center text-4xl md:text-7xl font-black tracking-[-0.06em] outline-none pb-6 placeholder:text-gray-700"
          />

          {/* QUICK LINKS */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="flex flex-wrap items-center justify-center gap-4 mt-16"
          >

            {[
              "HOODIES",
              "TEES",
              "JACKETS",
              "LIMITED",
            ].map((item) => (
              <button
                key={item}
                className="border border-white/10 px-6 py-3 rounded-full uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition duration-500"
              >
                {item}
              </button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}