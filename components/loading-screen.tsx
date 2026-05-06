"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const displayProgress = Math.min(Math.round(progress), 100);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Animated corner brackets */}
          <div className="absolute inset-12 md:inset-24 pointer-events-none">
            {/* Top-left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 0.3, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-0 left-0"
            >
              <div className="h-8 w-px bg-foreground" />
              <div className="h-px w-8 bg-foreground absolute top-0 left-0" />
            </motion.div>
            {/* Top-right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 0.3, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-0 right-0"
            >
              <div className="h-8 w-px bg-foreground absolute right-0" />
              <div className="h-px w-8 bg-foreground absolute top-0 right-0" />
            </motion.div>
            {/* Bottom-left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 0.3, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-0 left-0"
            >
              <div className="h-8 w-px bg-foreground absolute bottom-0" />
              <div className="h-px w-8 bg-foreground absolute bottom-0 left-0" />
            </motion.div>
            {/* Bottom-right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 0.3, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 right-0"
            >
              <div className="h-8 w-px bg-foreground absolute bottom-0 right-0" />
              <div className="h-px w-8 bg-foreground absolute bottom-0 right-0" />
            </motion.div>
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <Image
              src="/logo.png"
              alt="Digitcom Studios"
              width={180}
              height={45}
              className="h-10 w-auto object-contain"
              priority
            />
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 overflow-hidden">
            <div className="h-px bg-border">
              <motion.div
                className="h-full bg-foreground"
                initial={{ width: 0 }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ duration: 0.15, ease: "linear" }}
              />
            </div>
          </div>

          {/* Counter + text */}
          <div className="mt-6 flex items-center gap-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-mono text-xs tabular-nums text-muted-foreground"
            >
              {displayProgress}%
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
            >
              Chargement de l&apos;univers
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
