"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

type Phase = "empty" | "craft" | "story" | "standard" | "reveal";

export function HeroSection() {
  const [phase, setPhase] = useState<Phase>("empty");
  const [isComplete, setIsComplete] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 2 seconds — Plan 2
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(skipTimer);
  }, []);

  useEffect(() => {
    if (skipped) {
      setPhase("reveal");
      setIsComplete(true);
      return;
    }

    const timeline = [
      { phase: "empty" as Phase, delay: 0 },
      { phase: "craft" as Phase, delay: 2500 },
      { phase: "story" as Phase, delay: 5000 },
      { phase: "standard" as Phase, delay: 7500 },
      { phase: "reveal" as Phase, delay: 10000 },
    ];

    const timers = timeline.map(({ phase, delay }) =>
      setTimeout(() => setPhase(phase), delay)
    );

    const completeTimer = setTimeout(() => setIsComplete(true), 11000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [skipped]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Skip intro button — Plan 2 */}
      <AnimatePresence>
        {showSkip && phase !== "reveal" && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSkipped(true)}
            className="absolute bottom-8 right-8 z-50 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Passer l&apos;intro
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Background grid — very subtle */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(oklch(0.88 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.88 0 0) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.3,
        }}
      />

      {/* Corner markers */}
      <div className="pointer-events-none absolute inset-8 md:inset-16">
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos) => (
          <div key={pos} className={`absolute ${pos}`}>
            <div className="h-6 w-px bg-foreground/20" />
            <div className="h-px w-6 bg-foreground/20" />
          </div>
        ))}
      </div>

      {/* Phase container */}
      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {/* Phase 1: The Empty Frame */}
          {phase === "empty" && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center gap-8 px-6 text-center"
            >
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="h-32 w-24 border border-foreground/20 md:h-48 md:w-36"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
              >
                Le cadre vide attend sa lumière
              </motion.p>
            </motion.div>
          )}

          {/* Phase 2: The Craft Statement */}
          {phase === "craft" && (
            <motion.div
              key="craft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="px-6 text-center"
            >
              <p className="mx-auto max-w-2xl font-serif text-2xl font-light italic leading-relaxed text-foreground md:text-3xl lg:text-4xl">
                L&apos;art derrière l&apos;art, c&apos;est de décider ce qu&apos;on ne montre pas.
              </p>
            </motion.div>
          )}

          {/* Phase 3: The Client's Story */}
          {phase === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="flex items-center gap-8 md:gap-16">
                {/* Before - faded */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 0.3, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden h-32 w-24 border border-foreground/20 md:h-48 md:w-36">
                    <Image src="/hero/raw.png" alt="Avant" fill className="object-cover grayscale" />
                  </div>
                  <span className="mt-2 block text-center text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Avant</span>
                </motion.div>

                {/* Arrow */}
                <div className="relative">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px w-16 origin-left bg-foreground md:w-32"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2 }}
                    className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
                  />
                </div>

                {/* After - elevated */}
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="relative overflow-hidden h-32 w-24 border border-foreground md:h-48 md:w-36">
                    <Image src="/hero/graded.png" alt="Après" fill className="object-cover" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 }}
                      className="absolute inset-3 border border-foreground/30"
                    />
                  </div>
                  <span className="mt-2 block text-center text-[9px] uppercase tracking-[0.3em] text-foreground">Après</span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Phase 4: The Standard */}
          {phase === "standard" && (
            <motion.div
              key="standard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="px-6 text-center"
            >
              <div className="mx-auto max-w-lg space-y-6">
                {[
                  "Votre collection mérite d'être filmée comme un film.",
                  "Votre marque mérite d'être racontée, pas juste photographiée.",
                  "Votre vision mérite un studio qui la comprend.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: i === 2 ? 1 : 0.3, y: 0 }}
                    transition={{ delay: i * 0.6 }}
                    className="text-sm uppercase tracking-[0.25em] text-foreground"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 5: The Reveal — Plan 3: Client-centered CTA */}
          {phase === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mx-auto max-w-[1000px] px-6 text-center"
            >
              {/* Logo in hero */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="mb-8 md:mb-12"
              >
                <h1 className="font-serif text-4xl font-light tracking-[0.15em] text-foreground md:text-6xl lg:text-7xl">
                  digitcom_studios
                </h1>
              </motion.div>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mx-auto mb-8 h-px w-24 bg-foreground md:mb-12 md:w-32"
              />

              {/* Tagline — Plan 3: Client-centered language */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="mx-auto max-w-2xl font-serif text-lg font-light italic leading-relaxed text-foreground/70 md:text-xl lg:text-2xl"
              >
                Votre collection mérite d&apos;être racontée.
                <br />
                <span className="not-italic text-base font-sans tracking-[0.05em] text-muted-foreground">
                  Laissez-nous écrire son histoire.
                </span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isComplete ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 flex flex-col items-center gap-4 md:mt-16 md:flex-row md:justify-center"
              >
                <a
                  href="#portfolio"
                  className="group relative inline-block overflow-hidden border border-foreground bg-transparent px-10 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background"
                >
                  Découvrir nos réalisations
                </a>
                <a
                  href="#contact"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Ou parlez-nous de votre projet →
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Phase progress indicator */}
      {phase !== "reveal" && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex gap-3">
            {(["empty", "craft", "story", "standard"] as const).map((p) => (
              <motion.div
                key={p}
                animate={{
                  opacity: phase === p ? 1 : 0.3,
                  scale: phase === p ? 1 : 0.8,
                }}
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${phase === p ? "bg-foreground" : "bg-foreground/30"
                  }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      {phase === "reveal" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Défiler
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
          </motion.div>
        </motion.div>
      )}

      {/* Side branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "reveal" ? 0.4 : 0 }}
        transition={{ duration: 1 }}
        className="absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Mode & Visuels
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "reveal" ? 0.4 : 0 }}
        transition={{ duration: 1 }}
        className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          style={{ writingMode: "vertical-rl" }}
        >
          Depuis 2024
        </span>
      </motion.div>
    </section>
  );
}
