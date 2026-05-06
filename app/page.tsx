import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CraftSection } from "@/components/craft-section";
import { Marquee } from "@/components/marquee";
import { PortfolioSection } from "@/components/portfolio-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CustomCursor } from "@/components/custom-cursor";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <CraftSection />
        <Marquee />
        <PortfolioSection />
        <TestimonialsSection />
        <Marquee
          words={[
            "LOOKBOOK",
            "CAMPAGNE",
            "ÉDITORIAL",
            "BACKSTAGE",
            "PODIUM",
            "COULEURS",
            "TEXTURES",
            "SILHOUETTES",
          ]}
        />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
