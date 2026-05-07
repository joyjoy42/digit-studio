"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
    "/gallery/01.jpg",
    "/gallery/DSC02968.jpg",
    "/gallery/DSC03660.jpg",
    "/gallery/DSC04026.jpg",
    "/gallery/QP8A3002.jpg",
];

const row2 = [
    "/gallery/05.jpg",
    "/gallery/DSC03431.jpg",
    "/gallery/DSC03827.jpg",
    "/gallery/DSC02233.jpg",
    "/gallery/IMG_0019.JPG",
];

export function InteractiveGallery() {
    return (
        <section className="relative overflow-hidden bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-[1800px] px-6 lg:px-12 text-center mb-16 lg:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-accent block mb-4">
                        Galerie Immersive
                    </span>
                    <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
                        L'Élégance en <span className="italic text-accent">Mouvement</span>
                    </h2>
                </motion.div>
            </div>

            <div className="flex flex-col gap-8 md:gap-12 relative -mx-4 md:-mx-8 opacity-90 overflow-hidden">
                {/* Row 1 - Moves Left */}
                <div className="relative flex w-max">
                    <motion.div
                        className="flex gap-4 md:gap-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    >
                        {[...row1, ...row1].map((src, i) => (
                            <div key={i} className="relative w-[60vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] aspect-[3/4] overflow-hidden rounded-sm group bg-muted/20">
                                <Image
                                    src={src}
                                    alt="Gallery item"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 60vw, (max-width: 1024px) 40vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Moves Right */}
                <div className="relative flex w-max justify-end self-end">
                    <motion.div
                        className="flex gap-4 md:gap-8"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                    >
                        {[...row2, ...row2].map((src, i) => (
                            <div key={i} className="relative w-[60vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] aspect-[4/5] overflow-hidden rounded-sm group bg-muted/20">
                                <Image
                                    src={src}
                                    alt="Gallery item"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 60vw, (max-width: 1024px) 40vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
