"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Collection Bakuso",
    category: "Photographie de Défilé",
    year: "2026",
    date: "Printemps 2026",
    location: "Dakar Fashion Week",
    context:
      "La marque Bakuso a présenté sa nouvelle collection avant-gardiste, fusionnant des motifs traditionnels avec des coupes contemporaines audacieuses, lors d'un défilé très attendu.",
    challenge:
      "Traduire l'énergie électrique du podium en images figées, en mettant en valeur les textures complexes des tissus verts imprimés et l'attitude assumée des mannequins sous un éclairage dramatique.",
    approach:
      "Une approche photographique frontale, capturant l'allure et la confiance à mi-foulée. L'accent a été mis sur la netteté des motifs et la colorimétrie vibrante des contrastes jaune et vert.",
    result:
      "Des clichés iconiques qui ont défini la couverture médiatique de l'événement, affirmant la position de la marque dans la haute couture ouest-africaine.",
    metrics: ["13 clichés éditoriaux", "4 200+ impressions", "Republié par le designer"],
    heroImage: "/portfolio/mode/runway.jpg",
    secondaryImage: "/portfolio/mode/runway.jpg",
    accentColor: "oklch(0.55 0.15 145)", // green
    instagramUrl: "https://www.instagram.com/digitcom_studios",
  },
  {
    id: 2,
    title: "Éditorial Océan",
    category: "Mode Conceptuelle",
    year: "2026",
    date: "Été 2026",
    location: "Côtes Sénégalaises",
    context:
      "Une campagne éditoriale naviguant à l'intersection de la mode urbaine (denim brut) et de l'environnement maritime traditionnel sénégalais, incarnant l'esprit de liberté conceptuelle.",
    challenge:
      "Créer une synergie visuelle entre les tenues structurées et le mouvement imprévisible de l'océan, tout en conservant une esthétique haute couture sur un bateau en mouvement.",
    approach:
      "L'utilisation de la lumière naturelle diffuse de l'océan atlantique pour adoucir les textures du jean et faire ressortir le maquillage éditorial et les coiffures architecturales.",
    result:
      "Une série éditoriale onirique, célébrant le contraste entre la rigueur du denim et la fluidité de l'eau, largement relayée dans les magazines de mode alternatifs.",
    metrics: ["8 publications presse", "2 800+ partages", "Couverture magazine"],
    heroImage: "/portfolio/mode/boat.jpg",
    secondaryImage: "/portfolio/mode/boat.jpg",
    accentColor: "oklch(0.3 0.05 250)", // deep blue/denim
    instagramUrl: "https://www.instagram.com/digitcom_studios",
  },
  {
    id: 3,
    title: "Collection Artisanale",
    category: "Mode Balnéaire",
    year: "2025",
    date: "Hiver 2025",
    location: "Îles de la Madeleine",
    context:
      "Mise en lumière d'une collection balnéaire unique, entièrement conçue en crochet à la main, ornée de perles et de cristaux, célébrant le savoir-faire artisanal local.",
    challenge:
      "Faire ressortir les détails minutieux (perles, nœuds, textures) face à un décor naturel texturé (roches volcaniques), sans que le vêtement ne se perde dans l'environnement.",
    approach:
      "Des plans rapprochés avec une faible profondeur de champ, focalisant l'attention sur la délicatesse des broderies perlées contrastant avec la peau et la pierre brute.",
    result:
      "Des visuels sensuels et texturés qui ont sublimé l'artisanat de mode, générant un engouement immédiat pour le fait-main haut de gamme.",
    metrics: ["Stock épuisé en 48h", "3 500+ sauvegardes", "Collab reconduite"],
    heroImage: "/portfolio/mode/beaded.jpg",
    secondaryImage: "/portfolio/mode/beaded.jpg",
    accentColor: "oklch(0.6 0.15 45)", // amber/beaded
    instagramUrl: "https://www.instagram.com/digitcom_studios",
  },
  {
    id: 4,
    title: "Éditorial Backstage",
    category: "Haute Couture",
    year: "2025",
    date: "Automne 2025",
    location: "Studio Principal",
    context:
      "Une incursion intimiste dans les coulisses de la création. Capturer le chaos organisé des essayages avant qu'une collection haute couture ne soit présentée au monde.",
    challenge:
      "Isoler des moments de pure poésie visuelle au milieu de l'agitation des cabines, avec un éclairage souvent mixte et imprévisible.",
    approach:
      "Approche photo-documentaire en noir et blanc contrasté, privilégiant les jeux d'ombres et la tension palpable dans le regard des mannequins et des créateurs.",
    result:
      "Une série documentaire saluée par la critique pour son authenticité, plongeant l'audience directement dans l'intimité du vêtement en devenir.",
    metrics: ["15 000+ vues ciblées", "Publié dans Vogue Africa", "Exposition exclusive"],
    heroImage: "/portfolio/designer-backstage.png",
    secondaryImage: "/portfolio/designer-backstage.png",
    accentColor: "oklch(0.2 0 0)", // dark editorial tone
    instagramUrl: "https://www.instagram.com/digitcom_studios",
  },
  {
    id: 5,
    title: "Prêt-à-porter Urbain",
    category: "Streetwear",
    year: "2026",
    date: "Janvier 2026",
    location: "Studio Industriel",
    context:
      "Campagne de marque pour une collection streetwear jouant sur la superposition, le velours côtelé et les accessoires color-block, conçue pour la jeunesse créative urbaine.",
    challenge:
      "Donner vie à un lookbook studio typiquement statique en insufflant du mouvement et une personnalité affirmée au mannequin, tout en gardant des couleurs fidèles.",
    approach:
      "Lumière de studio douce mais enveloppante, guidant le modèle vers des poses désarticulées et dynamiques, mettant en exergue la texture du velours et le fit de la tenue.",
    result:
      "Un lookbook moderne et rafraîchissant. La silhouette fluide et la palette terre/rose sont devenues instantanément virales sur les réseaux de la mode urbaine.",
    metrics: ["6 200+ impressions", "Viralité streetwear", "+45% followers marque"],
    heroImage: "/portfolio/mode/corduroy.jpg",
    secondaryImage: "/portfolio/mode/corduroy.jpg",
    accentColor: "oklch(0.5 0.1 140)", // sage green
    instagramUrl: "https://www.instagram.com/digitcom_studios",
  },
];

/* ─── Chapter Indicator Dot ────────────────────────────── */
function ChapterDot({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label={`Aller à ${label}`}
    >
      <span
        className={`block h-2.5 w-2.5 rounded-full border transition-all duration-500 ${isActive
          ? "scale-125 border-accent bg-accent"
          : "border-muted-foreground/40 bg-transparent group-hover:border-accent/60"
          }`}
      />
      <span
        className={`hidden text-[10px] uppercase tracking-[0.2em] transition-all duration-300 lg:block ${isActive
          ? "translate-x-0 text-accent opacity-100"
          : "text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
          }`}
      >
        {label}
      </span>
    </button>
  );
}

/* ─── Story Chapter Block ──────────────────────────────── */
function StoryChapter({
  label,
  title,
  children,
  delay = 0,
}: {
  label: string;
  title?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      <span className="mb-2 block text-[9px] uppercase tracking-[0.4em] text-accent">
        {label}
      </span>
      {title && (
        <h4 className="mb-3 font-serif text-lg text-foreground md:text-xl">
          {title}
        </h4>
      )}
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </p>
    </motion.div>
  );
}

/* ─── Project Story Card ───────────────────────────────── */
function ProjectStory({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [activeChapter, setActiveChapter] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 0.3, 0.3, 0.7]);

  const chapters = ["Contexte", "Défi", "Approche", "Résultat"];
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative"
    >
      {/* Project number watermark */}
      <div className="pointer-events-none absolute -left-4 top-0 select-none lg:-left-8">
        <span
          className="font-serif text-[120px] font-bold leading-none lg:text-[200px]"
          style={{ color: "oklch(0.2 0.01 0)", opacity: 0.15 }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Chapter Header */}
      <div className="relative mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
            {project.category}
          </span>
          <span className="h-px flex-1 max-w-16 bg-accent/40" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {project.date}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 md:inline">
            — {project.location}
          </span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl"
        >
          {project.title}
        </motion.h3>
      </div>

      {/* Two-column storytelling layout */}
      <div
        className={`flex flex-col gap-8 lg:gap-16 ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
      >
        {/* Image Column */}
        <div className="relative lg:w-[55%]">
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
            />

            {/* Frame decoration */}
            <div className="absolute inset-3 border border-foreground/10 md:inset-5" />

            {/* Category badge on image */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span
                className="inline-block rounded-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-white backdrop-blur-md"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              >
                {project.category} — {project.year}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Story Column */}
        <div className="flex lg:w-[45%]">
          {/* Vertical chapter navigation (desktop) */}
          <div className="mr-8 hidden flex-col items-center gap-4 pt-4 lg:flex">
            {chapters.map((ch, i) => (
              <ChapterDot
                key={ch}
                label={ch}
                isActive={activeChapter === i}
                onClick={() => setActiveChapter(i)}
              />
            ))}
            <div className="mt-2 h-12 w-px bg-gradient-to-b from-accent/30 to-transparent" />
          </div>

          {/* Story chapters */}
          <div className="flex-1 space-y-10 lg:space-y-12">
            <div onMouseEnter={() => setActiveChapter(0)}>
              <StoryChapter label="Contexte" delay={0.1}>
                {project.context}
              </StoryChapter>
            </div>

            <div onMouseEnter={() => setActiveChapter(1)}>
              <StoryChapter label="Le Défi" delay={0.2}>
                {project.challenge}
              </StoryChapter>
            </div>

            <div onMouseEnter={() => setActiveChapter(2)}>
              <StoryChapter label="Notre Approche" delay={0.3}>
                {project.approach}
              </StoryChapter>
            </div>

            <div onMouseEnter={() => setActiveChapter(3)}>
              <StoryChapter label="Le Résultat" delay={0.4}>
                {project.result}
              </StoryChapter>

              {/* Quantified metrics — Plan 4 */}
              {project.metrics && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.metrics.map((metric: string) => (
                    <span
                      key={metric}
                      className="border border-border px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Instagram link — Plan 5: 44px min touch target */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-3 border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <span>Voir sur Instagram</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Portfolio Section ───────────────────────────── */
export function PortfolioSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="bg-background py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section header */}
        <div ref={headerRef} className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
              Sélection Éditoriale
            </span>
          </motion.div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl"
            >
              Célébrer la Mode
              <br />
              <span className="italic text-accent">à travers l&apos;objectif</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md text-muted-foreground"
            >
              Chaque tenue raconte une histoire. Découvrez nos campagnes de mode
              les plus percutantes — du dynamisme des podiums au stylisme des
              rues urbaines.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-px bg-accent/50"
            />
            <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/50">
              Défiler pour explorer
            </span>
          </motion.div>
        </div>

        {/* Project Stories */}
        <div className="space-y-32 lg:space-y-48">
          {projects.map((project, index) => (
            <ProjectStory key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center lg:mt-48"
        >
          <p className="mx-auto mb-6 max-w-lg text-sm text-muted-foreground">
            L'esthétique vestimentaire est au cœur de notre vision. Suivez-nous sur Instagram pour
            découvrir nos dernières créations mode.
          </p>
          <a
            href="https://www.instagram.com/digitcom_studios"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-accent/30 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-accent transition-all hover:border-accent hover:bg-accent/5"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span>@digitcom_studios</span>
            <svg
              className="h-3 w-3 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
