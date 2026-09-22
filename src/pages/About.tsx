import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import CTASection from "../components/home/CTASection";
import { useEffect, useRef } from "react";
import { company } from "../data/company";

export default function About() {
  const focusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add stagger delays to focus items
    if (focusRef.current) {
      const items = focusRef.current.querySelectorAll('[data-focus-item]');
      items.forEach((item, index) => {
        (item as HTMLElement).style.setProperty('--delay', `${index * 75}ms`);
      });
    }
  }, []);

  const focusAreas = [
    "Custom Business Systems",
    "Web Development",
    "Business & Management Software",
    "Digital Experiences",
    "Modern UI/UX",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 sm:pt-16 md:pt-28 pb-12 sm:pb-20 md:pb-24 lg:pt-52 lg:pb-32">
        <Container>
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left Column */}
            <div className="flex flex-col justify-center opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards]">
              <p className="mb-4 sm:mb-8 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 transition-colors duration-300">
                About AR Digital Solutions
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.04em] text-white leading-tight transition-colors duration-300">
                Technology that is useful, intuitive, and built with purpose.
              </h1>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards]" style={{ animationDelay: '100ms' }}>
              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-neutral-300 transition-colors duration-300 ease-out">
                AR Digital Solutions is an independent digital technology studio dedicated to creating thoughtful software and digital experiences for modern businesses.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-neutral-400 transition-colors duration-300 ease-out">
                We combine clean design, practical development, and problem-solving to build solutions that help businesses operate smarter, connect with their customers, and grow digitally.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-neutral-400 transition-colors duration-300 ease-out">
                From custom business systems to modern web experiences, every project is built around one goal: creating technology that is useful, intuitive, and built with purpose.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Focus Areas Section */}
      <section className="border-t border-white/10 py-16 sm:py-20 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Our Focus"
            title="Where we specialize."
          />

          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-1 max-w-2xl" ref={focusRef}>
            {focusAreas.map((area) => (
              <div 
                key={area} 
                data-focus-item
                className="group opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards] flex items-start gap-4 p-4 sm:p-5 rounded-lg border border-white/5 hover:border-white/20 hover:-translate-y-1 hover:bg-white/[0.02] hover:shadow-sm active:scale-[0.98] cursor-pointer transition-all duration-300 ease-out"
                style={{
                  animationDelay: 'var(--delay, 0ms)'
                }}
              >
                {/* Dot Indicator */}
                <div className="mt-1 h-2 w-2 rounded-full bg-white/60 transition-all duration-300 ease-out group-hover:bg-white group-hover:scale-125 flex-shrink-0" />
                
                {/* Text */}
                <p className="text-sm sm:text-base font-medium text-neutral-300 transition-colors duration-300 ease-out group-hover:text-white">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="border-t border-white/10 py-16 sm:py-20 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Our Approach"
            title="How we build."
          />

          <div className="mt-12 sm:mt-16">
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
              {[
                "We believe great digital products don't require unnecessary complexity. Our approach is rooted in clean design, practical development, and a deep understanding of business needs.",
                "We work closely with our clients to understand their challenges, design thoughtful solutions, and build technology that actually solves problems. Every project is an opportunity to create something that makes a real difference.",
                "Whether it's a custom business system, a modern web application, or a digital experience, we bring the same level of care and attention to detail. We're committed to building technology that stands the test of time."
              ].map((text, index) => (
                <div
                  key={index}
                  className="opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards] space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-lg border border-white/5 hover:border-white/20 hover:-translate-y-1 hover:bg-white/[0.02] hover:shadow-sm active:scale-[0.98] cursor-pointer transition-all duration-300 ease-out"
                  style={{
                    animationDelay: `${200 + index * 100}ms`
                  }}
                >
                  <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-neutral-400 transition-colors duration-300 ease-out group-hover:text-neutral-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}