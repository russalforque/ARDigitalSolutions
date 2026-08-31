import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServiceList from "../components/services/ServiceList";
import CTASection from "../components/home/CTASection";

export default function Services() {
  return (
    <>
      <section className="pt-10 sm:pt-20 md:pt-28 pb-16 sm:pb-20 lg:pt-52 lg:pb-32">
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="From idea to digital product."
            description="A focused range of technology and creative services designed to help businesses build better digital experiences."
          />

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <ServiceList />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}