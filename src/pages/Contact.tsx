import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <section className="pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pt-52 lg:pb-32">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something meaningful."
          description="Tell us what you're working on, what you're trying to solve, or simply share an idea."
        />

        <div className="mt-20 grid gap-20 lg:grid-cols-[1fr_1.3fr]">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}