import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover>
      <IconBadge icon={service.icon} variant="blue" size="lg" />
      <h3 className="mt-4 font-heading font-semibold text-lg text-navy">
        {service.title}
      </h3>
      <p className="mt-2 text-slate-700 text-sm leading-relaxed">
        {service.summary}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:text-orange-600 font-semibold text-sm transition-colors"
      >
        Learn more
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
