import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We learn how your business currently operates.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We map out the right solution for your workflow and budget.",
  },
  {
    number: "03",
    title: "Build",
    description: "We design and develop the system with you.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We deploy the solution and support you after launch.",
  },
];

export default function ProcessSection() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-20 lg:py-32">
      <Container>
        <SectionTitle eyebrow="How we work" title="A simple process." />

        <div className="mt-12 sm:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-white/10 pt-6">
              <span className="text-xs text-neutral-600">{step.number}</span>

              <h3 className="mt-3 text-lg font-medium tracking-tight">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
