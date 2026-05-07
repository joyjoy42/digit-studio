"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";

const testimonials = [
    {
        quote: "Capture l'essence de nos collections instantanément. Magique.",
        author: "Bakuso",
        role: "Directeur Créatif",
        image: "/placeholder-user.jpg"
    },
    {
        quote: "Nos visuels Instagram ont explosé. Un éclairage premium garanti.",
        author: "Jennifer D.",
        role: "Mannequin",
        image: "/placeholder-user.jpg"
    },
    {
        quote: "Ils n'ont pas juste photographié le défilé, ils ont immortalisé son âme.",
        author: "Ariadne K.",
        role: "Dakar Fashion Week",
        image: "/placeholder-user.jpg"
    },
];

export function TestimonialsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="bg-transparent py-24 lg:py-36">
            <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">
                        Ce que disent nos clients
                    </span>
                </motion.div>

                {/* Testimonials grid */}
                <div className="grid gap-px bg-white/10 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className="group relative bg-white/5 border border-white/5 hover:border-accent/40 hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 ease-out px-8 py-10 lg:px-10 lg:py-12"
                        >
                            {/* Accent line on hover */}
                            <div className="absolute top-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                            <span className="mb-6 block font-serif text-5xl leading-none text-white/10 group-hover:text-accent/30 transition-colors">
                                &ldquo;
                            </span>
                            <p className="mb-8 font-serif text-lg italic leading-relaxed text-white group-hover:text-accent/90 transition-colors">
                                {t.quote}
                            </p>
                            <div className="border-t border-white/20 pt-6 flex items-center gap-4">
                                <div className="h-10 w-10 relative overflow-hidden rounded-full border border-white/20 group-hover:border-accent/50 transition-colors">
                                    <Image src={t.image} alt={t.author} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{t.author}</p>
                                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
