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
      { phase: "craft" as Phase, delay: 5000 },
      { phase: "story" as Phase, delay: 10000 },
      { phase: "standard" as Phase, delay: 15000 },
      { phase: "reveal" as Phase, delay: 20000 },
    ];

    const timers = timeline.map(({ phase, delay }) =>
      setTimeout(() => setPhase(phase), delay)
    );

    const completeTimer = setTimeout(() => setIsComplete(true), 21000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [skipped]);

  const heroImages = [
    "/gallery/01.jpg",
    "/gallery/05.jpg",
    "/gallery/hero-camera.jpeg",
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Matte green ambient glow — atmospheric background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 80%, oklch(0.35 0.08 148 / 0.25) 0%, transparent 70%)",
        }}
      />
      {/* Background Image Sequence - Subtle during early phases */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {phase !== "empty" && phase !== "craft" && (
            <motion.div
              key={phase}
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "reveal" ? 0.9 : 0.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[phase === "story" ? 0 : phase === "standard" ? 1 : 2]}
                alt="Background Story"
                fill
                className={`object-cover transition-all duration-1000 ${phase === "reveal" ? "grayscale-0 object-center" : "grayscale"}`}
              />
              {/* Overlay minimaliste pour garantir la lisibilité du texte sans casser le design */}
              {phase === "reveal" && (
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/90 mix-blend-multiply" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage: `linear-gradient(oklch(0.50 0.11 148 / 0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(0.50 0.11 148 / 0.18) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 1,
        }}
      />

      {/* Corner markers */}
      <div className="pointer-events-none absolute inset-8 md:inset-16 z-1">
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
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center justify-center gap-8 px-6 text-center"
            >
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-32 w-24 border border-foreground/20 md:h-48 md:w-36"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
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
              transition={{ duration: 1.5 }}
              className="px-6 text-center"
            >
              <motion.p
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 2 }}
                className="mx-auto max-w-2xl font-serif text-2xl font-light italic leading-relaxed text-foreground md:text-3xl lg:text-4xl"
              >
                L&apos;art derrière l&apos;art, c&apos;est de décider ce qu&apos;on ne montre pas.
              </motion.p>
            </motion.div>
          )}

          {/* Phase 3: The Client's Story Upgrade */}
          {phase === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center p-6"
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-4xl">
                {heroImages.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 * i }}
                    className={`relative aspect-[3/4] border border-foreground/10 overflow-hidden ${i === 2 ? 'hidden lg:block' : ''
                      }`}
                  >
                    <Image src={src} alt={`Fashion Story ${i + 1}`} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-background/20" />
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="absolute -bottom-16 text-[9px] uppercase tracking-[0.4em] text-muted-foreground"
              >
                Capturer l&apos;Essence • 2026
              </motion.div>
            </motion.div>
          )}

          {/* Phase 4: The Standard */}
          {phase === "standard" && (
            <motion.div
              key="standard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="px-6 text-center"
            >
              <div className="mx-auto max-w-lg space-y-8">
                {[
                  "Votre collection mérite d'être filmée comme un film.",
                  "Votre marque mérite d'être racontée, pas juste photographiée.",
                  "Votre vision mérite un studio qui la comprend.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: i === 2 ? 1 : 0.4, y: 0 }}
                    transition={{ delay: i * 1, duration: 1.2 }}
                    className="text-sm uppercase tracking-[0.3em] font-light text-foreground"
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
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mx-auto max-w-[1000px] px-6 text-center"
            >
              {/* Logo in hero */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="mb-8 md:mb-12"
              >
                <div className="flex justify-center">
                  <Image src="/logo.png" alt="Digitcom Studios" width={240} height={60} className="h-12 md:h-16 w-auto object-contain" />
                </div>
              </motion.div>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
                style={{ background: "oklch(0.50 0.11 148)" }}
                className="mx-auto mb-8 h-px w-24 md:mb-12 md:w-32"
              />

              {/* Tagline — Plan 3: Client-centered language */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="mx-auto max-w-2xl font-serif text-lg font-light italic leading-relaxed text-foreground md:text-2xl lg:text-3xl"
              >
                Votre collection mérite d&apos;être racontée.
                <br />
                <span className="not-italic text-sm font-sans tracking-[0.1em] text-muted-foreground">
                  Laissez-nous écrire son histoire.
                </span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isComplete ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 flex flex-col items-center gap-6 md:mt-20 md:flex-row md:justify-center"
              >
                <a
                  href="#portfolio"
                  className="btn-green-sweep group relative inline-block overflow-hidden px-12 py-5 text-xs uppercase tracking-[0.2em]"
                >
                  <span>Découvrir nos réalisations</span>
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

