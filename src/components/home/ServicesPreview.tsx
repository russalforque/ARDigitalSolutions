import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPreview() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesRef.current) return;

    const serviceItems = servicesRef.current.querySelectorAll('[data-service-item]');
    
    // Detect if mobile device
    const isMobile = window.innerWidth < 768;
    const duration = isMobile ? 0.4 : 0.6;
    const yOffset = isMobile ? 20 : 30;

    serviceItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: yOffset },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=50px',
            end: 'top center',
            scrub: isMobile ? 0 : 0.5,
            markers: false
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="border-t border-white/10 py-16 sm:py-20 lg:py-32">
      <Container>
        <SectionTitle
          eyebrow="What we do"
          title="Technology with purpose."
          description="We combine strategy, design, and engineering to create digital experiences built around real business needs."
        />
        <div className="mt-12 sm:mt-16 lg:mt-16" ref={servicesRef}>
          {services.map((service) => (
            <div
              key={service.id}
              data-service-item
              className="group grid gap-3 sm:gap-5 border-t border-white/10 py-6 sm:py-8 transition-colors hover:border-white/30 grid-cols-1 sm:grid-cols-[60px_1fr] lg:grid-cols-[80px_1fr_350px_30px]"
            >
              <span className="text-xs sm:text-xs text-neutral-600 col-span-1">
                {service.number}
              </span>

              <div className="sm:col-span-1 lg:col-span-1 flex flex-col gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-sm leading-5 sm:leading-6 text-neutral-500 block lg:hidden">
                  {service.description}
                </p>
              </div>

              <p className="text-xs sm:text-sm lg:text-sm leading-5 sm:leading-6 text-neutral-500 hidden lg:block col-span-1">
                {service.description}
              </p>

              <ArrowUpRight
                size={16}
                className="hidden sm:block lg:block text-neutral-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 justify-self-end"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}