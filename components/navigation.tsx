"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Réalisations", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "À propos", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "border-b border-border/80 bg-background/95 backdrop-blur-md"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <Image
              src="/logo.png"
              alt="Digitcom Studios"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-xs uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-foreground"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Availability badge — Plan 10 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden items-center gap-2 md:flex"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-2 rounded-full bg-foreground"
              />
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Disponible
              </span>
            </motion.div>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden border border-foreground/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background md:block"
            >
              Démarrer un projet
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-foreground transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-6 bg-foreground"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-foreground transition-all"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl font-light text-foreground"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Availability + CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4 mt-4"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-foreground"
                />
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Disponible pour de nouveaux projets
                </span>
              </div>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="border border-foreground px-8 py-3 text-sm uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Démarrer un projet
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
