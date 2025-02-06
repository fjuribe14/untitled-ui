import {
  Navbar,
  Footer,
  FaqSection,
  CtaSection,
  HeroSection,
  CtaSectionTwo,
  MetricsSection,
  FeaturesSection,
  TestimonialSection,
  IntegrationsSection,
  TestimonialCarouselSection,
} from "@/components/components";

export default function Home() {
  return (
    <div className="container mx-auto font-[family-name:var(--font-inter)]">
      <Navbar />
      <HeroSection />
      <IntegrationsSection />
      <MetricsSection />
      <FeaturesSection />
      <TestimonialSection />
      <CtaSection />
      <FaqSection />
      <TestimonialCarouselSection />
      <CtaSectionTwo />
      <Footer />
    </div>
  );
}
