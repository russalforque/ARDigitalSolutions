import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const industries = [
  {
    name: "Retail & Hardware",
    description:
      "Faster checkout and accurate inventory so stock levels and sales are always up to date.",
  },
  {
    name: "Cafés & Restaurants",
    description:
      "Simple order-taking, reporting, and shift tracking built for a fast-paced floor.",
  },
  {
    name: "Laundry Shops",
    description:
      "Booking and order tracking that replaces manual logbooks and claim slips.",
  },
  {
    name: "Salons",
    description:
      "Appointment booking and service records that keep operations organized.",
  },
  {
    name: "Property Rentals",
    description:
      "Booking, tracking, and reporting systems built around how rental businesses operate.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-20 lg:py-32">
      <Container>
        <SectionTitle
          eyebrow="Who we help"
          title="Built for real businesses."
          description="We work with small businesses that want to replace manual, paper-based processes with practical digital systems."
        />

        <div className="mt-12 sm:mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-black p-6 sm:p-8">
              <h3 className="text-lg font-medium tracking-tight">
                {industry.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
