"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function CustomCursor() {

  const [isHovering, setIsHovering] =
    useState(false);

  const [cursorText, setCursorText] =
    useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    // INTERACTIVE ELEMENTS
    const hoverElements =
      document.querySelectorAll(
        "button, a, input, textarea"
      );

    hoverElements.forEach((el) => {

      el.addEventListener(
        "mouseenter",
        () => {

          setIsHovering(true);

          if (
            el.tagName.toLowerCase() === "a"
          ) {
            setCursorText("VIEW");
          } else {

            setCursorText("");
          }
        }
      );

      el.addEventListener(
        "mouseleave",
        () => {

          setIsHovering(false);

          setCursorText("");
        }
      );
    });

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };

  }, [mouseX, mouseY]);

  return (
    <>
      {/* MAIN CURSOR */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: isHovering
            ? 90
            : 32,

          height: isHovering
            ? 90
            : 32,

          marginLeft: isHovering
            ? -29
            : 0,

          marginTop: isHovering
            ? -29
            : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="fixed top-0 left-0 z-[99999] rounded-full pointer-events-none mix-blend-difference flex items-center justify-center border border-white/20 bg-white text-black text-[10px] tracking-[0.3em] uppercase"
      >

        {cursorText}
      </motion.div>

      {/* CURSOR TRAIL */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering
            ? 2.2
            : 1,
          opacity: isHovering
            ? 0.15
            : 0.08,
        }}
        transition={{
          duration: 0.4,
        }}
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-white blur-3xl pointer-events-none z-[99998]"
      />
    </>
  );
}