"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "",
  inView,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  inView: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(value) {
          setDisplay(Math.round(value).toString());
        },
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [inView, target, delay]);

  return (
    <>{display}{suffix}</>
  );
}

const principles = [
  {
    title: "Ce que nous refusons",
    items: [
      "Les délais précipités qui compromettent la qualité",
      "Les tendances au détriment de l'intemporel",
      "La quantité au détriment de la signification",
      "Le travail qui ne nous challenge pas",
    ],
  },
  {
    title: "Ce sur quoi nous insistons",
    items: [
      "Une compréhension profonde avant chaque image",
      "L'artisanat dans chaque détail",
      "Des partenariats, pas des transactions",
      "Un travail que nous sommes fiers de signer",
    ],
  },
];

const partners = [
  "ALGUEYE DAKAR",
  "ADAMA PARIS",
  "COLLE SOW ARDO",
  "ALIA BARE",
  "MADO MARQUES",
  "SAPAMINA",
  "NKUHURU DESIGN",
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principlesRef = useRef<HTMLDivElement>(null);
  const isPrinciplesInView = useInView(principlesRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <section id="about" className="bg-background py-32 lg:py-48">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Main about content */}
        <div ref={ref} className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column - Statement */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Notre Philosophie
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Le premium se définit
              <br />
              par ses <span className="italic text-accent">limites</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 space-y-6 text-lg text-muted-foreground"
            >
              <p className="leading-relaxed hover:text-white transition-colors duration-300">
                L'excellence commence en sachant dire non. Moins de bruit, plus d'impact. Nous sculptons la lumière pour rendre chaque silhouette inoubliable sans diluer la vision du créateur.
              </p>
              <p className="leading-relaxed hover:text-accent transition-colors duration-300">
                Plus qu'un studio, un collectif dédié à bâtir la légende de votre marque par des images qui parlent.
              </p>
            </motion.div>
          </div>

          {/* Right column - The craft statement */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative border-l-2 border-accent pl-8"
            >
              <p className="font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
                &ldquo;Ce qu&apos;on ne montre pas fait l'art. Un cadre épuré, un souffle retenu, et le silence qui sublime le vêtement.&rdquo;
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                — Manifeste du Studio
              </p>
            </motion.div>
          </div>
        </div>

        {/* Principles section - The standard we hold */}
        <div ref={principlesRef} className="mt-32 lg:mt-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPrinciplesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
              L&apos;Exigence que nous maintenons
            </span>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
            {principles.map((principle, groupIndex) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isPrinciplesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
                className="relative"
              >
                <h3 className="mb-8 font-serif text-2xl text-foreground md:text-3xl">
                  {principle.title}
                </h3>
                <ul className="space-y-4">
                  {principle.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isPrinciplesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: groupIndex * 0.2 + itemIndex * 0.1 + 0.3,
                      }}
                      className="flex items-start gap-4 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats/credibility */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isPrinciplesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 grid grid-cols-2 gap-8 border-t border-border pt-16 md:grid-cols-4"
        >
          {[
            { target: 8, suffix: "+", label: "Années d'expérience" },
            { target: 120, suffix: "+", label: "Projets réalisés" },
            { target: 40, suffix: "+", label: "Partenariats de marque" },
            { target: 15, suffix: "", label: "Récompenses" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isPrinciplesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="stat-shimmer block font-serif text-4xl md:text-5xl"
              >
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  inView={isPrinciplesInView}
                  delay={0.7 + index * 0.15}
                />
              </motion.span>
              <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Partners Marquee */}
        <div className="mt-24 lg:mt-32 overflow-hidden border-y border-border py-8">
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
                {partners.join(" / ")} /{" "}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
