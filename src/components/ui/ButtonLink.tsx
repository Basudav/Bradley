import Link from "next/link";
import type { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary: "bg-orange-500 text-navy hover:bg-orange-400",
  secondary: "bg-blue-700 text-white hover:bg-blue-800",
  outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-50",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark",
  light: "bg-white text-navy hover:bg-blue-50",
} as const;

const sizeClasses = {
  md: "min-h-12 px-5 text-base",
  lg: "min-h-14 px-6 sm:px-8 text-base sm:text-lg",
} as const;

type ButtonLinkVariant = keyof typeof variantClasses;
type ButtonLinkSize = keyof typeof sizeClasses;

interface ButtonLinkProps {
  href: string;
  external?: boolean;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ButtonLink({
  href,
  external = false,
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className,
  onClick,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300",
    "touch-manipulation transition-colors",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  /* tel: and mailto: links render as plain <a> */
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
