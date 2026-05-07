"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background py-32 lg:py-48">
      <div ref={ref} className="mx-auto max-w-[1800px] px-6 lg:px-12">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-16 lg:grid-cols-2 lg:gap-24"
            >
              {/* Left col — CTA */}
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    Démarrer une Conversation
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl"
                >
                  Votre prochaine
                  <br />
                  collection est à un <span className="italic">clic</span>.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-8 max-w-md text-muted-foreground"
                >
                  Tout grand projet commence par une conversation. Décrivez votre vision — nous nous occupons du reste.
                </motion.p>

                {/* Scarcity nudge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-6 flex items-center gap-3"
                >
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="green-dot h-2 w-2"
                  />
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    2 projets disponibles ce mois-ci
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-12 space-y-6"
                >
                  {/* Contact info */}
                  {[
                    { label: "WhatsApp", value: "+221 78 149 35 10", href: "https://wa.me/221781493510?text=Bonjour%2C%20je%20voudrais%20d%C3%A9marrer%20un%20projet." },
                    { label: "Email", value: "hello@digitcom-studio.com", href: "mailto:hello@digitcom-studio.com" },
                    { label: "Localisation", value: "Dakar, Sénégal", href: null },
                  ].map((info) => (
                    <div key={info.label}>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a href={info.href} className="mt-1 block text-foreground hover:underline underline-offset-4 transition-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-foreground">{info.value}</p>
                      )}
                    </div>
                  ))}

                  {/* Calendly session — Plan 7 */}
                  <div className="border-t border-border pt-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Ou réservez directement
                    </span>
                    <a
                      href="https://calendly.com/digitcom-studios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-3 flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-foreground">
                        Session découverte gratuite (15 min)
                      </span>
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right col — Simplified form (Plan 1: 3 champs max) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="space-y-10">
                  {[
                    { id: "name", label: "Votre nom", type: "text", key: "name" as const },
                    { id: "email", label: "Votre email", type: "email", key: "email" as const },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        value={formData[field.key]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-accent"
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Parlez-nous de votre projet
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-accent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-green-sweep w-full px-10 py-4 text-xs uppercase tracking-[0.2em]"
                  >
                    Démarrer votre projet
                  </button>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            /* Cinematic confirmation — Plan 9 */
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex min-h-[50vh] flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12 h-px w-32 origin-left" style={{background:"oklch(0.50 0.11 148)"}}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground"
              >
                Votre histoire commence maintenant
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-6 font-serif text-3xl font-light text-foreground md:text-5xl"
              >
                Message reçu.
                <br />
                <span className="italic">Nous vous répondons sous 48h.</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
              >
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="green-dot h-2 w-2"
                />
                Digitcom Studios · Dakar, Sénégal
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 h-px w-32 origin-right" style={{background:"oklch(0.50 0.11 148)"}}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
