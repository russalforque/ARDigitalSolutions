import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-white text-black hover:bg-neutral-200",
    secondary:
      "border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
  };

  const content = (
    <>
      <span>{children}</span>

      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
        <ArrowUpRight size={15} />
      </span>
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link
          to={href}
          className={`${base} ${variants[variant]} ${className}`}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}