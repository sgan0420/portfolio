"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Use motion values for better performance
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Use spring for smooth movement
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    // Add event listeners for mouse movement
    window.addEventListener("mousemove", updateMousePosition);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .interactive'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference shadow-lg"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 30 },
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-purple-500/40 rounded-full pointer-events-none z-[9998] shadow-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.5,
          borderColor: isHovering ? "rgba(139, 92, 246, 0.6)" : "rgba(139, 92, 246, 0.4)",
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25 },
          opacity: { duration: 0.2 },
          borderColor: { duration: 0.2 },
        }}
      />

      {/* Additional outer ring for better visibility */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 border border-purple-400/20 rounded-full pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.2,
        }}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 30 },
          opacity: { duration: 0.3 },
        }}
      />
    </>
  );
};

export default CustomCursor;
