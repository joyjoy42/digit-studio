"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [visible, setVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show on devices with a pointer
        const mql = window.matchMedia("(pointer: fine)");
        if (!mql.matches) return;

        setVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest(
                "a, button, [data-cursor-hover], input, textarea, select"
            );
            if (interactive) {
                setIsHovering(true);
                const text = interactive.getAttribute("data-cursor-text");
                setCursorText(text || "");
            }
        };

        const handleOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest(
                "a, button, [data-cursor-hover], input, textarea, select"
            );
            if (interactive) {
                setIsHovering(false);
                setCursorText("");
            }
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseover", handleOver);
        document.addEventListener("mouseout", handleOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseover", handleOver);
            document.removeEventListener("mouseout", handleOut);
        };
    }, [cursorX, cursorY]);

    if (!visible) return null;

    return (
        <>
            {/* Main dot */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
                style={{ x: smoothX, y: smoothY }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 60 : isClicking ? 6 : 10,
                        height: isHovering ? 60 : isClicking ? 6 : 10,
                        borderRadius: "50%",
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white"
                >
                    {cursorText && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-[8px] font-sans uppercase tracking-[0.15em] text-black"
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9998]"
                style={{ x: cursorX, y: cursorY }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 80 : 36,
                        height: isHovering ? 80 : 36,
                        opacity: isClicking ? 0.2 : 0.5,
                        borderColor: isHovering ? "oklch(0.50 0.11 148)" : "oklch(0.94 0 0 / 0.2)",
                        boxShadow: isHovering ? "0 0 14px oklch(0.50 0.11 148 / 0.45)" : "none",
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="-translate-x-1/2 -translate-y-1/2 rounded-full border"
                />
            </motion.div>

            {/* Hide default cursor globally */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
        </>
    );
}
