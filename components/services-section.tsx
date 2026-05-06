"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Photographie de Mode",
    description:
      "Nous capturons l'essence du vêtement et l'attitude du modèle. Des lookbooks aux campagnes publicitaires, chaque image est pensée comme une déclaration esthétique.",
    details: [
      "Éditoriaux mode & magazines",
      "Lookbooks de collections",
      "Streetwear & Prêt-à-porter",
      "Photographie beauté & détails",
    ],
  },
  {
    number: "02",
    title: "Films de Mode",
    description:
      "Le vêtement en mouvement nécessite une narration visuelle unique. Nous produisons des vidéos haut de gamme qui incarnent l'ADN de votre marque.",
    details: [
      "Fashion films",
      "Campagnes vidéo",
      "Vidéos backstage",
      "Contenus sociaux dynamiques",
    ],
  },
  {
    number: "03",
    title: "Couverture de Défilés",
    description:
      "L'adrénaline du podium figée dans le temps. Nous anticipons les passages et sublimons la vision du créateur dans le feu de l'action.",
    details: [
      "Fashion Weeks",
      "Lancement de collections",
      "Interviews designers",
      "Reportages exclusifs",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative border-t border-border py-12 lg:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Number */}
        <div className="lg:col-span-1">
          <span className="font-mono text-sm text-accent">{service.number}</span>
        </div>

        {/* Title */}
        <div className="lg:col-span-3">
          <h3 className="font-serif text-3xl text-foreground transition-colors group-hover:text-accent md:text-4xl">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <div className="lg:col-span-4">
          <p className="text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Details */}
        <div className="lg:col-span-4">
          <ul className="space-y-2">
            {service.details.map((detail) => (
              <li
                key={detail}
                className="flex items-center gap-3 text-sm text-foreground/70"
              >
                <span className="h-px w-4 bg-accent" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
}

export function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-card py-32 lg:py-48">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
              Ce que nous offrons
            </span>
          </motion.div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl"
            >
              Une expertise au service
              <br />
              <span className="italic text-accent">de la mode</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md text-muted-foreground"
            >
              Nous sublimons la vision des designers, des marques et des talents à travers un spectre complet de services visuels.
            </motion.p>
          </div>
        </div>

        {/* Services list */}
        <div>
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
