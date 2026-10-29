import { cn } from "@/lib/utils";

type SectionElement = "section" | "div" | "article" | "aside";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: SectionElement;
  ariaLabelledBy?: string;
}

export function Section({
  children,
  className,
  id,
  as: Element = "section",
  ariaLabelledBy,
}: SectionProps) {
  return (
    <Element
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("py-12 sm:py-16 lg:py-24 2xl:py-28", className)}
    >
      {children}
    </Element>
  );
}
