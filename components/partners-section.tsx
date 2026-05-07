"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
    "ALGUEYE DAKAR",
    "ADAMA PARIS",
    "COLLE SOW ARDO",
    "ALIA BARE",
    "MADO MARQUES",
    "SAPAMINA",
    "NKUHURU DESIGN",
];

export function PartnersSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const marqueeText = partners.join(" / ");

    return (
        <section id="partners" className="bg-transparent py-24 lg:py-32">
            <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-accent block mb-4">
                        Photographe officiel de la DAKAR FASHION WEEK
                    </span>
                    <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
                        Marques avec lesquelles on a collaboré
                    </h2>
                </motion.div>
            </div>

            <div className="mt-16 overflow-hidden border-y border-border py-8">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                >
                    {[0, 1].map((i) => (
                        <span
                            key={i}
                            className="mr-12 text-lg md:text-xl font-serif text-foreground/70"
                        >
                            {marqueeText} /{" "}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
