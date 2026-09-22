import Container from "../common/Container";
import Button from "../common/Button";
import BlurText from "../transitions/BlurText";


export default function Hero() {
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      <Container className="relative pt-4 md:pt-12 lg:pt-20">
        <div className="grid items-end gap-16 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-white/40" />

              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Cebu City, Philippines
              </span>
            </div>

            <h1 className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.88] tracking-[-0.07em]">
              <BlurText
                text="Digital systems built "
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.88] tracking-[-0.07em]"
              />

              <BlurText
                text="around your business."
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-neutral-600"
              />
            </h1>
          </div>

          <div className="lg:pb-3">
            <p className="text-base leading-7 text-neutral-400">
              Websites, POS systems, and custom software that help small
              businesses move away from manual work.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary">
                Start a Project
              </Button>

              <Button href="/services" variant="secondary">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-neutral-600">
          <span>01 / 01</span>
          <span>Scroll to explore</span>
        </div>
      </Container>
    </section>
  );
}