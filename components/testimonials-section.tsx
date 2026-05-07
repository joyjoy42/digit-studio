"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
    {
        quote:
            "Digitcom a su capturer l'essence de notre collection en quelques prises. Les images parlent d'elles-mêmes — chaque cliché raconte l'histoire d'une pièce.",
        author: "Bakuso",
        role: "Directeur Créatif, Bakuso Brand",
    },
    {
        quote:
            "Une équipe qui comprend la mode autant que la lumière. Le résultat : des visuels qui ont décuplé notre engagement sur Instagram en une semaine.",
        author: "Jennifer D.",
        role: "Mannequin & Influenceuse",
    },
    {
        quote:
            "Extraordinaire sens du détail. Ils n'ont pas juste photographié notre défilé — ils ont immortalisé son âme.",
        author: "Ariadne K.",
        role: "Styliste, Dakar Fashion Week",
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
                            className="bg-transparent px-8 py-10 lg:px-10 lg:py-12"
                        >
                            {/* Quote mark */}
                            <span className="mb-6 block font-serif text-5xl leading-none text-white/10">
                                &ldquo;
                            </span>
                            <p className="mb-8 font-serif text-lg italic leading-relaxed text-white">
                                {t.quote}
                            </p>
                            <div className="border-t border-white/20 pt-6">
                                <p className="text-sm font-medium text-white">{t.author}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                                    {t.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
