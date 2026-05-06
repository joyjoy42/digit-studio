"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";

export function CraftSection() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Cursor-aware spotlight
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const spotlightX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  // Stagger animation for poem lines
  const poemLines = [
    { text: "Le cadre vide.", italic: false },
    { text: "Montrer un seul détail.", italic: true },
    { text: "Ne presque rien dire.", italic: false },
    { text: "Le silence complète la pensée.", italic: false },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-background py-32 lg:py-48"
    >
      {/* Cursor-aware radial spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at var(--spotX) var(--spotY), oklch(0.06 0 0 / 0.04), transparent 50%)`,
        }}
      >
        <motion.div
          className="h-full w-full"
          style={
            {
              "--spotX": spotlightX,
              "--spotY": spotlightY,
            } as React.CSSProperties
          }
        />
      </motion.div>

      {/* Animated background frames */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={isInView ? { opacity: 0.15, rotate: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[5%] top-[10%] h-32 w-24 border border-foreground/20"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 5 }}
          animate={isInView ? { opacity: 0.1, rotate: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[8%] bottom-[15%] h-24 w-32 border border-foreground/15"
        />
        {/* Extra floating frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute left-[30%] top-[60%] h-16 w-12 border border-foreground/10"
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full"
          />
        </motion.div>
      </div>

      <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left - The empty frame with animated poem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group relative aspect-[4/5] border border-border/50 p-8 lg:p-12" data-cursor-hover data-cursor-text="voir">
              {/* Inner frame with hover animation */}
              <motion.div
                className="absolute inset-8 lg:inset-12 border border-foreground/10"
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Poem lines with stagger reveal */}
              <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
                {poemLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + i * 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`font-serif text-xl leading-relaxed ${line.italic
                        ? "italic text-foreground"
                        : "text-foreground/50"
                      }`}
                  >
                    {line.text}
                  </motion.p>
                ))}
              </div>

              {/* Corner accents that animate on hover */}
              <div className="absolute inset-0 p-4">
                <motion.span
                  className="absolute left-4 top-4 block h-4 w-px bg-foreground/30 origin-top"
                  whileHover={{ scaleY: 2 }}
                />
                <motion.span
                  className="absolute left-4 top-4 block h-px w-4 bg-foreground/30 origin-left"
                  whileHover={{ scaleX: 2 }}
                />
                <motion.span
                  className="absolute right-4 bottom-4 block h-4 w-px bg-foreground/30 origin-bottom"
                  whileHover={{ scaleY: 2 }}
                />
                <motion.span
                  className="absolute right-4 bottom-4 block h-px w-4 bg-foreground/30 origin-right"
                  whileHover={{ scaleX: 2 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Philosophy text with word-by-word reveal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={isInView ? { opacity: 1, letterSpacing: "0.4em" } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-[10px] uppercase tracking-[0.4em] text-foreground"
            >
              L&apos;Art derrière l&apos;Art
            </motion.span>

            <h2 className="font-serif text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-5xl">
              {"Révéler l'invisible".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="italic text-foreground/60"
              >
                intention
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Ce qui a été décidé avant que l&apos;obturateur ne s&apos;ouvre. L&apos;angle
              rejeté. La lumière attendue. Le moment laissé passer pour que le
              bon puisse arriver.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              Notre processus est invisible par conception. Vous ne voyez que le
              résultat — mais derrière chaque image, une constellation de choix,
              chacun délibéré, chacun essentiel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="pt-4"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-foreground"
                data-cursor-text="voir"
              >
                <span className="border-b border-foreground/30 pb-0.5 transition-all group-hover:border-foreground">
                  Explorer nos intentions
                </span>
                <motion.span
                  className="block h-px w-8 bg-foreground"
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
