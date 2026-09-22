import CTASection from "../components/home/CTASection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Hero from "../components/home/Hero";
import IndustriesSection from "../components/home/IndustriesSection";
import ProcessSection from "../components/home/ProcessSection";
import SellixSection from "../components/home/SellixSection";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <SellixSection />
      <IndustriesSection />
      <FeaturedProjects />
      <ProcessSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
