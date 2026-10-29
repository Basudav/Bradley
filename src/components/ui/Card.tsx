import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-blue-100 bg-white p-4 xs:p-5 sm:p-6 shadow-card",
        hover && "hover:shadow-card-hover transition-shadow",
        className,
      )}
    >
      {children}
    </div>
  );
}
