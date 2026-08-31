interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border border-white/10 bg-white/[0.03] px-2 sm:px-3 py-1 sm:py-1.5 text-xs text-neutral-300 whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  );
}