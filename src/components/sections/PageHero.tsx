import React from "react";
import { Container } from "@/components/ui/Container";
import { HalftoneBackground } from "@/components/ui/HalftoneBackground";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  lead?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  title,
  lead,
  breadcrumbs,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative bg-blue-50 py-10 sm:py-14 lg:py-20 overflow-hidden border-b border-blue-100",
        className
      )}
    >
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-60 pointer-events-none">
        <HalftoneBackground />
      </div>

      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}

        <div className="max-w-3xl">
          <h1 className="text-[1.875rem] leading-[1.15] xs:text-[2.125rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] xl:text-6xl font-heading font-bold text-balance text-navy">
            {title}
          </h1>

          {lead && (
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-prose">
              {lead}
            </p>
          )}

          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
