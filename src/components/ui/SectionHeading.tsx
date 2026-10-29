import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
  level?: 2 | 3;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  id,
  level = 2,
}: SectionHeadingProps) {
  const Heading = level === 2 ? "h2" : "h3";

  return (
    <div className={cn("mb-8 sm:mb-10 lg:mb-14", className)}>
      <Heading
        id={id}
        className="text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-semibold text-balance text-center"
      >
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-700 max-w-prose mx-auto text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
}
