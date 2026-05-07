import { Navigation } from "@/components/navigation";
import { InteractiveGallery } from "@/components/interactive-gallery";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
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
      <main className="relative z-10 w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <InteractiveGallery />
        <TestimonialsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
