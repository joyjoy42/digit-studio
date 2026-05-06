import type { Metadata, Viewport } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  themeColor: "#141414",
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
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
