import CTASection from "../components/home/CTASection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}