import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "md" | "lg" | "sm";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  external?: boolean;
};

const variants = {
  primary:
    "bg-[var(--brand-yellow)] text-[var(--brand-black)] hover:bg-[var(--brand-yellow-deep)]",
  secondary:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
  ghost:
    "bg-transparent text-[var(--brand-ink)] border border-[var(--brand-border)] hover:border-[var(--brand-ink)]",
  dark:
    "bg-[var(--brand-ink)] text-white hover:bg-[var(--brand-steel)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold tracking-wide transition-colors focus-ring",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
