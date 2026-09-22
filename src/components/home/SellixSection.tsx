import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const features = [
  "Sales & Checkout",
  "Inventory",
  "Expenses",
  "Reports",
  "Cashier / User Accounts",
  "Employee Shifts",
  "Offline / Local Database",
  "Android Support",
];

export default function SellixSection() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <SectionTitle
              eyebrow="Our Product"
              title="Sales. Inventory. Expenses. Reports. In one place."
              description="Sellix POS is our own point-of-sale system, built for small businesses that need a practical, reliable way to run daily operations without relying on paper or spreadsheets."
            />

            <Button href="/contact" variant="secondary" className="mt-8">
              Explore Sellix POS
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="bg-black px-5 py-6 text-sm text-neutral-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
