import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Blog — Derrière l'Objectif | Digitcom Studios",
    description:
        "Coulisses, tendances mode africaine et inspirations visuelles par Digitcom Studios — le regard d'un studio de mode basé à Dakar, Sénégal.",
    keywords: ["blog mode Sénégal", "photographe mode Dakar", "fashion photography Africa", "coulisses shooting"],
};

const articles = [
    {
        title: "Comment préparer un shooting de mode réussi",
        excerpt: "Du brief créatif au choix du lieu, voici les étapes essentielles pour garantir un résultat éditorial magistral.",
        date: "Avril 2026",
        category: "Guide",
        slug: "preparer-shooting-mode",
    },
    {
        title: "Les tendances de la mode africaine en 2026",
        excerpt: "Entre héritage culturel et avant-garde contemporaine, les créateurs ouest-africains redéfinissent l'industrie.",
        date: "Mars 2026",
        category: "Tendances",
        slug: "tendances-mode-africaine-2026",
    },
    {
        title: "Lumière naturelle vs. studio en photographie de mode",
        excerpt: "Comprendre les compromis entre les deux approches pour choisir celle qui correspond à votre vision.",
        date: "Février 2026",
        category: "Technique",
        slug: "lumiere-naturelle-vs-studio",
    },
];

export default function BlogPage() {
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

            <main className="mx-auto max-w-[1400px] px-6 pt-32 pb-32 lg:px-12">
                <div className="mb-16">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Journal</span>
                    <h1 className="mt-4 font-serif text-5xl font-light text-foreground md:text-6xl">
                        Derrière l&apos;Objectif
                    </h1>
                    <p className="mt-6 max-w-xl text-muted-foreground">
                        Coulisses, guides pratiques et inspirations — le regard du studio sur la mode et la photographie africaine.
                    </p>
                </div>

                <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article key={article.slug} className="group bg-background p-8 lg:p-10">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                                {article.category} — {article.date}
                            </span>
                            <h2 className="mt-4 font-serif text-xl text-foreground group-hover:underline underline-offset-4 transition-all">
                                {article.title}
                            </h2>
                            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                                {article.excerpt}
                            </p>
                            <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground">
                                <span>Lire l&apos;article</span>
                                <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}
