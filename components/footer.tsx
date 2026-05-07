"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Digitcom Studios"
                width={160}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Votre collection mérite d&apos;être racontée, pas juste photographiée.
              Photographie de mode, films et couverture de défilés à Dakar.
            </p>

            {/* Lead magnet — Plan 12 */}
            <div className="mt-8 border border-border p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Guide gratuit
              </p>
              <p className="mt-2 font-serif text-base text-foreground">
                Comment préparer un shooting de mode réussi
              </p>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 border-b border-border bg-transparent px-2 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent placeholder:text-muted-foreground/50"
                />
                <button className="btn-green-sweep px-4 py-2 text-xs uppercase tracking-[0.15em]">
                  <span>Recevoir</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Réalisations", href: "#portfolio" },
                { name: "Services", href: "#services" },
                { name: "À propos", href: "#about" },
                { name: "Journal", href: "/blog" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Réseaux
            </h4>
            <ul className="space-y-3">
              {[
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/digitcom_studios",
                },
                { name: "LinkedIn", href: "#" },
                { name: "Vimeo", href: "#" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Instagram feed CTA — Plan 15 */}
            <div className="mt-8">
              <a
                href="https://www.instagram.com/digitcom_studios"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                <span className="border-b border-foreground/30 pb-0.5 transition-all group-hover:border-foreground">
                  Suivre @digitcom_studios
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Digitcom Studios. Tous droits
            réservés. Dakar, Sénégal.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Conditions Générales
            </Link>
          </div>
        </div>

        {/* Large wordmark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 overflow-hidden"
        >
          <span className="block text-center font-serif text-[15vw] font-light leading-none tracking-tight text-foreground">
            DIGITCOM
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
