import type { Metadata, Viewport } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AnimatedStraps } from "@/components/animated-straps";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitcom Studio | Excellence Visuelle",
  description:
    "Nous ne capturons pas simplement des moments. Nous créons des expériences visuelles. Production vidéo premium, branding et couverture événementielle à Dakar, Sénégal.",
  keywords: [
    "production vidéo",
    "branding",
    "narration visuelle",
    "couverture événementielle",
    "studio premium",
    "Dakar",
    "Sénégal",
  ],
};

export const viewport: Viewport = {
  themeColor: "#03110D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${instrumentSans.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <AnimatedStraps />
        <div className="relative z-10 flex min-h-screen flex-col overflow-x-hidden">
          {children}
        </div>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
