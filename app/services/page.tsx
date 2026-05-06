import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Services Mode — Photographie & Films | Digitcom Studios",
    description:
        "Photographie de mode, films de défilé et couverture événementielle. Digitcom Studios — studio de création visuelle basé à Dakar, Sénégal.",
    keywords: ["services photographe mode", "film de mode Dakar", "couverture défilé Sénégal", "lookbook photographer"],
};

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

export default function ServicesPage() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
                <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-4 lg:px-12">
                    <Link href="/">
                        <Image src="/logo.png" alt="Digitcom Studios" width={140} height={35} className="h-7 w-auto" />
                    </Link>
                    <Link href="/" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
                        ← Retour
                    </Link>
                </div>
            </header>

            <main className="mx-auto max-w-[1800px] px-6 pt-32 pb-32 lg:px-12">
                <div className="mb-16">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Ce que nous offrons</span>
                    <h1 className="mt-4 font-serif text-5xl font-light text-foreground md:text-6xl">
                        Une expertise au service
                        <br />
                        <span className="italic">de la mode</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-muted-foreground">
                        Nous sublimons la vision des designers, des marques et des talents à travers un spectre complet de services visuels.
                    </p>
                </div>

                <div className="space-y-0 divide-y divide-border">
                    {services.map((service) => (
                        <div key={service.number} className="grid gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
                            <div className="lg:col-span-1">
                                <span className="font-mono text-sm text-foreground/40">{service.number}</span>
                            </div>
                            <div className="lg:col-span-3">
                                <h2 className="font-serif text-2xl text-foreground md:text-3xl">{service.title}</h2>
                            </div>
                            <div className="lg:col-span-4">
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                            </div>
                            <div className="lg:col-span-4">
                                <ul className="space-y-2">
                                    {service.details.map((detail) => (
                                        <li key={detail} className="flex items-center gap-3 text-sm text-foreground/60">
                                            <span className="h-px w-4 bg-foreground" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <p className="mb-6 text-sm text-muted-foreground">
                        Vous avez un projet en tête ?
                    </p>
                    <Link href="/#contact" className="inline-block border border-foreground bg-foreground px-10 py-4 text-xs uppercase tracking-[0.2em] text-background transition-all hover:bg-background hover:text-foreground">
                        Démarrer un projet
                    </Link>
                </div>
            </main>
        </>
    );
}
