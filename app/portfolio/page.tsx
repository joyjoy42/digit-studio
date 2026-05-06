import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Portfolio Mode — Réalisations | Digitcom Studios",
    description:
        "Découvrez les réalisations éditoriales et campagnes de mode de Digitcom Studios — photographes de mode basés à Dakar, Sénégal.",
    keywords: ["portfolio mode", "photographe mode Dakar", "éditorial sénégal", "fashion photographer Africa"],
};

const projects = [
    {
        title: "Collection Bakuso",
        category: "Défilé",
        year: "2026",
        image: "/portfolio/mode/runway.jpg",
    },
    {
        title: "Éditorial Océan",
        category: "Mode Conceptuelle",
        year: "2026",
        image: "/portfolio/mode/boat.jpg",
    },
    {
        title: "Collection Artisanale",
        category: "Mode Balnéaire",
        year: "2025",
        image: "/portfolio/mode/beaded.jpg",
    },
    {
        title: "L'allure de la Victoire",
        category: "Mode Sportive",
        year: "2025",
        image: "/portfolio/mode/sports.jpg",
    },
    {
        title: "Prêt-à-porter Urbain",
        category: "Streetwear",
        year: "2026",
        image: "/portfolio/mode/corduroy.jpg",
    },
];

export default function PortfolioPage() {
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
                    <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Sélection Éditoriale</span>
                    <h1 className="mt-4 font-serif text-5xl font-light text-foreground md:text-6xl">
                        Nos Réalisations
                    </h1>
                </div>

                <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.title} className="group relative aspect-[3/4] overflow-hidden bg-card">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                                <span className="block text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{project.category} — {project.year}</span>
                                <h2 className="mt-2 font-serif text-xl text-foreground">{project.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
