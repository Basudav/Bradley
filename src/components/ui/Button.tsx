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

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = keyof typeof sizeClasses;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300",
        "touch-manipulation transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
