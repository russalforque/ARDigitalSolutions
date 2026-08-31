import ScrollReveal from "../transitions/ScrollReveal";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  animateTitle?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  animateTitle = true,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-3 sm:mb-5 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          {eyebrow}
        </p>
      )}

      {animateTitle ? (
        <ScrollReveal
          baseOpacity={0.2}
          enableBlur
          baseRotation={2}
          blurStrength={3}
          containerClassName="text-3xl sm:text-4xl font-medium tracking-[-0.04em] text-white lg:text-6xl"
        >
          {title}
        </ScrollReveal>
      ) : (
        <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] text-white lg:text-6xl">
          {title}
        </h2>
      )}

      {description && (
        <ScrollReveal
          baseOpacity={0.15}
          enableBlur
          baseRotation={1}
          blurStrength={2}
          containerClassName="mt-4 sm:mt-6 max-w-2xl"
          textClassName="text-sm sm:text-base leading-6 sm:leading-7 text-neutral-400"
        >
          {description}
        </ScrollReveal>
      )}
    </div>
  );
}