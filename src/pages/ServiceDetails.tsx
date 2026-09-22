import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Container from "../components/common/Container";
import { services } from "../data/services";

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-medium mb-4">Service not found</h1>
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to services
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 sm:pt-16 md:pt-28 lg:pt-52 pb-12 sm:pb-20 md:pb-24 lg:pb-32 border-b border-white/10">
        <Container>
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 mb-8 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to services
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center">
              <p className="mb-4 sm:mb-8 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Service #{service.number}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.04em] text-white leading-tight">
                {service.title}
              </h1>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-neutral-300 mb-8">
                {service.description}
              </p>

              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
                  Key Features
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-lg border border-white/10 bg-white/2 px-4 py-2 text-sm text-neutral-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Details Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8">
              What's included
            </h2>

            <ul className="divide-y divide-white/10 border-t border-white/10">
              {service.features.map((feature) => (
                <li key={feature} className="py-5 sm:py-6 text-base sm:text-lg text-neutral-300">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
              >
                Get started with {service.title}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
