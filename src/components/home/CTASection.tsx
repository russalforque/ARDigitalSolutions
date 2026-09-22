import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-40">
      <Container>
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-12 lg:p-20">
          <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
              Let's talk
            </p>

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.05em] leading-tight">
              Have a process that could work better?
            </h2>

            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-neutral-400">
              Tell us what you're currently doing manually and we'll help
              turn it into a practical digital solution.
            </p>

            <Link
              to="/contact"
              className="mt-6 sm:mt-10 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Start a Project
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}