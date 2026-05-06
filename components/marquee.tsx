"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    words?: string[];
    speed?: number;
}

export function Marquee({
    words = [
        "MODE",
        "ÉDITORIAL",
        "PODIUM",
        "LOOKBOOK",
        "STREETWEAR",
        "ARTISANAT",
        "HAUTE COUTURE",
        "DÉFILÉ",
        "PHOTOGRAPHIE",
        "FILM",
    ],
    speed = 30,
}: MarqueeProps) {
    const marqueeText = words.join(" · ");

    return (
        <div className="overflow-hidden border-y border-border bg-background py-5">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: {
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                    },
                }}
            >
                {[0, 1].map((i) => (
                    <span
                        key={i}
                        className="mr-8 text-xs uppercase tracking-[0.5em] text-foreground/20"
                    >
                        {marqueeText} ·{" "}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
