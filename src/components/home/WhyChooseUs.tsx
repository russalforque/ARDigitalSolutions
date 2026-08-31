import Container from "../common/Container";
import { company } from "../../data/company";
import { useEffect, useRef, useState } from "react";

function CountUpValue({ value, trigger }: { value: string; trigger: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setDisplayValue(0);
      return;
    }

    const numericValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""));

    if (Number.isNaN(numericValue)) {
      return;
    }

    let animationFrame = 0;
    const duration = 1800;
    const startTime = performance.now();

    const updateValue = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 2.2);
      const currentValue = Math.round(numericValue * easedProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue);
      }
    };

    animationFrame = window.requestAnimationFrame(updateValue);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [value, trigger]);

  const suffix = value.replace(/[0-9.]/g, "");

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Add stagger delays to stat items
    if (statsRef.current) {
      const items = statsRef.current.querySelectorAll('[data-stat-item]');
      items.forEach((item, index) => {
        (item as HTMLElement).style.setProperty('--delay', `${index * 75}ms`);
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-white/10 py-16 sm:py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Left Column */}
          <div className="opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards]">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 transition-colors duration-300">
              Why us
            </p>

            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.04em] leading-tight transition-colors duration-300">
              Technology should feel simple.
            </h2>
          </div>

          {/* Right Column */}
          <div className="opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards]" style={{ animationDelay: '100ms' }}>
            <p className="text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-neutral-400 transition-colors duration-300 ease-out">
              We believe great digital products don't need unnecessary
              complexity. We focus on clarity, performance, and experiences
              that feel natural to use.
            </p>

            {/* Stats Grid */}
            <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-2 border-t border-white/10" ref={statsRef}>
              {company.stats && company.stats.length > 0 && company.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  data-stat-item
                  className="opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards] group border-b border-white/10 py-6 sm:py-8 hover:bg-white/[0.02] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer"
                  style={{
                    animationDelay: 'var(--delay, 0ms)'
                  }}
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight transition-colors duration-300">
                    <CountUpValue value={stat.value} trigger={isVisible} />
                  </p>

                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}