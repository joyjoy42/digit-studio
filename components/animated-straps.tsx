"use client";

import { motion } from "framer-motion";

export function AnimatedStraps() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
            {/* Matte Green Straps */}
            <motion.div
                className="absolute top-[10%] left-[-10%] h-32 w-[120%] bg-[#16302B]/60 rotate-[-15deg] blur-[2px]"
                animate={{ y: [0, -50, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[60%] left-[-10%] h-48 w-[120%] bg-[#16302B]/40 rotate-[10deg] blur-[4px]"
                animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div
                className="absolute top-[40%] right-[-10%] h-24 w-[120%] bg-[#16302B]/30 rotate-[-25deg] blur-[3px]"
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />

            {/* White Straps */}
            <motion.div
                className="absolute top-[30%] left-[-10%] h-[1px] w-[120%] bg-white/20 rotate-[-5deg]"
                animate={{ x: [0, 100, 0], opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-[80%] right-[-10%] h-[2px] w-[120%] bg-white/10 rotate-[15deg]"
                animate={{ x: [0, -100, 0], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
            />
            <motion.div
                className="absolute top-[15%] right-[-10%] h-[1px] w-[120%] bg-white/20 rotate-[25deg]"
                animate={{ x: [0, -50, 0], opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
            />
        </div>
    );
}
